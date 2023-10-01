//특정 작업을 다른 작업과 관계없이 독립적으로 동작하게 만드는 것: 비동기

setTimeout(()=>{
    console.log("1번");
},100);
console.log("2번");

function orderCoffee(coffee, time) { 
    setTimeout(() => {
      console.log(`${coffee} 제조 완료`);
    }, time);
  }
  
  orderCoffee("달콤한 커피", 4000);
  orderCoffee("레몬 티", 2000);
  orderCoffee("시원한 커피", 3000);

//콜백 함수로 비동기 처리
function double(num, cb) {
    setTimeout(() => {
      const doubleNum = num * 2;
      cb(doubleNum); 
    }, 1000);
  }
  
  double(10, (res) => {  
    console.log(res);
  });
  
  console.log("마지막");

  //프로미스 객체 이용해 비동기 처리
  /*프로미스 3가지 상태
  대기상태: 작업을 아직 완료하지 않음
  성공 상태: 작업을 성공적으로 완료
  실패 상태: 작업이 모종의 이유로 실패*/
  /* 대기->성공: 해결
  대기->실패: 거부*/

  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      reject("실패");
    }, 500);
  });
  
  promise.then(function (res) {
    console.log(res);
  });
  
  promise.catch(function (err) {
    console.log(err);
  });
  
  // 실패