console.log("Hello Js!!");
let obj = {
  name: "anushree mehta",
  age: 19,
  birthday: "8th may 2005",
};
console.log(`the name of ${obj.name} is ${obj.age}`);

console.log(obj.birthday);

// let colour= prompt("enter a colour");
// console.log(colour);
// colour= "black"? console.log("the colour is black"): console.log("the colour is not black ")

// let color;
// let mode;
// mode = prompt("enter the mode")

// if(mode=="dark mode"){
//     color = "black"
//     console.log(color);
// }
// else{
//     color="white"
//     console.log(color);
// }

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let str = "anushree mehta ";

for (let val of str) {
  console.log(val);
}

let a = str.length;
console.log(a);

function myfunction(mes) {
  console.log(mes);
}

myfunction("welcome to apna college");

// function-> 2 numbers sum

// function sum(a,b){
//     let add= a+b;
//     console.log(add);
// }

// sum(5,6);

const sum = (a, b) => {
  let add = a + b;
  console.log(add);
};

sum(4, 4);

const mul = (a, b) => {
  let product = a * b;
  console.log(product);
};

mul(4, 2);

// create a function that takes strings as a argument and returns the vowels in the string

function countvowel(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "A" ||
      char === "E" ||
      char === "I" ||
      char === "O" ||
      char === "U"
    ) {
      count = count + 1;
    }
  }
  console.log(count);
}

countvowel("NITI");

let arr = [1, 2, 3, 4, 5];
arr.forEach((element) => {
  console.log(element * element);
});
