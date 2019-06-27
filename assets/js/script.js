$(document).ready(function(){
    // variables
    var guide1 = $(".guide:nth-of-type(1)");
    var guide2 = $(".guide:nth-of-type(2)");
    var identity_container =$("#identity_container");
    var button = $("#button");
    var portfolio_container =$("#portfolio_container");
    var photography_samples =$("#photography_samples");

    // page load
    var face_container =$("#face_container").css("opacity","1");
    face_container.css("width","100%");

    if(window.innerWidth > window.innerHeight){
    //landscape
        var face =$(".face").hover(function(){
        identity_container.css("opacity", "1");
        guide1.show();
    }, function() {
        identity_container.css("opacity", "0");
        guide1.hide();
    });

    face.click(function(){
        $("#brand_container").show();
        return false;
    });

    $(".nav_container", ".nav").hover(function(){
        $(this).css("filter", "grayscale(25%)");
    }, function() {
        $(this).css("filter", "grayscale(100%)");
    });

    $("#nav1").hover(function(){
        $(this).css("opacity", "1");
        face_container.css("opacity", ".25");
        guide2.show();
    }, function() {
        $(this).css("opacity", ".1");
        face_container.css("opacity", "1");
        guide2.hide();
    });
    }

    // index2
    $("#download, #button, .icon").hover(function(){
        $(this).css("opacity", "1");
    }, function() {
        $(this).css("opacity", ".6");
    });

    button.click(function(){
        var drive_container =$("#drive_container").css("opacity", "1");
        drive_container.css("z-index", "10");
        $("#drive").trigger("play");
        $("#button_container").css("visibility", "hidden");
        $("#style2").css("background-color", "white");
        $("#links_container").css("background-color", "white");
        return false;
    });

    // index 4
    var tab =$(".tab").click(function(){
        tab.css("filter", "grayscale(100%)");
        $(this).css("filter", "grayscale(0%)");
        return false;
    });

    $(".tab:nth-child(2)", "#tab_container").click(function(){
        portfolio_container.hide();
        photography_samples.show();
        return false;
    });

    $(".tab:nth-child(1)", "#tab_container").click(function(){
        portfolio_container.show();
        photography_samples.hide();
        return false;
    });

    var thumbnail =$(".thumbnail").hover(function(){
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

    thumbnail.click(function(){
        $(this).siblings().addClass("pic_click");
        $(this).siblings().show();
        $("#overlay_container").show();
        return false;
    });

    $(".tall_photo:nth-child(n + 2)", ".photo_container").click(function(){
        $(this).css("z-index", "23");
        $(this).siblings(".tall_photo:nth-child(n + 2)").css("z-index", "22");
        return false;
    });

    $("#overlay, #x").click(function(){
        $("#overlay_container").hide();
        $(".square", ".photo_container").hide();
        $(".photo", ".photo_container").hide();
        $(".tall_photo", ".photo_container").hide();
        return false;
    });
});