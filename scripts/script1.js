var clock;
var date = new Date(2019, 2, 8);
var now = new Date();
var diff = (date.getTime()/1000) - (now.getTime()/1000);

	
$(document).ready(function() {
	var clock;
	clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false,
        callbacks: {
        	stop: function() {
        		$('.message').html('The clock has stopped!')
        	}
        }
    });
			    
    clock.setTime(diff);
    clock.setCountdown(true);
    clock.start();
});

$('#slideUnderLogo').cycle('fade');
/*
      <img class="imgLogo" src="images/img1slide.png" style="height: auto; width:90%">
      <img class="imgLogo" src="images/img2slide.png" style="height: auto; width:90%">
      <img class="imgLogo" src="images/img3slide.png" style="height: auto; width:90%">
      <img class="imgLogo" src="images/img4slide.png" 
      <img class="imgLogo" src="images/img5slide.png" */

var myIndex = 0;
var x = ["images/img1slide.png", "images/img2slide.png", "images/img3slide.png", "images/img4slide.png", "images/img5slide.png"];;
slidesImagens();

function slidesImagens() {
    var i;
    var divLogo = document.getElementById("logo");
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    divLogo.style.backgroundImage = x[myIndex]; 
    setTimeout(slidesImagens, 9000);    
}

function BoxAnos(value){
    var select = document.getElementById("selectYear");
    console.log(value);
    if(value == 0){
        window.location.href = '/../index.html';
    }
    if(value == 1){
        window.location.href = 'site2017/index.html';
    }
}

/*slide*/
$(document).ready(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = $($(this).attr('href'));
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 500, 'swing', function () {
            window.location.hash = target;
        });
    });
});

 

$("#homeNav").css("color", "#EEA225");
$("#compNav").css("color", "#5E5A5A");
$("#equipaNav").css("color", "#5E5A5A");
$("#partnersNav").css("color", "#5E5A5A");
$("#contactosNav").css("color", "#5E5A5A");

/*scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll<1000){
        $("#homeNav").css("color", "#eea035");
        $("#homeNav").css("text-decoration", "underline");

        $("#compNav").css("color", "#FFFFFF");
        $("#compNav").css("text-decoration", "none");
        
        $("#equipaNav").css("color", "#FFFFFF");
        $("#equipaNav").css("text-decoration", "none");
        
        $("#partnersNav").css("color", "#FFFFFF");
        $("#partnersNav").css("text-decoration", "none");
        
        $("#contactosNav").css("color", "#FFFFFF");
        $("#contactosNav").css("text-decoration", "none");
    }else if(scroll>= 1000 && scroll<2562){
        //Comp
        $("#compNav").css("color", "#eea035");
        $("#compNav").css("text-decoration", "underline");

        $("#homeNav").css("color", "#FFFFFF");
        $("#homeNav").css("text-decoration", "none");
        
        $("#equipaNav").css("color", "#FFFFFF");
        $("#equipaNav").css("text-decoration", "none");
        
        $("#partnersNav").css("color", "#FFFFFF");
        $("#partnersNav").css("text-decoration", "none");
        
        $("#contactosNav").css("color", "#FFFFFF");
        $("#contactosNav").css("text-decoration", "none");
    }else if(scroll>=2562 && scroll<3721){
        //TEAM
        $("#equipaNav").css("color", "#eea035");
        $("#equipaNav").css("text-decoration", "underline");

        $("#compNav").css("color", "#FFFFFF");
        $("#compNav").css("text-decoration", "none");
        
        $("#homeNav").css("color", "#FFFFFF");
        $("#homeNav").css("text-decoration", "none");
        
        $("#partnersNav").css("color", "#FFFFFF");
        $("#partnersNav").css("text-decoration", "none");
        
        $("#contactosNav").css("color", "#FFFFFF");
        $("#contactosNav").css("text-decoration", "none");
    }
    else if(scroll>=3721 && scroll<4117){
        //partners
        $("#partnersNav").css("color", "#eea035");
        $("#partnersNav").css("text-decoration", "underline");

        $("#compNav").css("color", "#FFFFFF");
        $("#compNav").css("text-decoration", "none");
        
        $("#equipaNav").css("color", "#FFFFFF");
        $("#equipaNav").css("text-decoration", "none");
        
        $("#homeNav").css("color", "#FFFFFF");
        $("#homeNav").css("text-decoration", "none");
        
        $("#contactosNav").css("color", "#FFFFFF");
        $("#contactosNav").css("text-decoration", "none");
    }
    else{
        //contactos
        $("#contactosNav").css("color", "#eea035");
        $("#contactosNav").css("text-decoration", "underline");

        $("#compNav").css("color", "#FFFFFF");
        $("#compNav").css("text-decoration", "none");
        
        $("#equipaNav").css("color", "#FFFFFF");
        $("#equipaNav").css("text-decoration", "none");
        
        $("#partnersNav").css("color", "#FFFFFF");
        $("#partnersNav").css("text-decoration", "none");
        
        $("#homeNav").css("color", "#FFFFFF");
        $("#homeNav").css("text-decoration", "none");
    }

});
*/

$(document).on('scroll', function () {
    if(($(window).scrollTop() + $(window).height())  == $(document).height()){
        //$("#contactosNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#compNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#equipaNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#partnersNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#homeNav").css("text-shadow", "-1px -1px 0 #5E5A5A,1px -1px 0 #5E5A5A,-1px 1px 0 #5E5A5A,1px 1px 0 #5E5A5A");

        $("#homeNav").css("color", "#5E5A5A");
        $("#compNav").css("color", "#5E5A5A");
        $("#equipaNav").css("color", "#5E5A5A");
        $("#partnersNav").css("color", "#5E5A5A");
        $("#contactosNav").css("color", "#EEA225");

    }
    else{
   if ($(this).scrollTop() <= $('#introducao').position().top) {
        //$("#contactosNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#compNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#equipaNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#partnersNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#homeNav").css("text-shadow", "-1px -1px 0 #5E5A5A,1px -1px 0 #5E5A5A,-1px 1px 0 #5E5A5A,1px 1px 0 #5E5A5A");

        $("#homeNav").css("color", "#EEA225");
        $("#compNav").css("color", "#5E5A5A");
        $("#equipaNav").css("color", "#5E5A5A");
        $("#partnersNav").css("color", "#5E5A5A");
        $("#contactosNav").css("color", "#5E5A5A");

   }
   else if ($(this).scrollTop() >= $('#introducao').position().top && $(this).scrollTop() <= $('#equipa').position().top){
        //$("#contactosNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#compNav").css("text-shadow", "-1px -1px 0 #5E5A5A,1px -1px 0 #5E5A5A,-1px 1px 0 #5E5A5A,1px 1px 0 #5E5A5A");
        //$("#equipaNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#partnersNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#homeNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");

        $("#homeNav").css("color", "#5E5A5A");
        $("#compNav").css("color", "#EEA225");
        $("#equipaNav").css("color", "#5E5A5A");
        $("#partnersNav").css("color", "#5E5A5A");
        $("#contactosNav").css("color", "#5E5A5A");

   }
   else if ($(this).scrollTop() >= $('#equipa').position().top && $(this).scrollTop() <= $('#emp').position().top) {
        //$("#contactosNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#compNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#equipaNav").css("text-shadow", "-1px -1px 0 #5E5A5A,1px -1px 0 #5E5A5A,-1px 1px 0 #5E5A5A,1px 1px 0 #5E5A5A");
        //$("#partnersNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#homeNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");

        $("#homeNav").css("color", "#5E5A5A");
        $("#compNav").css("color", "#5E5A5A");
        $("#equipaNav").css("color", "#EEA225");
        $("#partnersNav").css("color", "#5E5A5A");
        $("#contactosNav").css("color", "#5E5A5A");


   }
   else if ($(this).scrollTop() >= $('#emp').position().top && $(this).scrollTop() <= $('#footer').position().top) {
        //$("#contactosNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#compNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#equipaNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#partnersNav").css("text-shadow", "-1px -1px 0 #5E5A5A,1px -1px 0 #5E5A5A,-1px 1px 0 #5E5A5A,1px 1px 0 #5E5A5A");
        //$("#homeNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");


        $("#homeNav").css("color", "#5E5A5A");
        $("#compNav").css("color", "#5E5A5A");
        $("#equipaNav").css("color", "#5E5A5A");
        $("#partnersNav").css("color", "#EEA225");
        $("#contactosNav").css("color", "#5E5A5A");

    }
   else {
        //$("#contactosNav").css("text-shadow", "-1px -1px 0 #5E5A5A,1px -1px 0 #5E5A5A,-1px 1px 0 #5E5A5A,1px 1px 0 #5E5A5A");
        //$("#compNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#equipaNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#partnersNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");
        //$("#homeNav").css("text-shadow", "-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000");


        $("#homeNav").css("color", "#5E5A5A");
        $("#compNav").css("color", "#5E5A5A");
        $("#equipaNav").css("color", "#5E5A5A");
        $("#partnersNav").css("color", "#5E5A5A");
        $("#contactosNav").css("color", "#EEA225");



   }}
})



function dropDown() {
    $("#menu_dropdown").toggle();
}

function clickDropdown() {
    $("#menu_dropdown").hide();
}