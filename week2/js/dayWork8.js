/*
題目
運用 [Day 6](https://hackmd.io/kEiaexWPTgyfULIMJ0zMCg) 及 
[Day 7](https://hackmd.io/ZzlCecYGTf2MeHRPjtOrmw) 學到的知識，
回答以下的問題吧～
*/

// 1. 請問變數 c 的值
let a = 1;
let b = "1";
let c = (a === b) && (a !== b);
// c: false

// 2. 請問變數 g 的值
let e = '123';
let f = 456;
let g = (e + f) === '123456';
// g: true

// 3. 請問變數 j, k 的值 
let h = true;
let i = false;
let j = 1 == h;
let k = h || i;
// j: true
// k: true