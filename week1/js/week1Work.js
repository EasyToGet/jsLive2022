/*
作業 1：變數練習
情境：Jane 在她的房間裡睡覺，但她還沒睡醒，請用變數描述以下狀態
1-1.請宣告一個 const 變數名稱為 janeOld，並賦予值為 14
1-2.請宣告一個 const 變數名稱為 janePhoneNumber，並賦予值為字串，"0955713484"
1-3.請宣告一個 const 變數名稱為 isWakeUp，並賦予值為 false
1-4.請用 console.log(janeOld, janePhoneNumber, isWakeUp)
*/
/***   作業 1 填答區開始   **/
const janeOld = 14;
const janePhoneNumber = '0955713484';
const isWakeUp = false;
console.log(janeOld, janePhoneNumber, isWakeUp);
/***   作業 1 填答區結束   **/


/*
作業 2：嘗試變數命名
情境：小明手上有 200 元，他母親請他去飯館買飯，請觀看此圖片連結來完成此項題目
2-1.請修改以下中文變數名稱，讓他符合變數語意
*/
/***   作業 2 填答區開始   **/
const steakPrice = 50;
const fishSteakPrice = 30;
const ricePrice = 10;
let walletTotal = 200;
/***   作業 2 填答區結束   **/


/*
作業 3：變數計算
情境：承上題，母親要小明買飯，但要符合下面三個條件，並將花錢的總數計算在 cost 變數上，一起幫幫他吧！
3-1.一定要買白飯 2 碗以上
3-2.母親想要吃到牛排
3-3.一定要花 150 元以上

範例寫法： let cost = (白飯變數*2)+(牛排變數*2)
*/
/***   作業 3 填答區開始   **/
let cost = 0;
cost = (ricePrice * 2) + (steakPrice * 3);
console.log(`小明買完飯了，他一共剩下 ${walletTotal - cost} 元`);
/***   作業 3 填答區結束   **/


/*
作業 4：布林值與變數定義，是否有用對 let 與 const
情境：小華在馬路上看到許多路況，請描述他所看到的一切，並宣告變數與對應賦予的值
4-1.小華在等紅綠燈，他抬頭看了下現在是紅燈，並還差 35 秒 (最多三個宣告)
4-2.目前馬路上有 10 個人
4-3.小華太無聊看天空發呆，看到天上有三朵白雲，一顆太陽
*/
/***   作業 4 填答區開始   **/
// 4-1
const user = '小華';
let trafficLight = 'red';
let lightSec = 35;
// 4-2
let peopleNum = 10;
// 4-3
const sum = 1;
let cloud = 3;
/***   作業 4 填答區結束   **/


/*
作業 5：看圖宣告變數
情境：圖片連結為六角學院的其中一個作業任務，請依照您看到的內容來嘗試設計變數與值(至少三個)
*/
/***   作業 5 填答區開始   **/
let className = '使用 jQuery 打造互動性網頁動畫效果';
let userNum = 62;
let points = 50;
/***   作業 5 填答區結束   **/


/*
作業 6：變數重新賦予值
情境：請依照以下程式碼告知答案是多少，並在下方用註解方式寫上這五行程式碼做了什麼事
以下程式碼勿更變
*/
/***   作業 6 填答區開始   **/
let a = 1;    // 宣告 a 變數，並賦予 1 的數字型別
let b = 0;    // 宣告 b 變數，並賦予 0 的數字型別
a = 3;        // 重新賦予 a 值， 0 的數字型別
a = b + 2;    // 重新賦予 a 值， b + 2 的數字型別
a - b;        // a 減 b，但沒給值給任何變數
b += 1;       // 重新賦予 b 值， +1 的數字型別
/***   作業 6 填答區結束   **/


/*
作業 7：變數記憶體指向
情境：請依照以下程式碼，繪製記憶體指向位置
以下程式碼勿更變
*/
/***   作業 7 填答區開始   **/
//此題目不用在 codepen 上作答，請同學用小畫家製作記憶體指向圖片，並藉由程式勇者村系統的任務留言介面上傳您的答案圖片即可
let d = 1;
let e = d + e;
e += 1;
/***   作業 7 填答區結束   **/


/*
作業 8：愛吃的 mary
情境：mary 有 20 顆蘋果
他早上吃了 5 顆
中午吃了 12 顆
下午他又去買了 4 顆
那麼她還剩下幾顆蘋果？
以下的 Code 只寫到一半，還請幫幫 Mary
*/
/***   作業 8 填答區開始   **/
let maryAppleNum = 20;
maryAppleNum -= 5;
maryAppleNum -= 12;
maryAppleNum += 4;
console.log(`Mary 還剩下 ${maryAppleNum} 顆蘋果`);
/***   作業 8 填答區結束   **/


/*
作業 9：餐點庫存計算
情境： Nick 在餐廳吃飯，吃飽後想算自己的帳單多少錢，但發現帳單沒有加總金額，於是他打算透過 JS 來計算
9-1. Nick 數學不好，所以帳單(bill)先從零開始計算
9-2. 一個漢堡 30 元
9-3. 他吃了 3 顆漢堡
9-4. 他將漢堡數量 * 漢堡價格算出 90 元
9-5. 一杯奶茶 15 元
9-6. 他喝了 32 杯奶茶
9-7. 他將奶茶數量 * 奶茶價格算出 ??? 元
9-8. console.log 顯示帳單
以下的 Code 只寫到一半，還依照上面的程式邏輯，幫幫 Nick 來計算
以下程式碼勿更變
*/
/***   作業 9 填答區開始   **/
let bill = 0;
const hamburgerPrice = 30;
const blackTeaPrice = 15;
bill = (hamburgerPrice * 3) + (blackTeaPrice * 32);
console.log(`Nick 的帳單總共 ${bill} 元`);
/***   作業 9 填答區結束   **/


/*
作業 9：餐點庫存計算
請不要觀看 console.log，透過註解告知解答每個變數的型別
*/
let g = "hello";
let h = 123;
let i = g + h;
let j = true;
let k = h + h;
let l = j + k;
/***   作業 10 填答區開始   **/
// 請從以下新增註解，告知上面每行各別是那些型別
// g 是字串
// h 是數字
// i 是字串
// j 是布林值
// k 是數字
// l 是數字
/***   作業 10 填答區結束   **/