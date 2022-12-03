/*
  1. 請問 console 顯示的輸出結果為何? 
  2. 嘗試用自己的理解描述為什麼。
*/

let arr = [];

axios.get('https://hexschool.github.io/ajaxHomework/data.json')
  .then(function (response) {
    console.log('資料有回傳了');
    arr = response.data;
  });

console.log(arr);