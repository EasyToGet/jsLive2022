/*
作業一：比較運算子
請依序告知以下 console.log 會顯示什麼值
若不確定答案，可將 code 貼在 chrome console 顯示後，再回頭補知識點。
*/
let a = 4;
let b = 5;
console.log(a > 0);
console.log(b > a);
console.log((a + b) > 1);

let c = 5;
let d = 6;
console.log(c == d);
console.log(c !== d);

let e = 8;
let f = 5;
console.log(f >= e);
console.log(f != e);
console.log(f == e);
/***   作業 1 填答區開始   **/
// 解答： 
// true
// true
// true

// false
// true

// false
// true
// false
/***   作業 1 填答區結束   **/


/*
作業二：比較運算子 + 強制轉型
請回答每個 console.log 的值為?
*/
let g = 8;
let h = "8";
console.log(g * h == 88);
console.log(g * h == 64);
console.log(g * h === 64);

let i = "9";
let j = "9";
console.log(i + j == 99);
console.log(i + j === "99");
console.log(i + j === 99);

var k = 2;
var l = "5";
// 請文字解釋為什麼
console.log((k * l) >= 5);
/***   作業 2 填答區開始   **/
// 解答： 
// false
// false
// false

// true
// true
// false

// false 因為數字跟字串不會自動轉型相乘，所以是 false
/***   作業 2 填答區結束   **/


/*
作業三：if 練習
最後 m、n 的值為？
需說明原因
*/
let m = 1;
if (2 > 1) {
  m = 3;
};
console.log(m);

let n = 5;
if (true) {
  n += 10;
};
console.log(n);
/***   作業 3 填答區開始   **/
// 解答：
// m 為： 3
// 原因是 2 > 1 條件是成立的，所以會執行 if 內的程式碼

// n 為： 15
// 原因是 true 條件是成立的，所以會執行 if 內的程式碼
/***   作業 3 填答區結束   **/


/*
作業四：if 練習
題目敘述說明：未滿 120(含)就免費（是指有包含 120 公分）
情境：計算金額

媽媽帶小明去火鍋吃到飽吃飯
他們看了金額，成人 600 元、小孩 300 元
未滿 120(含) 公分就免費
於是小明寫了些程式碼，但就做不下去了
一起幫小明補程式碼，計算最後他們要付多少錢
*/
/***   作業 4 填答區開始   **/
// 請將作業四截圖程式碼都寫在這，並刻意練習
let childHeight = 133;
let restaurantChildHeight = 120;
let bill = 600;

if (childHeight >= restaurantChildHeight) {
  bill += 300;
}

console.log(`他們總共支付了 ${bill} 元`);
/***   作業 4 填答區結束   **/


/*
作業五：if、else 練習
情境：好寶寶徽章

小華目前有三個好寶寶徽章
父親請他跑腿買五個東西
並和他說，如果他就買對，就再給他三個徽章
如果買錯的話，就只給一個徽章
但最後他買錯了，只買了四個東西
請用 if else 語法，來幫小華看看他得了多少徽章
補充：「都買對」的意思是數量要相等
*/
/***   作業 5 填答區開始   **/
// 請將作業五截圖程式碼都寫過來，並附上您的答案
let badge = 3;
let buyNum = 5;
let buyThing = 4;
if (buyThing == buyNum) {
  badge += 3;
} else {
  badge += 1;
}

console.log(`小華一共得了 ${badge} 個徽章`);
/***   作業 5 填答區結束   **/

/*
作業六：邏輯運算子
請依序回答以下 console.log 的值為？
*/
let o = 200;
let p = 300;

console.log(o == 200 || p == 300);
console.log(o !== 200 || p !== 300);
console.log(o == 200 && p == 300);

// 以下為觀察是否有達折扣條件
let hamPrice = 50;
let hamNum = 20;
let isSale = 3000 <= hamPrice * hamNum || hamNum > 10;

console.log(isSale);
// 並說明原因什麼
/***   作業 6 填答區開始   **/
// 解答：
// true
// false
// true

// 是否有折扣資格
// true
// 原因是 hamPrice * hamNum 小於 3000 跟 hamNum 也大於 10，
// 只要其中一個是條件成立的，所以會是 true
/***   作業 6 填答區結束   **/


/*
作業七：邏輯觀察
請試著加上 if 的判斷，讓以下三道任務可以正常運作

任務一：當 weight 在 40 以上，小於 60 時，console.log 顯示過輕
任務二：當 weight 在 60 以上，小於 80 時，console.log 顯示正常
任務三：當 weight 在 80 以上時，console.log 顯示過重
*/
/***   作業 7 填答區開始   **/
// 請將作業七截圖程式碼都寫過來，並附上您的答案
let weight = 60;

if (weight >= 80) {
  console.log("體重過重");
} else if (weight >= 60 && weight < 80) {
  console.log("體重正常");
} else if (weight >= 40 && weight < 60) {
  console.log("體重過輕");
} else {
  console.log("體重不正常");
}
/***   作業 7 填答區結束   **/


/*
作業八：邏輯運算子加上 if
情境：百貨公司贈品
百貨公司有 200 個贈品，只要有達以下條件之一，就送客戶一個贈品
1. 消費滿 399 元
2. 是百貨公司的 VIP 會員

Bob 今天來消費了 500 元，但並非 VIP 會員
請問 Bob 是否有獲得贈品，以及贈品剩下多少？請完成以下修改處程式碼
*/
/***   作業 8 填答區開始   **/
// 請將作業八截圖程式碼都寫過來，並附上您的答案
let giftNum = 200;  // 贈品數量
let giftPriceRule = 399;  // 贈品消費門檻
let BobPrice = 500;   // Bob 消費金額
let BobIsVip = false;   // Bob 是否為 Vip

// 修改開始處
if (BobPrice >= giftPriceRule || BobIsVip == true) {
  console.log("客戶您好，您有符合贈品資格");
  giftNum--;
} else {
  console.log("客戶您好，您沒有符合贈品資格");
};
// 修改結束處

console.log(`贈品還剩下 ${giftNum} 個`);
/***   作業 8 填答區結束   **/


/*
作業九：
貪心國的個人所得稅收非常重
會計官想寫一個程式，來去計算民眾的稅收，以下為條件值

條件一：不管有無工作，基本費先收 5,000 元
條件二：全年所得在 54 萬以下者，收 30% 稅收
條件三：全年所得超過 54 萬~100 萬以下者，收 50% 稅收
條件四：全年所得超過 100 萬以下者，收 80% 稅收

例如小華的全年所得為 10 萬，100,000*0.3+5,000，總計要支付 35,000 元稅收
請透過 if、else if、else 方式，來去計算小明該繳多少稅收
*/
/***   作業 9 填答區開始   **/
// 請將作業九截圖程式碼都寫過來，並附上您的答案
let mingMoney = 870000;  // 小明全年個人所得
let mingBill = 5000;  // 小明稅收帳單，並已加入條件一基本費 5,000 元

// 程式碼填寫開始處
if (mingMoney > 1000000) {
  mingBill += mingMoney * 0.8;
} else if (mingMoney > 540000 && mingMoney <= 1000000) {
  mingBill += mingMoney * 0.5;
} else if (mingMoney <= 540000) {
  mingBill += mingMoney * 0.3;
} else {
  mingBill = 5000;
}
// 程式碼填寫結束處

console.log(`小明總共需支付 ${mingBill} 帳單`);
/***   作業 9 填答區結束   **/


/*
作業十：

請寫程式來判斷剪刀石頭布的輸贏
宣告兩個變數，一個是 playerA 另一個是 playerB
請透過 if, if 包 if, else if, else 等方法思考每個玩家出拳的情境
以下為其中一個情境範例
*/
/***   作業 10 填答區開始   **/
let playerA = '剪刀';
let playerB = '剪刀';

if (playerA === '剪刀' && playerB === '剪刀' || playerA === '石頭' && playerB === '石頭' || playerA === '布' && playerB === '布') {
  console.log('平手');
} else if (playerA === '剪刀' && playerB === '布' || playerA === '布' && playerB === '石頭' || playerA === '石頭' && playerB === '剪刀') {
  console.log('playerA 贏');
} else if (playerB === '剪刀' && playerA === '布' || playerB === '布' && playerA === '石頭' || playerB === '石頭' && playerA === '剪刀') {
  console.log('playerB 贏');
} else {
  console.log('請正確出拳');
}
/***   作業 10 填答區結束   **/