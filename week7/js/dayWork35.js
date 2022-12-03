let answer = {};
let url = "https://raw.githubusercontent.com/hexschool/js-traninging-week6API/main/data.json";
axios.get(url)
  .then(function (response) {
    let total = {};
    let data = response.data;

    data.forEach(function (item, i) {
      if (total[item.jsGroup] === undefined) {
        total[item.jsGroup] = 1;
      } else {
        total[item.jsGroup] += 1;
      }
    });

    let keyName = Object.keys(total);
    keyName.forEach(function (item) {
      if (item !== "未分組") {
        answer[`第 ${item} 組人數`] = total[item];
      } else {
        answer[`${item}人數`] = total[item];
      }
    });
    console.log(answer);
  });