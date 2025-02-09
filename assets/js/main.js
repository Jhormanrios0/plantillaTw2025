var splide = new Splide(".slider__home", {
  classes: {
    arrows: "splide__arrows translate-y-0 transform",
    arrow: "rounded-full border-[1px] border-white",
    prev: "splide__arrow--prev order-1 relative translate-y-0 transform [&>svg]:fill-white left-0 [&>svg]:w-[25px] [&>svg]:h-[25px] p-[10px]",
    next: "splide__arrow--next order-3 relative translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] p-[10px]",
    pagination: "splide__pagination ",
    page: "splide__pagination__page border-2 border-solid  w-3 h-3  lg:w-4 lg:h-4 shadow-md ",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();

document.addEventListener("DOMContentLoaded", function () {
  let splide_services = new Splide("#splide", {
    classes: {
      arrows: "splide__arrows",
      arrow: "rounded-full border-[1px] border-white tr",
      prev: "splide__arrow--prev left-0 absolute bottom-[100px] ",
      next: "splide__arrow--next right-0 absolute bottom-[100px]",
    },
    type: "loop",
    perPage: 4, // Desktop
    gap: "10px",
    pagination: false,
    arrows: true,
    autoplay: true,
    interval: 5000,
    breakpoints: {
      1024: {
        // Tablet
        perPage: 2,
      },
      640: {
        // Mobile
        perPage: 1,
      },
    },
  });

  splide_services.on("mounted", function () {
    const splideServices = document.querySelector("#splide");

    const prevArrow = splideServices.querySelector(".splide__arrow--prev");
    const nextArrow = splideServices.querySelector(".splide__arrow--next");

    if (prevArrow && nextArrow) {
      prevArrow.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="60" height="60" fill="#004693"><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"/></svg>';
      nextArrow.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width="60" height="60" fill="#004693"><path d="M15.75,9.525,11.164,4.939A1.5,1.5,0,0,0,9.043,7.061l4.586,4.585a.5.5,0,0,1,0,.708L9.043,16.939a1.5,1.5,0,0,0,2.121,2.122l4.586-4.586A3.505,3.505,0,0,0,15.75,9.525Z"/></svg>';
    } else {
      console.error("Arrows not found in the DOM.");
    }
  });

  splide_services.mount();

  if(window.innerWidth < 1024) {
    const previousSlide = document.querySelector(".service_group.active-mobile");
      const activeSlide = document.querySelector(".service_group.is-active");
      
      if (activeSlide) {
        activeSlide.classList.add("active-mobile");
      }
    splide_services.on('moved', function () {
    
      const previousSlide = document.querySelector(".service_group.active-mobile");
      const activeSlide = document.querySelector(".service_group.is-active");
      
      if (activeSlide) {
        activeSlide.classList.add("active-mobile");
      }
      
      if (previousSlide) {
        previousSlide.classList.remove("active-mobile");
      }
    });
  }
  
});

var splide = new Splide(".slider__news", {
  classes: {
    arrows: "splide__arrows translate-y-0 transform",
    arrow: "rounded-full ",
    prev: "splide__arrow--prev  translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] ",
    next: "splide__arrow--next  translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] ",
    pagination: " ",
    page: " ",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();

document.addEventListener("DOMContentLoaded", () => {
  const scrollers = document.querySelectorAll(".scroller__inner");

  scrollers.forEach((scroller) => {
    const items = scroller.querySelectorAll("li");
    let currentIndex = 0;
    let intervalId;

    // Muestra el primer elemento
    items[currentIndex].style.display = "list-item";
    items[currentIndex].style.opacity = 1;

    const startRotation = () => {
      intervalId = setInterval(() => {
        // Oculta el elemento actual con una transición
        items[currentIndex].style.transition = "opacity 1s ease-in-out";
        items[currentIndex].style.opacity = 0;

        // Espera a que la transición termine antes de ocultar el elemento
        setTimeout(() => {
          items[currentIndex].style.display = "none";

          // Calcula el siguiente índice
          currentIndex = (currentIndex + 1) % items.length;

          // Muestra el siguiente elemento con una transición
          items[currentIndex].style.display = "list-item";
          items[currentIndex].style.transition = "opacity 1s ease-in-out";
          setTimeout(() => {
            items[currentIndex].style.opacity = 1;
          }, 50); // Pequeño retraso para asegurar que la transición se aplique
        }, 1000); // Duración de la transición de ocultar
      }, 4000); // Cambia cada 2 segundos
    };

    const stopRotation = () => {
      clearInterval(intervalId);
    };

    // Inicia la rotación
    startRotation();

    // Detiene la rotación al hacer hover
    items.forEach((item) => {
      item.addEventListener("mouseover", stopRotation);
      item.addEventListener("mouseout", startRotation);
    });
  });
});