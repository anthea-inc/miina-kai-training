function SimpleList({ fruits }) {
  return (
    <ul>
      {fruits.map((item) => (
        <li>{item}</li> // key なし
      ))}
    </ul>
  );
}

export default SimpleList;
