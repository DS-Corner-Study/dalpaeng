//객체생성
let objA={}; //객체 리터럴 문법
let objB=new Object(); //객체 생성자 문법

//빈 객체가 아닌 데이터가 있는 객체 생성:프로퍼티
let person={
    name: "이정환",
    age: 25, //key: value
    age: 30, //키 중복: 마지막만 살아남음
    "like cat": true //복수 단어 따옴표
}

//프로퍼티 접근
const personName =person.name; //점 표기법
const personAge =person["age"]; //괄호 표기법

//프로퍼티 추가
person.gender="male";
//프로퍼티 수정
person.gender="female";
//프로퍼티 삭제
delete person.gender;

//in 연산자
let isNameExist="name" in person;
console.log(isNameExist);

//메서드
let cat={
    name: "nabi",
    sayHi: function(){
        console.log("안녕");
    }
};
cat.sayHi();
