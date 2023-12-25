
const BurgerButton = document.getElementById("burger-button");
const Burger = document.getElementById("burger");
const BurgerCloseButton = document.getElementById("burger-button-close")



export const openMenu = async() =>{
    document.getElementById("header").classList.remove("container")
    Burger.classList.remove("visually-hidden");
    document.body.classList.add("disable-scroll");
 
}

export const closeMenu = async(e) =>{
    document.getElementById("header").classList.add("container")
    Burger.classList.add("visually-hidden");
    document.body.classList.remove("disable-scroll");
   
}
export const closeEscape=(e)=>{
    if (e.key === 'Escape') {
Burger.classList.add("visually-hidden");
}

document.body.classList.remove("disable-scroll");
}

BurgerButton.addEventListener("click", openMenu)
BurgerCloseButton.addEventListener("click", closeMenu)
document.addEventListener("keydown", closeEscape)

