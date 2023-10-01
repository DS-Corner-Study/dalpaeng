//인덱스 이용한 순회
let arr=[1,2,3,4];
for(let idx=0;idx<4;idx++){
    console.log(arr[idx]);
}

let food=["라면","짜장","치킨"];
for(let i=0;i<food.length;i++){
    console.log(food[i]);
}

//for ...of문 이용
let food2=["라면","짜장","치킨"];
for(let item of food){
    console.log(item);
}

//Object.keys를 이용한 key 순회
let person={
    name: "다",
    age: 25,
    location: "서울"
};

const keyArr=Object.keys(person);

for(let key of keyArr){
    let value=person[key];
    console.log(key,value);
}
//Object.values 가능

//for...in문 이용한 순회
let per={
    name: "다",
    age: 25,
    location: "서울"
};

for(let key in per){
    const value=per[key];
    console.log(key, value);
}