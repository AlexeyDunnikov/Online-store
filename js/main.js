$(function(){
    $('.banner-section__slider').slick({
        dots: true,
        prevArrow: '<button class="banner-section__slider-btn   banner-section__slider-btn-prev"><img src="images/icon/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn   banner-section__slider-btn-next"><img src="images/icon/arrow-right.svg" alt=""></button>',
    });

    $('.tab').on('click', function(evt){
        evt.preventDefault();
        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');
        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product-item__favourite').on('click', function(evt){
        evt.preventDefault;
        $(this).toggleClass('product-item__favourite--active')
    })

    $('.product-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: '<button class="banner-section__slider-btn   product-section__slider-btn-prev"><img src="images/icon/arrow-black-left.svg" alt=""></button>',
        nextArrow: '<button class="banner-section__slider-btn   product-section__slider-btn-next"><img src="images/icon/arrow-black-right.svg" alt=""></button>',
    });

    $('.filter-style').styler();

    $('.filter__item-drop-title, .filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle(200);
    });

    $(".js-range-slider").ionRangeSlider();

    $(".js-range-slider").ionRangeSlider();
 
    $('.catalog__filter-toggle').on('click', function(){
        $('.catalog__filter-toggle').removeClass('catalog__filter-toggle--active');
        $(this).addClass('catalog__filter-toggle--active');
    });

    $('.catalog__filter-btn-line').on('click', function(){
        $('.catalog__inner-list').addClass('catalog-in-line');
    });

    $('.catalog__filter-btn-grid').on('click', function(){
        $('.catalog__inner-list').removeClass('catalog-in-line');
    });

    $("#rate-yo").rateYo({
  });
});