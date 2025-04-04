import SimpleList from "./SimpleList";

function App() {
  const fruitList = ["リンゴ", "バナナ", "チェリー"];

  return (
    <div>
      <h1>フルーツ一覧</h1>
      <SimpleList fruits={fruitList} />
    </div>
  );
}

export default App;
