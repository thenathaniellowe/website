$(document).ready(function(){
// page position
    $("#home").click(function() {
        $("html, body").animate({
            scrollTop: $("#home_container").offset().top
        }, 500)
    });
    $("#about").click(function() {
        $("html, body").animate({
            scrollTop: $("#about_container").offset().top
        }, 500)
    });
    $("#resume").click(function() {
        $("html, body").animate({
            scrollTop: $("#resume_container").offset().top
        }, 500)
    });
    $("#portfolio").click(function() {
        $("html, body").animate({
            scrollTop: $("#portfolio_container").offset().top
        }, 500)
    });
// landscape vs portrait
    $(window).on("resize load", function() {
        var height = $(window).height();
        var width = $(window).width();
        if (width > height) {
            //run landscape script
            $(".initials_container").click(function() {
                $("#discovery").show();
                $("#discovery").css("z-index", "12");
            });
            
            $("#camera").hover(function(){
                $(".hover_tag:nth-child(21)").css("opacity", "1");
            }, function() {
                $(".hover_tag:nth-child(21)").css("opacity", "0");
            });
            $("#pen").hover(function(){
                $(".hover_tag:nth-child(22)").css("opacity", "1");
            }, function() {
                $(".hover_tag:nth-child(22)").css("opacity", "0");
            });

            $("#chevron_container").click(function() {
        var clicks = $(this).data("clicks");
            if (clicks) {
                // even clicks
                $("#nav_menu").animate({
                    bottom: -400
                })
            } else {
              // odd clicks
                $("#nav_menu").animate({
                    bottom: 0
                });
               }
                $("#chevron_container").data("clicks", !clicks);
            });

            $("#chevron_container").hover(function(){
                $("#chevron").css({
                    "-moz-animation-name":"rotatebox",
                    "-moz-animation-duration":"0.5s",
                    "-moz-animation-iteration-count":"1",
                    "-moz-animation-fill-mode":"forwards",

                    "-webkit-animation-name":"rotatebox",
                    "-webkit-animation-duration":"0.5s",
                    "-webkit-animation-iteration-count":"1",
                    "-webkit-animation-fill-mode" : "forwards",
                });
                $("#chevron").css("left", "24%");
                }, function() {
                    $("#chevron").css({
                        "-moz-animation-name":"rotatebox",
                        "-moz-animation-duration":"0.5s",
                        "-moz-animation-iteration-count":"1",
                        "-moz-animation-fill-mode":"backwards",

                        "-webkit-animation-name":"rotatebox",
                        "-webkit-animation-duration":"0.5s",
                        "-webkit-animation-iteration-count":"1",
                        "-webkit-animation-fill-mode" : "backwards",
                    });
                    $("#chevron").css("left", "50%");
                });

            $(".initials_container").hover(function(){
                $(".initials").addClass("hover_initials");
                $("#home_container").css("background-color", "black");
                $(".hover_tag").css("opacity", "1");
            }, function() {
                $(".initials").removeClass("hover_initials");
                $("#home_container").css("background-color", "#4E9DDE");
                $(".hover_tag").css("opacity", "0");
            }, function() {

            });

        } else {
            //run portrait script
            $("#chevron_container").click(function() {
        var clicks = $(this).data("clicks");
            if (clicks) {
                // even clicks
                $("#nav_menu").animate({
                    bottom: -1500
                })
            } else {
              // odd clicks
                $("#nav_menu").animate({
                    bottom: 0
                });
               }
       $("#chevron_container").data("clicks", !clicks);
    });
        };
    }); 

// brand video
    $("video").on("ended",function(){
        $("#discovery").hide();
        $("#discovery").css("z-index", "10");
    });
    $("video").click(function() {
        $("#discovery").hide();
        $("#discovery").css("z-index", "10");
        $("#drive").hide();
    });
    $("#my_story").click(function() {
        $("#drive").show();
        $("#drive").css("z-index", "12");
    });

// navigation
    

    $(".nav").click(function() {
        $("#nav_menu").animate({
            bottom: -400
        });
    });

    $("#chevron_container, .nav").hover(function(){
        $("#nav_menu").css("bottom", "0");
    }, function() {
        $("#nav_menu").css("bottom", "-400px");
    });

// resume
    $(".hover_box:nth-child(13)").hover(function(){
        $(".library").delay(500).animate({
            opacity: 1,
            }, 1000);
        $("#title").delay(4000).animate({
            opacity: 0,
            }, 1000);
    }, function() {
    });
    $(".hover_box:nth-child(14)").hover(function(){
        $("#design").animate({
            opacity: 1,
            }, 500);
    }, function() {
    });
    $(".hover_box:nth-child(15)").hover(function(){
        $("#professional").animate({
            opacity: 1,
            }, 500);
    }, function() {
    });
    $(".hover_box:nth-child(16)").hover(function(){
        $(".resume_background:nth-child(17)").delay(0).animate({
            left: "29.5vw",
            top: "-6vw",
            }, 1000);
        $(".resume_background:nth-child(18)").delay(1000).animate({
            left: "-15vw",
            bottom: "10vw;",
            }, 1000);
    }, function() {
    });
    $(".hover_box:nth-child(17)").hover(function(){
        $(".background_position:nth-child(13)").animate({
            left: "19vw",
            top: "4vw",
            opacity: "1",
            }, 1000);
        $(".background_position:nth-child(14)").animate({
            left: "-10vw",
            top: "30vw",
            opacity: "1",
            }, 1000);
    }, function() {
    });
 
// portfolio
    $(".carousel_nav").click(function() {
        $(".carousel_nav").css("background-color", "rgb(60, 90, 152)");
        $(this).css("background-color", "rgb(255, 255, 255)");
    });

    $(".carousel_nav:nth-child(3)").click(function() {
        $(".carousel").css("left", "0");
    });
    $(".carousel_nav:nth-child(4)").click(function() {
        $(".carousel").css("left", "-66vw");
    });
    $(".carousel_nav:nth-child(5)").click(function() {
        $(".carousel").css("left", "-132vw");
    });
    $(".carousel_nav:nth-child(6)").click(function() {
        $(".carousel").css("left", "-198vw");
    });
    $(".carousel_nav:nth-child(7)").click(function() {
        $(".carousel").css("left", "-264vw");
    });
    $(".carousel_nav:nth-child(8)").click(function() {
        $(".carousel").css("left", "-330vw");
    });
    $(".carousel_nav:nth-child(9)").click(function() {
        $(".carousel").css("left", "-396vw");
    });

    $(".tab").click(function() {
        $(this).hide("slow");
        $(this).siblings(".tab").show("slow");
    });

    $("#camera").click(function() {
        $("#illustrations").hide("slow");
        $("#photography").show("slow");
        $(".carousel_nav:nth-child(9)").hide("slow");
        $(".carousel_nav:nth-child(8)").hide("slow");
        $("#carousel_nav_container").css("width", "20vw");
        $(".carousel").css("left", "0");
    });
    $("#pen").click(function() {
        $("#photography").hide("slow");
        $("#illustrations").show("slow");
        $(".carousel_nav:nth-child(9)").show("slow");
        $(".carousel_nav:nth-child(8)").show("slow");
        $(".carousel_nav:nth-child(7)").show("slow");
        $(".carousel_nav:nth-child(6)").show("slow");
        $("#carousel_nav_container").css("width", "24vw");
    });

    $(".icon").hover(function(){
        $(this).css("opacity", ".6");
        $(this).addClass("button_hover");
    }, function() {
        $(this).css("opacity", "1");
        $(this).removeClass("button_hover");
    });

     $(".button").hover(function(){
        $(this).css("opacity", ".6");
        $(this).addClass("button_hover");
    }, function() {
        $(this).css("opacity", "1");
        $(this).removeClass("button_hover");
    });

    var thumbnail =$(".thumbnail");
    thumbnail.click(function(){
        $(this).siblings().show().parent().siblings(".photo_container").hide();;
        $("#overlay_container").show().css("z-index", "10");;
        $("#carousel_view").css("overflow", "visible");
        $("#carousel_nav_container").css("z-index", "-1");
        $(".thumbnail").hide();
        return false;
    });

    $("#overlay, #x").click(function(){
        $("#overlay_container").hide();
        $(this).css("z-index", "-1");
        $(".square", ".photo_container").hide();
        $("#carousel_view").css("overflow", "hidden");
        $("#carousel_nav_container").css("z-index", "11");
        $(".thumbnail").show();
        $(".photo_container").show();
        return false;
    });
});