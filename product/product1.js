

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
  
    let currentDropdown
    if(isDropdownButton) {
      currentDropdown = e.target.closest("[data-dropdown]")
      currentDropdown.classList.toggle('active')
    }
  
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
      if(dropdown === currentDropdown) return
  
      dropdown.classList.remove("active")
    })
  })
  
  const hamburger = document.querySelector(".hamburger");
  const navlinks = document.querySelector(".nav-links");
  
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
  })
  
  
  
  var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    gragCursor: 'true',
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      520: {
        slidesPerView: 2,
      },
      950: {
        slidesPerView: 3,
      },
    },
  });
  
  




