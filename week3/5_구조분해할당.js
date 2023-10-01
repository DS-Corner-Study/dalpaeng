let arr=[1,2,3];
let [one,two,three]=arr;

console.log(one,two,three);

//함수 객체 구조분해할당
function func({name:n,age:a,location:l}){
    console.log(n,a,l);
}

let person={
    name:"da",
    age:20,
    location:"서울"
};

func(person);