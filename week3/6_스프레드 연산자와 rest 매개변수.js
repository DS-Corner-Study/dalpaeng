//'...' 스프레드 연산자 전개연산자 =>객체의 값 개별요소로 분리
let objA={
    a:1,
    b:2
};

let objB={
    ...objA,
    c:3,
    d:4
};
console.log(objB);

//rest 매개변수 '...' =>개별 요소를 배열로 묶음
function func(param, ...rest){ //rest 매개변수는 마지막에 작성
    console.log(param);
    console.log(rest);
}

func(1,2,3,4);