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
    type: "loop",
    perPage: 3,
    gap: "0.5rem",
    pagination: true,
    arrows: true,
    autoplay: true,
    interval: 1000,
    breakpoints: {
      300: {
        perPage: 1,
      },
    },
  }).mount();
});

var splide = new Splide(".slider__news", {
  classes: {
    arrows: "splide__arrows translate-y-0 transform",
    arrow: "rounded-full ",
    prev: "splide__arrow--prev   translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] ",
    next: "splide__arrow--next   translate-y-0 transform [&>svg]:fill-white right-0 [&>svg]:w-[25px] [&>svg]:h-[25px] ",
    pagination: " ",
    page: " ",
  },
  rewind: true,
  autoplay: "play",
});
splide.mount();
