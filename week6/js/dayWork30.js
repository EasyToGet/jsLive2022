/*
  題目:

  題目一：在使用 axios 串接 API 的時候，如果 HTTP 狀態碼顯示為 403，則代表有成功接收到資料，請問是正確還是錯誤？
  如果答案為錯誤，則狀態碼 403 代表什麼訊息，以及成功接收到資料的 HTTP 狀態碼應該為何？

  題目二：請問「用戶端錯誤」以及「伺服器端錯誤」的 HTTP 狀態碼各自位於哪個數字區間？可否各自舉一個例子說明？
*/

/*
  解答： 

  題目一: 錯誤，狀態碼 403 代表發生錯誤，表示用戶端沒有訪問權限。成功串接資料的狀態碼回應應該為 status 200。

  題目二: 「用戶端錯誤」的區間為 400–499，「伺服器端錯誤」的區間為 500–599
  舉例: 
  * 400 -「用戶端錯誤」，表示發送的語法無效，應該檢查程式碼。
  * 500 -「伺服器端錯誤」，表示伺服器端發生未知或無法處理的錯誤。
*/

