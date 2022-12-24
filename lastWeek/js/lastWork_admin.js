const api_path = 'edjslive2022';
const token = 'py1iXUPOEoc3btkpIEiJCH9jfbT2';

const orderList = document.querySelector('.js-orderList');
const discardAllBtn = document.querySelector('.discardAllBtn');

let orderData = [];

const config = {
  headers: {
    'Authorization': token,
  }
};

const init = () => {
  getOrderList();
};

//  取得訂單列表
const getOrderList = () => {
  axios.get(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`, config)
  .then(response => {
      orderData = response.data.orders;
      renderOrderList(orderData);
    }).catch(error => {
      console.log(error);
    })
};

//  渲染訂單列表
const renderOrderList = (orderData) => {
  let str = '';
  orderData.forEach(item => {
    //  組時間字串
    const timeStamp = new Date(item.createdAt * 1000);
    const orderTime = `${timeStamp.getFullYear()}/${timeStamp.getMonth() + 1}/${timeStamp.getDate()}`;

    //  組產品字串
    let productStr = '';
    item.products.forEach(productItem => {
      productStr += `<p>${productItem.title} x ${productItem.quantity}</p>`;
    });

    //  判斷訂單處理狀況
    let orderStatus = '';
    if (item.paid === true) {
      orderStatus = '已處理';
    } else {
      orderStatus = "未處理";
    };

    str += `<tr>
            <td>${item.createdAt}</td>
            <td>
              <p>${item.user.name}</p>
              <p>${item.user.tel}</p>
            </td>
            <td>${item.user.address}</td>
            <td>${item.user.email}</td>
            <td>
              ${productStr}
            </td>
            <td>${orderTime}</td>
            <td class="orderStatus">
              <a href="#" class="js-orderStatus" data-status="${item.paid}" data-id="${item.id}">${orderStatus}</a>
            </td>
            <td>
              <input type="button" class="delSingleOrder-Btn" data-id="${item.id}" value="刪除">
            </td>
          </tr>`
  });
  orderList.innerHTML = str;
  // renderC3(orderData);
  renderC3_v2(orderData);
};

//  執行處理訂單跟刪除訂單
orderList.addEventListener('click', (e) => {
  e.preventDefault();
  const targetClass = e.target.getAttribute("class");
  let id = e.target.getAttribute('data-id');
  //  判斷是否為刪除 class
  if (targetClass === 'delSingleOrder-Btn') {
    deleteOrderItem(id);
    return;
  };

  //  判斷是否為處理訂單 class
  if (targetClass === 'js-orderStatus') {
    let status = e.target.getAttribute('data-status');
    editOrderList(status, id);
    return;
  };
});

//  修改訂單狀態
const editOrderList = (status, id) => {
  let newStatus;
  if (status === 'true') {
    newStatus = false;
  } else {
    newStatus = true;
  }
  axios.put(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`,
    {
      data: {
        "id": id,
        "paid": newStatus
      }
    }, config)
    .then(response => {
      alert('修改訂單成功');
      getOrderList();
    }).catch(error => {
      console.log(error);
    })
};

//  刪除單筆訂單
const deleteOrderItem = (orderId) => {
  axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders/${orderId}`, config)
  .then(response => {
      alert('刪除單筆訂單成功');
      getOrderList();
    }).catch(error => {
      console.log(error);
    })
};

//  執行刪除全部訂單
discardAllBtn.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAllOrder();
});

//  刪除全部訂單
const deleteAllOrder = () => {
  axios.delete(`https://livejs-api.hexschool.io/api/livejs/v1/admin/${api_path}/orders`, config)
  .then(response => {
      alert('刪除全部訂單成功');
      getOrderList();
    }).catch(error => {
      console.log(error);
    })
};

// C3 圖表
const renderC3 = (orderData) => {
  let totalObj = {};
  orderData.forEach(item => {
    item.products.forEach(productItem => {
      if (totalObj[productItem.category] === undefined) {
        totalObj[productItem.category] = productItem.price * productItem.quantity;
      } else {
        totalObj[productItem.category] += productItem.price * productItem.quantity;
      }
    });
  });

  let categoryArr = Object.keys(totalObj);
  let newData = [];
  categoryArr.forEach(item => {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    newData.push(ary);
  });

  //  C3.js
  const chart = c3.generate({
    // bindto對應 html中的id為chart的標籤
    bindto: "#chart",
    data: {
      type: "pie",
      columns: newData
    },
    color: {
      pattern: ["#301E5F", "#5434A7", "#9D7FEA", "#DACBFF"]
    }
  });
};

// C3_v2 圖表
const renderC3_v2 = (orderData) => {
  // 資料蒐集
  let totalObj = {};
  orderData.forEach(item => {
    item.products.forEach(productItem => {
      if (totalObj[productItem.title] === undefined) {
        totalObj[productItem.title] = productItem.price * productItem.quantity;
      } else {
        totalObj[productItem.title] += productItem.price * productItem.quantity;
      }
    });
  });

  //  拉出資料關聯
  let originAry = Object.keys(totalObj);
  // 透過 originAry 整理成 C3 格式
  let rankSortAry = [];
  originAry.forEach(item => {
    let ary = [];
    ary.push(item);
    ary.push(totalObj[item]);
    rankSortAry.push(ary);
  });

  // sort 排序
  rankSortAry.sort((a, b) => {
    return b[1] - a[1];
  });

  // 如果筆數超過4筆以上，就整合為其他
  if (rankSortAry.length > 3) {
    let otherTotal = 0;
    rankSortAry.forEach((item, index) => {
      if (index > 2) {
        otherTotal += rankSortAry[index][1];
      };
    });
    rankSortAry.splice(3, rankSortAry.length - 1);
    rankSortAry.push(["其他", otherTotal]);
  };

  //  C3.js
  const chart = c3.generate({
    // bindto對應 html中的id為chart的標籤
    bindto: "#chart",
    data: {
      type: "pie",
      columns: rankSortAry
    },
    color: {
      pattern: ["#301E5F", "#5434A7", "#9D7FEA", "#DACBFF"]
    }
  });
};

init();