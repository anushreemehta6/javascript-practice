//  let append = document.querySelector("h2")
//  console.dir(append)

//  append.innerText ="hello javascript from apna college"

// let newbtn = document.createElement("button")
// newbtn.innerText="click me!!"
// console.log(newbtn)

// let div = document.querySelector("div")

// div.after(newbtn)

let newbtn = document.createElement("button");
newbtn.innerText="click me!!";

document.querySelector("body").prepend(newbtn);

newbtn.style.backgroundColor="red"
newbtn.style.color="white"


//q2

let para = document.querySelector("p")
para.classList
para.classList.add("newclass")