AOS.init({
  duration: 1200
});

$(".topbtn").click(function() {
  swiper.slideTo(0, 1000, false);
});
$(".top").click(function() {
  swiper.slideTo(0, 1000, false);
});
$(".morebtn").click(function() {
  swiper.slideTo(1, 1000, false);
});

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


var swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  }
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

// init chart
let chartConfig = {
  type: "pie",
  backgroundColor: "#ffe2e0",
  title: {
    // text: 'Global Browser Usage',
    align: "left",
    fontColor: "#fff",
    fontFamily: "Open Sans",
    fontSize: "25px",
    offsetX: "10px"
  },
  subtitle: {
    text: "June 2019",
    align: "left",
    fontColor: "#8e99a9",
    fontFamily: "Open Sans",
    fontSize: "16px",
    offsetX: "10px",
    offsetY: "10px"
  },
  plot: {
    tooltip: {
      text: "%npv%",
      padding: "5 10",
      fontFamily: "Open Sans",
      fontSize: "18px"
    },
    valueBox: {
      text: "%t\n%npv%",
      fontFamily: "Open Sans",
      placement: "out"
    },
    animation: {
      effect: "ANIMATION_EXPAND_VERTICAL",
      method: "ANIMATION_REGULAR_EASE_OUT",
      sequence: "ANIMATION_BY_PLOT",
      speed: 500
    },
    borderColor: "#ffe2e0",
    borderWidth: "5px"
  },
  plotarea: {
    margin: "20 0 0 0"
  },
  // source: {
  //   text: 'Source: gs.statcounter.com',
  //   fontColor: '#8e99a9',
  //   fontFamily: 'Open Sans',
  //   textAlign: 'left'
  // },
  series: [
    {
      text: "IE and Edge",
      values: [5],
      backgroundColor: "#fff"
    },
    {
      text: "Chrome",
      values: [63.69],
      backgroundColor: "#FF7965"
    },
    {
      text: "Firefox",
      values: [4.64],
      backgroundColor: "#FFCB45"
    },
    {
      text: "Safari",
      values: [15.15],
      backgroundColor: "#6877e5"
    },
    {
      text: "Other",
      values: [11.72],
      backgroundColor: "#6FB07F"
    }
  ]
};

// RENDER CHARTS
// -----------------------------
zingchart.render({
  id: "myChart",
  data: chartConfig,
  height: "100%",
  width: "100%"
});

