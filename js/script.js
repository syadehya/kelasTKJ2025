// event pada saat link di klik

$(".page-scroll").on("click", function (e) {
  // ambil isi href
  var tujuan = $(this).attr("href");
  // tangkap elemen ybs
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $("html,body").animate(
    {
      scrollTop: elemenTujuan.offset().top - 120,
    },
    1250,
    "easeInOutExpo"
  );

  e.preventDefault();
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 550) {
    $(".navbar").addClass("navbar-shadow");
  } else {
    $(".navbar").removeClass("navbar-shadow");
  }

  // jumbotron

  var wScroll = $(this).scrollTop();

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll / 4 + "%)",
  });

  // vektor

  if (wScroll > $("#tentang-elci").offset().top - 200) {
    $("#tentang-elci .vektor").addClass("muncul");
  }

  if (wScroll > $("#fakta-elci").offset().top - 200) {
    $("#fakta-elci .vektor").addClass("muncul");
  }

  if (wScroll > $("#FAQ").offset().top - 200) {
    $("#FAQ .vektor").addClass("muncul");
  }

  if (wScroll > $("#wali-kelas").offset().top - 250) {
    $("#wali-kelas .homeroom-flex").each(function (i) {
      setTimeout(function () {
        $("#wali-kelas .homeroom-flex").eq(i).addClass("muncul");
      }, 500 * (i + 1));
    });
  }

  if (wScroll > $("#member").offset().top - 300) {
    $("#member .member-content").each(function (i) {
      setTimeout(function () {
        $("#member .member-content").eq(i).addClass("muncul");
      }, 300 * (i + 1));
    });
  }
});

// parallax

$(window).on("load", function () {
  $(".tombol").addClass("tombol-muncul");
  $(".tombol-transparent").addClass("tombol-muncul");
  $(".jumbotron h1").addClass("muncul");
});

function sliderMember() {
  const prev = document.querySelector("#prev");
  const next = document.querySelector("#next");
  const carouselSlide = document.querySelector(".member-flex-slider");
  const carouselImg = document.querySelectorAll(".member-flex-slider-content");
  const dot = document.querySelectorAll("#member .dots span");
  let counter = 0;
  const size = carouselImg[0].clientWidth;

  function toDots(dots) {
    dot.forEach(function (e) {
      e.classList.contains("active");
      e.classList.remove("active");
      dots.classList.add("active");
    });
  }

  function slide() {
    carouselSlide.style.transform = "translateX(" + -size * counter + "px)";
    toDots(dot[counter]);
  }

  next.addEventListener("click", function () {
    if (counter == 3) return;
    counter++;
    slide();
  });
  prev.addEventListener("click", function () {
    if (counter == 0) return;
    counter--;
    slide();
  });

  function sliderMemberDots(dots, toCounter) {
    dots.addEventListener("click", function () {
      if (dots.classList.contains("active")) return;
      counter = toCounter;
      slide();
    });
  }
  sliderMemberDots(dot[0], 0);
  sliderMemberDots(dot[1], 1);
  sliderMemberDots(dot[2], 2);
  sliderMemberDots(dot[3], 3);
}

function sliderkataGuru() {
  const slider = document.querySelector(".teacher-memo-slider");
  const slides = document.querySelectorAll(".teacher-memo-slide");

  let counter = 1;
  const size = slides[0].clientWidth;

  slider.style.transform = `translateX(${-size * counter}px)`;

  setInterval(() => {
    counter++;
    slider.style.transition = "transform 0.7s ease-in-out";
    slider.style.transform = `translateX(${-size * counter}px)`;
  }, 7000);

  slider.addEventListener("transitionend", () => {
    // kalau sampai clone terakhir
    if (slides[counter].id === "first-clone") {
      slider.style.transition = "none";
      counter = 1;
      slider.style.transform = `translateX(${-size * counter}px)`;
    }

    // kalau sampai clone pertama
    if (slides[counter].id === "last-clone") {
      slider.style.transition = "none";
      counter = slides.length - 2;
      slider.style.transform = `translateX(${-size * counter}px)`;
    }
  });
}

sliderkataGuru();
