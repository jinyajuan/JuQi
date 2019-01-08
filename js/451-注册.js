$(function () {
    $("#seller").click(function () {
        $("#buyer_reg").css("display","none");
        $("#seller_reg").css("display","block");
        $("#reg_body").css("height","900px")

    })

    $("#buyer").click(function () {
        $("#seller_reg").css("display","none");
        $("#buyer_reg").css("display","block");
        $("#reg_body").css("height","510px")
    })

})