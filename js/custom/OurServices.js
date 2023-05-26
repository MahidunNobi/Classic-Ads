
//========================================
//         OUR SERVICES 
//========================================
const ServicesUl = document.querySelector(".allSections")
const ServicesLeftArrow = document.querySelector(".ServicesContainer .leftArrow")
const ServicesRightArrow = document.querySelector(".ServicesContainer .rightArrow")

const ServicesMaxScrollValue = ServicesUl.scrollWidth - ServicesUl.clientWidth -20

ServicesUl.addEventListener("scroll", ()=>{
  if(ServicesUl.scrollLeft >=20){
    ServicesLeftArrow.classList.add("active")
  }else{
    ServicesLeftArrow.classList.remove("active")
  }
  if(ServicesUl.scrollLeft >= ServicesMaxScrollValue){
    ServicesRightArrow.classList.remove("active")
  }else{
    ServicesRightArrow.classList.add("active")
  }
})
ServicesLeftArrow.addEventListener("click", ()=>{
  ServicesUl.scrollLeft -= 400
})
ServicesRightArrow.addEventListener("click", ()=>{
  ServicesUl.scrollLeft += 400
})
