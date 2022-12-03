/*
  1. 執行以下程式，請問 console.log 的顯示順序為何？

  2. 承上題，如果希望加入以下 JS，讓 class 為 title 的 p 標籤可以正常的呈現「王小名」這三個字，則應該將以下 JS 填入區間 1 還是區間 2 ?
  const title = document.querySelector('.title');
  title.textContent = arr[0].name;

  答案: 填入區間 1
*/

let arr = [];
axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    console.log('資料有回傳了');   // 順序 2
    arr = response.data;
    renderData();
  });

function renderData() {
  console.log(arr);  // 順序 3
  // 區間 1
  const title = document.querySelector('.title');
  title.textContent = arr[0].name;
}

console.log(arr);  // 順序 1
// 區間 2