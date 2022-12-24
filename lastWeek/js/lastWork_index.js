const api_path = 'edjslive2022';

const productWrap = document.querySelector('.productWrap');
const productSelect = document.querySelector('.productSelect');
const cartList = document.querySelector('.shoppingCart-tableList');
const finalTotal = document.querySelector('.js-finalTotal');
const deleteAllCartBtn = document.querySelector('.discardAllBtn');
const orderInfoBtn = document.querySelector('.orderInfo-btn');
const orderInfoForm = document.querySelector('.orderInfo-form');

let productsData = [];
let cartData = [];

//  程式初始化
const init = () => {
  getProductList();
  getCartList();
};

//  取得商品列表
const getProductList = () => {
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`)
    .then(response => {
      productsData = response.data.products;
      renderProductList(productsData);
    }).catch(error => {
      console.log(error);
    })
};

//  選擇商品列表
productSelect.addEventListener('change', (e) => {
  e.preventDefault();
  renderProductList(productsData);
});

//  渲染商品列表
const renderProductList = (productsData) => {
  let str = '';
  let productsFilter = [];
  productsData.forEach(item => {
    if (item.category === productSelect.value) {
      productsFilter.push(item);
    } else if (productSelect.value === '全部' || !productSelect.value) {
      productsFilter.push(item);
    }
  });
  productsFilter.forEach(item => {
    str += `<li class="productCard">
        <h4 class="productType">新品</h4>
        <img
          src=${item.images}
          alt="">
        <a href="#" class="addCardBtn" data-id="${item.id}">加入購物車</a>
        <h3>${item.title}</h3>
        <del class="originPrice">NT$${toThousand(item.origin_price)
      }</del>
        <p class="nowPrice">NT$${toThousand(item.price)}</p>
      </li>`;
  });
  productWrap.innerHTML = str;
};

//  取得購物車列表
const getCartList = () => {
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`)
    .then(response => {
      finalTotal.textContent = toThousand(response.data.finalTotal);
      cartData = response.data.carts;
      renderCartList(cartData);
    }).catch(error => {
      alert('購物車未有商品');
      console.log(error);
    })
};

//  渲染購物車列表
const renderCartList = (cartData) => {
  let str = '';
  cartData.forEach(item => {
    str += `<tr>
            <td>
              <div class="cardItem-title">
                <img
                  src="${item.product.images}"
                  alt="">
                <p>${item.product.title}</p>
              </div>
            </td>
            <td>NT$${toThousand(item.product.price)}</td>
            <td>${item.quantity}</td>
            <td>NT$${toThousand(item.product.price * item.quantity)}</td>
            <td class="discardBtn">
              <a href="#" class="material-icons" data-id="${item.id}">
                clear
              </a>
            </td>
          </tr>`;
  });
  cartList.innerHTML = str;
};

//  取得商品 ID
productWrap.addEventListener('click', (e) => {
  e.preventDefault();
  let addCartClass = e.target.getAttribute('class');
  if (addCartClass !== 'addCardBtn') {
    return;
  };
  let productId = e.target.getAttribute('data-id');
  addCartItem(productId)
});

//  加入購物車
const addCartItem = (productId) => {
  let numCheck = 1;
  cartData.forEach(item => {
    if (item.product.id === productId) {
      numCheck = item.quantity += 1;
    }
  });
  axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`, {
    data: {
      "productId": productId,
      "quantity": numCheck
    }
  }).then(response => {
    alert("加入購物車成功");
    console.log(response.data.carts);
    cartData = response.data.carts;
    renderCartList(cartData);
  }).catch(error => {
    alert("加入購物車失敗");
    console.log(error);
  })
};

//  執行刪除購物車單一品項
cartList.addEventListener('click', (e) => {
  e.preventDefault();
  let cartId = e.target.getAttribute('data-id');
  if (cartId === null) {
    return;
  };
  deleteCartItem(cartId);
});

//  刪除購物車單一品項
const deleteCartItem = (cartId) => {
  axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts/${cartId}`)
    .then(response => {
      alert('刪除單筆品項成功');
      getCartList();
    }).catch(error => {
      alert('購物車已清空，請勿重複點擊！');
      console.log(error);
    })
};

//  執行刪除所有品項
deleteAllCartBtn.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAllCartList();
});

//  刪除所有品項
const deleteAllCartList = () => {
  axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`)
    .then(response => {
      alert('刪除所有品項成功');
      getCartList();
    }).catch(error => {
      alert('購物車已清空，請勿重複點擊！');
      console.log(error);
    })
};

//  送出預訂資料訂單
orderInfoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (cartData.length === 0) {
    alert('購物車是空的，請加入一個購物車品項');
    return;
  };

  let customerName = document.querySelector('#customerName').value;
  let customerPhone = document.querySelector('#customerPhone').value;
  let customerEmail = document.querySelector('#customerEmail').value;
  let customerAddress = document.querySelector('#customerAddress').value;
  let tradeWay = document.querySelector('#tradeWay').value;

  if (customerName == "" || customerPhone == "" || customerEmail == "" || customerAddress == "") {
    alert('請填寫預訂資料！');
    return;
  };
  let customerData = {
    name: customerName,
    tel: customerPhone,
    email: customerEmail,
    address: customerAddress,
    payment: tradeWay
  };
  orderInfoForm.reset();
  createOrder(customerData);
});

//  建立訂單
const createOrder = (customerData) => {
  axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/orders`,
    {
      data: {
        user: {
          name: customerData.name,
          tel: customerData.tel,
          email: customerData.email,
          address: customerData.address,
          payment: customerData.payment
        }
      }
    }
  ).then(response => {
    alert('訂單建立成功');
    getCartList();
  }).catch(error => {
    alert('未有預訂資料訂單');
    console.log(error);
  })
};

init();

// ------------ util js -----------------

// 千分位
function toThousand(x) {
  let parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}