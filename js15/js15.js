class user {
  name;
  age;

  #password; // # をつけることでprivateフィールドを定義可能

  constructor(name, age, password) {
    // User クラスをインスタンス化する時、この3つを渡す
    // 静的プロパティ
    this.name = name; // インスタンスのプロパティを初期化
    this.age = age; // インスタンスのプロパティを初期化
    this.#password = password; // Privateフィールドを初期化

    User.userCount++; // ユーザーが作られるたびにカウントアップされるみたい
  }

  set password(newPassword) {
    // setterメゾット
    if (newPassword.length >= 6) {
      this.#password = newPassword;
      console.log("チェック完了"); //6文字以上の場合実行
    } else {
      console.log("6文字未満だよ"); // 6文字以下の場合実行
    } //  三項演算子でも書けるよね。
  }

  get password() {
    // getterメゾット
    // getterはgetで記載する。
    return "******"; // マスクした文字列を返すようにしてる
  }

  greet() {
    //  プロトタイプメソッド /greet()メソッド
    console.log(
      `こんにちは！ ${this.name} さん。年齢は ${this.age}歳ですね！ `
    ); //え、こうゆうこと？
  }

  static getUserCount() {
    return `現在のユーザー数: ${User.userCount} 人`;
  }
}
// 名前定義してないから何も出ないんじゃね？
