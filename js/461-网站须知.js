$(function () {
    $("#pass").click(function () {
        $("#change_pass").css("display","block");
        $("#change_mess").css("display","none");
        $("#change_sass").css("display","none");
    })
    $("#mess").click(function () {
        $("#change_pass").css("display","none");
        $("#change_sass").css("display","none");
        $("#change_mess").css("display","block");
    })
    $("#sass").click(function () {
        $("#change_pass").css("display","none");
        $("#change_mass").css("display","none");
        $("#change_sass").css("display","block");
    })

})