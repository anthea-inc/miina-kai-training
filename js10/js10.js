const flatArray = [1, 2, [3, 4, [5, 6]]];

const flattened = flatArray.flat(2); // 1階層だけ展開
console.log(flattened);
