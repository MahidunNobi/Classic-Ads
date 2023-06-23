const socialLinksn = document.querySelector(".form-group .Links")
const socialLinksBtns = document.querySelectorAll(".form-group .Links button")
const socialInput = document.querySelector(".form-group .form-control.socialLinkInput")

socialLinksBtns.forEach(e=>{
    e.addEventListener("click", (xx)=>{
        xx.preventDefault()
        socialLinksn.classList.remove("flex")
        socialInput.classList.add("active")
    })
})

