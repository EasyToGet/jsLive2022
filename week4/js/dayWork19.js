/*
1. 下方敘述何者正確
(1) 一個函式中不能有多個 return
(2) return 的值可以賦予到變數上，像是下方程式碼中變數 `midNum` 最後的值會變為 `2`
*/
let midNum = 0;
function calcMidNum(num1, num2) {
  return (num1 + num2) / 2;
}
midNum = calcMidNum(1, 3);
console.log(midNum);
// Ans: 2

/* 2. 觀看下方程式碼，選出正確敘述 */
let awardMoney = 0
function getAward(score) {
  if (score >= 90) {
    console.log("贏得獎金 100 元");
    return 100;
  } else if (score >= 60) {
    console.log("贏得獎金 50 元");
    return 50;
  } else {
    console.log("再接再厲！");
  }
  console.log("比賽結束！");
}
awardMoney = getAward(85);

/*
選項：
(1) 最後會印出 2 個字串
(2) `awardMoney` 最後的值為 85
(3) `awardMoney` 最後的值為 50

Ans: (3)
*/