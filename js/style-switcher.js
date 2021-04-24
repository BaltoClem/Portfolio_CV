
/*-------------------------------------------- Toggle Style Switcher -------------------------------------------------*/

const styleSwitcherToggler = document.querySelector(".style-switcher-toggler");
styleSwitcherToggler.addEventListener("click", () =>{
    document.querySelector(".style-switcher").classList.toggle("open");
})

// Hide style - Switcher on scroll

window.addEventListener("scroll", () =>{
    if(document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

/*--------------------------------------------------- Theme Colors ---------------------------------------------------*/

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
    console.log(color);
}