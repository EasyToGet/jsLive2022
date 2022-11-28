/*
  請同學嘗試用 axios 串接這個 [API](https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json)，並依照要求將資料呈現於以下 HTML 模板
    1. 請將 JSON 陣列資料的第一筆物件，屬性 name 所對應的值用 textContent 填入 id 為 targetName 的 p 標籤內。
    2. 請將 JSON 陣列資料的第一筆物件，屬性 imgUrl 所對應的值用 setAttribute 的方式替 id 為 targetImg 的 img 標籤設定 src 屬性。
    3. 請將 JSON 陣列資料的第一筆物件，屬性 area 所對應的值用 textContent 填入 id 為 targetArea 的 p 標籤內。
*/

const targetName = document.querySelector('#targetName');
const targetImg = document.querySelector('#targetImg');
const targetArea = document.querySelector('#targetArea');

axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
  .then(function (response) {
    targetName.textContent = response.data[0].name;
    targetImg.setAttribute('src', response.data[0].imgUrl);
    targetArea.textContent = response.data[0].area;
  });
