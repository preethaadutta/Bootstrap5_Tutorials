/*
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
*/
/*
var homemenu=document.getElementById("homemenu");
var homesection=document.getElementById("homesection");
var aboutmenu=document.getElementById("aboutmenu");
homemenu.addEventListener("click",function()
{
    homemenu.classList.add("active");
    aboutmenu.classList.remove("active");
});
homesection.addEventListener("mouseover",function()
{
    homemenu.classList.add("active");
    aboutmenu.classList.remove("active");
});
aboutmenu.addEventListener("click",function()
{
    homemenu.classList.remove("active");
    aboutmenu.classList.add("active");
});
*/

var navbar=document.getElementById("nav");
window.addEventListener("scroll", function()
{
    if(window.scrollY!=0)
    {
        //user is at the top of the page; no need to show the back to top button
        //goToTop.style.display = "";
        //console.log("scrolled");
        navbar.setAttribute("style", "-webkit-filter: drop-shadow(3px 4px 4px grey);");
    }
    else if(window.scrollY==0)
    {
        //console.log("at top");
        navbar.removeAttribute("style");
    }
    /* 
    else 
    {
        goToTop.style.display = "block";
    }
    */
});
/*
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});
*/
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 3000,
  }
});

