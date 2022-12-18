/*
  題目: 
  任務要求條列如下：
    1. 請同學在商品列表新增「加入購物車」按鈕，點擊按鈕可以新增一筆購物車項目（預設數量為 1）
    2. 新增的購物車項目可以及時的渲染於上方列表，如下圖：
*/

const baseUrl = 'https://livejs-api.hexschool.io';
const api_path = 'edjslive2022';

const productList = document.querySelector('.productList');
const cartList = document.querySelector('.cartList');

let productsData;
let cartData;

const getProducts = () => {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios.get(url)
    .then(response => {
      productsData = response.data.products;
      renderProduct(productsData);
    }).catch(error => {
      console.log(error);
    })
};

const renderProduct = (productsData) => {
  let str = '';
  productsData.forEach(item => {
    str += `<div class="col-6 mb-3">
        <div class="card">
          <img src=${item.images} class="card-img-top productImg" alt="產品圖片">
          <div class="card-body">
            <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
            <p class="card-text"><strong>種類:</strong> ${item.category}</p>
            <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
            <p class="card-text"><strong>售價:</strong> ${item.price}</p>
            <p class="card-text"><strong>描述:</strong> ${item.description}</p>
            <button type="button" class="btn btn-primary addCart" data-id="${item.id}">加入購物車</button>
          </div>
        </div>
      </div>`
  });
  productList.innerHTML = str;
  let addCartBtn = document.querySelectorAll('.addCart');
  addCartBtn.forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault();
      addCart(e.target.dataset.id);
    })
  })
};

const getCart = () => {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios.get(url)
    .then(response => {
      cartData = response.data.carts;
      renderCart(cartData);
    }).catch(error => {
      console.log(error);
    })
};

const renderCart = (cartData) => {
  let str = '';
  cartData.forEach(item => {
    str += `<li>
        <p>名稱: <span>${item.product.title}</span></p>
        <p>數量: <span>${item.quantity}</span></p>
      </li>`
  });
  cartList.innerHTML = str;
};

const addCart = (id) => {
  url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  let data = {
    "data": {
      "productId": id,
      "quantity": 1
    }
  };
  axios.post(url, data)
    .then(response => {
      console.log(response);
      getCart();
    }).catch(error => {
      console.log(error);
    })
};

getProducts();
getCart();

//  送出訂單
const addOrder = () => {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/orders`;
  let data = {
    data: {
      user: {
        name: document.querySelector('#customerName').value.trim(),
        tel: document.querySelector('#customerTel').value.trim(),
        email: document.querySelector('#customerEmail').value.trim(),
        address: document.querySelector('#customerAddress').value.trim(),
        payment: document.querySelector('#payMethod').value.trim()
      }
    }
  };
  axios.post(url, data)
    .then(response => {
      console.log(response.data);
      data = {};
      getCart();
    }).catch(error => {
      console.log(error);
    })
};

// 進階 : validate.js 驗證
const constraints = {
  "姓名": {
    presence: {
      message: "是必填欄位"
    }
  },
  "電話": {
    presence: {
      message: "是必填欄位"
    },
    length: {
      minimum: 8,
      message: "號碼需超過 8 碼"
    }
  },
  "信箱": {
    presence: {
      message: "是必填欄位"
    },
    email: {
      message: "格式有誤"
    }
  },
  "地址": {
    presence: {
      message: "是必填欄位"
    }
  }
};
const form = document.querySelector('.submitForm');
const inputs = document.querySelectorAll('input[type=text], input[type=tel]');
// 取得所有帶有 data-msg 的 <p> 標籤
const messages = document.querySelectorAll('[data-msg]');
// 綁定整個 form 表單，驗證成功才准許送出表單
form.addEventListener('submit', verification, false);
function verification(e) {
  e.preventDefault();
  let errors = validate(form, constraints);
  // 如果有誤，呈現錯誤訊息 
  if (errors) {
    showErrors(errors);
  } else {
    // 如果沒有錯誤，送出表單
    addOrder();
  }
};

const showErrors = (errors) => {
  messages.forEach(item => {
    item.textContent = '';
    item.textContent = errors[item.dataset.msg];
  })
};
// 監控所有 input 的操作
inputs.forEach(item => {
  item.addEventListener('change', (e) => {
    e.preventDefault();
    let targetName = item.name;
    let errors = validate(form, constraints);
    item.nextElementSibling.textContent = '';
    // 針對正在操作的欄位呈現警告訊息
    if (errors) {
      document.querySelector(`[data-msg='${targetName}']`).textContent = errors[targetName];
    }
  });
});