let div = document.querySelector("div");
// console.log(onmousemove(div.innerText='how are you?') )
// console.log(onmousemove(div.style.backgroundColor='red'))
// onmousemove = (div) => {
//     div.innerText='how are you?'
//     // div.style.backgroundColor="red"
// };

div.onmouseover=()=>{
    div.innerText='how are you?'
    div.style.backgroundColor="red"
    
}