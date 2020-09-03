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

    $(".number:nth-child(10)").click(function() {
        $(".number:nth-child(8)").click(function() {
            $(".number:nth-child(2)").click(function() {
                $(".number:nth-child(4)").click(function() {
                    $("#enter").attr("href", "tenstars.html");
                })
            })
        })
    });

    $("#delete").click(function(){
        $(".ast").css("opacity", "0");
        $("#enter").show();
        window.location.reload();
    });

    $("#enter").click(function(){
        $(".ast").css("opacity", "0");
        $("#enter").show();
        window.location.reload();
    });
});