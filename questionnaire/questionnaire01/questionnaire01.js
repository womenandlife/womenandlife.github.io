AOS.init();

//回到最上面
$(".topbtn").click(function() {
  swiper.slideTo(0, 1000, false);
});
$(".top").click(function() {
  swiper.slideTo(0, 1000, false);
});

//指定more按鈕到特定頁面
$(".morebtn").click(function() {
  swiper.slideTo(1, 1000, false);
});

//滾動出現nav
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

$(document).ready(function() {
  $(".search").click(function() {
    $(".search").hide();
    $(".searchword").hide();
  });
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

var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
}

);

//製作第三頁文字欄
var x;
$(".basket03-2btn").click(
  function(){
    $(".basket03-1btn").addClass("basket03-1btn-hide");
    $(".basket03-2btn").addClass("basket03-2btn-show");
    x=$(".basket03-1words").detach();
    $(".basket03-2words").addClass("basket03-2words-show");
    $(".three-02").addClass("three-02-show");
  }
);
$(".basket03-1btn").click(
  function(){
    $(".basket03-1btn").removeClass("basket03-1btn-hide");
    $(".basket03-2btn").removeClass("basket03-2btn-show");
    $(".basket03").prepend(x);;
    $(".basket03-2words").removeClass("basket03-2words-show");
    $(".three-02").removeClass("three-02-show");
  }
);
// init chart
var myConfig = {
  type: "pie",
  plot: {
    borderColor: "#fff",
    borderWidth: 3,
    // slice: 90,
    valueBox: {
      placement: 'out',
      text: '%t\n%npv%',
      fontFamily: "微軟正黑體"
    },
    tooltip: {
      fontSize: '18',
      fontFamily: "微軟正黑體",
      padding: "5 10",
      text: "%npv%"
    },
    animation: {
      effect: 2,
      method: 5,
      speed: 400,
      sequence: 1,
      delay: 3000
    }
  },

  plotarea: {
    margin: "20 0 0 0"
  },
  series: [{
      values: [17.88],
      text: "服務業類",
      backgroundColor: '#665c84',
    },
    {
      values: [13.91],
      text: "教育研究類",
      backgroundColor: '#ff7657',
      detached: true
    },
    {
      values: [11.92],
      text: '工程製造類',
      backgroundColor: '#ffba5a',
      detached: true
    },
    {
      text: '軍警行政類',
      values: [11.92],
      backgroundColor: '#fbc490'
    },
    {
      text: '商業財經管理類',
      values: [9.27],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '公關行銷企劃類',
      values: [4.64],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '醫藥類',
      values: [3.97],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '編輯設計類',
      values: [3.31],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '法律類',
      values: [1.32],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '影視媒體類',
      values: [1.32],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '政治類',
      values: [0.66],
      backgroundColor: '#e6e5e3'
    },
    {
      text: '其他(如：整帳員)',
      values: [30],
      backgroundColor: '#e6e5e3'
    },
  ]
};
 
zingchart.render({
  id: 'myChart',
  data: myConfig,
  height: '100%',
  width: '100%'
});

//製作第六頁文字欄
var a;
$(".basket06-2btn").click(
  function(){
    $(".basket06-1btn").addClass("basket06-1btn-hide");
    $(".basket06-2btn").addClass("basket06-2btn-show");
    a=$(".basket06-1words").detach();
    $(".basket06-2words").addClass("basket06-2words-show");
    $(".six-02").addClass("six-02-show");
  }
);
$(".basket06-1btn").click(
  function(){
    $(".basket06-1btn").removeClass("basket06-1btn-hide");
    $(".basket06-2btn").removeClass("basket06-2btn-show");
    $(".basket06").prepend(a);;
    $(".basket06-2words").removeClass("basket06-2words-show");
    $(".six-02").removeClass("six-02-show");
  }
);

