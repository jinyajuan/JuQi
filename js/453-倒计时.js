$(function () {
    function countDown(years,months,days,hours,minutes){
        var dateFinal = new Date(years,months,days,hours,minutes);  //设置倒计时到达时间
        var dateNow = new Date();  //获取系统当前时间
        var dateSub = dateFinal - dateNow;  //计算差值，单位毫秒
        var day = hour = minute = second = dayBase = hourBase = minuteBase = secondBase = 0;  //初始化各个数值
        var timeHtml = '';
        dayBase = 24 * 60 * 60 * 1000;  //计算天数的基数，单位毫秒。1天等于24*60*60*1000毫秒
        hourBase = 60 * 60 * 1000;  //计算小时的基数，单位毫秒。1小时等于60*60*1000毫秒
        minuteBase = 60 * 1000;  //计算分钟的基数，单位毫秒。1分钟等于60*1000毫秒
        secondBase = 1000;  //计算秒钟的基数，单位毫秒。1秒钟等于1000毫秒
        day = Math.floor(dateSub / dayBase);  //计算天数，并取下限值。如 5.9天 = 5天
        hour = Math.floor(dateSub % dayBase / hourBase);  //计算小时，并取下限值。如 20.59小时 = 20小时
        minute = Math.floor(dateSub % dayBase % hourBase / minuteBase);  //计算分钟，并取下限值。如 20.59分钟 = 20分钟
        second = Math.floor(dateSub % dayBase % hourBase % minuteBase / secondBase);  //计算秒钟，并取下限值。如 20.59秒 = 20秒
        //当天数小于等于0时，就不用显示
        if(day <= 0){
            timeHtml += toDouble(hour) + '时' + toDouble(minute) + '分' + toDouble(second) + '秒';
        }else{
            timeHtml += day + '天' + toDouble(hour) + '时' + toDouble(minute) + '分' + toDouble(second) + '秒';
        }
        $(".time").text(timeHtml);
        $(".time").css("color","#956400");
    }
    function toDouble(num){
        if(num < 10){
            return '0'+ num;
        }else{
            return '' + num;
        }
    }

    $(function(){
        setInterval(function(){
            countDown(2018,4,20,10,0);
        },1000);
    });
})