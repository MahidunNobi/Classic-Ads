//   ============Filter By Price============

const filterByPriceBtn = document.querySelectorAll(".filterByPriceBtn")
const filterByPriceDiv = document.querySelectorAll(".filterByPriceDiv")

FiltetDropDown(filterByPriceBtn, filterByPriceDiv)

//   ============Filter By Type============
const filterByTypeBtn = document.querySelectorAll(".filterByTypeBtn")
const filterByTypeDiv = document.querySelectorAll(".filterByTypeDiv")
FiltetDropDown(filterByTypeBtn, filterByTypeDiv)

// //   ============Filter By Rating============
const filterByRatingBtn = document.querySelectorAll(".filterByRatingBtn")
const filterByRatingDiv = document.querySelectorAll(".filterByRatingDiv")

FiltetDropDown(filterByRatingBtn, filterByRatingDiv)
// //   ============Filter By Cities============
const filterByCitiesBtn = document.querySelectorAll(".filterByCitiesBtn")
const filterByCitiesDiv = document.querySelectorAll(".filterByCitiesDiv")

FiltetDropDown(filterByCitiesBtn, filterByCitiesDiv)
// //   ============Filter By Popularity============
const filterByPopularityBtn = document.querySelectorAll(".filterByPopularityBtn")
const filterByPopularityDiv = document.querySelectorAll(".filterByPopularityDiv")

FiltetDropDown(filterByPopularityBtn, filterByPopularityDiv)
// //   ============Filter By Cities============
const filterByCategoryBtn = document.querySelectorAll(".filterByCategoryBtn")
const filterByCategoryDiv = document.querySelectorAll(".filterByCategoryDiv")

FiltetDropDown(filterByCategoryBtn, filterByCategoryDiv)


const mobileFilterCrossBtn = document.querySelector(".filterOptions .crossBtn button")
const mobileFilterDiv = document.querySelector(".container.mobileFilter .mobileFilterSection .filterOptions")
const mobileFilterBtn = document.querySelector(".Filter")

mobileFilterBtn.addEventListener("click", ()=>{
  mobileFilterDiv.classList.add("dFlex")
})
mobileFilterCrossBtn.addEventListener("click", ()=>{
  mobileFilterDiv.classList.remove("dFlex")
})

//========================================
//    Filter DropDown List Functionality
//========================================

function FiltetDropDown(Btn, Div){
    for(let i=0; i<Btn.length; i++){
      Btn[i].addEventListener("click", ()=>{
        if(Div[i].classList.contains("scaleY-1")){
          Div[i].classList.remove("scaleY-1")
        }else{
          Div[i].classList.add("scaleY-1")
        }
      })
    }
  }




