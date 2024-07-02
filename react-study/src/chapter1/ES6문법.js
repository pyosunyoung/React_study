////////////////////////////////////////////////////////////////////////////
// let name = "noona"
// let age = 17

// let person1={
//   name : name,
//   age : age
// }

// let person2={
//   name, // 키와 value의 값이 같다면 이렇게 줄여서 쓸 수 있다.
//   age
// }
// console.log(person1) // person1과 person2의 값은 같다.
// console.log(person2) // 문법
/////////////////////////////////////////////////////////////
//구조분해?
// let person3 = {
//   name : "noona",
//   age : 20
// }
// let name = person3.name
// let age = person3['age']
// let {name, age} = person3 // 이 한문장이 위 두문장의 의미와 같다.
// console.log(name, age) // noona, age 출력

// let array = [1,2,3,4]
// let [a,b, ...rest] = array
// console.log(a,b) // 1 2 출력
// console.log(rest) // 3 4 출력 , 위에서 안가져온 나머지 값 출력
////////////////////////////////////////////////////////////////////////
//spread
// let person4 = {name:"noona", age:12}

// let person2 = {...person4} // 객체 복사
// let person3 = person4 // 이렇게 그냥 객체 복사하면, 객체의 주소값만 복사함
// // 즉 객체는 하나이고 그 객체를 참조하는 변수가 두개?
// console.log(person2) // person4 객체 복사 완료, 실제로 객체가 하나 더 생성되어진것
// console.log(person3) // 똑같이 복사되었다? 이건 그냥 person4의 객체가 두개인 느낌?
// //person3는 4를 단지 참조하는 것
// console.log(person4===person2) // false 객체가 서로 다름
// console.log(person4===person3) // true 하나의 객체를 둘이서 바라보고 있음 true
// let person2 = {...person4, address:"incheon"} // 이렇게 address처럼 뭘 추가해서 값을 줄 수도 있다

// let person2 = {...person4, name:"pyosunyoung"}// 이렇게 복사하면서 해당 name또한 임의로 바꿀 수 있다.

// let a = [1,2]
// let b = [...a, 3]
// console.log(b) // [1,2,3] 출력

// let c = [...a, ...b]
// console.log(c) // [1,2,1,2,3] 출력
/////////////////////////////////////////////////////////////////////////////////////////
//삼항연산자
let person = {name:"noona", age:17}

if(person) {
  console.log(person.name) // noona
} else {
  console.log("there is no person") // person이 null이면 이거 출력
}

console.log(person ? person.name : "there is no person"); //위에 if문이랑 동작 동일

