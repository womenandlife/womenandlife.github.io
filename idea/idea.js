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

//morebtn跳到指定高度
  $(function(){
    // 幫 a.abgne_gotoheader 加上 click 事件
    $(".morebtn").click(function(){
      // 讓捲軸用動畫的方式移動到 0 的位置
      // 感謝網友 sam 修正 Opera 問題
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: 700
      }, 600);
   
      return false;
    });
  });

  $(function(){
    // 幫 a.abgne_gotoheader 加上 click 事件
    $(".top").click(function(){
      // 讓捲軸用動畫的方式移動到 0 的位置
      // 感謝網友 sam 修正 Opera 問題
      var $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
      $body.animate({
        scrollTop: 0
      }, 600);
   
      return false;
    });
  });