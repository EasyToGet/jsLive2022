/*
題目
延續 [Day 9](https://hackmd.io/NKf9tfsmQiymV88UaAZ3JQ) 的知識，
試著回答下面問題。
*/

// 第一題：
let a = 10;
let b = '10';

if (a >= b) {
  console.log('a 等於 b');
} else {
  console.log('a 不等於 b');
}
// 'a 等於 b'

// 第二題：
let c = false;

if (!c) {
  console.log('六角學院 讚！');
} else {
  console.log('六角學院 讚讚！');
}
// '六角學院 讚！'

// 第三題：
let d = 100;

if (d == '100') {
  console.log('沒錯！');
} else if (d != '100') {
  console.log('這陷阱題！');
} else {
  console.log('錯！');
}
// '沒錯！'