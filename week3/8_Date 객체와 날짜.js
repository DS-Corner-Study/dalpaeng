//Date 객체 생성
let date =new Date();
console.log(date);

//협정 세계시(UTC) : 국제 표준 시간
//타임스탬프 날짜 생성
let date2 =new Date(2000,9,10);
let timeStamp=date.getTime();
console.log(timeStamp);

let dateClone=new Date(timeStamp);
console.log(dateClone);

console.log(date2.getFullYear());
console.log(date2.getMonth());
console.log(date2.getDate());
console.log(date2.getDay()); //요일반환 0:일 6:토
console.log(date2.getHours());
console.log(date2.getMinutes());
console.log(date2.getSeconds());
console.log(date2.getMilliseconds());

date.setMonth(10);

//Date 객체 출력
//toString : 현재 저장된 시간 문자열로 반환
const today = new Date(2000, 9, 10, 22);

console.log(today.toString()); // Tue Oct 10 2000 22:00:00 GMT+0900 (한국 표준시)
//toDateStirng : 날짜만 출력
console.log(today.toDateString()); // Tue Oct 10 2000
//현지화된
console.log(today.toLocaleString()); // 2000. 10. 10. 오후 10:00:00
console.log(today.toLocaleDateString()); // 2000. 10. 10.

//응용 : n월씩 이동하는 기능
function moveMonth(date, moveMonth) { // ①
    const curTimestamp = date.getTime(); // ②
    const curMonth = date.getMonth(); // ③
  
    const resDate = new Date(curTimestamp); // ④
    resDate.setMonth(curMonth + moveMonth); //⑤
  
    return resDate;
  }
  
  const dateA = new Date("2000-10-10");
  console.log("A: ", dateA); // A : Tue Oct 10 2000 09:00:00 GMT+0900 (한국 표준시)
  
  const dateB = moveMonth(dateA, 1);
  console.log("B: ", dateB); // B : Fri Nov 10 2000 09:00:00 GMT+0900 (한국 표준시)
  
  const dateC = moveMonth(dateA, -1);
  console.log("C: ", dateC); // C : Sun Sep 10 2000 09:00:00 GMT+0900 (한국 표준시)