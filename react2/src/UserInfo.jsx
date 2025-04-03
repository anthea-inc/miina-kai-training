function UserInfo({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>ログイン済みです。ようこそ！</p>;
  } else {
    return <p>ログインしていません。ログインしてください。</p>;
  }
}

export default UserInfo;

// UserInfo.jsx（三項演算子バージョン）
// function UserInfo({ isLoggedIn }) {
//   return (
//     <p>
//       {isLoggedIn
//         ? "ログイン済みです。ようこそ！"
//         : "ログインしていません。ログインしてください。"}
//     </p>
//   );
// }

// UserInfo.jsx（論理ANDバージョン）
// function UserInfo({ isLoggedIn }) {
//   return (
//     <>
//       {isLoggedIn && <p>ログイン済みです。ようこそ！</p>}
//       {!isLoggedIn && <p>ログインしていません。ログインしてください。</p>}
//     </>
//   );
// }
