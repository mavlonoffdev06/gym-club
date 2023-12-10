// ----- Sticky navbar ------- //
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })
    
// ----- Scrool top ------- //

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })
  
    // Mobile menu
    let mobileMenu = document.getElementById("mobile__menu");
    let openMenu = document.getElementById("open__menu");
    let mobileClose = document.getElementById("mobile__close");
    openMenu.addEventListener('click', () =>{
        mobileMenu.classList.add('active')
      })
    mobileClose.addEventListener('click', () =>{
        mobileMenu.classList.remove('active')
      })
















// ----- BMI ------- //


    let button = document.querySelector("#btn");
 
    button.addEventListener("click", calculateBMI);
 
function calculateBMI() {

    let height = parseInt(document
            .querySelector("#height").value);
 

    let weight = parseInt(document
            .querySelector("#weight").value);
 
    if (height === "" || isNaN(height)) 
        alert("Provide a valid Height!");
 
    else if (weight === "" || isNaN(weight)) 
        alert("Provide a valid Weight!");
 
    else {
 
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
 
        if (bmi < 18.6) alert(
            `Under Weight :${bmi}`);
 
        else if (bmi >= 18.6 && bmi < 24.9) 
            alert(
                `Normal :${bmi}`);
 
        else alert(
            `Over Weight :${bmi}`);
    }
}


