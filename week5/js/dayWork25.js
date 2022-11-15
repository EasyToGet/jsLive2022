/*
  1.如果 numberAll 陣列內的值大於或等於 30，則用 push() 方法將其加入 NumberAbove30 陣列中。
  2.如果 numberAll 陣列內的值小於 30，則用 push() 方法將其加入 numberUnder30 陣列中。
*/

let numberAll = [25, 30, 15, 50, 17, 40];
let numberAbove30 = [];
let numberUnder30 = [];

numberAll.forEach(function (item) {
  if (item >= 30) {
    numberAbove30.push(item);
  } else {
    numberUnder30.push(item);
  }
});
console.log(numberAbove30);
console.log(numberUnder30);