//스코프: 변수나 함수에 접근하거나 호출할 수 있는 범위
//전역스코프, 지역스코프
let a=1;
function foo(){
    console.log(a);
}

function bar(){
    console.log(a);
}

foo(); bar();
console.log(a);

//블록, 함수 스코프(var 키워드)
if(true){
    var c=1; //전역스코프
}

console.log(c);
//함수 내부 선언 변수만 지역 스코프 가짐
function foo(){
    var b=1; //지역스코프
}
//console.log(b); //오류