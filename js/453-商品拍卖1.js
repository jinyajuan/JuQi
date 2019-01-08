$(function() {
    //实现手风琴效果
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.link');
        // Evento
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();

        $next.slideToggle();
        $this.parent().toggleClass('open');

        if (!e.data.multiple) {
            $el.find('.submenu').not($next).slideUp().parent().removeClass('open');
        };
    }
    var accordion = new Accordion($('#accordion'), false);

    //实现拍品框悬浮变红色,移出恢复
    $("#paimai #accordion li .submenu li").hover(function () {
        //alert("111");
        $(this).css({
            'border-width':'1px',
            'border-style':'solid',
            "border-color":"red"
        });

    })
    $("#paimai #accordion li .submenu li").mouseleave(function () {
        //alert("111");
        $(this).css({
            'border-width':'1px',
            'border-style':'solid',
            "border-color":"#ccc"
        });
    })


    //点击进入商品详情页面
    var s1;
    $("#paimai #accordion li .submenu li").click(function () {
        // alert($(this).find("img").attr("src"))
        s1=$(this).find("img").attr("src")
        $(".imgs").attr("src",s1);
        $(this).parent().parent().parent().parent().css("display","none");
        //$(this).parent().find("#paimai").css("display","none");
        $("#xiangqing").css("display","block");
    })


    $("#xiangqing_daohang_a").hover(function () {
        $("#ul_a").css("display","block");
        $("#ul_b").css("display","none");
        $("#ul_c").css("display","none");
        // $(this).removeClass("active").addClass("active1");

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




});