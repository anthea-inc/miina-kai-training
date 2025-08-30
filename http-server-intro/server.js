import http from "http";

// ユーザーのリストを定義
const userList = [
  { id: 1, name: "Alice", county: "USA", age: 19 },
  { id: 2, name: "Bob", county: "Canada", age: 25 },
  { id: 3, name: "Ken", county: "Japan", age: 22 },
];

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello, World!\nAccess to /users to get user data!");
  }
  if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(userList));
  }
});

// サーバーを起動

server.listen(8000, () => {
  console.log("Server running on port 8000");
});
