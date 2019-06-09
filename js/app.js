(function () {
  var e, t, a, l, n;
  for (a = function (e, t) {
    var a, l, n;
    for (a = void 0, l = void 0, n = void 0, l = document.getElementsByClassName("tab__container"), a = 0; a < l.length;) l[a].style.display = "none", a++;
    for (n = document.getElementsByClassName("tab__links"), a = 0; a < n.length;) n[a].className = n[a].className.replace(" active", ""), a++;
    document.getElementById(t).style.display = "block", e.currentTarget.className += " active"
  }, document.getElementById("tab-01") && (document.getElementById("tab-01").style.display = "block"), n = document.querySelectorAll("a.tab__links"), e = 0, t = n.length; e < t; e++) l = n[e], l.addEventListener("click", function (e) {
    var t;
    e.preventDefault(), t = e.target.attributes.href.value.replace("#", ""), a(e, t)
  })
}).call(this);

$(document).on("click", function (e) {
  var container = $(".content-menu");
  if (!container.is(e.target) && container.has(e.target).length === 0) {
    $('.nav-display').removeClass('nav-active');
  }
});

const btn = $('#btn-menu')
const contentMenu = $('#visible');

btn.click(function () {
  contentMenu.addClass('nav-active')
  $('#list-show').addClass('list-style-activo')
})
$('#delete').click(function () {
  contentMenu.removeClass('nav-active li')
  $('#list-show').removeClass('list-style-activo')
})
$('#arrow-bottom').click(function () {
  $('html, body').animate({
    scrollTop: $("#scrool-experience").offset().top - 30
  }, 1000);
})

$("#btn-uppArrow").on('click', function () {
  $('html, body').animate({
    scrollTop: $("#videoTop").offset().top - 32
  }, 1000);
});
$(".register-form").on('click', function () {
  $('html, body').animate({
    scrollTop: $(".content-form").offset().top - 32
  }, 1000);
});
$(".btn-scroll").on('click', function () {
  $('html, body').animate({
    scrollTop: $("#intro").offset().top - 0
  }, 1000);
});


function nav() {
  $('#videoBox').addClass('out')
  $(window).scroll(function () {
    if ($(window).scrollTop() < 200) {
      $('#content-nav').removeClass('navbar-show');
      $('#videoBox').addClass('out')
      // btn-menu
    } else if ($(window).scrollTop() >= 300) {
      $('#content-nav').addClass('navbar-show');
      $('#videoBox').removeClass('out')
    }
  });
}
nav();

// //scrolling logo //
// $('#videoBox').css('display','none')

// function scrollLogo() {
//   $(window).scroll(function () {
//     if ($(window).scrollTop() <= 500) {
//       $('#videoBox').addClass('out')
//       $('#videoBox').css('display','none')
//     }
//     if ($(window).scrollTop() > 600) {
//       $('#videoBox').addClass('out')
//       $('#videoBox').css('display','none')
//     }
//     if ($(window).scrollTop() > 900) {
//       $('#videoBox').removeClass('out');
//       $('#videoBox').css('display','block')
//     } 
//   });
// }
// scrollLogo();

var VR = {
  //tab
  jqs_slideList: '.info-list',
  jqs_tabList: '.slides .tabListItem',

  ini: function () {
    //init sliders
    var aSliders = $(this.jqs_slideList);
    if (aSliders.length > 0) {
      this.slideShow(aSliders);
    }
  },
  slideShow: function (eSlideListParam) {
    var slideList = eSlideListParam,
      slides = slideList.find('li'),
      tabList = slideList.siblings('.tabListItem'),
      tabs = tabList.find('li'),
      speed = 600;

    tabs.on('click', 'a', function (e) {
      $(this).trigger('slides.swap');
      e.preventDefault();
    });

    // automatic
    setInterval(function () {
      var current = parseInt($('li.selected .tab').data('tab').split('_')[1], 10);
      var idx = current - 1;
      var max = $('.tabListItem li .tab').length;
      idx = (current < max) ? (idx + 1) : 0;
      $('.tab:eq(' + idx + ')').trigger('click');
    }, 10000);

    tabs.find('a').bind('slides.swap', function () {
      var self = $(this),
        selfIndex = self.parent().index(),
        targetSlide = slides.eq(selfIndex);

      //fade in/out slides
      slides.filter('.active').stop(true, false).fadeOut(speed, function () {
        $(this).removeClass('active');
      });
      targetSlide.stop(true, false).fadeIn(speed).addClass('active');

      tabs.removeClass('selected');
      self.parent().addClass('selected');
    });
  }
};

VR.ini();