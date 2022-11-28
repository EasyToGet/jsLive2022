/*
  請修改 JS 程式碼來符合下面要求，以下為點擊「觸發按鈕」後所需觸發的程式行為。
（請觀察網頁畫面渲染的變化與 console 結果）

  1. 將 newValue 轉型為數字型別。
  2. 執行 newValue += 300;
  3. 將 el.value 重新賦值為 newValue。
  4. 用 console.log 輸出 el.value。
  5. 使用 getAttribute 取得 el 的 「value 屬性值」，並透過 console.log 輸出。
*/
const el = document.querySelector('#targetInput');
const triggerBtn = document.querySelector('#triggerBtn');

triggerBtn.addEventListener('click', function () {
  let newValue = el.value;
  /* 程式碼撰寫區 */
  newValue = parseInt(newValue);
  newValue += 300;
  el.value = newValue;
  console.log(`el.value: ${el.value}`);
  console.log(`el.value: ${el.getAttribute('value')}`);
});

/*
  進階題:
  監聽下方 select 元素（ .selectPets ），當改變 select 選項時，讓 p 標籤內呈現出該選項的文字。
  （提示：運用 change 事件及表單取值）
*/
const selectPets = document.querySelector(".selectPets");
const choosePet = document.querySelector(".choosePet");
/* 程式碼撰寫 */
selectPets.addEventListener('change', (e) => {
  choosePet.value = e.target.value;
  // choosePet.value = selectPets.value;
  console.log(choosePet.value);
});
