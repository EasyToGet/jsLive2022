/*
題目一
請在 obj 上新增以下內容

1. 設定屬性名為 "myName"，並賦予值為 "Tom"
2. 設定屬性名為 "age"，並賦予值為 18
3. 設定屬性名為 "pets"，並賦予值為 ["John", "Mike"]
4. 設定屬性名為 "isWakeUp"，並賦予值為 false
*/
/***   作業 1 填答區開始   **/

let obj = {};
obj.myName = "Tom";
obj.age = 18;
obj.pets = ["John", "Mike"];
obj.isWakeUp = false;

console.log(obj);
/***   作業 1 填答區結束   **/


/*
題目二
請新增一行 Code，在 colors 用 push 語法新增一筆顏色資料，名稱為 black
請新增一行 Code，寫 console.log 來印出陣列總長度筆數
*/
/***   作業 2 填答區開始   **/

let colors = ["red", "black", "yellow"];

colors.push("black");

console.log(colors.length);

/***   作業 2 填答區結束   **/


/*
題目三
母親今年的狀態需要更新，還請協助她修改物件資料
流程一：母親多一歲了，幫她累加一歲在 age 屬性對應的 value 上
流程二：母親多了一位小孩，幫他在 sons 屬性新增一位 "John"
請新增一行 Code，寫 console.log 來印出 motherStatus
*/
/***   作業 3 填答區開始   **/

let motherStatus = [
  {
    name: "mary",
    age: 31,
    sons: ["Tom", "Bob"]
  }
];

motherStatus[0].age++;
motherStatus[0].sons.push("John");

console.log(motherStatus);

/***   作業 3 填答區結束   **/


/*
題目四
小杰獲得交通部高雄市自行車資料，並且把前三筆物件資料放入自己定義的 bikeStationData 物件裡
資料一：小杰想取出第一筆的站點名稱，也就是 "YouBike2.0_捷運美麗島站(10號出口)"
資料二：小杰想取出第三筆的 "可容納之自行車總數"，屬性名稱為 "BikesCapacity"

舉例取出第一筆的 StationUID 的值：bikeStationData.[0].StationUID
*/
/***   作業 4 填答區開始   **/

const bikeStationData = {
  data: [
    {
      "StationUID": "KHH501201001",
      "StationID": "501201001",
      "AuthorityID": "KHH",
      "StationName": {
        "Zh_tw": "YouBike2.0_捷運美麗島站(10號出口)",
        "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 10)"
      },
      "StationPosition": {
        "PositionLon": 120.30212,
        "PositionLat": 22.63213,
        "GeoHash": "wsj8c813d"
      },
      "StationAddress": {
        "Zh_tw": "中山一路168號前方",
        "En": "No.168, Zhongshan 1st. Rd."
      },
      "BikesCapacity": 23,
      "ServiceType": 2,
      "SrcUpdateTime": "2022-10-20T23:14:04+08:00",
      "UpdateTime": "2022-10-20T23:49:30+08:00"
    },
    {
      "StationUID": "KHH501201002",
      "StationID": "501201002",
      "AuthorityID": "KHH",
      "StationName": {
        "Zh_tw": "YouBike2.0_捷運美麗島站(2號出口)",
        "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 2)"
      },
      "StationPosition": {
        "PositionLon": 120.30175,
        "PositionLat": 22.63035,
        "GeoHash": "wsj89x9p3"
      },
      "StationAddress": {
        "Zh_tw": "中山一路83號旁停車場前方",
        "En": "No.83, Zhongshan 1st. Rd."
      },
      "BikesCapacity": 40,
      "ServiceType": 2,
      "SrcUpdateTime": "2022-10-20T23:07:12+08:00",
      "UpdateTime": "2022-10-20T23:49:30+08:00"
    },
    {
      "StationUID": "KHH501201003",
      "StationID": "501201003",
      "AuthorityID": "KHH",
      "StationName": {
        "Zh_tw": "YouBike2.0_捷運美麗島站(5號出口)",
        "En": "YouBike2.0_KRT Formosa Boulevard Sta. (Exit 5)"
      },
      "StationPosition": {
        "PositionLon": 120.3031,
        "PositionLat": 22.63118,
        "GeoHash": "wsj89xfh1"
      },
      "StationAddress": {
        "Zh_tw": "中正三路179號前方",
        "En": "No.179, Zhongzheng 3rd. Rd"
      },
      "BikesCapacity": 23,
      "ServiceType": 2,
      "SrcUpdateTime": "2022-10-20T23:06:13+08:00",
      "UpdateTime": "2022-10-20T23:49:30+08:00"
    },
  ]
};

let StationName = bikeStationData.data[0].StationName.Zh_tw;
let bikeNum = bikeStationData.data[2].BikesCapacity;
console.log("第一筆站名:", StationName);
console.log("第三筆可容納之自行車總數:", bikeNum);

/***   作業 4 填答區結束   **/


/*
題目五
宣告變數，變數名稱請符合描述情境
依照描述賦予變數陣列與物件的屬性和值

描述一：是一個家庭合照
描述二：母親姓名為 Jane
描述三：父親姓名為 Bill
描述四：女兒姓名為 Rosa
描述五：兒子姓名為 Howard
描述六：有養兩隻狗，名字叫做 Bobo, Koko
*/
/***   作業 5 填答區開始   **/

let family = {
  photo: ["familyPhoto.jpg"],
  member: {
    motherName: "Jane",
    fatherName: "Bill",
    daughterName: "Rosa",
    sonName: "Howard"
  },
  dogs: ["Bobo", "Koko"]
};

console.log(family);

/***   作業 5 填答區結束   **/


/*
題目六
宣告變數，變數名稱請符合描述情境
依照描述賦予變數陣列與物件的屬性和值

描述一：販售版寫了一棟別墅的販售資訊
描述二：內容是有一個建案，名稱叫做「六角大別墅」，地點在「高雄市」
描述三：因為太豪華，所以這個建案只有「兩戶」

第一戶資訊：
價格：2 億 8 千萬
坪數：900 坪
是否有游泳池：無
是否有地下室：有
樓數：5樓
衛浴：3衛
專屬管家：無
是否已被賣掉：有

第二戶資訊：
價格：3 億 2 千萬
坪數：1200 坪
是否有游泳池：有
是否有地下室：有
樓數：7樓
衛浴：4衛
專屬管家：有
是否已被賣掉：無
*/
/***   作業 6 填答區開始   **/

let houseData = {
  houseName: "六角大別墅",
  location: "高雄市",
  household: [
    {
      price: 280000000,
      pingNumber: 900,
      isSwimmingPool: false,
      isBasement: true,
      floors: 5,
      bathrooms: 3,
      isHousekeeper: false,
      isSell: true
    },
    {
      price: 320000000,
      pingNumber: 1200,
      isSwimmingPool: true,
      isBasement: true,
      floors: 7,
      bathrooms: 4,
      isHousekeeper: true,
      isSell: false
    },
  ]
}
console.log(houseData);
/***   作業 6 填答區結束   **/


/*
題目七
下方為台灣一間旅館的 JSON 資料
有一個客戶，在下週二平常日時段，將所有房型都訂了一間房
請透過程式去計算他一共花了多少錢
*/
/***   作業 7 填答區開始   **/

let roomDetail = {
  "success": true,
  "items": [
    {
      "id": "3Elqe8kfMxdZv5xFLV4OUeN6jhmxIvQSTyj4eTgIowfIRvF4rerA2Nuegzc2Rgwu",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1551776235-dde6d482980b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 1380,
      "holidayPrice": 1500,
      "name": "Single Room"
    },
    {
      "id": "g0mYhN6ignMz4VYW7eiWsXZN8DHolHzH8LuVmM6hq5h6BrrqrLMw4aJgHv7LZ3RQ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1564182379166-8fcfdda80151?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80",
      "normalDayPrice": 1899,
      "holidayPrice": 2000,
      "name": "Deluxe Single Room"
    },
    {
      "id": "RA8NhExaXXZB7EODVALSDvFFQzj1JP0a4C1pwZ1acPaieRBwiWoCb0FE0KUbXaxg",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1526913621366-a4583840d736?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 2460,
      "holidayPrice": 2500,
      "name": "Double Room"
    },
    {
      "id": "kICyWhZ5XsfI4n1d4gBOsDjIyIxNozwgmxYKyZpzi5pjLcU2Nl4RhiGrn6zaPuTJ",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1519710889408-a67e1c7e0452?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 2888,
      "holidayPrice": 3000,
      "name": "Deluxe Double Room"
    },
    {
      "id": "VCxbQq1vLeUtxW781k9Dlq3mHBRNl5YP19Lhq8k5TbIr2BeH58gRpnNKGoEgkysz",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1558976825-6b1b03a03719?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "normalDayPrice": 3350,
      "holidayPrice": 3500,
      "name": "Twin Room"
    },
    {
      "id": "YovqNpFDaal598jbpd1A14gXwDE6gekTqJgxOAGcq78B8YnP7claymQVFy2GTwgb",
      "imageUrl": "https:\/\/images.unsplash.com\/photo-1552902019-ebcd97aa9aa0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80",
      "normalDayPrice": 3899,
      "holidayPrice": 4000,
      "name": "Deluxe Twin Room"
    }
  ]
}

// let priceTotal = roomDetail.items[0].normalDayPrice + roomDetail.items[1].normalDayPrice + roomDetail.items[2].normalDayPrice + roomDetail.items[3].normalDayPrice + roomDetail.items[4].normalDayPrice + roomDetail.items[5].normalDayPrice

let costTotal = 0

for (let i = 0; i < roomDetail.items.length; i++) {
  costTotal += roomDetail.items[i].normalDayPrice;
};

console.log(costTotal);

/***   作業 7 填答區結束   **/


/*
題目八
老闆想要幫公司兩人都加薪到 40,000 元
請透過以下資訊修改，幫老闆作加薪動作
*/
/***   作業 8 填答區開始   **/

let salaryData = {
  company: 'circle center',
  bossName: 'casper',
  staff: [
    {
      name: "Bob",
      salary: 32000
    },
    {
      name: "Jack",
      salary: 28000
    },
  ]
}
// 第一位員工加薪邏輯
if (salaryData.staff[0].salary < 40000) {
  salaryData.staff[0].salary += 40000 - salaryData.staff[0].salary;
}
console.log("Bob 加薪到:", salaryData.staff[0].salary);

if (salaryData.staff[1].salary < 40000) {
  salaryData.staff[1].salary += 40000 - salaryData.staff[1].salary;
}
console.log("Jack 加薪到:", salaryData.staff[1].salary);

/***   作業 8 填答區結束   **/


/*
題目九
請根據以上三個 JSON 格式 API，選擇其中一個用文字說明他的資料集內容
例：最外層是一個陣列，陣列內包含很多個物件，物件內有...屬性，值為...。
*/
/***   作業 9 填答區開始   **/


/*
輕軌車站出入口基本資料:

最外層是一個物件，物件內包含
屬性: contentType，值: null值
屬性: isImage，值: 布林值
屬性: id，值:字串
屬性: message，值:null值
屬性: success，值:布林值
屬性: data 是個陣列，有14個物件
其中物件內包含
屬性: seq，值: 數字
屬性: 站序，值: 字串
屬性: 車站代碼，值: 字串
屬性: 車站中文站名，值: 字串
屬性: 車站英文站名，值: 字串
屬性: 站位地點，值: 字串
屬性: 備註，值: 字串
*/

/***   作業 9 填答區結束   **/


/*
題目十：物件包物件的格式練習

宣告變數，變數名稱請符合描述情境
依照描述賦予變數值

描述一：這是一個 BMI 的物件資料，此物件包含「狀態」及「顏色」屬性
描述二：狀態與顏色屬性分別顯示的值為：
        狀態為過輕，顏色為藍色
        狀態為正常，顏色為紅色
        狀態為過重，顏色為澄色
        狀態為輕度肥胖，顏色為黃色
        狀態為中度肥胖，顏色為黑色
        狀態為重度肥胖，顏色為綠色
*/
/***   作業 10 填答區開始   **/
const bmiData = {
  overThin: {
    status: '過輕',
    color: '藍色'
  },
  normal: {
    status: '正常',
    color: '紅色'
  },
  overweight: {
    status: '過重',
    color: '澄色'
  },
  mildObesity: {
    status: '輕度肥胖',
    color: '黃色'
  },
  moderateObesity: {
    status: '中度肥胖',
    color: '黑色'
  },
  severeObesity: {
    status: '重度肥胖',
    color: '綠色'
  },
}

/***   作業 10 填答區結束   **/

