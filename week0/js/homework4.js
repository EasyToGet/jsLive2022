// 第一題
/*
「阿貓與阿狗玩棒球，要記錄比分」
流程一：第一回合，阿貓得 3 分，阿狗得 2 分
流程二：第二回合，阿貓得 20 分，阿狗得 3 分
流程三：中間有插曲，就是阿貓作弊，第二回合才得 2 分卻謊報 20 分，所以必須扣掉 18 分
流程四：第三回合，阿貓得 1 分，阿狗得 7 分
*/
let roundNum = 0;
let catScore = 0;
let dogScore = 0;
// 程式碼開始填寫處
// 第一回合
roundNum++;
catScore += 3;
dogScore += 2;

// 第二回合
roundNum++;
catScore += 20;
dogScore += 3;

catScore -= 18;

// 第三回合
roundNum++;
catScore += 1;
dogScore += 7;

// 程式碼結束處
// 顯示雙方總得分，console 應印出阿貓 6 分、阿狗 12 分
console.log(`總得分：阿貓 ${catScore} 分、阿狗 ${dogScore} 分`);
// 顯示比了幾回合
console.log(`總共比了 ${roundNum} 回合`);



// 第二題
// 鍛鍊：拆解任務流程與設定變數
/*
「幫媽媽跑腿，紀錄花了多少錢，與跑腿了幾次」
小明的媽媽請她跑腿，因為小明一天規定自己只能出門三次，所以和媽媽說最多跑三次腿
小明媽給了小明 300 元，請他去買兩罐牛奶跟兩份吐司，小明到超商後看到牛奶 30 元吐司 20 元
當她到櫃台結帳時，櫃台告訴他剛好今天全部品項都打 5 折 !
買回家後，媽媽發現小明的東西都有買齊，就讓小明去玩耍了。
*/// 請試著拆解流程，並透過註解告知您的解題流程
// 最後兩行 code 請用 console.log 印出最後小明花完剩下多少錢，以及當天還能跑腿幾次的變數
// 最後提交 Codepen 連結給我們檢視

let round = 3;
let mingMoney = 300;
let milkPrice = 30;
let toastPrice = 20;
const discount = 0.5;
let totalMoney = (milkPrice * 2 + toastPrice * 2) * discount;

round--;
mingMoney -= totalMoney;

console.log(`小明花完剩下${mingMoney}錢，還能跑腿${round}次`);