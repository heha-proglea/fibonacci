'use strict';
const memo = new Map(); // key:順番 value:計算結果
// 予め定義されている、第一項第二項を格納する
memo.set(0, 0);
memo.set(1, 1);

// 前項と前々項を元に、フィボナッチ数を作る関数
function fib(n) {

    if(memo.has(n)) {
        return memo.get(n);
    }
    const value = fib(n - 1) + fib(n - 2);
    memo.set(n, value);
    return value;
}

const length = 40;
// 関数を回して数列にする
for (let i = 0; i <= length; i++) {
    console.log(fib(i));
}