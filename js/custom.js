$(document).ready(function () {
  $(".toggle-menu").jPushMenu({ closeOnClickLink: false });
  $(".dropdown-toggle").dropdown();
  $('[data-toggle="tooltip"]').tooltip();
});
(function ($) {
  $.fn.jPushMenu = function (customOptions) {
    var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
    $("body").addClass(o.bodyClass);
    $(this).addClass("jPushMenuBtn");
    $(this).click(function () {
      var target = "",
        push_direction = "";
      if ($(this).is("." + o.showLeftClass)) {
        target = ".cbp-spmenu-left";
        push_direction = "toright";
      } else if ($(this).is("." + o.showRightClass)) {
        target = ".cbp-spmenu-right";
        push_direction = "toleft";
      } else if ($(this).is("." + o.showTopClass)) {
        target = ".cbp-spmenu-top";
      } else if ($(this).is("." + o.showBottomClass)) {
        target = ".cbp-spmenu-bottom";
      }
      $(this).toggleClass(o.activeClass);
      $(target).toggleClass(o.menuOpenClass);
      if ($(this).is("." + o.pushBodyClass)) {
        $("body").toggleClass("cbp-spmenu-push-" + push_direction);
      }
      $(".jPushMenuBtn").not($(this)).toggleClass("disabled");
      return false;
    });
    var jPushMenu = {
      close: function (o) {
        $(".jPushMenuBtn,body,.cbp-spmenu").removeClass(
          "disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright"
        );
      },
    };
    if (o.closeOnClickOutside) {
      $(document).click(function () {
        jPushMenu.close();
      });
    }
    if (o.closeOnClickLink) {
      $(".cbp-spmenu a").on("click", function () {
        jPushMenu.close();
      });
    }
  };
  $.fn.jPushMenu.defaultOptions = {
    bodyClass: "cbp-spmenu-push",
    activeClass: "menu-active",
    showLeftClass: "menu-left",
    showRightClass: "menu-right",
    showTopClass: "menu-top",
    showBottomClass: "menu-bottom",
    menuOpenClass: "cbp-spmenu-open",
    pushBodyClass: "push-body",
    closeOnClickOutside: true,
    closeOnClickInside: true,
    closeOnClickLink: true,
  };
})(jQuery);
filterSelection("new");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
$("#myBtnContainer").each(function (i, myBtnContainer) {
  var $myBtnContainer = $(myBtnContainer);
  $myBtnContainer.on("click touchstart", "button", function () {
    $myBtnContainer.find(".active").removeClass("active");
    $(this).addClass("active");
  });
});
jQuery(function ($) {
  "use strict";
  new WOW().init();
  var btn = $("#buttontop");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass("show");
    } else {
      btn.removeClass("show");
    }
  });
  jQuery(
    '<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>'
  ).insertAfter(".quantity input");
  jQuery(".quantity").each(function () {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");
    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });
  var swiper = new Swiper(".swiper-container", {
    pagination: { el: ".swiper-pagination", dynamicBullets: true },
    autoplay: { delay: 3000 },
    loop: false,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  var swiper = new Swiper(".swiper-container2", {
    slidesPerView: 6,
    spaceBetween: 70,
    loop: false,
    pagination: { el: ".swiper-pagination", clickable: true },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: { delay: 3000 },
    breakpoints: {
      1280: { slidesPerView: 6 },
      800: { slidesPerView: 4 },
      640: { slidesPerView: 3 },
      350: { slidesPerView: 2 },
    },
  });
  var swiper = new Swiper(".swiper-container3", {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    autoplay: { delay: 5000 },
    breakpoints: {
      1280: { slidesPerView: 4 },
      800: { slidesPerView: 2 },
      640: { slidesPerView: 1 },
      350: { slidesPerView: 1 },
      0: { slidesPerView: 1 },
    },
  });
  class ProductList {
    constructor($root, $gridBtn, $listBtn) {
      this.$root = $root;
      this.$gridBtn = $gridBtn;
      this.$listBtn = $listBtn;
      this.$gridBtn.on("click", this.switchToGrid.bind(this));
      this.$listBtn.on("click", this.switchToList.bind(this));
    }
    switchToList() {
      this.$root.removeClass("grid-view").addClass("list-view");
    }
    switchToGrid() {
      this.$root.removeClass("list-view").addClass("grid-view");
    }
  }
  var $productList = $(".product-list");
  var $gridBtn = $(".grid-btn");
  var $listBtn = $(".list-btn");
  var productList = new ProductList($productList, $gridBtn, $listBtn);
  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: false,
    freeMode: true,
    loopedSlides: 5,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    loop: false,
    loopedSlides: 5,
    thumbs: { swiper: galleryThumbs },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  $("#myDIV .btn").click(function () {
    if (!$(this).hasClass("activee")) {
      $(".activee").removeClass("activee");
      $(this).addClass("activee");
    } else {
      return false;
    }
  });
  $(".img_payment ul li").click(function () {
    if (!$(this).hasClass("active")) {
      $(".active").removeClass("active");
      $(this).addClass("active");
    } else {
      return false;
    }
  });
  $("#mobile-number").intlTelInput();
  $(document).ready(function () {
    $(".form_datetime").datetimepicker({
      format: "yyyy-mm-dd hh:00",
      rtl: true,
      weekStart: 1,
      todayBtn: 1,
      autoclose: 1,
      todayHighlight: 1,
      startView: 2,
      forceParse: 1,
      minView: 1,
      maxView: 1,
      showMeridian: true,
      startDate: new Date(),
    });
  });
  btn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
  $("body").on("click", ".cli_sho", function () {
    $(".form-inline_hid").toggle(500);
  });
});
$(".otherproduct").owlCarousel({
  margin: 10,
  autoplay: false,
  rtl: true,
  loop: false,
  autoWidth: true,
  items: 3,
});
$(".CateMove").owlCarousel({
  loop: false,
  rtl: true,
  autoplay: false,
  dots: true,
  navText: [
    "<i class='fas fa-chevron-right'></i>",
    "<i class='fas fa-chevron-left'></i>",
  ],
  nav: true,
  margin: 10,
  responsive: { 0: { items: 2 }, 600: { items: 4 }, 1000: { items: 6 } },
});
window.crud_handle_server_errors = function (data) {
  let statusCode = data.status;
  switch (statusCode) {
    case 401:
      Swal.fire({
        type: "success",
        title: "Unauthenticated",
        confirmButtonClass: "btn-success",
        confirmButtonText: "ØªØ£ÙƒÙŠØ¯",
      }).then((result) => {
        location.reload();
      });
      break;
    case 403:
      Swal.fire({
        type: "success",
        title: "You do not have the permission to do that",
        confirmButtonClass: "btn-success",
        confirmButtonText: "ØªØ£ÙƒÙŠØ¯",
      }).then((result) => {
        location.reload();
      });
      break;
    case 419:
      Swal.fire({
        type: "success",
        title: "Token Expired, Please refresh the page. ",
        confirmButtonClass: "btn-success",
        confirmButtonText: "ØªØ£ÙƒÙŠØ¯",
      }).then((result) => {
        location.reload();
      });
      break;
    case 500:
      Swal.fire({
        type: "success",
        title: "Server Error",
        confirmButtonClass: "btn-success",
        confirmButtonText: "ØªØ£ÙƒÙŠØ¯",
      }).then((result) => {
        location.reload();
      });
      break;
    default:
      Swal.fire({
        type: "success",
        title:
          "Ù†Ø£Ø³Ù Ù„Ø­Ø¯ÙˆØ« Ù‡Ø°Ø§ Ø§Ù„Ø®Ø·Ø£! ÙŠØ±Ø¬ÙŠ Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù…Ø±Ù‡ Ø£Ø®Ø±Ù‰",
        confirmButtonClass: "btn-success",
        confirmButtonText: "ØªØ£ÙƒÙŠØ¯",
      }).then((result) => {
        location.reload();
      });
      break;
  }
};
$(".how-final-work .owl-carousel").owlCarousel({
  loop: false,
  rtl: true,
  autoplay: false,
  dots: false,
  nav: false,
  margin: 10,
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
});
