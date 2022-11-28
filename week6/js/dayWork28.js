/*
  請同學嘗試用 axios 串接這個 API 並透過 console.log 輸出以下要求:
  https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json

    1. 該 JSON 的陣列資料總共有多少個物件?
    2. 請輸出該 JSON 陣列資料的第一筆物件，屬性 id 所對應的值。 
    3. 請輸出該 JSON 陣列資料的第一筆物件，屬性 name 所對應的值。
    4. 請輸出該 JSON 陣列資料的第一筆物件，屬性 imgUrl 所對應的值。
    5. 請輸出該 JSON 陣列資料的第一筆物件，屬性 area 所對應的值。
    6. 請輸出該 JSON 陣列資料的第二筆物件，屬性 description 所對應的值。
    7. 請輸出該 JSON 陣列資料的第二筆物件，屬性 group 所對應的值。
    8. 請輸出該 JSON 陣列資料的第二筆物件，屬性 price 所對應的值。
    9. 請輸出該 JSON 陣列資料的最後一筆物件，屬性 rate 所對應的值。
*/

// 在以下 URL 的部分填入 API 網址
axios.get('https://raw.githubusercontent.com/hexschool/js-training/main/travelAPI-lv1.json')
  // 如果連接成功，可以用 then() 處理傳回來的值，將回傳結果儲存於 response。
  .then(function (response) {
    console.log(response.data);
    // 第一筆物件
    console.log(`第一筆物件，屬性 id: ${response.data[0].id}`);
    console.log(`第一筆物件，屬性 name: ${response.data[0].name}`);
    console.log(`第一筆物件，屬性 imgUrl: ${response.data[0].imgUrl}`);
    console.log(`第一筆物件，屬性 area: ${response.data[0].area}`);

    //第二筆物件
    console.log(`第二筆物件，屬性 description: ${response.data[1].description}`);
    console.log(`第二筆物件，屬性 group: ${response.data[1].group}`);
    console.log(`第二筆物件，屬性 price: ${response.data[1].price}`);

    // 最後一筆物件
    console.log(`最後一筆物件，屬性 rate: ${response.data[response.data.length - 1].rate}`);
    // console.log(`最後一筆物件，屬性 rate: ${response.data[2].rate}`);
  });
