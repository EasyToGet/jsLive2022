const areaList = document.querySelector('.ticketCard-area');
const searchResult = document.querySelector('#searchResult-text');
const regionSearchFilter = document.querySelector('.regionSearch');
const ticketName = document.querySelector('#ticketName');
const ticketImgUrl = document.querySelector('#ticketImgUrl');
const ticketRegion = document.querySelector('#ticketRegion');
const ticketPrice = document.querySelector('#ticketPrice');
const ticketNum = document.querySelector('#ticketNum');
const ticketRate = document.querySelector('#ticketRate');
const ticketDescription = document.querySelector('#ticketDescription');
const addBtn = document.querySelector('.addTicket-btn');
const form = document.querySelector('.addTicket-form');

const url = "https://raw.githubusercontent.com/hexschool/js-training/main/travelApi.json";
let data;

axios.get(url)
  .then(response => {
    data = response.data.data
    render();
  })
  .catch(error => {
    console.log(error);
  })

const render = () => {
  let str = '';
  let areaFilter = [];
  data.forEach(item => {
    if (item.area === regionSearchFilter.value) {
      areaFilter.push(item);
    } else if (regionSearchFilter.value === '地區搜尋' || !regionSearchFilter.value) {
      areaFilter.push(item);
    }
  });
  areaFilter.forEach(item => {
    str += `<li class="ticketCard">
        <div class="ticketCard-img">
          <a href="#">
            <img src=${item.imgUrl}
              alt="">
          </a>
          <div class="ticketCard-region">${item.area}</div>
          <div class="ticketCard-rank">${item.rate}</div>
        </div>
        <div class="ticketCard-content">
          <div>
            <h3>
              <a href="#" class="ticketCard-name">${item.name}</a>
            </h3>
            <p class="ticketCard-description">
              ${item.description}
            </p>
          </div>
          <div class="ticketCard-info">
            <p class="ticketCard-num">
              <span><i class="fas fa-exclamation-circle"></i></span>
              剩下最後 <span id="ticketCard-num"> ${item.group} </span> 組
            </p>
            <p class="ticketCard-price">
              TWD <span id="ticketCard-price">${item.price}</span>
            </p>
          </div>
        </div>
      </li>`;
  });
  areaList.innerHTML = str;
  searchResult.innerHTML = `<p>本次搜尋共 ${areaFilter.length} 筆資料</p>`;
};


addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (ticketName.value === "" || ticketName.value === "" || ticketName.value === "" || ticketName.value === "" || ticketName.value === "" || ticketName.value === "" || ticketName.value === "") {
    alert("欄位不得空白");
    return;
  };
  if (ticketRate.value < 1 || ticketRate.value > 10) {
    alert("套票星級區間為1-10的數字");
    return;
  };
  data.push({
    id: data.length,
    name: ticketName.value,
    imgUrl: ticketImgUrl.value,
    area: ticketRegion.value,
    price: parseInt(ticketPrice.value),
    group: parseInt(ticketNum.value),
    rate: parseInt(ticketRate.value),
    description: ticketDescription.value
  });
  form.reset();
  render();
});

regionSearchFilter.addEventListener('change', (e) => {
  render();
});