/*
1. 觀看以下程式碼，最後會印出什麼，以及變數 `sum` 最後的值

let sum = 1;
function calcNum(x) {
  sum += x;
  console.log(x);
}
calcNum(3);
*/
let sum = 1;
function calcNum(x) {
  sum += x;
  console.log(x);
}
calcNum(3);
console.log(sum);
// x: 3, sum: 4


/*
2. 下方程式碼宣告了一個陣列（陣列內是費波那契數列），請完成下方程式碼（補上 `...` 的部分），
讓 `calcNextNum()` 函式可以正常執行，並讓陣列中最後兩個數字相加後 push 到陣列中，
最後 `fibonacciArr` 陣列值為 `[1, 1, 2, 3, 5, 8]`

let fibonacciArr = [1, 1, 2, 3, 5];
let fibonacciArrLength = fibonacciArr.length;
function calcNextNum(...) {
  ...
}
calcNextNum(fibonacciArr[fibonacciArrLength-1], fibonacciArr[fibonacciArrLength-2]);
console.log(fibonacciArr);
*/
let fibonacciArr = [1, 1, 2, 3, 5];
let fibonacciArrLength = fibonacciArr.length;
function calcNextNum(last, penultimate) {
  fibonacciArr.push(last + penultimate);
}
calcNextNum(fibonacciArr[fibonacciArrLength - 1], fibonacciArr[fibonacciArrLength - 2]);
console.log(fibonacciArr);