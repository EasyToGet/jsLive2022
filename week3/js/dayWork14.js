/*
在物件內新增、修改、取得屬性的方法有以下兩種:
1. 點記法 (Dot notation)
let obj = {};
obj.key = "value";  // 新增或修改
console.log(obj.key); // 取得


2. 括弧記法 (Bracket notation)
let obj = {};

當屬性的值帶有小數點、空格或是數字時可以使用，記得要加上引號 (單引號或雙引號皆可)
obj['k e y'] = "value";  // 新增或修改
console.log(obj['key']); // 取得
*/




/*
題目:
請觀看下方程式碼，依照註解敘述完成程式碼（補上 `...` 的部分）：
*/
let weather = {
  country: "高雄",
  "PM2.5": 35,
  isSunny: false,
  rainingRegion: ['鼓山', '鹽埕', '旗津'],
  rainFall: {
    鼓山: 400,
    鹽埕: 300,
  }
}

// 取得 country 的值，並使用 console.log 印出
console.log(weather.country);

// 取得 "PM2.5" 的值，並使用 console.log 印出
console.log(weather['PM2.5']);

// 取得 isSunny 的值，並使用 console.log 印出
console.log(weather.isSunny);

// 取得 rainingRegion 陣列的第一個值 '鼓山'，並使用 console.log 印出
console.log(weather.rainingRegion[0]);

// 在 rainFall 新增一個屬性名為「旗津」、設定值為 200，並，並使用 console.log 印出 rainFall 的值
weather.rainFall.旗津 = 200;
console.log(weather.rainFall);




/*
解答：

取得 country 的值
console.log(weather.country);  // 方法一
console.log(weather["country"]);  // 方法二

取得 "PM2.5" 的值
console.log(weather["PM2.5"]);

取得 isSunny 的值
console.log(weather.isSunny);  // 方法一
console.log(weather["isSunny"]);  // 方法二

取得 rainingRegion 陣列的第一個值 '鼓山'
console.log(weather.rainingRegion[0]);

在 rainFall 新增一個屬性名為「旗津」、設定值為 200，並輸出結果
weather.rainFall.旗津 = 200; // 方法一
console.log(weather.rainFall);

weather["rainFall"]["旗津"] = 200; // 方法二
console.log(weather["rainFall"]);
*/