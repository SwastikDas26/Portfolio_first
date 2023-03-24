$(document).ready(function(){
    $(window).scroll(function(){
        //making the navbar sticky after we scroll
        //for making the navbar seen on top of the screen after we scroll down
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }
        else{
            $('.navbar').removeClass("sticky");
        }
    });
    // toggle menu/navbar script 
    $('.menu-btn').click(function(){                    //I created this for the purpose of responsiveness
        $('.navbar .menu').toggleClass("active");       //use it
        $('.menu-btn i').toggleClass("active");
    });
});
