## 知識課題 1

React Hook の基本概念と、それが導入された背景について説明してください。

React Hooks（フック)：関数コンポーネントで、状態（state）や副作用（side effects）などの React の機能を使えるようにする関数。
（副作用とは、React の描画以外で起こる処理のこと。例：API 通信、タイマー設定、イベント登録など）

### 導入された背景

wrapper 地獄(wrapper hell)」という現象を解決するため。
wrapper hell：コンポーネントがネストされすぎて、コードが読みにくく、管理しにくくなる状態のこと。
再利用のために HOC や render props を使うと、以下のようにラップがどんどん増えてしまう
実例
< ThemeProvider>
< AuthProvider>
< Router>
< WithUser>
< WithPermissions>
< MyComponent />
< /WithPermissions>
< /WithUser>
< /Router>
< /AuthProvider>
< /ThemeProvider>📦 📦 📦 📦 ← ラッパー地獄！
読みにくい・デバッグしにくい・再利用しづらい

他にも
•クラスコンポーネントの煩雑さ
this バインディング、ライフサイクルメソッドの分散などで、可読性が低くなりやすい。
•関数コンポーネントは状態や副作用が扱えなかった
本来は表示専用であり、state や lifecycle を使えなかった。
こうした課題を解決するために登場したのが React Hooks で、Hooks により、関数コンポーネントでも状態管理や副作用の処理が可能になり、ロジックの再利用も useState や useEffect、カスタムフックなどを使ってシンプルでフラットに記述できるようになった。

React において Hook がなぜ重要なのか、その役割と意義について解説してください。

## 知識課題 2

useState フックの役割と基本的な使い方（状態の宣言、更新方法）を説明してください。
関数コンポーネントで React の機能（状態管理・副作用・コンテキストなど）を扱うための仕組み
従来はクラスコンポーネントでしかできなかったことを、関数コンポーネント内でシンプルに実現できるようにするのが主な役割。

基本的な使い方
const [状態の変数, 状態を更新する関数] = useState(初期値);

1. 状態の宣言
   import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0); // ← "状態の宣言"（ここでは 0）を設定
// [count(現在の状態（カウントの値）を表す変数), setCount(状態を更新するための関数（更新すると再レンダリングされる）)]
return (
< div>
< p>カウント: {count}< /p>
< button onClick={() => setCount(count + 1)}>+1< /button>// 現在の値に +1 して更新する処理
< /div>
);
} 2.更新方法
状態は set◯◯ という関数を使って更新。
直接代入（例：count = count + 1）しても React は気づかず再描画されない。

正しい更新方法
setCount(count + 1); // 新しい値で上書きする

useEffect フックの役割と、副作用（例: データ取得、購読、タイマー設定、DOM 操作など）を扱う方法について説明してください。
useEffect：React の描画以外の処理（副作用）を関数コンポーネント内で実行するための Hook
副作用:React の描画処理以外に行う必要がある処理のこと。

useEffect の基本構文：
useEffect(() => {
// 副作用の処理（実行したい処理）

return () => {
// クリーンアップ処理（必要な場合）
};
}, [ 依存配列]);

副作用を扱う方法： タイマー処理
useEffect(() => {
const timer = setInterval(() => {
console.log('1 秒ごとに実行');
}, 1000);

return () => {
clearInterval(timer); // コンポーネントが消える時に止める
};
}, []); // [] は依存配列（依存リスト）「useEffect は、コンポーネントの初回マウント時に一度だけ実行してください」の意味

知識課題 3
useContext フックの役割と、コンテキスト（Context API）を利用してコンポーネントツリー間でデータを受け渡す方法を説明してください。
createContext と Provider との連携についても触れてください。

単語の意味
①useContext：Context API を使って定義した共有データを、どの階層のコンポーネントでも簡単に取得できるフック
② コンテキスト（Context API）：React アプリ内で、深い階層のコンポーネントにまでデータを渡すための仕組み。
通常、React ではデータは 親 → 子 → 孫 →… と props で一段ずつ渡す必要があるが、Context API を使うと、どこでも直接データにアクセスできるようになる。親 → 孫 OK//これめっちゃ便利じゃね？
③createContext:共有したいデータの 箱（コンテキスト） を作るための関数。「この種類のデータ（例：テーマ・ユーザー情報）をアプリ内でやりとりするよ！」という宣言
④Provider:作成したコンテキストに値を入れて、ツリーの下に渡すためのコンポーネント。親コンポーネントから「このテーマは dark にするよ！」と値を詰める役割

上記踏まえてざっくり説明すると

Context API を使うと、親から孫などの深い階層に props なしでデータを直接渡せるようになる。
createContext() で箱を作り、Provider で値を入れ、useContext() でどこでも中身を取り出せるイメージ。

パフォーマンス最適化のためのフックについて説明してください。

1,useMemo:重い計算を繰り返さないようにする
主な目的：計算結果のメモ化（再計算を防ぐ）
特定の値が変わったときだけ計算を再実行することができる。
const memoizedValue = useMemo(() => {
return heavyCalculation(data); // 重い処理
}, [data]); // ← data が変わらない限り、再計算しない。パフォーマンスの悪い計算処理を無駄に繰り返さないようにする

2,useCallback:関数の再生成を避ける。毎回関数を新しく作らないようにする（特に子コンポーネントに渡すとき）
主な目的：関数のメモ化（同じ関数を再生成しない）
const handleClick = useCallback(() => {
console.log('クリックされた');
}, []); // ← 依存がないから毎回同じ関数参照になる
子コンポーネントの props として渡す関数が変わらないため、不必要な再レンダリングを防げる

3,useRef:値を保持しつつ描画を抑える。
主な目的：値を保持しつつ再レンダリングを起こさない。
例：（コンポーネントが何回レンダリングされたかを数えるコード）
const renderCount = useRef(0);
renderCount.current += 1;
状態として管理したいけど レンダリングに関係ない値（カウンター、前回の値など）に使うことで、処理の負荷を減らす。

useMemo の役割と、値のメモ化における具体的な使用例を解説してください。
useCallback の役割と、関数のメモ化が特に有効なケースについて説明してください。
2 つとも上記に記載。

これらの最適化フックを使用する際の注意点（乱用を避けるべき理由など）について考察してください。
useMemo や useCallback は、それ自体にもコスト（処理の負担）がある。

1. オーバーヘッド:軽い処理にメモ化は逆効果になることも
2. 依存配列ミス:バグや逆効果の原因になる
3. 可読性低下:過剰な useCallback で複雑に見える
4. 無意味な最適化:測定せずに使うと効果が出ないことも
   なので React の最適化フックは「必要なときにだけ使うのがベスト」軽い処理なら何もしない方が速いこともある。

知識課題 4
useReducer フックの役割と、useState と比較した場合の利点について説明してください。
useReducer(リデューサー):状態の「更新ロジック」を分離して、より明確に管理できるようにするためのフック
useState(おさらい)：コンポーネントの中で状態（値）を管理するためのフック

useReducer の基本構文：
const [state, dispatch] = useReducer(reducer, initialState);

比較した場合の利点
1,状態の構造が複雑でも管理しやすい:状態がネストしていたり複数あるときに最適
2,更新処理を関数で分けてスッキリ:コンポーネント内の処理がシンプルになる
3,チーム開発でもロジックが明確:「どういうアクションでどう変わるか」が分かりやすい

reducer 関数と dispatch 関数の基本的な使い方を解説してください。
reducer(リデューサー)関数:状態をどう更新するかを定義・「ルールブック」
dispatch(ディスパッチ)関数:「どの操作を実行するか」を reducer に伝える・「お願いする人」
関係図：dispatch(アクション) ⟶ reducer(今の状態, アクション) ⟶ 新しい状態を返す
基本構文：const [state, dispatch] = useReducer(reducer, initialState);

useRef フックの主な役割を 2 つ説明してください。
1,DOM 要素へのアクセス（参照）useRef を使って、ボタンや入力フィールドなどの 実際の HTML 要素にアクセスすることができる。
2,値を保持する（再レンダリングせずに）変化する値を保持するのにも使える。それに値を変えても再レンダリングが発生しない！

DOM 要素への参照を取得する方法と、レンダリング間で永続的な値を保持する方法（ただし、その変更が再レンダリングを引き起こさない点）について解説してください。

DOM に直接アクセス：（DOM に直接アクセスと言う意味。React のコンポーネント内で、特定の HTML 要素（例：< input> や < div>）を直接操作したいときに、その要素を変数のように扱えるようにする方法）
useRef を使用
例：
import React, { useRef, useEffect } from 'react';

function AutoFocusInput() {
const inputRef = useRef(null); // 空の参照を作成

useEffect(() => {
inputRef.current.focus(); // DOM に直接アクセスしてフォーカスを当てる
}, []);

return < input ref={inputRef} placeholder="自動フォーカスされる" />;
}
•ref={inputRef} をつけることで、React がその DOM 要素を inputRef.current に代入してくれる
•.current に入っているのは実際の HTML 要素（input）
•focus() のようにネイティブの DOM メソッドを直接使える

レンダリング間で永続的な値を保持する方法（再レンダリングなし）：useRef を使用(関数コンポーネント)
const lastValue = useRef(0);// 初期値が 0 に設定
lastValue.current = someNewValue;
current に代入しても画面は更新されない。状態ではなく「ただの箱」として使える。
これは React の「状態」ではないため、再レンダリングされない！

カスタムフックとは何か、その目的と利点について説明してください。

use から始まる関数名で、useState や useEffect などの既存フックを使って処理をまとめた、自分専用のフックのこと。
function use 〇〇() {
// useState や useEffect などを使ったロジック
}
目的
React で開発する際に、同じような useEffect や useState の処理が複数のコンポーネントで繰り返される。
コンポーネントが肥大化して読みづらくなってしまうので、こうしたロジックをひとつの関数に切り出して再利用できるようにするのがカスタムフックの目的。

利点
1,再利用性が高い:一度作れば複数コンポーネントで使える
2,コードがスッキリする:コンポーネントの中身を状態や副作用の処理でごちゃごちゃにしない
3,抽象化できる:複雑なロジックを隠して、シンプルに使える API を作れる
4,テストしやすい:ロジックを関数として独立させることで、単体テストがしやすくなる

カスタムフックの命名規則と作成方法の基本を、簡単な具体例を用いて解説してください。

カスタムフックの命名規則：
use から始める。(この関数の中で Hook（useState や useEffect など）を使っていいかどうか」を判断するため)

作成方法の基本:
1,use から始まる関数を作る
2,中で必要な React フックを使う（useState, useEffect, など）
3,必要な値や関数を return する

① 定義
// useToggle.js
import { useState } from 'react';

function useToggle(initialValue = false) {
const [value, setValue] = useState(initialValue);
const toggle = () => setValue((prev) => !prev);

return [value, toggle];
}

export default useToggle;

② 使用例（ボタンで表示/非表示）
import React from 'react';
import useToggle from './useToggle';

function ToggleExample() {
const [isVisible, toggleVisibility] = useToggle();

return (
< div>
< button onClick={toggleVisibility}>
{isVisible ? '非表示にする' : '表示する'}
< /button>
{isVisible && < p>これが表示されます！< /p>}
< /div>
);
}
