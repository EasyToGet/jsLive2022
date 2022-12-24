/*
  題目: 
  請使用 這個 CodePen 做練習，當點擊「加入 alert 文字」按鈕後，將會在對應的
  <p class="alertMsg"></p> 標籤中填入警示文字，HTML 畫面渲染如下圖：
*/

const addBtn = document.querySelector('.addBtn');
const alertMsgAll = document.querySelectorAll('[data-title]');

const addAlertMsg = () => {
  alertMsgAll.forEach(item => {
    item.textContent = `${item.dataset.title} 必填`;
  });
};

addBtn.addEventListener('click', addAlertMsg);

