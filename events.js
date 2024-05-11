let div = document.querySelector("div");
// console.log(onmousemove(div.innerText='how are you?') )
// console.log(onmousemove(div.style.backgroundColor='red'))
// onmousemove = (div) => {
//     div.innerText='how are you?'
//     // div.style.backgroundColor="red"
// };

// div.onmouseover=()=>{
//     div.innerText='how are you?'
//     div.style.backgroundColor="red"

// }

// div.addEventListener("mouseover", ()=>{
//     div.innerText="i am anushree mehta"
//     div.style.backgroundColor="pink"
// })

let toggle = document.querySelector("#toggle");
let body = document.querySelector("body");
// toggle.addEventListener("click",()=>{
//     body.style.backgroundColor ="black"
// })

let currmode = "light";
toggle.addEventListener("click", () => {
    if(currmode==="light"){
        currmode="dark"
        body.style.backgroundColor = "black";
    }
    else{
        currmode="light"
        body.style.backgroundColor = "white";
    }
 
});
