/*
  題目:
  請依照下方程式碼中註解的要求完成這段程式碼（補上 `...` 的部分）：
 */

let productInfo = {
  price: 1000,  // 購買價格
  coupons: [
    {
      due_date: "2022-10-15",  // 到期日
      id: 123,
      is_enabled: 0,           // 是否啟用
      percent: 0.7,            // 折扣比例
      title: "特惠七折",        // coupon 標題
    },
    {
      due_date: "2022-08-08",  // 到期日
      id: 456,
      is_enabled: 1,           // 是否啟用
      percent: 0.5,            // 折扣比例
      title: "特惠五折",        // coupon 標題
    }
  ]
};

/* 請取得 coupons 陣列中 id 為 456 的 percent，並賦值給 discountPercent */
let discountPercent = productInfo.coupons[1].percent;

/* 請取得 coupons 陣列中 id 為 456 的 title，並賦值給 title */
let title = productInfo.coupons[1].title;

/* 請修改 coupons 陣列中 id 為 456 的 到期日，將其延後兩日（至 2022-08-10）*/
productInfo.coupons[1].due_date = "2022-08-10";

/* 請取得 coupons 陣列中 id 為 456 的 is_enabled，並填入以下 if 判斷式中; 
如果判斷為 true，則對「購買價格」進行折扣 */
if (productInfo.coupons[1].is_enabled) {
  /* 程式碼撰寫處，對「購買價格」進行折扣 */
  productInfo.price *= discountPercent
  console.log(`優惠券「${title}」已啟用`);
} else {
  console.log("優惠券未啟用");
}
console.log(`購買價格 ${productInfo.price}`);