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
  new Splide("#splide", {
    classes: {
      arrows: "splide__arrows",
      arrow: "rounded-full border-[1px] border-white tr",
      prev: "splide__arrow--prev left-0 absolute bottom-[80px]",
      next: "splide__arrow--next right-0 absolute bottom-[80px]",
    },
    type: "loop",
    perPage: 4, // Desktop
    gap: "10px",
    pagination: false,
    arrows: true,
    autoplay: true,
    interval: 70000,
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
  }).mount();
});
