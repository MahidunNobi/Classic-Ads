const imgUl = document.querySelector(".images ul")
const leftArrow = document.querySelector(".images .leftArrow")
const rightArrow = document.querySelector(".images .rightArrow")

leftArrow.addEventListener("click", ()=>{
  imgUl.scrollLeft -=200
})
rightArrow.addEventListener("click", ()=>{
    imgUl.scrollLeft +=200
})

            const GetaQuoteBtns = document.querySelector(".btns button:nth-child(2)")
            const form = document.querySelector(".form")
            const allCloseFormButtons = document.querySelector(".closeFormDiv button i")

            const formSubmitBtns = document.querySelector(".form .Btn button")
            const ThankUMessageBox = document.querySelector(".ThankU")
            const MessageCloseBtn = document.querySelector(".mainThankU .closeBtn button.closeThankUBtn")

            GetaQuoteBtns.addEventListener("click", ()=>{             
                    form.classList.add("active")
                    window.scrollBy(0, 200)
             
            })

            allCloseFormButtons.addEventListener("click", ()=>{
                    form.classList.remove("active")
                })
          

            formSubmitBtns.addEventListener("click", ()=>{
                    ThankUMessageBox.classList.add("active")
                    window.innerWidth<=991 && window.scrollBy(0, -400)
                })
         
            MessageCloseBtn.addEventListener("click", ()=>{
                    form.classList.remove("active")
                ThankUMessageBox.classList.remove("active")
                })
                
      