import "@mantine/core/styles.css";
import { MantineProvider, Button } from "@mantine/core";

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div style={{ padding: "2rem" }}>
        <h1>Hello Mantine!</h1>
        <Button color="indigo" radius="md" size="md">
          ボタン
        </Button>
      </div>
    </MantineProvider>
  );
}
// @mantine/core というパッケージから、MantineProvider（設定用のラッパー）とButton（実際に表示するボタン）を使いたいから取り込んでる！
// withGlobalStyles：基本的なフォントやスペースのスタイルを全体に反映
// withNormalizeCSS：ブラウザごとのCSSの差（ずれ）をリセットして整える
// <div style={{ padding: '2rem' }}>余白をつけてる
// <Button color="indigo" radius="md" size="md">
