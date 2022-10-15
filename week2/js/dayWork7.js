/*
題目
請看完此篇文章的「[邏輯運算子]
(https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Expressions_and_Operators#%E9%82%8F%E8%BC%AF%E9%81%8B%E7%AE%97%E5%AD%90)」部分，
並試著回答以下程式碼 a、b、c、d、e 的值。
*/

let a = true || false;        // true

let b = 1 && 0;               // 0

let c = (4 > 3) && (2 >= 2);  // true

let d = !(4 > 3);             // false

let e = true && (1 > 2);      // false