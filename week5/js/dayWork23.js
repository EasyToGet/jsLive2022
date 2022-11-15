/*
  1.請練習用 querySelector 取得以下 HTML 程式碼中的元素（.list），並運用 innerHTML 使其可以呈現出下方圖片的結構
*/
const list = document.querySelector(".list");

list.innerHTML = `<li>1</li><li>2</li><li>3</li>`

/*
  根據下方 HTML 程式碼，若想使用 JS 在其新增一個使用 h1 標籤包覆，文字內容為「標題」的結構該如何撰寫，請在下方選項中選出可以正確呈現的程式碼

  選項：
    1. document.querySelector(".title").textContent = `<h1>標題</h1>`;
    2. document.querySelector(".title").textContent = `標題`;
    3. document.querySelector(".title").innerHTML = `<h1>標題</h1>`;
*/
// 答案
document.querySelector(".title").innerHTML = `<h1>標題</h1>`;
