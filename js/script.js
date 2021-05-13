// JavaScript Document

$(function(){

/*------------------*/
/*-mainvisual slide-*/
/*------------------*/
  var $slide = $(".slide")
  .slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    autoplay: true
  })
  .on({
    beforeChange: function(event, slick, currentSlide, nextSlide) {
      $(".slick-slide", this).eq(currentSlide).addClass("preve-slide");
      $(".slick-slide", this).eq(nextSlide).addClass("slide-animation");
    },
    afterChange: function() {
      $(".preve-slide", this).removeClass("preve-slide　slide-animation");
    }
  });
$slide.find(".slick-slide").eq(0).addClass("slide-animation");

/*------------------*/
/*-ふわっと slide in-*/
/*------------------*/
  $(window).scroll(function (){
    $('main .concept_item:nth-of-type(2n),main .concept_item:nth-of-type(2n-1),.access_inner,.content_message img:not(h2 img),.owner_img,.content_owner .subtitle+img,.scrollbox').each(function(){
     var targetElement = $(this).offset().top;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();
     if (scroll > targetElement - windowHeight + 250){
       $(this).css('transform','translate(0,0)');
       $(this).css('opacity','1');
      }
     });
    });

/*-半透明ふわっと slide in-*/
  $(window).scroll(function (){
    $('.linkevent_inner,.linkfood_inner').each(function(){
     var targetElement = $(this).offset().top;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();
     if (scroll > targetElement - windowHeight + 250){
       $(this).css('transform','translate(0,0)');
       $(this).css('opacity','0.65');
      }
     });
    });

/*-slide in　スマホで無効-*/
if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
	  $(window).scroll(function (){
    $('main .concept_item:nth-of-type(2n),main .concept_item:nth-of-type(2n-1)').each(function(){
     var targetElement = $(this).offset().top;
     var scroll = $(window).scrollTop();
     var windowHeight = $(window).height();
     if (scroll > targetElement - windowHeight + 250){
       $(this).css('transform','translate(0,0)');
       $(this).css('opacity','1');
      }
     });
    });
}

/*------------------*/
/*-slide in herley-*/
/*------------------*/
  $(window).scroll(function () {
    $(".harley").each(function () {
      var elemPos = $(this).offset().top; /* 要素の位置を取得 */
      var scroll = $(window).scrollTop(); /* スクロール位置を取得 */
      var windowHeight = $(window).height(); 
        /* 画面幅を取得（画面の下側に入ったときに動作させるため） */
      if (scroll > elemPos - windowHeight + 20) {
        /* 要素位置までスクロール出来たときに動作する */
        $(this).addClass("effect-scroll");
      }
    });
    
  });

/*------------------*/
/*-slick slide gallry-*/
/*------------------*/
    $('.regular_3').slick({
      infinite: true,
      autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    });

/*------------------*/
/*-newspage tab切り替え-*/
/*------------------*/
$("#event_detail div[id !='tab1']").hide();
  $(".event_inner>a").click(function(){
    $("#event_detail div").hide();
    $($(this).attr("href")).fadeIn();
    $(".current").removeClass("current");
    $(this).addClass("current");
    return false;
    });

/*------------------*/
/*-toppage loading-*/
/*------------------*/
  $(window).on('load',function(){
    $("#splash").delay(1300).fadeOut('slow');
   });
   function loaderClose(){
     $("#splash").fadeOut('slow');
   }
   setTimeout(loaderClose,10000);

/*------------------*/
/*-レスポンシブtogglemenu-*/
/*------------------*/

  $(".menu-trigger").click(function(){
     $('.f_nav').addClass('open');
     $('.overlay').addClass('open');
    });
  $(".batsu").click(function(){
    $('.f_nav').removeClass('open');
    $('.overlay').removeClass('open');
  });

/*------------------*/
/*-totop button-*/
/*------------------*/
	$(".totop").click(function(){
		$("html,body").animate({scrollTop: 0},600);
	});

/*------------------*/
/*--naviスムーススクロール--*/
/*------------------*/
if(!navigator.userAgent.match(/(iPhone|iPad|Android)/)){
	$(window).scroll(function(){
		$(".f_nav").stop().animate({"top":$(window).scrollTop() + 20},500);
	});
}

/*------------------*/
/*--menuスムーススクロール--*/
/*------------------*/
  $(".menu_tab a").click(function(){
    var target = $($(this).attr("href")).offset().top;
    target -= 60;
    $("html, body").animate({scrollTop : target }, 500);
    return false;
  });
});


