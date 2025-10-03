const fruits = new Set();

// add(value)：要素を追加
fruits.add("apple");
fruits.add("banana");
fruits.add("apple"); // 重複なので無視される

console.log("追加後:", fruits); // → Set(2) { 'apple', 'banana' }

// has(value)：特定の値があるか確認
console.log("apple ある？", fruits.has("apple")); // → true
console.log("grape ある？", fruits.has("grape")); // → false

// delete(value)：指定した値を削除
fruits.delete("banana");
console.log("banana 削除後:", fruits); // → Set(1) { 'apple' }

// clear()：すべての要素を削除
fruits.clear();
console.log("全部消した後:", fruits); // → Set(0) {}
