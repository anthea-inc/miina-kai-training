function checkAge(age) {
  if (age < 0) {
    // 年齢がマイナスなんてありえない！エラーを投げよう！
    throw new Error("年齢は0以上である必要があります");
  }
  console.log(`年齢は ${age} 歳です`);
}

try {
  checkAge(178); // ← ここでエラーをわざと発生させる
} catch (e) {
  console.error("エラーが発生しました:", e.message);
}
