/*
  題目: 
  請同學使用 這個模板 進行練習，嘗試實作「修改購物車數量」的功能。

  1.每次點擊「+」的符號數量就會加 1。
  2.每次點擊「-」的符號數量就會減 1。
  3.當數量減去至 0 的時候，將這筆購物車項目刪除。
*/

const baseUrl = 'https://livejs-api.hexschool.io';
const api_path = 'edjslive2022';

const productList = document.querySelector('.productList');
const cartList = document.querySelector('.cartList');

let productData = [];
let cartData;

const getProducts = () => {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/products`;
  axios.get(url)
    .then(response => {
      productData = response.data.products;
      renderProduct(productData);
      getCategories();
    }).catch(error => {
      console.log(error);
    })
};

const renderProduct = (productData) => {
  let str = '';
  productData.forEach(item => {
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
        <p class="cartAmount">數量:
          <a href="#"><span class="material-icons cartAmount-icon" data-num="${item.quantity - 1}" data-id="${item.id}">remove</span></a>
          <span>${item.quantity}</span>
          <a href="#"><span class="material-icons cartAmount-icon" data-num="${item.quantity + 1}" data-id="${item.id}">add</span></a>
        </p>
        <button type="button" class="btn btn-primary mb-3 delSingleBtn" data-id="${item.id}">刪除</button>
      </li>`
  });
  cartList.innerHTML = str;

  //  執行刪除單筆
  let delSingleBtn = document.querySelectorAll('.delSingleBtn');
  delSingleBtn.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      delSingleCart(e.target.dataset.id);
    });
  });

  let cartNumEdit = document.querySelectorAll('.cartAmount-icon');
  cartNumEdit.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      editCartNum(e.target.dataset.num, e.target.dataset.id)
    });
  });
};

const addCart = (id) => {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
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

//  修改購物車數量
const editCartNum = (num, id) => {
  if (num > 0) {
    let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
    let data = {
      data: {
        id: id,
        quantity: parseInt(num)
      }
    }
    axios.patch(url, data)
      .then(response => {
        console.log(response);
        getCart();
      }).catch(error => {
        console.log(error);
      })
  } else {
    delSingleCart(id);
  }

};

//  刪除單筆購物車資料
const delSingleCart = (id) => {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts/${id}`;
  axios.delete(url)
    .then(response => {
      console.log(response);
      getCart();
      setTimeout(function () { alert("成功刪除此筆訂單"); }, 1000);
    }).catch(error => {
      console.log(error);
    })
};

//  刪除所有購物車資料
const delAllCartBtn = document.querySelector('.delAllCartBtn');
delAllCartBtn.addEventListener('click', delAllCart);
function delAllCart() {
  let url = `${baseUrl}/api/livejs/v1/customer/${api_path}/carts`;
  axios.delete(url)
    .then(response => {
      console.log(response);
      getCart();
      setTimeout(function () { alert("成功刪除所有訂單"); }, 1000);
    }).catch(error => {
      console.log(error);
    })
};

getProducts();
getCart();

// 商品篩選功能
const productSelect = document.querySelector('.productSelect');
productSelect.addEventListener('change', selectFilter);

function selectFilter(e) {
  e.preventDefault();
  let category = e.target.value;
  if (category === '全部') {
    renderProduct(productData);
    return;
  }
  let targetProducts = [];
  productData.forEach(item => {
    if (item.category === category) {
      targetProducts.push(item);
    };
  });
  renderProduct(targetProducts);
}

// 篩選 select 欄位教學
const getCategories = () => {
  // 步驟二: 分類前
  let unSort = productData.map(item => {
    return item.category
  });
  console.log(unSort);  // 結果為 ["床架","床架","窗簾","床架","收納","床架","收納","床架"]
  //  步驟三: 分類後
  let sorted = unSort.filter((item, i) => {
    return unSort.indexOf(item) === i;
  });
  console.log(sorted);  // 結果為 ["床架","窗簾","收納"]
  // 步驟四: 渲染至網頁上
  renderCategories(sorted);
};

const renderCategories = (sorted) => {
  let str = '<option value="全部" selected>全部</option>';
  sorted.forEach(item => {
    str += `<option value="${item}">${item}</option>`
  });
  productSelect.innerHTML = str;
};

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