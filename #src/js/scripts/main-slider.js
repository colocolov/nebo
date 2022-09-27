// слайдер на главной
const headerSlider = new Swiper(".header__slider", {
  // loop: true,
  autoplay: {
    delay: 5000,
  },
  speed: 1200,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  // переключение при клике на слайд
  // slideToClickedSlide: true,
  // отключение прокрутки при наведении мыши
  // on: {
  //   init() {
  //     this.el.addEventListener("mouseenter", () => {
  //       this.autoplay.stop();
  //     });
  //     this.el.addEventListener("mouseleave", () => {
  //       this.autoplay.start();
  //     });
  //   },
  // },
  //
});
//----- END
