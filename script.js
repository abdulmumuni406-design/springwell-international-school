const menuItems = document.querySelector(".menu-items")
const menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener("click", ()=> {
    menuItems.classList.toggle("active")
})