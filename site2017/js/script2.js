//

$(document).ready(function () {

            $("header").css('position', 'fixed');
            $("header").css('background-color', '#222222');
            $("header a").css('color', '#ffffff');
            $("header").css('padding-bottom', '5px');
            $("header .lingua p").css('color', 'grey');
            $("header .lingua a").css('color', 'grey');
            $("header .lingua").css('position', 'fixed');
            $("header .lingua").css('margin-top', '22px');
            $("header .lingactive").css('color', '#6a9643');
            $("header .lingua p").css('font-size', '15px');


            $("#hamburgermenu").css('position', 'fixed');
            $("#hamburgermenu").css('background-color', '#222222');
            $("#hamburgermenu").css('color', '#ffffff');
            $("#hamburgermenu a").css('text-decoration', 'none');
            $("#hamburgermenu").css('padding-top', '10px');
            $("#hamburgermenu").css('padding-bottom', '10px');
    
            $("#hamburgermenu .lingua p").css('font-size', '15px');
            $("#hamburgermenu .lingua p").css('color', 'grey');
            $("#hamburgermenu .lingua a").css('color', 'grey');
            $("#hamburgermenu .lingua").css('position', 'fixed');
            $("#hamburgermenu .lingua").css('margin-top', '-28px');
            $("#hamburgermenu .lingactive").css('color', '#6a9643');

});



// ————————— Menu 

$('#x').on("click", function () {
   console.log("cliqueasas");
   $('#menupequeno').css('display', 'none');
   $('#hamburgermenu').css('display', 'inline-block');
});


// ————————— Menu pequeno


$('#hamburgermenu h1').on("click", function () {
   console.log("clique no hamburger");
   $('#menupequeno').css('display', 'inline-block');
   $('#hamburgermenu').css('display', 'none');
});




// ————————— Active 

$(window).resize(function () {
   checkActive();
});

$(window).load(function () {
   checkActive();
});



function checkActive() {
   var active = $('.main .active').text();
   if ($('#hamburgermenu').is(':visible'))
      $('span').text(active);
}

function checkActive(active) {
   if ($('#hamburgermenu').is(':visible'))
      $('span').text(active);
}


// ————————— Hover in contacts

$('#link-best').mouseenter(function () {
   $('#info').css('background', 'url("images/bestbk.jpg")');
   $('#info p').css('color', '#ffffff');
   $('#info a').css('color', '#ffffff');

});

$('#link-best').mouseleave(function () {
   $('#info').css('background', '#f9f9f9');
   $('#info p').css('color', '#CCC');
   $('#info a').css('color', '#CCC');

});

$('#link-ebec').mouseenter(function () {
   $('#info').css('background', 'url("images/ebecbk.jpg")');
    $('#info p').css('color', '#ffffff');
    $('#info a').css('color', '#ffffff');

});

$('#link-ebec').mouseleave(function () {
   $('#info').css('background', '#f9f9f9');
       $('#info p').css('color', '#CCC');
   $('#info a').css('color', '#CCC');
});



// ————————— Know section

$(document).on('scroll', function () {
    if ($(this).scrollTop() <= $('#anosAnteriores').position().top) {
        console.log("antes");
        clear();
        $('#7').css('text-decoration', 'underline');
        checkActive($('#7').text());
    }
    if ($(this).scrollTop() >= $('#anosAnteriores').position().top) {
                console.log("depois");

        clear();
        $('#8').css('text-decoration', 'underline');
        checkActive($('#8').text());
    }
    if ($(this).scrollTop() >= $('#contacts').position().top) {
                        console.log("mt depois");

        clear();
        $('#9').css('text-decoration', 'underline');
        checkActive($('#9').text());
    }
})

function clear() {
    $('#6').css('text-decoration', 'none');
    $('#7').css('text-decoration', 'none');
    $('#8').css('text-decoration', 'none');
    $('#9').css('text-decoration', 'none');
}



// ————————— Smooth scrolling


$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});