$(function () {
    var width1 = parseInt($("#show1 #accordion>li .submenu li").width())
    // alert(width1)
    var width2 = width1+"px";
    // alert(width2)
    $("#show1 ul li .paimai_picture img").css("width",width2)
    // alert(width1-2+"px")
})