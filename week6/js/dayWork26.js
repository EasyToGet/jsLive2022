/*
  監聽下方元素（.plusOne），當點擊「+1」按鈕時，可以讓 sum 的值 +1，並使用 console.log 印出 sum。
*/

let sum = 0;

const plusOne = document.querySelector('.plusOne');

plusOne.addEventListener('click', () => {
  sum++;
  console.log(sum);
});