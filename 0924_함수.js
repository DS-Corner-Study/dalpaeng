//호이스팅: 선언코드가 위에있는 것처럼 동작
func();

function func(){
    console.log("hello");
}

//함수표현식(호이스팅 되지 않음)
let greeting=function(){
    console.log("hello");
}
greeting();

//화살표 함수
//let funcA=function(매개변수) => 반환값;