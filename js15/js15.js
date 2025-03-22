class User {
  name;
  age;

  #password; // # をつけることでprivateフィールドを定義可能

  static userCount = 0; // これが抜けていた

  constructor(name, age, password) {
    // User クラスをインスタンス化する時、この3つを渡す
    // 静的プロパティ
    this.name = name; // インスタンスのプロパティを初期化
    this.age = age; // インスタンスのプロパティを初期化
    this.#password = password; // Privateフィールドを初期化

    this.userCount++; // ユーザーが作られるたびにこれでカウントアップされる
  }

  set password(newPassword) {
    // setterメゾット
    if (newPassword.length >= 6) {
      this.#password = newPassword;
      console.log("チェック完了"); //6文字以上の場合実行
    } else {
      console.log("6文字未満だよ"); // 6文字以下の場合実行
    }
  }

  get password() {
    // getterメゾット
    // getterはgetで記載する。
    return "******"; // マスクした文字列を返すようにしてる
  }

  greet() {
    console.log("ーーーーーーーーーーーーーーー", this);
    //  プロトタイプメソッド /greet()メソッド
    console.log(
      `こんにちは！ ${this.name} さん。年齢は ${this.age}歳ですね！ `
    ); //え、こうゆう文章ってこと？
  }

  static getUserCount() {
    return `現在のユーザー数: ${User.userCount} 人`;
  }
}
class AdminUser extends User {
  constructor(name, age, password, adminLevel) {
    super(name, age, password); // 親のコンストラクタを呼び出し
    this.adminLevel = adminLevel; // 管理者レベルを設定
  }
  // 管理者専用メソッド（コンストラクタの外に書く！）
  deleteUser(user) {
    console.log(user);
    console.log(`${user.name} を削除しました。`);
  }
}
const user1 = new User("甲斐ミーナ", 22, "pass123");
const user2 = new User("柘植", 31, "pass123");
user1.greet();
user2.greet();

const admin = new AdminUser("管理者ミイナ", 30, "adminpass", 5);
admin.deleteUser;
admin.greet();
// 名前定義してないから何も出ないんじゃね？え、インスタンス作っていいのかな

// const user1 = new user("ミイナ", 22);
// const user2 = new user("甲斐", 30);
// const user3 = new user("ししゃも", 18);
// 実装しようとしなくていいのかな？、、、一旦実践課題2いこう
