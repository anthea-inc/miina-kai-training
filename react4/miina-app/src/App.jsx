import ItemList from "./ItemList";

function App() {
  const fruits = [
    { id: "a1", name: "リンゴ" },
    { id: "b2", name: "バナナ" },
    { id: "c3", name: "チェリー" },
  ];

  return (
    <div>
      <h1>フルーツ一覧</h1>
      <ItemList items={fruits} />
    </div>
  );
}

export default App;
