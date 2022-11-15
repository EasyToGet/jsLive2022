/*
  如果 element 的 name 屬性為 “google”，請執行以下要求：

  要求一: 將 element 的 href 屬性更改為 “https://www.google.com/”
  要求二: 替 element 新增一個 target 屬性，並設定為 “_blank”
  要求三: 替 element 新增一個 class 屬性，並設定為 “colorRed”
*/

const element = document.querySelector('#targetId');
if (element.getAttribute('name') === "google") {
  element.setAttribute('href', "https://www.google.com/");
  element.setAttribute('target', "_blank");
  element.setAttribute('class', "colorRed");
}