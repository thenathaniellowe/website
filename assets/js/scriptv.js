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

    // $("#one_month").click(function(){
    //     $("#zero_original").hide();
    //     $("#zero_month").show();
    // });

    // $("#zero_month").click(function(){
    //     $(this).hide();
    //     $("#zero_date").show();
    // });

    // $("#zero_date").click(function(){

    //     $("#nine_original").hide();
    //     $("#nine_date").show();
    // });

    // $("#nine_date").click(function(){
    //     $("#enter").hide();
    //     $("#correct").show();
    // });

    // $("#correct").click(function(){
    //     $("#vault_container").css("opacity", "0");
    // });

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