import Greeting from "./Greeting";
import Layout from "./Layout";

function App() {
  return (
    <>
      {/* Welcome メッセージを Layout でラップ */}
      <Layout>
        <h2>Welcome!</h2>
        <p>This is a sample page.</p>
      </Layout>

      {/* Greeting コンポーネントを Layout でラップ */}
      <Layout>
        <Greeting name="Anthea" />
        <Greeting name="Antheia" />
      </Layout>
    </>
  );
}

export default App;
