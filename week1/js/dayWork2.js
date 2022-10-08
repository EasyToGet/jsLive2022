/*
題目: 以下兩題請合併為一份 CodePen 繳交，並透過「註解」進行回答。
-------------------
請依照以下格式回答
問題一
a = 值, 型別
b = 值, 型別
-------------------
問題二
(2)，因為 blablabla 
(3)，因為 balabababa 
-------------------
*/

// 問題一
// 以下變數 a, b, c, d, e, f 它們的值、型別各自為何 ? (請先想想看，不要用 console.log 檢查)
let a = "10" + "10";    // a = "1010"，string
let b = "10" * "10";    // b = 100，number
let c = 10 + "10";      // c = "1010"，string
let d = 10 * "10";      // d = 100，number
let e = 10 - "2";       // e = 8，number
let f = "10" - "2";     // f = 8，number


// 問題二
// 請問以下題項哪些是有問題的，並說明為什麼。
// 1
let myName = "jay";

// 2
var _state = true;

// 3
// let true = true;            // 關鍵字不可以用來作為變數名稱

// 4
// const 520Pretty = 520;      // 變數名稱的開頭不可以使用數字

// 5
const appleNum = 10;        // const 不可以重新被指派值
appleNum = 2;

// 6
var ming = '小明';
var ming = '小民';

// 7
const ming = '小明';         // 因為 const 不可重複宣告，會呈現 Uncaught SyntaxError
const ming = '小民';

// 8
let ming = '小明';           // 因為 let 不可重複宣告，會呈現 Uncaught SyntaxError
let ming = '小民';

// 9
let ming = '小明';
ming = '小民';

// 10
// let $open = "芝麻開門';       // "芝麻開門' 的引號必須成對