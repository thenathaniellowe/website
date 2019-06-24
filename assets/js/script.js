$(document).ready(function(){

    // page load
    $("#face_container").css("opacity","1");
    $("#face_container").css("width","100%");
    $(".guide").css("opacity", "0");

    // index1
     $(".face").hover(function(){
            $("#identity_container").css("opacity", "1");
            $(".guide:nth-of-type(1)").css("opacity", "1");
        }, function() {
            $("#identity_container").css("opacity", "0");
            $(".guide:nth-of-type(1)").css("opacity", "0");
        });

     $("#hands_container").hover(function(){
            $("#identity_container").css("opacity", "1");
            $(".guide:nth-of-type(1)").css("opacity", "1");
        }, function() {
            $("#identity_container").css("opacity", "0");
            $(".guide:nth-of-type(1)").css("opacity", "0");
        });

    $(".face").click(function(){
        $("#brand_container").show();
    });

    $(".face").click(function(){
        $("#brand_container").show();
    });

    // index2
    $("#download").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", ".6");
    });

    $("#button").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", ".6");
    });

    $("#button").click(function(){
        $("#drive_container").css("opacity", "1");
        $("#drive_container").css("z-index", "10");
        $("#drive").trigger("play");
        $("#button_container").css("visibility", "hidden");
        $("body,html").css("background-color", "white");
        $(".white_bar").css("background-color", "white");
        $("#links_container").css("background-color", "white");
    });

    $(".icon").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(".icon").css("opacity", ".6");
        });

    // index 1
    $(".tab").click(function(){
        $(".tab").css("filter", "grayscale(100%)");
        $(this).css("filter", "grayscale(0%)");
    });
    $(".tab:nth-child(2)").click(function(){
        $("#portfolio_container").hide();
        $("#photography_samples").show();
    });

    $(".tab:nth-child(1)").click(function(){
        $("#portfolio_container").show();
        $("#photography_samples").hide();
    });

    $("#button").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", ".6");
    });

    $(".thumbnail").hover(function(){
        $(this).css("filter", "grayscale(0)");
        $(this).animate({
            width: "+=5%",
        });
    }, function() {
        $(this).css("filter", "grayscale(100%)");
        $(this).animate({
            width: "-=5%",
        });
    });

    $(".thumbnail").click(function(){
        $(this).siblings(".photo").addClass("pic_click");
        $(this).siblings(".photo").show();
        $(this).siblings(".tall_photo").addClass("pic_click");
        $(this).siblings(".tall_photo").show();
        $(this).siblings(".square").addClass("pic_click");
        $(this).siblings(".square").show();
        $("#overlay_container").show();
    });

    $(".photo:nth-child(n + 2)").click(function(){
        $(this).css("z-index", "23");
        $(this).siblings(".photo:nth-child(n + 2)").css("z-index", "22");
        $(this).siblings(".square:nth-child(n + 2)").css("z-index", "22");
    });

    $(".tall_photo:nth-child(n + 2)").click(function(){
        $(this).css("z-index", "23");
        $(this).siblings(".tall_photo:nth-child(n + 2)").css("z-index", "22");
    });

    $("#overlay").click(function(){
        $("#overlay_container").hide();
        $(".description_container").hide();
        $(".square").hide();
        $(".photo").hide();
        $(".tall_photo").hide();
    });

    $("#x").click(function(){
        $("#overlay_container").hide();
        $(".description_container").hide();
        $(".square").hide();
        $(".photo").hide();
        $(".tall_photo").hide();
    });

    // nav
    $(".nav_icon").hover(function(){
        $(this).siblings(".nav_icon_two").css("opacity", ".6");
        $(this).siblings(".nav_title").css("opacity", ".6");
        $(this).siblings(".nav_title").css("color", "#3c5a98");
        $(this).hide();
    }, function() {
        $(this).siblings(".nav_icon_two").css("opacity", "0");
        $(this).siblings(".nav_title").css("opacity", "1");
        $(this).siblings(".nav_title").css("color", "#666666");
        $(this).show();
        });

    $(".nav_icon_two").hover(function(){
        $(this).css("opacity", ".6");
        $(this).siblings(".nav_title").css("opacity", ".6");
        $(this).siblings(".nav_title").css("color", "#3c5a98");
        $(this).siblings(".nav_icon").hide();
    }, function() {
        $(this).css("opacity", "0");
        $(this).siblings(".nav_title").css("opacity", "1");
        $(this).siblings(".nav_title").css("color", "#666666");
        $(this).siblings(".nav_icon").show();
        });

    $(".nav_title").hover(function(){
        $(this).siblings(".nav_icon_two").css("opacity", ".6");
        $(this).css("opacity", ".6");
        $(this).css("color", "#3c5a98");
        $(this).siblings(".nav_icon").hide();
    }, function() {
        $(this).siblings(".nav_icon_two").css("opacity", "0");
        $(this).css("opacity", "1");
        $(this).css("color", "#666666");
        $(this).siblings(".nav_icon").show();
        });

     $(".nav").hover(function(){
        $("#face_container").css("opacity", ".3");
        $(".guide:nth-of-type(2)").css("opacity", "1");
        $(".guide:nth-of-type(1)").css("opacity", "0");
    }, function() {
        $("#face_container").css("opacity", "1");
        $(".guide:nth-of-type(2)").css("opacity", "0");
        $(".guide:nth-of-type(1)").css("opacity", "1");
        });

});