/*
題目: 試著用箭頭函式寫寫看 forEach 吧！

  let pokemon = ['呆呆獸', '沼王', '噴火龍', '雷丘'];
  pokemon.forEach(function (item, index) {
    console.log(`${index + 1} : ${item}`);
  })

*/
let pokemon = ['呆呆獸', '沼王', '噴火龍', '雷丘'];
pokemon.forEach((item, index) => {
  console.log(`${index + 1} : ${item}`);
})
