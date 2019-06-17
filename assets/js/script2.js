$(document).ready(function(){
    if (window.matchMedia("(orientation: landscape)").matches) {
       $(window).on("scroll", function(){
            $(".nav2").css("left", "35px");
            $(".nav2").css("width", "70px");
            $(".nav2").css("height", "340px")
            $(".nav2").css("top", "25%");
            $(".nav_title").css("display", "none");
            $(".nav_title_full").css("display", "none");
            $(".nav_container").css("width", "70px");
            $(".nav_icon").css("margin-left", "0");
            $(".nav_icon").css("left", "12px");
            $(".nav_icon_full").css("margin-left", "0");
            $(".nav_icon_full").css("left", "12px");
            $(".nav_icon_two").css("margin-left", "0");
            $(".nav_icon_two").css("left", "12px");
            $(".white_bar").hide();
            if($("body").scrollTop() === 100){
        }})
    }
});