new Swiper("#hero-slider",{navigation:{nextEl:".hero-btn-slider-next",prevEl:".hero-btn-slider-prev"},pagination:{el:".hero-swiper-pagination",type:"fraction",dynamicMainBullets:2,formatFractionCurrent:function(n){return("0"+n).slice(-2)},formatFractionTotal:function(n){return("0"+n).slice(-2)},renderFraction:function(n,e){return'\n        <span class="hero-current-slide '.concat(n,'"></span>\n        <span class="hero-swiper-pagination-line">&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;</span>\n        <span class="hero-quantity-slide ').concat(e,'"></span>\n      ')}},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},loop:!0});
//# sourceMappingURL=index.af670479.js.map
