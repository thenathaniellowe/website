$(document).ready(function(){
    $(".number").click(function() {
        $("#cover").hide();
        $("#one").css("opacity", "1");
        $("#delete").css("opacity", "1");
        $(".number").click(function() {
            $("#two").css("opacity", "1");
            $(".number").click(function() {
                $("#three").css("opacity", "1");
                $(".number").click(function() {
                    $("#four").css("opacity", "1");
                    $(".number").css("opacity", ".7");
                    $("#enter").css("opacity", "1");
                })
            })
        })
    });
    $("#two_trigger").click(function() {
        $("#cover").show();
    });
    $("#one_trigger").click(function() {
        $("#covertwo").show();
    });
    $("#five_trigger").click(function() {
        $("#coverfive").show();
    });
    $("#zero_trigger").click(function() {
        $("#coverzero").show();
    });

    $("#cover").click(function() {
        $("#two").css("opacity", "1");
        $(this).css("top", "5%");
        $("#cover").click(function() {
            $("#three").css("opacity", "1");
            $(this).css("top", "48%");
            $(this).css("left", "20%");
            $("#cover").click(function() {
                $("#four").css("opacity", "1");
                $(".number").css("opacity", ".7");
                $("#enter").css("opacity", "1");
                $(this).css("top", "70%");
                $(this).css("left", "80%");
                $("#cover").click(function() {
                    $(this).attr("href", "imapos.html");
                })
            })
        })
    });
    $("#covertwo").click(function() {
        $("#two").css("opacity", "1");
        $(this).css("top", "27%");
        $(this).css("left", "49%");
        $("#covertwo").click(function() {
            $("#three").css("opacity", "1");
            $("#covertwo").click(function() {
                $("#four").css("opacity", "1");
                $(".number").css("opacity", ".7");
                $("#enter").css("opacity", "1");
                $(this).css("top", "70%");
                $(this).css("left", "80%");
                $("#covertwo").click(function() {
                    $(this).attr("href", "enough.html");
                 })
            })
        })
    });
    $("#coverfive").click(function() {
        $("#two").css("opacity", "1");
        $("#coverfive").click(function() {
            $("#three").css("opacity", "1");
            $("#coverfive").click(function() {
                $("#four").css("opacity", "1");
                $(".number").css("opacity", ".7");
                $("#enter").css("opacity", "1");
                $(this).css("top", "70%");
                $(this).css("left", "80%");
                $("#coverfive").click(function() {
                    $(this).attr("href", "five.html");
                 })
            })
        })
    });
    $("#coverzero").click(function() {
        $(this).css("top", "5%");
        $(this).css("left", "49%");
        $("#two").css("opacity", "1");
        $("#coverzero").click(function() {
            $(this).css("top", "27%");
            $(this).css("left", "18%");
            $("#three").css("opacity", "1");
            $("#coverzero").click(function() {
                $("#four").css("opacity", "1");
                $(".number").css("opacity", ".7");
                $("#enter").css("opacity", "1");
                $(this).css("top", "70%");
                $(this).css("left", "80%");
                $("#coverzero").click(function() {
                    $(this).attr("href", "tenstars.html");
                 })
            })
        })
    });

    $("#delete").click(function(){
        $(".ast").css("opacity", "0");
        // $("#zero_month").hide();
        // $("#zero_date").hide();
        // $("#nine_date").hide();
        // $("#correct").hide();
        // $("#zero_original").show();
        // $("#nine_original").show();
        $("#enter").show();
        window.location.reload();
    });

    $("#enter").click(function(){
        $(".ast").css("opacity", "0");
        // $("#nine_date").hide();
        // $("#zero_month").hide();
        // $("#zero_date").hide();
        // $("#zero_original").show();
        // $("#nine_original").show();
        $("#enter").show();
        window.location.reload();
    });
});