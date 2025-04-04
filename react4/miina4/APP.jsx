import SimpleList from "./SimpleList";

function App() {
  const fruits = ["リンゴ", "バナナ", "チェリー"];

  return (
    <div>
      <h2>呼び出し</h2>
      <SimpleList items={fruits} />
    </div>
  );
}
