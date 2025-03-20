// クラスの定義
class Car {
  constructor(brand, color) {
    this.brand = brand; // 車のブランド
    this.color = color; // 車の色
  }

  // メソッド（動作を定義）
  drive() {
    console.log(`${this.color} の ${this.brand} が走っています！`);
  }
}
// `new` を使ってインスタンスを生成
const myCar = new Car("Toyota", "赤");
const yourCar = new Car("Honda", "青");
// インスタンスのメソッドを呼び出す
myCar.drive(); // "赤 の Toyota が走っています！"
yourCar.drive(); // "青 の Honda が走っています！"
