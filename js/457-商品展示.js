$(function () {
    $("#dh_yuqi").click(function () {
        $("#yuqi").css("display","block")
        $("#shoushi").css("display","none")
        $("#zihua").css("display","none")
        $("#zishahu").css("display","none")
        $("#qita").css("display","none")
    })
    $("#dh_shoushi").click(function () {
        $("#yuqi").css("display","none")
        $("#shoushi").css("display","block")
        $("#zihua").css("display","none")
        $("#zishahu").css("display","none")
        $("#qita").css("display","none")
    })
    $("#dh_zihua").click(function () {
        $("#yuqi").css("display","none")
        $("#shoushi").css("display","none")
        $("#zihua").css("display","block")
        $("#zishahu").css("display","none")
        $("#qita").css("display","none")
    })
    $("#dh_zishahu").click(function () {
        $("#yuqi").css("display","none")
        $("#shoushi").css("display","none")
        $("#zihua").css("display","none")
        $("#zishahu").css("display","block")
        $("#qita").css("display","none")
    })
    $("#dh_qita").click(function () {
        $("#yuqi").css("display","none")
        $("#shoushi").css("display","none")
        $("#zihua").css("display","none")
        $("#zishahu").css("display","none")
        $("#qita").css("display","block")
    })

    //实现拍品框悬浮变红色,移出恢复
    $("#show1 ul li").hover(function () {
        //alert("111");
        $(this).css({
            'border-width':'2px',
            'border-style':'solid',
            "border-color":"red"
        });

    })
    $("#show1 ul li").mouseleave(function () {
        //alert("111");
        $(this).css({
            'border-width':'2px',
            'border-style':'solid',
            "border-color":"#ccc"
        });
    })
})