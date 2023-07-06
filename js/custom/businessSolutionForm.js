

// .............Business Solution Forms Setting....................//
const allBtns = document.querySelector(".mainMembership .allPlans .form .Btn button")
const allForms = document.querySelector(".mainMembership .allPlans .form ")
// const submitBtns = document.querySelectorAll(".mainMembership .allPlans .form .Btn button")
// const closeFormsBtn = document.querySelectorAll(".closeFormDiv button")


    allForms.addEventListener("submit", (x)=>{
        x.preventDefault()
    })
    allBtns.addEventListener("click", ()=>{
        console.log("Ok");
    })
// submitBtns.forEach((e,i) => {
//     e.addEventListener("click", ()=>{
//         formDivs[i].innerHTML="<p style='text-align:center;'> We have received your message and appreciate your time and effort in contacting us. Our team will carefully review your submission and get back to you as soon as possible. </p>"
//     })
// })

// function clearAllForms(){
//     allForms.forEach(e=>{
//         e.classList.remove("active")
//     })
// }

// function MobileFormsOpen(i){
//     clearAllForms()
//     allForms[i].classList.add("active")
   
// }

// function DextopFormsOpen(i){
//     clearAllForms()
//     i %2 ===0 ? allForms[i+1].classList.add("active") : allForms[i].classList.add("active")
// }

// allBtns.forEach((e,i) => {
//     e.addEventListener("click", ()=>{
//        window.innerWidth >= 991 ? DextopFormsOpen(i) : MobileFormsOpen(i);;
//        window.scrollBy(0, 200)
//     })
// })

// closeFormsBtn.forEach(e=>{
//     e.addEventListener("click", ()=>{
//         clearAllForms()
//     })
// })

// Hero Btn Funtionality

// function dextopClick(){
//     window.scrollBy(0, 1600)
//     clearAllForms()
//     formDivs[1].classList.add("active")
// }
// function mobileClick(){
//     window.scrollBy(0, 2200)
//     clearAllForms()
//     formDivs[0].classList.add("active")
// }

// const heroHtn = document.querySelector(".HeroBtn")
// heroHtn.addEventListener("click", ()=>{
//     window.innerWidth >= 991 ? dextopClick(): mobileClick()
// })

// Thank you Close Btn....
const ThankUCloseBtnHome = document.querySelector(".mainThankU .closeBtn button")
const ThankYouMessageBox = document.querySelector(".ThankU")



  allBtns.addEventListener("click", ()=>{
    ThankYouMessageBox.classList.add("active")
    window.innerWidth <=991 && window.scrollBy(0, -400)
    
})

    ThankUCloseBtnHome.addEventListener("click", ()=>{
    ThankYouMessageBox.classList.remove("active")
  })

//   FORMS SELECTIONS FUNCTIONS
const selectMembershipPlan = document.querySelector("#selectMembershipPlan")
const selectBannerType = document.querySelector("#selectBannerType")
const selectCategory = document.querySelector("#selectCategory")
const selectPackage = document.querySelector("#selectPackage")

// SELECT MEMBERSHIP

selectMembershipPlan.addEventListener("change", (e)=>{
    switch (e.target.value){
        case "premiumBanners":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="premiumHomePage">Home Page</option>
            <option value="premiumCategoryBanner"> Category Banner</option>
            <option value="premiumSubCategoryBanner"> Sub Category Banner </option> 
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;
            break;

        case "featuredProduct":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="featuredHomePage">Home Page</option>
            <option value="featuredCategoryBanner"> Category Banner</option>
            <option value="featuredSubCategoryBanner"> Sub Category Banner </option> 
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
                break;

        case "sponsoredPost":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="sponsoredHomePage">Home Page</option>
            <option value="sponsoredCategoryBanner"> Category Banner</option>
            <option value="sponsoredSubCategoryBanner"> Sub Category Banner </option> 
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
            break;

        case "trustedBadges":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="trusted">Trusted</option>
            <option value="superstar"> Superstar</option>
            <option value="highDemand"> High Demand</option> 
            <option value="verified"> Verified</option> 
            <option value="superSeller"> Super Seller</option> 
            <option value="topRated"> Top Rated</option> 
            <option value="fastService"> Fast Service</option> 
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
            break;

        case "buildReview":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="5Star">5 Star</option>
            <option value="4Star"> 4 Star</option>
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
            break;

        case "membership":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="silver">Silver</option>
            <option value="gold"> Gold</option>
            <option value="platinum"> Platinum</option>  
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
            break;

        case "digitalMarketing":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="contentMarketing">Content Marketing</option>
            <option value="facebookAds"> Facebook Ads</option>
            <option value="googleAds"> Google Ads</option> 
            <option value="socialMediaManagement"> Social Media Management</option> 
            <option value="websiteDevelopment">Website Development</option> 
            <option value="graphicVideo "> Graphic, Video </option> 
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
            break;

        case "crossPromotionPartnership":
            selectBannerType.innerHTML = `
            <option value="none">none</option>
            <option value="referralMarketing">Referral Marketing</option>
            <option value="affiliateMarketing"> Affiliate Marketing </option>
            <option value="coBranding&Selling"> Co Branding & Selling</option>
            `
            selectPackage.innerHTML = ` <option value="none">
                                    Select One Banner Type
                                    </option>  `;;
            break;

        default:
            selectBannerType.innerHTML = `<option value="none">none</option>`;
    }
})

// SELECT BANNER TYPE

selectBannerType.addEventListener("change", (e)=>{
    switch (e.target.value){
        // Premium Packges
        case "premiumHomePage":
            selectPackage.innerHTML = `<option value="premiumHomePackage">
                                    1 Ads  For Rs . 1000 , Validity 15 Days, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "premiumCategoryBanner":
            selectPackage.innerHTML = `<option value="premiumCategoryPackage">
                                    1 Ads  For Rs . 500 , Validity 1 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "premiumSubCategoryBanner":
            selectPackage.innerHTML = `<option value="premiumSubCategoryPackage">
                                    1 Ads  For Rs . 200 , Validity 1 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
         // Featured Packges
         case "featuredHomePage":
            selectPackage.innerHTML = `<option value="featuredHomePackage">
                                    1 Ads  For Rs . 500 , Validity 15 Days, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "featuredCategoryBanner":
            selectPackage.innerHTML = `<option value="featuredCategoryPackage">
                                    1 Ads  For Rs . 200 , Validity 1 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "featuredSubCategoryBanner":
            selectPackage.innerHTML = `<option value="featuredSubCategoryPackage">
                                    1 Ads  For Rs . 100 , Validity 1 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        // Sponsored Packges
         case "sponsoredHomePage":
            selectPackage.innerHTML = `<option value="sponsoredHomePackage">
                                    1 Ads  For Rs . 500 , Validity 15 Days, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "sponsoredCategoryBanner":
            selectPackage.innerHTML = `<option value="sponsoredCategoryPackage">
                                    1 Ads  For Rs . 200 , Validity 1 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "sponsoredSubCategoryBanner":
            selectPackage.innerHTML = `<option value="sponsoredSubCategoryPackage">
                                    1 Ads  For Rs . 100 , Validity 1 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
            
            // Trusted Packges
        case "trusted":
            selectPackage.innerHTML = `<option value="trusted">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "superstar":
            selectPackage.innerHTML = `<option value="superstar">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "highDemand":
            selectPackage.innerHTML = `<option value="highDemand">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "verified":
            selectPackage.innerHTML = `<option value="verified">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "superSeller":
            selectPackage.innerHTML = `<option value="superSeller">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "topRated":
            selectPackage.innerHTML = `<option value="topRated">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "fastService":
        selectPackage.innerHTML = `<option value="fastService">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                </option>`;
        break;
       
        // Build Review Packges
        case "5Star":
            selectPackage.innerHTML = `<option value="5Star">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "4Star":
            selectPackage.innerHTML = `<option value="4Star">
            1 Ads  For Rs . 500 , Validity 6 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        
        // Membership Packges
        case "silver":
            selectPackage.innerHTML = `<option value="silver">
                                    10 Ads  For Rs . 100 , Validity 3 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "gold":
            selectPackage.innerHTML = `<option value="gold">
                                    20 Ads  For Rs . 200 , Validity 3 Months, Renewal Discount 50% Off
                                    </option>`;
            break;
        case "platinum":
            selectPackage.innerHTML = `<option value="platinum">
                                    50 Ads  For Rs . 500 , Validity 3 Months, Renewal Discount 50% Off
                                    </option>`;
            break;

        // Digital Marketing Packges
        case "contentMarketing":
            selectPackage.innerHTML = `<option value="contentMarketing">
                            Please fill the Form 
                                    </option>`;
            break;
        case "facebookAds":
            selectPackage.innerHTML = `<option value="facebookAds">
            Please fill the Form 
                                    </option>`;
            break;
        case "googleAds":
            selectPackage.innerHTML = `<option value="googleAds">
            Please fill the Form 
                                    </option>`;
            break;
        case "socialMediaManagement":
            selectPackage.innerHTML = `<option value="socialMediaManagement">
            Please fill the Form 
                                    </option>`;
            break;
        case "websiteDevelopment":
            selectPackage.innerHTML = `<option value="websiteDevelopment">
            Please fill the Form 
                                    </option>`;
            break;
        case "graphicVideo":
            selectPackage.innerHTML = `<option value="graphicVideo">
            Please fill the Form 
                                    </option>`;
            break;
        
            // Cross- Promotion Partnership Package
        case "referralMarketing":
            selectPackage.innerHTML = `<option value="referralMarketing">
                            Please fill the Form 
                                    </option>`;
            break;
        case "affiliateMarketing":
            selectPackage.innerHTML = `<option value="affiliateMarketing">
            Please fill the Form 
                                    </option>`;
            break;
        case "coBranding&Selling":
            selectPackage.innerHTML = `<option value="coBranding&Selling">
            Please fill the Form 
                                    </option>`;
            break;
        

        case "none": 
            selectPackage.innerHTML = ` <option value="none">
            Select One Banner Type
        </option>  `
        break;
        
        }
})





