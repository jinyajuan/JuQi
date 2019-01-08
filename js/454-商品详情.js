$(function () {

    $("#add").click(function () {
        // alert("111")
        $("#text_box").val( parseInt($("#text_box").val()) +1);
    })
    $("#min").click(function () {
        if(parseInt($("#text_box").val())===1){
            $("#text_box").val("1");
        }
        else
        $("#text_box").val(parseInt($("#text_box").val())-1);
    })

    $("#xiangqing_daohang_a").hover(function () {
        $("#ul_a").css("display","block");
        $("#ul_b").css("display","none");
        $("#ul_c").css("display","none");

    })
    $("#xiangqing_daohang_b").hover(function () {
        $("#ul_a").css("display","none");
        $("#ul_b").css("display","block");
        $("#ul_c").css("display","none");
        // $(this).removeClass("active").addClass("active1");
    })
    $("#xiangqing_daohang_c").hover(function () {
        $("#ul_a").css("display","none");
        $("#ul_b").css("display","none");
        $("#ul_c").css("display","block");
    })



})