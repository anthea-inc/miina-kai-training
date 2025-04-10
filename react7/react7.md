知識課題 1
React コンポーネントにおける state の基本的な役割について説明してください。
state:コンポーネントが持つ「変化するデータ（状態）」を管理し、画面に反映させるための仕組み
・ユーザーの操作やアプリの動きによって変わる情報（数値、文字、フラグなど）を一時的に記憶しておく場所
・state の値が変わると、React が自動的に画面（UI）を再描画してくれる
・state はボタンを押して数が増えるカウンターなどによく使われ、props のように親から渡されるのではなく、コンポーネント自身が持つ“自分の変化するデータ”

state と props の違いを明確にし、それぞれの使い分けについて解説してください。

意味
state:コンポーネントが自分で管理する状態（データ）
props:親コンポーネントから渡されるデータ（引数）

誰が変更できる
state:コンポーネント自身 が更新できる
props:受け取った側では変更できない（読み取り専用）

どこで使う？
state:ユーザーの操作やアプリの動きに応じて変わる情報の管理
props:表示内容や設定など、親から子に値を渡したいとき

変更の影響
state:値が変わると 再レンダリングが発生
props:値が変わると 再レンダリングされる

使いわけ
state:ユーザーの操作で変わる値を保持したいとき
例：カウント数、フォームの入力値、ON/OFF の切り替え状態 など

props:親コンポーネントから子に情報を渡すとき
例：タイトルや色、イベントハンドラー関数などの渡し込み

知識課題 2
state の更新が非同期であるとは具体的にどういうことか説明してください。
setState（または useState の set 関数）を呼んでも、その場ですぐに値が更新されるわけではないということ。
React はパフォーマンスや再レンダリングの最適化のために、state の更新を「まとめて」処理する（＝バッチ処理）から更新はすぐ反映されない。

state の非同期更新が原因で発生しうる問題点を挙げ、それを回避するための注意点を解説してください。
① 直後の state が更新されていない
const [count, setCount] = useState(0);

const handleClick = () => {
setCount(count + 1);
console.log(count); // → ここではまだ前の値（例: 0）のまま！
};
setState は非同期で処理され、React が次の描画タイミングで反映するから
setCount(count + 1) をしても、console.log(count) にはすぐ反映されない

② 複数回の setState が正しく反映されない
setCount(count + 1);
setCount(count + 1);

この書き方だと、最終的な count は +2 ではなく +1 にしかならない！
どちらの setCount も同じ count の値（例えば 0）を元に計算しているため

回避するための注意点
① 前の値に基づいて更新する場合は「関数型 setState」を使う(setCount は setState に相当する関数)
setCount(prev => prev + 1);
setCount(prev => prev + 1); // これで確実に +2 される！
それぞれの更新が最新の状態を元に処理されるようになるからバッチ処理でも意図した通りの結果になる

②state 更新後に処理したいときは useEffect を使う
useEffect(() => {
console.log('カウントが更新されました:', count);
}, [count]);
非同期更新を前提とした“更新を検知して動く”スタイル
state の更新完了後に副作用的な処理をしたい場合は、useEffect を使うのが安全

state を更新する際に、更新用関数を使用するべき理由と、その利点を説明してください。

更新用関数を使用するとは：
setCount(prev => prev + 1); // ← これが「関数型」の書き方
現在の値（前の state）を引数として受け取り、それを使って次の値を返すという書き方を更新用関数(関数型 setState)と言う。

更新用関数を使用するべき理由:
React の state は非同期で更新されるため、前の値に基づいて正しく更新したい場合は、更新用関数（例：setCount(prev => prev + 1)）を使う必要がある。
これにより、常に最新の状態をもとに更新できるため、意図しないバグを防ぐことができる。

利点
1,非同期でも安全:状態が即時反映されなくても、正しい前の値が使われる
2,複数回の更新に強い:バッチ処理されても 1 つずつ最新の状態に基づいて反映される
3,複雑なロジックでも安定:前の値を使って条件分岐や複数の計算を安全に書ける

知識課題 3
state に保持しているオブジェクトや配列を直接変更してはいけない理由を説明してください。
React が変更を検知できなくなるから。
補足：React は、前回の state と今回の state を比較（＝差分検出）して UI を更新する仕組みだから、その比較は 「参照（メモリアドレス）が変わったかどうか」で行われる。
オブジェクトや配列を直接変更しても参照が変わらなければ、React は「変わってない」と判断して再レンダリングしない。
(例は 1 つ下の問題でまとめてます)

直接変更が引き起こす可能性のある具体的なバグや問題を解説してください。
① 再レンダリングされない、配列を直接書き換えても画面が更新されない。

ダメな例
const [user, setUser] = useState({ name: "Miina" });

user.name = "Kai"; // ← 直接変更 ❌
setUser(user); // 参照は変わらないので React は無視する。

良い例：
setUser(prev => ({ ...prev, name: "Kai" })); // ✅ 新しいオブジェクトを生成
こうすることで、参照が変わり、React は更新を検知して再レンダリングする。

② デバッグや開発ツールでの挙動が壊れる
React は state の変更履歴を参照の変化で追跡しているので直接変更すると、
差分を検出できず、
・変更がなかったように見える
・状態の巻き戻しや再現テストができなくなると言った問題が起こる

③ 意図しない副作用が広がる（バグの温床）
同じオブジェクト参照を他の state や変数が共有している場合

const [user, setUser] = useState({ name: "Miina" });
const userCopy = user;

user.name = "Kai"; // どちらの変数も中身が変わってしまう
userCopy も user も同じ参照なので、どちらかを変えるともう一方にも影響が出る。
どこで状態が壊れたか追えず、バグの原因が特定しづらくなる

オブジェクトや配列の state を「イミュータブル（不変）」に更新するための方法を、コード例と共に示してください。
イミュータブルに更新するとは？：元のデータ（state）を直接変更せずに、新しいオブジェクトや配列を作って置き換えること。
例：ユーザーの名前だけ変更したい場合
const [user, setUser] = useState({ name: "Miina", age: 22 });

// NG：直接変更（非推奨）
user.name = "Kai";
setUser(user); // 参照が同じなので再レンダリングされない可能性あり

// 正しいやり方（イミュータブル更新）
setUser(prevUser => ({
...prevUser,
name: "Kai"
}));
• ...prevUser で元のプロパティをコピー
• name だけを新しい値に上書き
• これで新しいオブジェクト参照が生成される

知識課題 4
コンポーネントの state を設計する際に、どのような点を考慮すべきか説明してください。
コードのわかりやすさや保守性、パフォーマンスに直結するため、慎重に考える必要がある。
必要性:本当に state として持つべきなのか？（表示に関係する？）
最小化:計算で済むものは含めない
一貫性:重複データを避ける
構造:扱いやすく更新しやすい形に
スコープ:どのコンポーネントが持つべきか
UI 状態:読み込み・エラー・未入力なども考慮する

複数のコンポーネントで同じ state を共有・編集する必要が生じた場合、どのようなアプローチを取るべきか解説してください。

状態のリフトアップ（Lifting State Up）を使う：
複数のコンポーネントで使いたい state を、共通の親コンポーネントに移動させて管理する方法。
子コンポーネントには、props で値と更新関数を渡す
イメージ図：
ParentComponent ← state を持つ
├── ChildA（値を表示）
└── ChildB（値を変更）

まとめ
リフトアップ
場面：近い階層で状態を共有したい
特徴：シンプルで React の基本形

Context API
場面：階層を超えて共有したい
特徴：グローバルっぽく使えるが過剰に使うと可読性低下

状態管理ライブラリ
場面：アプリが大規模・複雑になってきたら
特徴：一元管理できてスケーラブル

ステートのリフトアップの概念を説明し、その具体的な実装方法を示してください。
ステートのリフトアップとは：複数の子コンポーネントで共有したい state（状態）を、共通の親コンポーネントに移動させて管理すること。これにより、状態の一元管理ができるようになり、子同士での状態共有がスムーズになる。

実装例：兄弟コンポーネント間で入力と表示を連動させる場合
親コンポーネント（state をリフトアップ）
import React, { useState } from 'react';
import InputBox from './InputBox';
import DisplayText from './DisplayText';

function ParentComponent() {// 親コンポーネントを定義
const [text, setText] = useState('');
// 空文字列から始まる state text を定義。 text: 表示される値、setText: それを変更する関数。

return (
< div>
< InputBox value={text} onChange={setText} />
< DisplayText value={text} />
< /div>
);
}
// < div> の中に 2 つの子コンポーネントを配置。
// InputBox には text と setText を渡す
// DisplayText には text のみ渡す

export default ParentComponent;

子 ①：InputBox.jsx（入力用）
function InputBox({ value, onChange }) {
return (
< input
type="text"
value={value}
onChange={(e) => onChange(e.target.value)}
placeholder="入力してください"
/>
);
}

export default InputBox;

子 ②：DisplayText.jsx（表示用）
function DisplayText({ value }) {
return < p>入力された内容：{value}< /p>;
}

export default DisplayText;

フロー図
ParentComponent（state を持つ）
├── InputBox（state の変更を担当）
└── DisplayText（state の表示を担当）

課題時間 3.5h
