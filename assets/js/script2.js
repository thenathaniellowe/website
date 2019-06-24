$(document).ready(function(){
    // index1
    $(".nav").hover(function(){
        $(this).css("opacity", "1");
        $("#face_container").css("opacity", ".25");
        $(".guide:nth-child(2)").show();
    }, function() {
        $(this).css("opacity", ".1");
        $("#face_container").css("opacity", "1");
        $(".guide:nth-child(2)").hide();
    });
});