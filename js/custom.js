(function ($) {
	"use strict";

    jQuery(document).ready(function($){



    
    //ingredients-parrallax
    $('.parallax-bg, .top-area-bg').scrolly({bgParallax: true});
     //END ingredients-parrallax
    
    //Sticky.js Activate    
    $(document).ready(function(){
        $(".header-area").sticky({topSpacing:0});
    });

    });
    //End Sticky.js Activate 
    
    //Smooth Scroll   
    $('li.smooth-menu a').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -50
            }, 1200, 'easeOutSine');
            return false;
            }
        }
    });
    
      //End Smooth Scroll

    
    
     //Navbar Toggle JS 
    $(".navbar-toggle").click(function(){
        $("body").addClass("mobile-menu-activated");
    });
    //End Navbar Toggle JS
    
    //Navbar Toggle remove in class for non-sticky menu for mobile view JS 
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-collapse").removeClass("in");
    });
    //Navbar Toggle out in class for nosticky menu for mobile view JS 
    
     //Toggle Animation Click Remove Class JS 
    $("ul.nav.navbar-nav li a").click(function(){
        $(".navbar-toggle").addClass("navbar-toggle collapsed");
    });
    
    
    
     // Script for Scroll Top button
	 var offset = 300,
	  offset_opacity = 1200,
	  scroll_top_duration = 700,
	  $back_to_top = $('.cd-top');
	 //hide or show the "back to top" link
	 $(window).scroll(function(){
	  ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
	  if( $(this).scrollTop() > offset_opacity ) { 
	   $back_to_top.addClass('cd-fade-out');
	  }
	 });
	 //smooth scroll to top
	 $back_to_top.on('click', function(event){
	  event.preventDefault();
	  $('body,html').animate({
	   scrollTop: 0 ,
		}, scroll_top_duration
	  );
	 });
    
    
    
    
    
    //Wow JS  
     new WOW().init();
     //End Wow JS 
    
    
    //Mixitup picker JS  
    $(function(){
        $('.food-menu-list').mixItUp();
    });
     //End Mixitup JS 
    
    
   //Tooltip JS  
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })
    //End Tooltip JS 
    
   
    /*Preloader JS*/
    jQuery(document).ready(function($) {  

        // site preloader -- also uncomment the div in the header and the css style for #preloader
        $(window).load(function(){
            $('#preloader').fadeOut('slow',function(){$(this).remove();});
        });

    });
    //End Preloader Js
    

   

}(jQuery));	




