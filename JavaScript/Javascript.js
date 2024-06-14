// Navbar on scroll 


document.addEventListener('scroll', ()=>{
  let header=document.querySelector('header')
  if(window.scrollY>0){
    header.classList.add('scrolled');
  }
  else{
    header.classList.remove('scrolled')
  }
})



// swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: true,
  autoplay: {
    delay: 2000,
  },
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  breakpoints: {
    // when window width is >= 320px
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});




