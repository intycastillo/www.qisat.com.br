$(function() {
  $(document).on('click', ".show-filters a", function(e){
    e.preventDefault();

    var $elText = $(this).find("span");

    if($elText.text() == "Mostrar filtros"){
      $elText.text('Esconder filtros');
    } else {
      $elText.text('Mostrar filtros');
    }

    $(".menu-filter-sidebars").toggleClass("show-for-small-up");
      
  });

 
  $(document).on('click', ".anchor", function(e){
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
      }
  });

   $(".map__state").click(function() {
      $(".mapa .map__state").removeClass("active");
      $(this).addClass("active");
  });
   
});

 // $('.header-main__item-cart,  #cd-shadow-layer, .cd-go-to-cart').on('click', function(event){
 //         event.preventDefault();
 //        $("#cd-cart, #cd-shadow-layer, .header-main__list-cart").toggleClass("actived");
 // });





//toggle foter
// if ( $('.footer-primary__list__item').length ) {
//       if ($(window).width() < 640) {

//           $(function() {
//             $(".footer-primary__list__item").hide(200);

//                  $('.footer-primary__list').children('.footer-primary__title').on('click', function(event){
//                     event.preventDefault();
//                     $(this).siblings(".footer-primary__list__item").slideToggle(200);
//                  });
//             }());
//       } else{
//          $(".footer-primary__list__item").show(200);
//       }
// }


///cards para transformar em card ou linha
   $(function() {
      if ( $('.toggle-form-type').length ) {

           $('.toggle-form-type').on('click', function(event){
                 event.preventDefault();
                 $(this).toggleClass('toggle-form-type--active');

                if($('.card-course').hasClass('card-format-block')) {
                  $(".card-course").removeClass("card-format-block").addClass("card-format-line");
                  $(".card-course").addClass("card-format-line");
                  $(".list-filter").removeClass("small-block-grid-1 medium-block-grid-3 large-block-grid-3").addClass("small-block-grid-1 medium-block-grid-1 large-block-grid-1");

                 }
                else if($('.card-course').hasClass('card-format-line')) {
                  $(".card-course").removeClass("card-format-line").addClass("card-format-block");
                  $(".card-course").addClass("card-format-block");
                  $(".list-filter").removeClass("small-block-grid-1 medium-block-grid-1 large-block-grid-1").addClass("small-block-grid-1 medium-block-grid-3 large-block-grid-3");
                 }
           });
      }
    }());



//Smooth Scrolling : https://css-tricks.com/snippets/jquery/smooth-scrolling/
$(document).ready(function() {
    
        $('body').on('click', '.page-certificates .card a', function(e){
          e.preventDefault();
          $(this).closest('form').submit();
        });


        // TINHA DO TEMPO - INSTITUCIONAL
        $(document).on('click', ".timeline__list-group li", function(e){
          e.preventDefault();

          var getRef = $(this).closest("li").data("year");
          $(this).addClass("active").siblings().removeClass("active");

          $(".timeline__post.active").removeClass("active").hide();
          $(document).find(".timeline__post.year-"+getRef).fadeIn("fast", function () {
              $(this).addClass("active");
          });
        });

         $(document).on('click', '.buttom-favorite', function(event){
                   event.preventDefault();
                  $(this).toggleClass("buttom-favorite-active");

                  var bookmarkURL = window.location.href;
                  var bookmarkTitle = document.title;

                  if ('addToHomescreen' in window && window.addToHomescreen.isCompatible) {
                      // Mobile browsers
                      addToHomescreen({ autostart: false, startDelay: 0 }).show(true);
                  } else if (window.sidebar && window.sidebar.addPanel) {
                      // Firefox version < 23
                      window.sidebar.addPanel(bookmarkTitle, bookmarkURL, '');
                  } else if ((window.sidebar && /Firefox/i.test(navigator.userAgent)) || (window.opera && window.print)) {
                      // Firefox version >= 23 and Opera Hotlist
                      $(this).attr({
                          href: bookmarkURL,
                          title: bookmarkTitle,
                          rel: 'sidebar'
                      });
                      return true;
                  } else if (window.external && ('AddFavorite' in window.external)) {
                      // IE Favorite
                      window.external.AddFavorite(bookmarkURL, bookmarkTitle);
                  } else {
                      // Other browsers (mainly WebKit - Chrome/Safari)
                      console.log('Pease press ' + (/Mac/i.test(navigator.userAgent) ? 'CMD' : 'Strg') + ' + D to add this page to your favorites.');
                  }

                  return false;
             });

    // $('body').on('click', '.anchor-link', function(event){
    //   event.preventDefault();
    //   return false;
    // });
});