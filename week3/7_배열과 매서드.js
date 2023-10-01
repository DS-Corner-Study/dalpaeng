/*요소의 추가 및 삭제 메서드
push, pop, shift, unshift, slice, concat*/

//순회메서드 for Each

/*탐색 메서드
indexOf, includes, findIndex, find filter*/

/*변형 메서드
map, sort, join reduce*/

let food=["pizza","pasta","lemon"];
food.push("steak");
food.pop();
food.shift(); //배열의 맨 앞 요소 제거
food.unshift("pizza");//배열 맨 앞 요소 추가

console.log(food);

const sliced=arr.slice(0,2);

let arrA=[1,2];
let arrB=[3,4];
let arrC= arrA.concat(arrB);

//탐색
let arr=[1,3,5,7,1];
console.log(arr, indexOf(1)); //0
console.log(arr,indexOf(1,-1));//4
console.log(arr.includes(3));//true
//arr.findIndex(callback(item,index,array));
