//  let x = 1;

//  console.log(x)

//  let a = [56,76,89,2,8]

//  console.log(a)
//  console.log(a.length)

//  a.push(100)
//  console.log(a);

//  console.log(a[2])

//  let b = ["car", 'truck', "bike"]
//  console.log(b)

//  console.log(b[1]);

// for (let i = 0; i<b.length; i++) {
//     console.log('foo', i, b[i]);
// }

let rectangle = {width: 25, height: 50, area: ()=> 25*50}

let person1 = {name:'jeff', age: 46}
let person2 = {name: 'ava', age: 18}
let person3 = {name: "Jose", age: 15}

let people=[person1, person2, person3]

console.log((person1.age + person2.age + person3.age) / 3)

let sum = 0 
for (let i=0; i<people.length; i++) {
    sum += people[1].age;
}

console.log( sum / people.length);