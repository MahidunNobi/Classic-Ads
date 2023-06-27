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

// IMAGE UPLOAD 
let uploadedImages = []
const inputImage = document.querySelector("input.uploadImg")
let clsBtn = document.querySelector(".clsBtn")
const ImagesDiv = document.querySelector(".allImages")
const addImageDiv = document.querySelector(".singleImage.imageUploader")

inputImage.addEventListener("change", ()=>{
    const Files = inputImage.files
    for(let i = 0; i<Files.length; i++){
        uploadedImages.push(Files[i])
    }
    displayImg()
    Max7Image()
})

function displayImg(){
    let imagesHtml = ""

    uploadedImages.forEach((e, i)=>{
        imagesHtml += `<div class="singleImage">
                        <span class="clsBtn" onclick="deleteItem(${i})">
                            <i class="fa-solid fa-x"></i>
                        </span>
                        <img src="${URL.createObjectURL(e)}" alt="Image">
                    </div> `
    })

   ImagesDiv.innerHTML = imagesHtml

}

function Max7Image(){
    if(uploadedImages.length === 7){
        addImageDiv.classList.add("hidden")
    }else{
        addImageDiv.classList.remove("hidden")
    }
}

function deleteItem(i){
    uploadedImages.splice(i, 1)
    displayImg()
    Max7Image()
}

// IMAGE UPLOAD End

