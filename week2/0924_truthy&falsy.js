// 조건식에서 거짓으로 평가되는 falsy한 값:
// undifined, null, 0n,0,-0,Nan,""(빈문자열),백틱(``)
//falsy한 값 제외: truthy 한 값

let varA;
if(varA){
    console.log("값이 있음");
} else{
    console.log("값이 없음");
}

/*단락 평가 : 논리연산에서 첫 번째 피연산자의 값만으로
 해당 싣의 결과가 확실할 때, 두번째 값은 평가하지 않는 것
 지름길 평가*/

 //AND 단락평가
 function calcA(){
    console.log("a");
    return false;
 }
 function calcB(){   // 호출되지 않음
    console.log("b");
    return true;
 }
 console.log(calcA()&&calcB());

 //오류예방
/* function getName(person){
    return person &&person.name;
 }

 let person={name:"이정환"};
 let name1=getName(undifined);

 let name2=getName(null);
 let name3=getName(person); */

 //OR 단락평가

 //length, name(함수이름) 프로퍼티

 //참조에 의한 비교
 let per={
    name:"이정환"
 };
 let man={
    name:"이정환"
 };
 console.log(per===man); //false : 참조값이 다름