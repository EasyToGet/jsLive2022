/*
  題目: 
  請練習串接以下 API 取得產品列表：

  並透過此 CodePen 模板，練習將取得的產品資料呈現於畫面如下：
*/
const api_path = 'edjslive2022';
const url = `https://livejs-api.hexschool.io/api/livejs/v1/customer/${api_path}/products`;

const productList = document.querySelector('.productList');

let data;

const getProducts = () => {
  axios.get(url)
    .then(response => {
      data = response.data.products;
      let str = '';
      data.forEach(item => {
        str += `<div class="col-6 mb-3">
        <div class="card">
          <img src=${item.images} class="card-img-top productImg" alt="產品圖片">
          <div class="card-body">
            <h5 class="card-title"><strong>標題:</strong> ${item.title}</h5>
            <p class="card-text"><strong>種類:</strong> ${item.category}</p>
            <p class="card-text"><strong>原始價格:</strong> ${item.origin_price}</p>
            <p class="card-text"><strong>售價:</strong> ${item.price}</p>
            <p class="card-text"><strong>描述:</strong> ${item.description}</p>
            <button type="button" class="btn btn-primary">加入購物車</button>
          </div>
        </div>
      </div>`
      });
      productList.innerHTML = str;
    }).catch(error => {
      console.log(error);
    })
};

getProducts();