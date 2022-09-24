$(document).ready(function() {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle").text("Read Less");
      $("#text").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle").text("Read More");
      $("#text").slideUp();
    }
  });
});

$(document).ready(function() {
  $("#toggle1").click(function() {
    var elem = $("#toggle1").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle1").text("Read Less");
      $("#text1").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle1").text("Read More");
      $("#text1").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle2").click(function() {
    var elem = $("#toggle2").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle2").text("Read Less");
      $("#text2").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle2").text("Read More");
      $("#text2").slideUp();
    }
  });
});


$(document).ready(function() {
  $("#toggle3").click(function() {
    var elem = $("#toggle3").text();
    if (elem == "Read More") {
      //Stuff to do when btn is in the read more state
      $("#toggle3").text("Read Less");
      $("#text3").slideDown();
    } else {
      //Stuff to do when btn is in the read less state
      $("#toggle3").text("Read More");
      $("#text3").slideUp();
    }
  });
});

// read more




$(function() {

    $('#menu').slicknav();

});





// Search

$('.search-box a').click(function(e) {

    e.preventDefault();

    if ($(this).hasClass('show-search')) {

        $(this).removeClass('show-search');

        $(this).find('i').removeClass('fa-times');

        $(this).find('i').addClass('fa-search');

    } else {

        $(this).addClass('show-search');

        $(this).find('i').removeClass('fa-search');

        $(this).find('i').addClass('fa-times');

    }

});

// Search







$('.opt-prev').click(function(e) {

    e.preventDefault();

    $('.optimist-slider .slick-prev').click();

})

$('.opt-next').click(function(e) {

    e.preventDefault();

    $('.optimist-slider .slick-next').click();

})



// blogslider start

$('.optimist-slider').slick({

    dots: false,

    arrows: true,

    infinite: true,

    speed: 300,

    slidesToShow: 2,

    slidesToScroll: 1,

    responsive: [{

            breakpoint: 1100,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 600,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1

            }

        },

        {

            breakpoint: 480,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1

            }

        }

    ]

});

$('.part-sl-mn').slick({

    dots: false,

    arrows: true,

    infinite: true,
    autoplay:true,
    autoplaySpeed:1000,
    speed: 300,

    slidesToShow: 5,

    slidesToScroll: 1,

    responsive: [{

            breakpoint: 1100,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1,

            }

        },

        {

            breakpoint: 600,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1

            }

        },

        {

            breakpoint: 480,

            settings: {

                slidesToShow: 1,

                slidesToScroll: 1

            }

        }

    ]

});



// blogslider end



// product slider jas start



$('.slider-for').slick({

    slidesToShow: 1,

    slidesToScroll: 1,

    arrows: false,

    fade: true,

    asNavFor: '.slider-nav'

});

$('.slider-nav').slick({

    slidesToShow: 3,

    slidesToScroll: 1,

    asNavFor: '.slider-for',

    dots: true,

    centerMode: true,

    focusOnSelect: true

});

// product slider jas end



// simple slick slider start

$(".regular").slick({

    dots: true,

    infinite: true,

    speed: 300,

    autoplay: true,

    slidesToShow: 3,

    slidesToScroll: 3

});



// simple slick slider end



// wow animation js 



$(function() {

    new WOW().init();

});





// responsive menu js 



$(function() {

    $('#menu').slicknav();

});







// slick slider in tabs js start



function openCity(evt, cityName) {

    // Declare all variables

    var i, tabcontent, tablinks;



    // Get all elements with class="tabcontent" and hide them

    tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {

        tabcontent[i].style.display = "none";

    }



    // Get all elements with class="tablinks" and remove the class "active"

    tablinks = document.getElementsByClassName("tablinks");

    for (i = 0; i < tablinks.length; i++) {

        tablinks[i].className = tablinks[i].className.replace("active", "");

    }



    // Show the current tab, and add an "active" class to the button that opened the tab

    document.getElementById(cityName).style.display = "block";

    evt.currentTarget.className += "active";

}





// slick slider in tabs js end