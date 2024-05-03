//lecture-1
// console.log("hello world!1");

//  const student={
//  fullName : "anushree mehta",
//  age : 20,

//  };
//  console.log(student["age"]);

//  //practice question 1

//  const product={
//     title:"parker jotter standard jt ball pen",
//     offer:"deal of the day",
//     price:270,
//     off: "5%off"
//  }

//lecture-2-arithematic operators and conditional statements
// let a=2;
// let b=1;
// console.log("a+b=",a+b);

// let age=1;
// if(age==18){
//    console.log("you are elligible to vote!!");

// } else{
//    console.log("you are not elligible to vote!!");
// }

// let a=5;
// if(a%2==0){
//    console.log("even number ");
// }
// else{
//    console.log("odd number");
// }
// let a=5;
// (a%2==0)? even:oddnumber  ;

// let age=16;

//   let result = age>=18? "adult":"not-adult";
//  console.log(result);

// let number = prompt("enter a number:");
// console.log(number);

// if(number%5==0){
//    console.log("multiple of 5");
// } else{
//    console.log("not a multiple of 5");
// }

// let percentage=prompt("enter your percentage ");
// if(90<=percentage && percentage<=100){
//    console.log("grade-a");
// }
// else if (70<=percentage && percentage<=89){
//    console.log("grade-b");
// }
// else if (60<=percentage && percentage<=69){
//    console.log("grade-c");
// }
// else if (50<=percentage && percentage<=59){
//    console.log("grade-d");
// }
// else if (0<=percentage && percentage<=49){
//    console.log("grade-e");
// }

// let n= prompt(console.log("enter the value of n"));
// let sum =0;
// for(let i=1;i<=n;i++){
//    sum=sum+i;

// }
// console.log(sum);

// let i=1;
// while(i<=5){
//    console.log(i);
//    i++;
// }

// let str="liya";
// for(let i of str){
//    console.log("i =", i);
// }

// let student ={
//    name:"anushree",
//    age: 18,
//    cgpa:9.25,
//    ispass:  true
// };
// for(let key in student){
//    console.log("key =", key, "value = ", student[key]);
// }

//even numbers from 0 to 100
// let n=100;
// for(let i=1;i<=n;i++){
//    if(i%2==0){
//       console.log(i);
//    }

// }

// let gameNumber = "25";
// let usernum = prompt("guess the number");
// console.log(usernum);

// while (gameNumber !== usernum) {
//    usernum = prompt("guess the number again");
   
// }
// console.log("congratulation you won!!");


// let str1= "anushree";
//  console.log(str1.toUpperCase());
//  console.log(str1.toLowerCase());
//  console.log(str1.trim());

// let str1="liya";
// let str2="mehta";
// console.log(str1.concat(str2));
// console.log(str1.replace("iy","123"));

// let fullName = prompt("enter your full name");
// console.log(fullName);

// str1="@";
// str2= fullName.length;

// let newUserName = str1+ fullName+ str2;

// console.log(newUserName);

// let marks=[98, 97, 54, 32, 25];
// console.log(marks);
// console.log(marks[4]);

// let heroes=["spiderman","thor","hulk","shaktiman","caption america"];
// for(let i=0; i<=heroes.length; i++){
//     console.log(heroes[i]);
// }

// let marks=[85, 97,44, 37,76, 60];
//  let sum=0;
// for(let i in marks){
//     sum = sum+marks[i];
// }

//  let average = sum/6;
// console.log(average);

// let companies =["bloomburg","microsoft","uber","IBM","google","netflix"];
// // remove first company from the array
//  companies.shift();
//  console.log(companies);

// //  remove uber and add ola 
//  companies.splice(2,1,"ola");
//  console.log(companies);

// // add amazon at the end

// companies.push("amazon");
// console.log(companies);

//functions 

// function myfunction(){
//     console.log("hii everyone i am anushree mehta.");
//     console.log("i am learning Js");
// }


// myfunction();

// function--> 2 values , sum 

// function sum (a, b){
//    console.log(a+b);
   
// }
  
//  const sum= (a,b)=>{
//     return a+b;
// }

// const mul=(a,b)=>{
//     return a*b;
// }

// function vowel(str){
//     let count =0;
//       for(let char of str){
//         if(char==="a"||char=== "e"||char==="i"||char==="o"||char==="u"){
//           count =count+1;
//         }
//       }
//     console.log(count);
// }

// vowel("apna college");

// forEach functions 


arr.forEach((val)=>{
  console.log(val);
})

arr.forEach((square) => {
  console.log(square*square);
  
});
let nums=[67,52,39];

nums.maps(val=>{
  console.log(val*val);
});

//filter

let number=[2,5,40,9,3,10];

let checkEven= number.filter(val=>{
  return val%2===0;
})

console.log(checkEven);


//reduce 
// let arr=[1,2,3,4];

// let ans= arr.reduce((res,val)=>{
//  return res+val;
// })

console.log(ans);

//practice questions 

let marks=[20,60,90,98,66,93,91];

 let ans= marks.filter(val=>{
   return val>=90;
})
console.log(ans);

let n=prompt("enter a number");
let arr=[];

for(let i=1;i<=n;i++){
  arr[i-1]=i;
   
}
console.log(arr);
let sum = arr.reduce((previous,current)=>{
  return previous+current;
})

console.log("sum of the elements of array is ", sum);

let average = arr.reduce((previous , current)=>{
  return (previous +current)/ arr.length;
})

console.log(average);