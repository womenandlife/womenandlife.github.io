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

//用鍵盤可以操控swiper移動
var checkbox = document.querySelector('#options-keyboard-checkbox')

var glide = new Glide('#options-keyboard', {
  keyboard: checkbox.checked,
  perView: 3
})

checkbox.addEventListener('change', function () {
  glide.update({
    keyboard: checkbox.checked
  })
})

glide.mount()


