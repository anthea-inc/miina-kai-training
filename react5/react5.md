知識課題 1
HTML の onclick 属性と React の onClick プロパティについて、それぞれの記述方法および動作の違いを説明してください。

(onclick 属性：クリックしたときに動かしたい処理を指定する HTML の属性のこと。
React の onClick プロパティ：React の中で「このボタンをクリックしたら、これをやってね！」と指定するためのプロパティ)

HTML の onclick 属性：HTML タグに直接イベント処理（クリックされたときの動作）を文字列で書く方法
例：< button onclick="alert('こんにちは')">クリック< /button>

React の onClick プロパティ：JSX（JavaScript + HTML っぽい書き方）内で、クリックイベントに関数をそのまま渡す方法。
例：< button onClick={() => alert('こんにちは')}>クリック< /button>
関数を {} の中に書くのが React 流。

書き方
HTML の onclick 属性:文字列で書く
React の onClick プロパティ:関数で書く

管理のしやすさ
HTML の onclick 属性:規模が大きくなるとごちゃごちゃしがち
React の onClick プロパティ:ロジックと UI がまとまりやすい

状態（state）との連携
HTML の onclick 属性:しにくい
React の onClick プロパティ:しやすい

現代的な開発向きか
HTML の onclick 属性:△
React の onClick プロパティ:◎（保守性・拡張性に強い）

知識課題 2
React において、イベントハンドラーをコンポーネントの props として渡す方法を説明してください。

わかりやすく：親コンポーネントから子コンポーネントに、ボタンがクリックされたときの動きを教えてあげること。
イベントハンドラー（たとえばクリック時の関数など）を子コンポーネントに props として渡すことで、子が親の定義した関数を呼び出せるようになる。

例；
親コンポーネント：
function ParentComponent() {
const handleClick = () => {
alert('ボタンがクリックされました！');
};

return < ChildComponent onButtonClick={handleClick} />;
}

子コンポーネント:
function ChildComponent({ onButtonClick }) {
return < button onClick={onButtonClick}>クリックしてね< /button>;
}

解説：ParentComponent が handleClick という関数を作って、
ChildComponent に onButtonClick という名前で渡している。
ChildComponent の中で、その onButtonClick をボタンの onClick に指定することで、ユーザーがクリックしたときに handleClick が実行される。

なぜこうするか？
1,子コンポーネントを再利用しやすくなる（いろんな親から別の処理を渡せる）
2,イベントに対するロジックを親が管理できるので、状態管理と組みやすい

(自分用：React では、あるボタンをクリックしたときに「何が起こるか（＝イベントハンドラー）」を、親コンポーネントが子コンポーネントに教えることができる。
たとえば、
•親が「このボタンが押されたらアラートを出してね」と教える
•子は「わかりました！押されたらそれをやります」と動く
つまり、「イベントが起きたら何をするか」は親が決めて、子はそれを受け取って実行するだけ、という流れ。)

知識課題 3
イベントのバブリングとは何か説明してください。

イベントのバブリング（event bubbling）：Web ブラウザにおけるイベント伝播の仕組みのひとつで、子要素で発生したイベントが親要素へと順に伝わっていくこと。
React でも DOM のイベントはこの「バブリング」の仕組みに従って処理される。

event.preventDefault()メソッドの役割を説明し、具体的にどのような場面で使われるか例を挙げてください。

event.preventDefault(イベント・プリベント・デフォルト)メソッド：
ブラウザが持つ「デフォルトの動作（標準のふるまい）」をキャンセルするメソッド。
このメソッドを呼ぶことで、「本来ブラウザがやろうとすること」を止めることができる。
フォーム送信、リンク遷移、右クリックメニュー など

例：右クリックメニューを無効化
document.addEventListener('contextmenu', (e) => {
e.preventDefault(); // 通常の右クリックメニューを表示しない// event を略して e でいいんだ...
alert('右クリックは禁止されています');
});

event.stopPropagation()メソッドの役割を説明してください
event.stopPropagation(イベント・ストップ・プロパゲーション)メソッド：イベントのバブリング（またはキャプチャリング）を止めるために使用。「このイベントが親要素まで伝わらないようにする」のが役割。

簡単：子のボタンをクリックしたら、親の div も一緒に反応してしまった！
そんなとき、「もう親に知らせなくていいよ！」とストップをかける。

function App() {
const handleParentClick = () => {
console.log('親がクリックされた');
};

const handleChildClick = (e) => {
e.stopPropagation(); // ここでイベントの伝播を止める
console.log('子がクリックされた');
};

return (
< div onClick={handleParentClick} style={{ padding: '20px', background: '#eee' }}>
< button onClick={handleChildClick}>子ボタン< /button>
< /div>
);
}
出力結果（ボタンをクリックしたとき）：子がクリックされた

使用場面
モーダルウィンドウ:背景をクリックで閉じたいけど、モーダル内部クリックは無視したい
ドロップダウンメニュー:メニュー内クリックで親に通知したくない
イベントを個別で完結させたい時:子だけでイベント処理を完了させたい
