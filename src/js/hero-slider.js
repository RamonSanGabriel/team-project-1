const heroSlider = new Swiper('#hero-slider', {
  navigation: {
    nextEl: '.hero-btn-slider-next',
    prevEl: '.hero-btn-slider-prev',
  },
  pagination: {
    el: '.hero-swiper-pagination',
    type: 'fraction',
    dynamicMainBullets: 2,
    formatFractionCurrent: function (e) {
      return ('0' + e).slice(-2);
    },
    formatFractionTotal: function (e) {
      return ('0' + e).slice(-2);
    },
    renderFraction: function (e, o) {
      return `
        <span class="hero-current-slide ${e}"></span>
        <span class="hero-swiper-pagination-line">&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;</span>
        <span class="hero-quantity-slide ${o}"></span>
      `;
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
});