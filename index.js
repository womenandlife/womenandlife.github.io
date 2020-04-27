AOS.init({
  duration: 1200
});

//以下讓捲軸上滾出現nav下滾消失
var bodyClass = document.body.classList,
  lastScrollY = 0;
window.addEventListener("scroll", function() {
  var st = this.scrollY;
  // 判斷是向上捲動，而且捲軸超過 200px
  if (st < lastScrollY) {
    bodyClass.remove("hideUp");
  } else {
    bodyClass.add("hideUp");
  }
  lastScrollY = st;
});




$(".button6").click(function() {
  $(".result1").addClass("result2");
});
$(".question2").click(function() {
  $(".question2result").addClass("question2result2");
  $(".more").addClass("more1");
});

//swiper人物
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

$('.swiper-pagination').on('click','li',function(){
  var index = this.innerHTML;
});


//-以下使得滾動網頁時，一旦往下就會顯現navbar，原來在網頁最上面時，不會顯現
//$(window).scroll(function(e) {
  //if ($(window).scrollTop() <= 0) $("nav").css("visibility", "hidden");
//  else $("nav").css("visibility", "visible");
//});

//-以下是讓滾動變得滑順
$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $(".nav-link").click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html,body").animate(
          {
            scrollTop: target.offset().top
          },
          500
        ); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});



