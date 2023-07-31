const menuBtn = document.querySelector(".inner_header nav .bars")
const menuBar = document.querySelector(".menuBar")
const menuList = document.querySelectorAll(".menuBar li a")



menuBtn.addEventListener("click" , () =>{
    menuBar.classList.toggle("menuBarDisplay")
})
menuList.forEach( listItem => {
    listItem.addEventListener("click" , () =>{
        menuBar.classList.remove("menuBarDisplay")
    })
})


