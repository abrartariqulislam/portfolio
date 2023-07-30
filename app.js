const menuBtn = document.querySelector(".inner_header nav .bars")
const menuBar = document.querySelector(".menuBar")



menuBtn.addEventListener("click" , () =>{
    menuBar.classList.toggle("menuBarDisplay")
})
const menuFaunc = () =>{
    menuBar.classList.remove("menuBarDisplay")
}


// const myFunc = () =>{
//     element.textContent = "Abrar Tariqul Islam"
//     element.classList.toggle("styleH1")
// }
// btn.onclick = myFunc