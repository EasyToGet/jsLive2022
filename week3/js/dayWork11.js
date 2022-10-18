//請運用課堂中教到的陣列相關知識，依照下方註解敘述，完成下方程式碼（補上 `...` 的部分）
let recipe = ['sugar', 'salt', 'flour', 'fruit'];

// 1. 請使用陣列方法取得 recipe 的長度，並使用 console.log 印出
console.log(recipe.length);

// 2. 請使用陣列取值方法取得結果為 'sugar' 的值，並使用 console.log 印出
console.log(recipe[0]);

// 3. 請使用陣列取值方法取得結果為 'fruit' 的值，並使用 console.log 印出
console.log(recipe[3]);

// 4. 請使用陣列方法替陣列 recipe 在最後新增一個值 'butter'
recipe.push('butter');

// 5. 請使用陣列方法刪除陣列 recipe 第 3 筆以後的資料（包含第 3 筆），最後印出整個陣列
recipe.splice(2, recipe.length-1);
console.log(recipe);