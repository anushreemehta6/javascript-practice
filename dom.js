//  let append = document.querySelector("h2")
//  console.dir(append)

//  append.innerText ="hello javascript from apna college"

let newbtn = document.createElement("button")
newbtn.innerText="click me!!"
console.log(newbtn)

let div = document.querySelector("div")

div.after(newbtn)
