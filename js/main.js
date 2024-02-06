$(".reviews.owl-carousel").owlCarousel({
  loop: false,
  margin: 10,
  nav: false,
  dots: true,
  rtl: true,
  responsive: {
    0: { items: 1, nav: false, dots: false },
    600: { items: 2, nav: false, dots: false },
    1000: { items: 2 },
  },
});
$(".order-gallery .owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  rtl: true,
  navText: [
    "<i class='fas fa-chevron-right'></i>",
    "<i class='fas fa-chevron-left'></i>",
  ],
  responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
});
$(".gallery-images").magnificPopup({
  delegate: "a",
  type: "image",
  gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] },
  callbacks: {
    elementParse: function (item) {
      if (item.el[0].className == "video") {
        item.type = "iframe";
      } else {
        item.type = "image";
      }
    },
  },
});
$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() == $(document).height()) {
    $(".CartCircle").css("display", "none");
    $(".lbvXTF").css("display", "none");
  } else {
    $(".CartCircle").css("display", "unset");
    $(".lbvXTF").css("display", "unset");
  }
});
$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
$(document).ready(function () {
  $(".owl-nav").attr("aria-hidden", "true");
  $(".owl-dots").attr("aria-hidden", "true");
  $(".owl-prev").removeAttr("role");
  $(".owl-next").removeAttr("role");
  $(".owl-prev").attr("role", "button");
  $(".owl-next").attr("role", "button");
});
function preloader_end() {
  $("#loader").fadeOut();
  $("#loader-mask").delay(350).fadeOut("slow");
}
window.addEventListener("load", preloader_end);
