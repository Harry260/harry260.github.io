const body = $("body");
const web_header = $(".header-wrap");
const header_nav = $(".header-nav");
const my_work_btn = $(".my-work-btn");
const item_list = $(".item-list");
const cursor = $(".cursor");
const button_action = $(".button-action");
const button_menupop = $(".button-menupop");
var menu_visible;
var isTouch;

initAnimation();

if ("ontouchstart" in document.documentElement)
{
  isTouch = true;
  cursor.remove();
}
else
{
  isTouch = false
}

$("a").addClass("cursor-powerup");
button_action.addClass("cursor-powerup");

function initAnimation() {
  animateCSS(".hero-h1", "lightSpeedInLeft", false);
}

function animateCSS(element, type, removeState) {
  var type = "animate__" + type;
  $(element).addClass("animate__animated " + type);
  if (removeState) {
    setTimeout(() => {
      $(element).removeClass(type);
    }, 5000);
  }
}

//HERO TEXT ANIMATION
(function () {
  // Init
  var container = document.querySelector(".hero-wrapper"),
    inner = document.querySelector(".hero-text");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function (event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function (e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function () {
      return "(" + this.x + ", " + this.y + ")";
    },
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function () {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function (event) {
    update(event);
  };

  var onMouseLeaveHandler = function () {
    inner.style = "";
  };

  var onMouseMoveHandler = function (event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function (event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner.offsetHeight / 2).toFixed(2),
      (mouse.x / inner.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function (x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner.style.transform = style;
    inner.style.webkitTransform = style;
    inner.style.mozTranform = style;
    inner.style.msTransform = style;
    inner.style.oTransform = style;
  };

  //--------------------------------------------------------

  container.onmousemove = onMouseMoveHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmouseenter = onMouseEnterHandler;
})();

$(window).scroll(function () {
  var ScrollTop = $(window).scrollTop();
  if (ScrollTop > 20) {
    my_work_btn.fadeOut("fast");
    header_nav.addClass("header-nav-normal");
    web_header.addClass("header-b");
  } else {
    header_nav.removeClass("header-nav-normal");
    web_header.removeClass("header-b");
    my_work_btn.fadeIn();
  }
});

item_list.attr("data-aos", "fade-up");
AOS.init();

item_list.on("mouseenter", function () {
  var animation = "pulse";
  $(this).addClass("animate__animated animate__" + animation);
  setTimeout(() => {
    $(this).removeClass("animate__animated animate__" + animation);
  }, 1000);
});

$(document).ready(function () {

  $(window).mousemove(function (e) {
    cursor.css({
      top: e.clientY - cursor.height() / 2 - 5,
      left: e.clientX - cursor.width() / 2 - 5,
    });
  });

  $(window)
    .mouseleave(function () {
      cursor.css({
        opacity: "0",
      });
    })
    .mouseenter(function () {
      cursor.css({
        opacity: "1",
      });
    });

  $(".cursor-powerup")
    .mouseenter(function () {
      cursor.css({
        transform: "scale(1.9)",
      });
    })
    .mouseleave(function () {
      cursor.css({
        transform: "scale(1)",
      });
    });

  $(window)
    .mousedown(function () {
      cursor.css({
        transform: "scale(.2)",
      });
    })
    .mouseup(function () {
      cursor.css({
        transform: "scale(1)",
      });
    });
});


button_menupop.on("click", function(){
  header_nav.fadeIn().css("display", "flex");
  menu_visible = true;
})

header_nav.on("click", function(){
  if(menu_visible){
    $(this).fadeOut();
  }
})

$(".item-list h1").on("click", function(){
  if(isTouch){
    var link = $(this).parent().find("a").attr("href");
    window.open(link);
  }
})
