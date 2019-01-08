$(function () {
    $("#pass").click(function () {
        $("#change_pass").css("display","block");
        $("#change_mess").css("display","none");
    })

    $("#mess").click(function () {
        $("#change_pass").css("display","none");
        $("#change_mess").css("display","block");
    })


    //修改基本信息（邮箱，电话）
     // alert($(".change").parent().prev().text());
    $(".change").click(function () {
        $(this).prev().find('input').val('');
        $(this).prev().find('input').attr("disabled",false);
    })
})