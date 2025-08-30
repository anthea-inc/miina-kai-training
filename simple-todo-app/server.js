import http from "http";
import { StringDecoder } from "string_decoder";

const todoList = [
  { title: "JavaScriptを勉強する", completed: false },
  { title: "TODOアプリを自作する", completed: false },
  { title: "漫画を読み切る", completed: true },
  { title: "ゲームをクリアする", completed: false },
];

const server = http.createServer((req, res) => {
  const decoder = new StringDecoder("utf-8"); // 文字列をデコードするためのインスタンス
  let buffer = ""; // リクエストデータを空文字列で初期化

  req.on("data", (data) => {
    buffer += decoder.write(data);
  });

  req.on("end", () => {
    buffer += decoder.end();

    const headers = {
      "Content-Type": "application/json",
    };

    if (req.method === "GET" && req.url === "/") {
      res.writeHead(200, headers);
      res.end(JSON.stringify(todoList));
    } else if (req.method === "POST" && req.url === "/") {
      try {
        const data = JSON.parse(buffer);
        // タイトルが空の場合はエラーを返す
        if (!data.title) {
          throw new Error("Title must be provided");
        }

        // 新しいTODOのタイトルと完了状態を定義
        const newTodo = {
          title: data.title,
          completed: !!data.completed,
        };

        // 配列todoListに新しいTODOを追加(push)する
        todoList.push(newTodo);
        // 正常に処理されたことを返す
        res.writeHead(200, headers);
        res.end(JSON.stringify({ message: "Successfully created" }));
      } catch (err) {
        // 400 Bad Requestを返す
        res.writeHead(400, headers);
        // エラーメッセージを返す
        res.end(JSON.stringify({ message: err.message }));
      }
    } else {
      res.writeHead(404, headers);
      res.end(JSON.stringify({ message: "Not Found" }));
    }
  });
});

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
