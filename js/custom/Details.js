const imgUl = document.querySelector(".images ul")
const leftArrow = document.querySelector(".images .leftArrow")
const rightArrow = document.querySelector(".images .rightArrow")

leftArrow.addEventListener("click", ()=>{
  imgUl.scrollLeft -=200
})
rightArrow.addEventListener("click", ()=>{
    imgUl.scrollLeft +=200
})
