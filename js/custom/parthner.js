const Buttons = document.querySelectorAll("button.parthner")
const CloseBtn = document.querySelector(".closeFormDiv button")
const form = document.querySelector(".form")

CloseBtn.addEventListener("click", ()=>{
    form.classList.remove("active")
})

Buttons.forEach(e=>{
    e.addEventListener("click", ()=>{
        form.classList.add("active")
    })
})

Buttons[1].addEventListener("click", ()=>{
    window.innerWidth < 911 && window.scrollBy(0, 1700)
 })

Buttons[0].addEventListener("click", ()=>{
   window.innerWidth>=991 ? window.scrollBy(0, 880) : window.scrollBy(0, 1700)
})
Buttons[1].addEventListener("click", ()=>{
    window.innerWidth < 911 && window.scrollBy(0, 1200)
 })
 Buttons[2].addEventListener("click", ()=>{
    window.innerWidth < 911 && window.scrollBy(0, 650)
 })
 Buttons[3].addEventListener("click", ()=>{
    window.innerWidth < 911 && window.scrollBy(0, 350)
 })

Buttons[5].addEventListener("click", ()=>{
    window.innerWidth < 911 ? window.scrollBy(0, -1350) : window.scrollBy(0, -50)
})