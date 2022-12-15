/*
  題目: 
  任務要求條列如下：
    1. 請同學在商品列表新增「加入購物車」按鈕，點擊按鈕可以新增一筆購物車項目（預設數量為 1）
    2. 新增的購物車項目可以及時的渲染於上方列表，如下圖：
*/

const api_path = 'edjslive2022';

const productList = document.querySelector('.productList');
const cartList = document.querySelector('.cartList');

let productsData;
let cartData;

const getProducts = () => {
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`)
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
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`)
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
  axios.post(`https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/carts`,
    {
      "data": {
        "productId": id,
        "quantity": 1
      }
    })
    .then(response => {
      console.log(response);
      getCart();
    }).catch(error => {
      console.log(error);
    })
}

getProducts();
getCart();