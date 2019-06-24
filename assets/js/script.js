$(document).ready(function(){

    // nav
    $(".nav_container").hover(function(){
        $(this).css("filter", "grayscale(25%)");
    }, function() {
        $(this).css("filter", "grayscale(100%)");
        });

    // page load
    $("#face_container, .guide").css("opacity","1");
    $("#face_container").css("width","100%");

    // index1
    $(".face").hover(function(){
        $("#identity_container").css("opacity", "1");
        $(".guide:nth-of-type(1)").show();
    }, function() {
        $("#identity_container").css("opacity", "0");
        $(".guide:nth-of-type(1)").hide();
    });

    $("#hands_container").hover(function(){
        $("#identity_container").css("opacity", "1");
        $(".guide:nth-of-type(1)").show();
    }, function() {
        $("#identity_container").css("opacity", "0");
        $(".guide:nth-of-type(1)").hide();
    });

    $(".face").click(function(){
        $("#brand_container").show();
    });

    // index2
    $("#download, #button").hover(function(){
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

    // index 4
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
        $(this).siblings().addClass("pic_click");
        $(this).siblings().show();
        $("#overlay_container").show();
    });

    $(".tall_photo:nth-child(n + 2)").click(function(){
        $(this).css("z-index", "23");
        $(this).siblings(".tall_photo:nth-child(n + 2)").css("z-index", "22");
    });

    $("#overlay, #x").click(function(){
        $("#overlay_container").hide();
        $(".description_container").hide();
        $(".square").hide();
        $(".photo").hide();
        $(".tall_photo").hide();
    });
});