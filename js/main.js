let navTop = $(window).height() - $("nav").outerHeight();
let hideStart = $(window).height();
let scrollTop2 = 0;

function toScroll() {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > navTop) {
    $("nav").addClass("fixed");
  } else {
    $("nav").removeClass("fixed");
  }
  if (scrollTop > hideStart) {
    $("nav").addClass("hidden");
    if (scrollTop < scrollTop2) {
      $("nav").removeClass("hidden");
    }
  } else {
    $("nav").removeClass("hidden");
  }
  scrollTop2 = $(window).scrollTop();
}

$(window).scroll(toScroll);

$(window).resize(function () {
  navTop = $(window).height() - $("nav").outerHeight();
  hideStart = $(window).height();
});

$("form").on("submit", function (ev) {
  ev.preventDefault();
  $('.send').toggleClass('active');
});

$("a").on('click', function (event) {
  if (this.hash !== "") {
    event.preventDefault();
    let hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function () {
      window.location.hash = hash;
    });
  }
});


function apparait () {
  $( ".revealable" ).each(function() {
    let fromTop = $(this).offset().top;
    let windowScroll = $(window).scrollTop();
    if ((windowScroll + (hideStart - 100)) >= fromTop) {
      //setTimeout(openPopup, 2000);
      $(this).addClass('revealed');
    }
  });
}

setTimeout(apparait(), 2000);
//apparait();
//apparait().delay(1800);

$(window).on('scroll', function() {
  apparait();
  //setTimeout(apparait(), 2000);
  //delay(1800).apparait();
})