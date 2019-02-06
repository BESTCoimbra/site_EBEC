//

$(document).ready(function () {
   var scroll_start = 0;
   var startchange = $("#competicao");
   var offset = startchange.offset();

   $("header").css('position', 'absolute');
   $('header').css('background-color', 'rgba(255,255,255,0)');
   $("header a").css('color', '#ffffff');
   $("header .lingua p").css('font-size', '12px');

   $("header .lingua p").css('color', 'white');
   $("header .lingua a").css('color', 'white');
   $("header .lingua").css('position', 'fixed');
   $("header .lingua").css('margin-top', '0px');
   $("header .lingua").css('position', 'absolute');
   $("header .lingactive").css('color', '#6a9643');
    
   $("#hamburgermenu").css('position', 'absolute');
   $("#hamburgermenu").css('background-color', 'rgba(255,255,255,0)');
   $("#hamburgermenu").css('color', 'white');
   $("#hamburgermenu").css('padding-top', '10px');
   $("#hamburgermenu").css('padding-bottom', '10px');
    
   $("#hamburgermenu .lingua p").css('font-size', '12px');
   $("#hamburgermenu .lingua p").css('color', 'white');
   $("#hamburgermenu .lingua a").css('color', 'white');
   $("#hamburgermenu .lingua").css('position', 'fixed');
   $("#hamburgermenu .lingua").css('margin-top', '-10px');
   $("#hamburgermenu .lingactive").css('color', '#6a9643');

    
   document.getElementById('sp').innerHTML="EBEC 2017";

   if (startchange.length) {
      $(document).scroll(function () {
         scroll_start = $(this).scrollTop();
         if (scroll_start > offset.top) {
            $("header").css('position', 'fixed');
            $("header").css('background-color', '#222222');
            $("header a").css('color', '#ffffff');
             
            $("header .lingua p").css('font-size', '14px');
            $("header .lingua p").css('color', 'grey');
            $("header .lingua a").css('color', 'grey');
            $("header .lingua").css('position', 'fixed');
            $("header .lingua").css('margin-top', '10px');
            $("header .lingactive").css('color', '#6a9643');
                  $("header .lingua p").css('font-size', '15px');
            
            $("#hamburgermenu").css('position', 'fixed');
            $("#hamburgermenu").css('background-color', '#222222');
            $("#hamburgermenu").css('color', '#ffffff');
            $("#hamburgermenu .lingua p").css('font-size', '15px');
            $("#hamburgermenu .lingua p").css('color', 'grey');
            $("#hamburgermenu .lingua a").css('color', 'grey');
            $("#hamburgermenu .lingua").css('position', 'fixed');
            $("#hamburgermenu .lingua").css('margin-top', '-7px');
            $("#hamburgermenu .lingactive").css('color', '#6a9643');
           
         } else {
            $("header").css('position', 'absolute');
            $("header").css('background-color', 'rgba(255,255,255,0)');
            $("header a").css('color', '#ffffff');
            $("header .lingua p").css('font-size', '12px');
            $("header .lingua p").css('color', 'white');
            $("header .lingua a").css('color', 'white');
            $("header .lingua").css('position', 'fixed');
            $("header .lingua").css('margin-top', '0px');
            $("header .lingua").css('position', 'absolute');
            $("header .lingactive").css('color', '#6a9643');
             
            $("#hamburgermenu").css('position', 'absolute');
            $("#hamburgermenu").css('background-color', 'rgba(255,255,255,0)');
            $("#hamburgermenu").css('color', 'white');
                $("#hamburgermenu .lingua p").css('font-size', '12px');

             $("#hamburgermenu .lingua p").css('color', 'white');
            $("#hamburgermenu .lingua a").css('color', 'white');
            $("#hamburgermenu .lingua").css('position', 'fixed');
            $("#hamburgermenu .lingua").css('margin-top', '-15px');
            $("#hamburgermenu .lingua").css('position', 'absolute');
            $("#hamburgermenu .lingactive").css('color', '#6a9643');

         }
      });
   }

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
   if ($(this).scrollTop() <= $('#Competicao').position().top) {
      clear();
      $('#1').css('text-decoration', 'underline');

       checkActive($('#1').text());
   }
   if ($(this).scrollTop() >= $('#equipa').position().top) {
      clear();
      $('#2').css('text-decoration', 'underline');
      checkActive($('#2').text());
   }
   if ($(this).scrollTop() >= $('#equipa').position().top) {
      clear();
      $('#3').css('text-decoration', 'underline');
      checkActive($('#3').text());
   }
   if ($(this).scrollTop() >= $('#apoio').position().top) {
      clear();
      $('#4').css('text-decoration', 'underline');
      checkActive($('#4').text());
   }
   if ($(this).scrollTop() >= $('#contacts').position().top) {
      clear();
      $('#5').css('text-decoration', 'underline');
       
      checkActive($('#5').text());
   }
})

function clear() {
   $('#1').css('text-decoration', 'none');
   $('#2').css('text-decoration', 'none');
   $('#3').css('text-decoration', 'none');
   $('#4').css('text-decoration', 'none');
   $('#5').css('text-decoration', 'none');
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



function BoxAnos(value){
    var select = document.getElementById("selectYear");
    console.log(value);
    if(value == 0){
        window.location.href = '../index.html';
    }
    if(value == 1){
        window.location.href = 'site2017/index.html';
    }
}

