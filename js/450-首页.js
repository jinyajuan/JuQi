/// <reference path="_references.js">

var i=0;
$(function () {  //表示页面加载完
    $("#center #display .ig").eq(0).show().siblings().hide();  //页面加载完之后显示第一张图片，它的兄弟元素隐藏
    showTime();
    $("#center #display .tab").hover(function () {
        i=$(this).index();  //获取当前点击的索引
        show();
        clearInterval(timer);  //清除轮播
    },function () {
        showTime();

    });

    $("#center #display .btn1").click(function () {
        clearInterval(timer);
        if(i==0){
            i=6;
        }
        i--;
        show();
        showTime();
    });
    $("#center #display .btn2").click(function () {
        clearInterval(timer);
        if(i==5){
            i=-1;
        }
        i++;
        show();
        showTime();
    });
    $("#center #display #igs").hover(function () {  //鼠标放上去之后，显示左右箭头。鼠标离开时候，不显示左右箭头
        $("#center #display .btn").show();
    },function () {
        $("#center #display .btn").hide();
    })

    function show() {
        $("#center #display .ig").eq(i).fadeIn(300).siblings().fadeOut(300);  //添加渐变效果，渐变时间为0.3s
        $("#center #display .tab").eq(i).addClass("bg").siblings().removeClass("bg");
    }
    function showTime() {
        timer=setInterval(function () {
            i++;
            if(i==6){
                i=0;
            }
            // $(".ig").eq(i).show().siblings().hide();  注意：show里面也可以加参数
            show();
        },3000);
    }

    $("#show1 ul li ul li").hover(function () {
        // alert("111");
        $(this).css({
            'border-width':'1px',
            'border-style':'solid',
            "border-color":"red"
        });

    })
    $("#show1 ul li ul li").mouseleave(function () {
        //alert("111");
        $(this).css({
            'border-width':'1px',
            'border-style':'solid',
            "border-color":"black"
        });
    })
})