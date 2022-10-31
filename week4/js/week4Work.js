bmiHistoryData = [];

const bmiStatesData = {
  "overThin": {
    "state": "過輕",
    "color": "藍色"
  },
  "normal": {
    "state": "正常",
    "color": "紅色"
  },
  "overWeight": {
    "state": "過重",
    "color": "澄色"
  },
  "mildFat": {
    "state": "輕度肥胖",
    "color": "黃色"
  },
  "moderateFat": {
    "state": "中度肥胖",
    "color": "黑色"
  },
  "severeFat": {
    "state": "重度肥胖",
    "color": "綠色"
  },
}

const printBmi = (height, weight) => {
  let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
  let state;

  if (bmi == "NaN" || bmi < 0) {
    console.log(`您的數值輸入錯誤，請重新輸入`);
    return;
  } else if (bmi < 18.5) {
    state = 'overThin'
  } else if (18.5 <= bmi && bmi < 24) {
    state = 'normal'
  } else if (24 <= bmi && bmi < 27) {
    state = 'overWeight'
  } else if (27 <= bmi && bmi < 30) {
    state = 'mildFat'
  } else if (30 <= bmi && bmi < 35) {
    state = 'moderateFat'
  } else {
    state = 'severeFat'
  }
  bmiHistoryData.push({ bmi, state });
  console.log(`您的體重${bmiStatesData[state].state}，健康指數為${bmiStatesData[state].color}`);
}

console.log(bmiHistoryData);
const showHistoryData = () => {
  let state = bmiHistoryData[bmiHistoryData.length - 1].state;
  console.log(`您總共計算 ${bmiHistoryData.length} 次 BMI 紀錄，最後一次 BMI 指數為 ${bmiHistoryData[bmiHistoryData.length-1].bmi}，體重${bmiStatesData[state].state}！健康指數為${bmiStatesData[state].color}！`);
};

printBmi(178, 20);
printBmi(178, 70);
printBmi(178, 85);
showHistoryData()

// printBmi(178, 20);
// printBmi(178, 70);
// printBmi(178, 85);
// printBmi(178, 90);
// printBmi(178, 110); 
// printBmi(178, 130);
// printBmi("身高", "體重");

// bmi < 18.5
// 18.5 <= bmi && bmi < 24
// 24 <= bmi && bmi < 27
// 27 <= bmi && bmi < 30
// 30 <= bmi && bmi < 35
// bmi >= 35

// 體重過輕
// 正常範圍
// 過重
// 輕度肥胖
// 中度肥胖
// 重度肥胖
// 您的數值輸入錯誤，請重新輸入

// 您的體重過輕，健康指數為藍色

// bmiHistoryData
// showHistoryData()
// 您總共計算 3 次 BMI 紀錄，最後一次 BMI 指數為 26.83，體重過重！健康指數為澄色！