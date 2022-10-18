/*
高雄地區開始實施兵役體檢，只要符合以下其中一個條件就可以免除兵役:
1. BMI >= 35
2. 天生為扁平足 (Flatfoot)

請透過以下程式幫 Bob 判斷一下他需不需要當兵，如果需要，
則用陣列方法把他加到 soldierName 陣列裡面。（補上 `...` 的部分）
*/

let soldierName = ["Tom", "Nick", "John"];
let bobBmi = 22;
let isFlatfoot = false;

if (bobBmi >= 35 || isFlatfoot) {
  console.log("Bob 不用當兵");
} else {
  // 將 Bob 填入國軍名單
  soldierName.push("Bob");
  console.log("Bob 光榮入伍");
  console.log(`名單: ${soldierName}`);
}