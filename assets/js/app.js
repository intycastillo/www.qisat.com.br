
  // Foundation JavaScript
  // Documentation can be found at: http://foundation.zurb.com/docs
  $(document).foundation();

   // $("#menu").metisMenu({
   //   collapseInClass: 'in';
   // });




 $('.header-main__item-cart,  #cd-shadow-layer').on('click', function(event){
         //event.preventDefault();
        $("#cd-cart, #cd-shadow-layer, .header-main__list-cart").toggleClass("actived");
          console.log("clicado");


});





   $(document).ready(function() {

     $(".owl-carousel-testimonials-home").owlCarousel({
         navigation : false, // Show next and prev buttons
         slideSpeed : 300,
         paginationSpeed : 400,
         singleItem:true,
         autoHeight:true,

         //"singleItem:true" is a shortcut for:
          items : 1,
         itemsDesktop : false,
         itemsDesktopSmall : false,
         itemsTablet: false,
         itemsMobile : false
     });

   });


/* Temporário
   temporário, usado somente para testar, a ideia é que seja feito em php,
   se favorirar adicionar a class .buttom-favorite-active  */

     $(function() {
       if ( $('.buttom-favorite').length ) {
             $('.buttom-favorite').on('click', function(){
                   event.preventDefault();
                  // alert("foi")
                  $(this).toggleClass("buttom-favorite-active");
             });


             $('.form-button-call-me').on('click', function(){
                        event.preventDefault();
                       $(".section-call__form").css({"height": "0", "overflow": "hidden"});
                       $(".section-call__done").css({"height": "initial", "overflow": "initial"});
              });
        }
      }());
/* end página cursos > botão favoritar*/



//zurb foundation animate accordion
$(function() {
  if ( $('.accordion').length ) {
        // se accordion estiver presente, executa esse codigo
        $(".accordion").on("click", "dd", function () {
                if($(this).hasClass('active')){
                    $("dd.active").removeClass('active').find(".content").slideUp("fast");
                }
                else {
                    $("dd.active").removeClass('active').find(".content").slideUp("fast");
                    $(this).addClass('active').find(".content").slideToggle("fast");
                }
        });
  }
});
//end zurb foundation animate accordion




//toggle foter
if ( $('.footer-primary__list__item').length ) {
      if ($(window).width() < 640) {

          $(function() {
            $(".footer-primary__list__item").hide(200);

                 $('.footer-primary__list').children('.footer-primary__title').on('click', function(event){
                    event.preventDefault();
                    $(this).siblings(".footer-primary__list__item").slideToggle(200);
                 });
            }());
      } else{
         $(".footer-primary__list__item").show(200);
      }
}



//Smooth Scrolling : https://css-tricks.com/snippets/jquery/smooth-scrolling/
 $(function() {
   if ( $('.navigation_courses__list-item--link').length ) {

        $('.navigation_courses__list-item--link').click(function() {
          if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top)-80
              }, 1000);
              return false;
            }
          }
        });
    }
});
  //end Smooth Scrolling








///simple modal image
   $(function() {
     if ( $('.section__course-gallery-list--link').length ) {
         $('.section__course-gallery-list--link').on('click', function(event){
               event.preventDefault();
              // alert("foi")
              $(this).toggleClass("active");

         });
       }
     }());













  ///cards para transformar em card ou linha
     $(function() {
        if ( $('.toggle-form-type').length ) {

             $('.toggle-form-type').on('click', function(event){
                   event.preventDefault();
                   $(this).toggleClass('toggle-form-type--active');

                  if($('.card-course').hasClass('card-format-block')) {
                    $(".card-course").removeClass("card-format-block").addClass("card-format-line");
                    $(".card-course").addClass("card-format-line");
                    $(".filtered-list").removeClass("small-block-grid-1 medium-block-grid-2 large-block-grid-3").addClass("small-block-grid-1 medium-block-grid-1 large-block-grid-1");
                    $(".isotope_content-item").addClass("isotope_content-item--list");

                   }
                  else if($('.card-course').hasClass('card-format-line')) {
                    $(".card-course").removeClass("card-format-line").addClass("card-format-block");
                    $(".card-course").addClass("card-format-block");
                    $(".filtered-list").removeClass("small-block-grid-1 medium-block-grid-1 large-block-grid-1").addClass("small-block-grid-1 medium-block-grid-2 large-block-grid-3");
                    $(".isotope_content-item").removeClass("isotope_content-item--list");
                  }

                  $('#container-isotope').isotope();

             });
        }
      }());












$(document).ready(function() {
  if ( $('.owl-sync').length ) {

        var sync1 = $("#gallery-sync_bigger");
        var sync2 = $("#gallery-sync_thumb");
        var slidesPerPage = 6; //globaly define number of elements per page
        var syncedSecondary = true;

        sync1.owlCarousel({
          items : 1,
          slideSpeed : 2000,
          nav: true,
          autoplay: true,
          dots: false,
          loop: true,
          responsiveRefreshRate : 200,
          navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>','<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
        }).on('changed.owl.carousel', syncPosition);

        sync2
          .on('initialized.owl.carousel', function () {
            sync2.find(".owl-item").eq(0).addClass("current");
          })
          .owlCarousel({
          items : slidesPerPage,
          dots: false,
          nav: false,
          smartSpeed: 200,
          slideSpeed : 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate : 100
        }).on('changed.owl.carousel', syncPosition2);

        function syncPosition(el) {
          //if you set loop to false, you have to restore this next line
          //var current = el.item.index;

          //if you disable loop you have to comment this block
          var count = el.item.count-1;
          var current = Math.round(el.item.index - (el.item.count/2) - 0.5);
          if(current < 0) {
            current = count;
          }
          if(current > count) {
            current = 0;
          }
          //end block

          sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
          var onscreen = sync2.find('.owl-item.active').length - 1;
          var start = sync2.find('.owl-item.active').first().index();
          var end = sync2.find('.owl-item.active').last().index();

          if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
          }
          if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
          }
        }

        function syncPosition2(el) {
          if(syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
          }
        }

        sync2.on("click", ".owl-item", function(e){
          e.preventDefault();
          var number = $(this).index();
          sync1.data('owl.carousel').to(number, 300, true);
        });

  }
});
