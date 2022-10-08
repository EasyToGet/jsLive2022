/*  題目
歡迎大家參加這次的 JS 工程師養成直播班，就先來自我介紹一下吧!
首先請大家替以下的變數適當的命名，並賦予它們值:

變數 1: 組別
變數 2: Discord 名稱
變數 3: 來自哪裡
變數 4: 目前的職位
變數 5: 興趣
變數 6: JS 學習時數

接著透過 `console.log` 輸出以下字串，`「」`中的內容需要 ** 依序 ** 代入上面的變數呈現。

```
大家好，我是第「x」組的「xxx」，很高興認識各位！ 我來自「xx」，目前是一個「xxx」，平常的興趣是「xxx」。 
預計之後每天會花「x」小時學習 JavaScript，未來還請多多指教。
```
*/

let teamNum = 27;
let discordName = "Ed Huang#6753";
let comeFrom = "台東";
let myJob = "CNC 技術員";
let myHobby = "玩電玩";
let studyJsHour = 3;

console.log(`大家好，我是第「${teamNum}」組的 「${discordName}」，
很高興認識各位! 我來自「${comeFrom}」，目前是一個「${myJob}」，
平常的興趣是「${myHobby}」。預計之後每天會花「${studyJsHour}」小時學習 JavaScript，
未來還請多多指教。`);
