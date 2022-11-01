// 1. 宣告一個函式，讓此函式執行後會印出字串 `"這是一個函式"`
// Ans:
function printString() {
  console.log("這是一個函式");
};
printString();


// 2. 觀看下方程式碼，最後會印出什麼
function sayHello() {
  console.log("ㄋ好");
}
console.log("Bye！");
// Ans: 最後會印出 Bye！


// 3. 觀看下方程式碼，選出正確敘述
function sayHi() {
  console.log("Hi");
}
sayHi();
sayHi();
/* 選項 
1. 函式不能重複呼叫，會報錯
2. 最後會印出兩個 Hi
3. 只會執行一次，印出一個 Hi
*/

// Ans: 2. 最後會印出兩個 Hi