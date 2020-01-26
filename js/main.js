
$(window).scroll(function () { 
    // Navbar transpernt 
    var scroll = $(window).scrollTop();
    var nav = $(".navbar");

    if (scroll > 1) {
        nav.removeClass("navbar-fixed-bottom");
    }else{
        nav.removeClass("navbar-transpernt");
        nav.removeClass("navbar-fixed-top");
        nav.addClass("navbar-fixed-bottom");
    }
     if ($(window).scrollTop() > $(".Header").height()){
        nav.addClass("navbar-transpernt");
        nav.addClass("navbar-fixed-top");
     }else{
        nav.removeClass("navbar-transpernt");
     }    
});

$(function () {
    
    $(".tab-switch li").click(function(){

        // add class selected to tab-switch li

        $(this).addClass("selected").siblings().removeClass("selected");

        var SelectedTab =  $(this).attr("data-class");

        $(SelectedTab).slideDown("slow").siblings().hide();

    }); 

    $(".navbar .nav li a").click(function(e){
        e.preventDefault();
        
        var myScroll = $(this).attr("data-scroll");

        $("html,body").animate({
            scrollTop: $(myScroll).offset().top - $(".navbar .nav").height()
        },1000);
    });

    // nice scroll
    $("body").niceScroll();
});

