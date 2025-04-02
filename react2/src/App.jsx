import UserInfo from "./UserInfo";

function App() {
  return (
    <>
      <h2>ログイン状態チェック</h2>
      <UserInfo isLoggedIn={true} />
      <UserInfo isLoggedIn={false} />
    </>
  );
}

export default App;
