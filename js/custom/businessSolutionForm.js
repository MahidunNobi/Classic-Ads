

// .............Business Solution Forms Setting....................//
const allBtns = document.querySelectorAll(".mainMembership .allPlans .singlePlan .Btn button")
const allForms = document.querySelectorAll(".mainMembership .allPlans .form")
const formDivs = document.querySelectorAll(".form")
// const submitBtns = document.querySelectorAll(".mainMembership .allPlans .form .Btn button")
const closeFormsBtn = document.querySelectorAll(".closeFormDiv button")

document.querySelectorAll("form").forEach(e => {
    e.addEventListener("submit", (x)=>{
        x.preventDefault()
    })
})

// submitBtns.forEach((e,i) => {
//     e.addEventListener("click", ()=>{
//         formDivs[i].innerHTML="<p style='text-align:center;'> We have received your message and appreciate your time and effort in contacting us. Our team will carefully review your submission and get back to you as soon as possible. </p>"
//     })
// })

function clearAllForms(){
    allForms.forEach(e=>{
        e.classList.remove("active")
    })
}

function MobileFormsOpen(i){
    clearAllForms()
    allForms[i].classList.add("active")
   
}

function DextopFormsOpen(i){
    clearAllForms()
    i %2 ===0 ? allForms[i+1].classList.add("active") : allForms[i].classList.add("active")
}

allBtns.forEach((e,i) => {
    e.addEventListener("click", ()=>{
       window.innerWidth >= 991 ? DextopFormsOpen(i) : MobileFormsOpen(i);;
       window.scrollBy(0, 200)
    })
})

closeFormsBtn.forEach(e=>{
    e.addEventListener("click", ()=>{
        clearAllForms()
    })
})

// Hero Btn Funtionality

function dextopClick(){
    window.scrollBy(0, 1600)
    clearAllForms()
    formDivs[1].classList.add("active")
}
function mobileClick(){
    window.scrollBy(0, 2200)
    clearAllForms()
    formDivs[0].classList.add("active")
}

const heroHtn = document.querySelector(".HeroBtn")
heroHtn.addEventListener("click", ()=>{
    window.innerWidth >= 991 ? dextopClick(): mobileClick()
})

// Thank you Close Btn....
const ThankUCloseBtnHome = document.querySelectorAll(".mainThankU .closeBtn button")
const allFormsH = document.querySelectorAll(".form")

const FormSubmitBtn = document.querySelectorAll(".mainMembership .allPlans .form .Btn button")
const ThankYouMessageBox = document.querySelectorAll(".ThankU")


FormSubmitBtn.forEach((e, i)=>{
  e.addEventListener("click", ()=>{
    ThankYouMessageBox[i].classList.add("active")
    window.innerWidth <=991 && window.scrollBy(0, -400)
    
})

})


ThankUCloseBtnHome.forEach((e, i)=>{
  e.addEventListener("click", ()=>{
    clearAllForms()
    ThankYouMessageBox[i].classList.remove("active")
  })
})

// InterEsted Connect Btn

const ConnectBtn = document.querySelector(".mainInterested .btn button ")

ConnectBtn.addEventListener("click", ()=>{
    clearAllForms()
    allForms[allForms.length-1].classList.add("active")
    window.innerWidth>= 991 ? window.scrollTo(0, 3600): window.scrollTo(0, 7790)
})
