/*
題目
請看完此篇文章「[if else 陳述式]
(https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_%E9%99%B3%E8%BF%B0%E5%BC%8F)」部分，
並試著回答下面問題。
*/

// 請試著寫出以下情境：
// 範例： 如果我有 100 元，我就吃壽司，沒有就吃超商。
let myWallet = 200;

if (myWallet >= 100) {
  console.log('我要吃壽司');
} else {
  console.log('我吃超商');
}

// 1. 如果下雨我就坐捷運上班，沒有我就騎車上班
let weather = '雨天';

/* 請試著寫出判斷式 */
if (weather === '雨天') {
  console.log('坐捷運上班');
} else {
  console.log('騎車上班');
}

// 2. 如果 BMI > 24 就超重，18 ~24 體重正常，小於 18 過輕。（提示：補上問號部分)
let myBMI = 19;

/* 請試著寫出判斷式 */
if (myBMI > 24) {
  console.log('過重');
} else if (myBMI <= 24 && myBMI >= 18) {
  console.log('體重正常');
} else {
  console.log('過輕');
}