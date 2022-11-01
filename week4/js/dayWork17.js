/* 
1. 觀看以下程式碼，利用函式觀念二，嘗試優化 `todayTask()` 函式
function todayTask() {
  console.log("觀看課程");
  console.log("製作筆記");
  console.log("每日任務");
  console.log("觀看課程");
  console.log("製作筆記");
  console.log("主線任務");
  console.log("觀看課程");
  console.log("製作筆記");
}
function watchAndNote() {
  console.log("觀看課程");
  console.log("製作筆記");
}
*/
function todayTask() {
  watchAndNote();
  console.log("每日任務");
  watchAndNote();
  console.log("主線任務");
  watchAndNote();
}
function watchAndNote() {
  console.log("觀看課程");
  console.log("製作筆記");
}

todayTask();


// 2. 觀看以下程式碼，最後會印出什麼
function printNumbers() {
  printOne();
  console.log("11");
  printOne();
}
function printOne() {
  console.log("1");
}
printOne();

// 最後會印出 1