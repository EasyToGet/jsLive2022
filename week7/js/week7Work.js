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

//  取得旅遊套票資料
axios.get(url)
  .then(response => {
    data = response.data.data
    render(data);
  })
  .catch(error => {
    console.log(error);
  })

//  新增套票
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
  render(data);
  renderC3(data);
});

//  地區搜尋
regionSearchFilter.addEventListener('change', (e) => {
  render(data);
});

//  讀取旅遊套票資料
const render = (data) => {
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
  renderC3(areaFilter);
};

//  渲染 C3
const renderC3 = (data) => {
  let totalObj = {};
  data.forEach(item => {
    if (totalObj[item.area] === undefined) {
      totalObj[item.area] = 1;
    } else {
      totalObj[item.area] += 1;
    }
  });

  let newData = [];
  let area = Object.keys(totalObj);
  area.forEach(item => {
    let ary = [];
    ary.push(item)
    ary.push(totalObj[item]);
    newData.push(ary);
  });

  const chart = c3.generate({
    // bindto對應 html中的id為chart的標籤
    bindto: "#areaChart",
    size: {
      weight: 180,
      height: 180
    },
    data: {
      columns: newData,
      type: 'donut',
      colors: {
        '台北': '#26C0C7',
        '台中': '#5151D3',
        '高雄': '#E68618'
      }
    },
    // type為圖形類型，donut為甜甜圈圖
    donut: {
      title: "地區",
      width: 15, // 圓條大小
      label: {
        show: false // 標籤 % 數不顯示  
      }
    }
  });
};
