let timeseriesChart = c3.generate({
  bindto: "#timeseriesChart", // HTML 元素綁定
  data: {
    x: "date", // x 軸綁到陣列第一個有 'date' 字串
    columns: [
      [
        "date",
        "2021-1-15",
        "2021-1-16",
        "2021-1-17",
        "2021-1-18",
        "2021-1-19",
        "2021-1-20"
      ],
      ["大翰", 60, 50, 80, 90, 67, 80],
      ["小寶", 90, 70, 50, 68, 80, 90]
    ] // 資料存放
  },
  axis: {
    // 座標軸
    x: {
      type: "timeseries",
      tick: {
        format: "%Y-%m-%d"
      }
    }
  }
});
//
let donutChart = c3.generate({
  bindto: "#donutChart", // HTML 元素綁定
  data: {
    columns: [
      ["鬼屋", 10],
      ["女僕咖啡廳", 20],
      ["童話世界", 5]
    ], // 資料存放
    type: "donut", // 圖表種類
    colors: {
      鬼屋: "#E68618",
      女僕咖啡廳: "#F280CA",
      童話世界: "#26BFC7"
    }
  },
  donut: {
    title: "園遊會主題票選"
  }
});