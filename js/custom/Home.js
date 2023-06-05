//========================================
//        SLIDER PART JS
//========================================

let lSliderImg = document.getElementsByClassName("lSliderImg")
const rSliderImg = document.getElementsByClassName("rSliderImg")
function currentSlideIndex(images){
  for(let i = 0; i < images.length; i++){
    if(images[i].classList.contains("active")){
      return i
    }
  }
}

function forwardSlide(images){
  const currentImgIndex = currentSlideIndex(images)
  if(currentImgIndex === images.length-1){
    images[currentImgIndex].classList.remove("active")
    images[0].classList.add("active")
  }else{ 
    images[currentImgIndex].classList.remove("active")
    images[currentImgIndex+1].classList.add("active")
}
}


setInterval(() => forwardSlide(lSliderImg), 4000)
setInterval(() => forwardSlide(rSliderImg), 2800)

//========================================
//         RECOMENDED ADS SECTION START
//========================================
const rightArrowSvg= document.querySelector(".rightArrow svg")
const leftArrowSvg= document.querySelector(".leftArrow svg")
const recomendedAdsUl = document.querySelector(".niche-nav .navUl")

const leftArrowContainer = document.querySelector(".niche-nav .leftArrow")
const rightArrowContainer = document.querySelector(".niche-nav .rightArrow")

function manageIcons(){
 if(recomendedAdsUl.scrollLeft >= 20){
   leftArrowContainer.classList.add("active")
 }
 else{
   leftArrowContainer.classList.remove("active")
 }
}

recomendedAdsUl.addEventListener("scroll", ()=>{    
 let maxScrollValue = recomendedAdsUl.scrollWidth - recomendedAdsUl.clientWidth-20
 manageIcons()
 if(recomendedAdsUl.scrollLeft >= maxScrollValue){
   rightArrowContainer.classList.remove("active")
 }else{
   rightArrowContainer.classList.add("active")
 }
})

let draging = false;

const drag = (e) =>{
 if(!draging) return;  else{
   recomendedAdsUl.classList.add("dragging")
   recomendedAdsUl.scrollLeft -= e.movementX

 }
}

recomendedAdsUl.addEventListener("mousedown", ()=>{
 draging = true
 
})

recomendedAdsUl.addEventListener("mousemove", drag)

recomendedAdsUl.addEventListener("mouseup", ()=>{
 draging=false
 recomendedAdsUl.classList.remove("dragging")
})

rightArrowSvg.addEventListener("click", ()=>{
   recomendedAdsUl.scrollLeft += 200
   
})
leftArrowSvg.addEventListener("click", ()=>{
 recomendedAdsUl.scrollLeft -= 200
 
})

//========================================
//         POPULAR BRANDS START
//========================================

const tRatedBtns = document.querySelectorAll(".tRated")
const mostViews = document.querySelectorAll(".mostView")

const topRatedSection = document.getElementById("topRated")
const mostViewsSection = document.getElementById("mostViews")

function removeAllActiveClassFromTabs(){
  tRatedBtns.forEach(tab => {
    tab.classList.remove("active")
  })
  mostViews.forEach(tab => {
    tab.classList.remove("active")
  })
}

tRatedBtns.forEach(tab => {
  tab.addEventListener("click", ()=>{
    removeAllActiveClassFromTabs()
    tab.classList.add("active")
    mostViewsSection.classList.remove("active")
    topRatedSection.classList.add("active")
  })
})
mostViews.forEach(tab => {
  tab.addEventListener("click", ()=>{
    removeAllActiveClassFromTabs()
    tab.classList.add("active")
    mostViewsSection.classList.add("active")
    topRatedSection.classList.remove("active")
  
    })
})

const PleftArrow = document.querySelector(".PleftArrow")
const PrightArrow = document.querySelector(".PrightArrow")

let dragging = false;

const Pul = document.getElementById("Pul")

Pul.addEventListener("mousedown", ()=>{
  dragging = true
})

Pul.addEventListener("mousemove", (e)=>{
  if(!dragging) return;
  else{
    Pul.scrollLeft -= e.movementX
    Pul.classList.add("dragging")
  }
})

Pul.addEventListener("mouseup", ()=>{
  dragging = false
  Pul.classList.remove("dragging")
})

Pul.addEventListener("scroll", ()=>{
  
  if(Pul.scrollLeft >=20){
    PleftArrow.classList.add("active")
  }else(
    PleftArrow.classList.remove("active")
      )
  
  const PmaxScrollValue = Pul.scrollWidth - Pul.clientWidth -20;
  if(Pul.scrollLeft >= PmaxScrollValue){
    PrightArrow.classList.remove("active")
  }else{
    PrightArrow.classList.add("active")
  }
})

PleftArrow.addEventListener("click", ()=>{
  Pul.scrollLeft -= 200
})
PrightArrow.addEventListener("click", ()=>{
  Pul.scrollLeft += 200
})


//========================================
//          NEWS SECTION START
//========================================

const NleftArrow = document.querySelector(".NleftArrow")
const NrightArrow = document.querySelector(".NrightArrow")
const Nul = document.getElementById("Nul")

// Scroll Event Lintener
Nul.addEventListener("scroll", ()=>{
  if(Nul.scrollLeft >= 20){
    NleftArrow.classList.add("active")
  }else{
    NleftArrow.classList.remove("active")
  }
  const maxScrollValueN = Nul.scrollWidth - Nul.clientWidth -20
  if(Nul.scrollLeft >= maxScrollValueN){
    NrightArrow.classList.remove("active")
  }else{
    NrightArrow.classList.add("active")
  }
})

// Click Scroll Event Listener

NleftArrow.addEventListener("click", ()=>{
  Nul.scrollLeft -= 200
})
NrightArrow.addEventListener("click", ()=>{
  Nul.scrollLeft+= 200
})

// Draging Event Listener

let Ndragging = false

Nul.addEventListener("mousedown", ()=>{
  Ndragging = true
 
})
Nul.addEventListener("mouseup", ()=>{
  Ndragging = false
  Nul.classList.remove("Drage")
})
Nul.addEventListener("mousemove", (e)=>{
  if(!Ndragging) return
  else{
    Nul.classList.add("Drage")
    Nul.scrollLeft -= e.movementX
    
  }
})
const Btns = document.querySelectorAll(".newsCategoryLinks")
function rmvActiveFromNLinks(){
  Btns.forEach(e => {
    e.classList.remove("active")
  })
}
Btns.forEach(e=>{
  e.addEventListener("click", (e)=>{
    rmvActiveFromNLinks()
    e.target.classList.add("active")
    console.log(e.target.value);
  })
})

// Blog Section
const NewsUl = document.querySelector(".BlogUl")
const NewsLeftArrow = document.querySelector(".NewsSection .leftArrow")
const NewsRightArrow = document.querySelector(".NewsSection .rightArrow")

const maxScrollValue = NewsUl.scrollWidth - NewsUl.clientWidth -20

NewsUl.addEventListener("scroll", ()=>{
  if(NewsUl.scrollLeft >=20){
    NewsLeftArrow.classList.add("active")
  }else{
    NewsLeftArrow.classList.remove("active")
  }
  if(NewsUl.scrollLeft >= maxScrollValue){
    NewsRightArrow.classList.remove("active")
  }else{
    NewsRightArrow.classList.add("active")
  }
})
NewsLeftArrow.addEventListener("click", ()=>{
  NewsUl.scrollLeft -= 400
})
NewsRightArrow.addEventListener("click", ()=>{
  NewsUl.scrollLeft += 400
})

//========================================
//         TASTIMONIALS
//========================================
// tastimonialContainer
const tastimonialUl = document.querySelector(".tastimonialContainer ul")
const tastimonialLeftArrow = document.querySelector(".tastimonialContainer .leftArrow")
const tastimonialRightArrow = document.querySelector(".tastimonialContainer .rightArrow")

const tastimonialMaxScrollValue = tastimonialUl.scrollWidth - tastimonialUl.clientWidth -20

tastimonialUl.addEventListener("scroll", ()=>{
  if(tastimonialUl.scrollLeft >=20){
    tastimonialLeftArrow.classList.add("active")
  }else{
    tastimonialLeftArrow.classList.remove("active")
  }
  if(tastimonialUl.scrollLeft >= tastimonialMaxScrollValue){
    tastimonialRightArrow.classList.remove("active")
  }else{
    tastimonialRightArrow.classList.add("active")
  }
})
tastimonialLeftArrow.addEventListener("click", ()=>{
  tastimonialUl.scrollLeft -= 400
})
tastimonialRightArrow.addEventListener("click", ()=>{
  tastimonialUl.scrollLeft += 400
})
// Find Service Form

const findServiceBtn = document.querySelector(".ServiceEnquiryForm")
const Form = document.querySelector(".form ")

findServiceBtn.addEventListener("click", ()=>{
  Form.classList.add("active")
})
const OurServicesBtns = document.querySelectorAll(".ServicesContainer .allSections .singleSec button")
const OurServicesForm = document.querySelector(".mainToolsRaper .form ")

OurServicesBtns.forEach(e=>{
  e.addEventListener("click", ()=>{
    OurServicesForm.classList.add("active")
  })
})