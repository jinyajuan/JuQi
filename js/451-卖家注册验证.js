$(function () {
    $("#Password1").keyup(function () {

        var shuzi1=0,zimu1=0,fuhao1=0
        var len1=$("#Password1").val().length
        for(var i=0;i<len1;i++){
            if(($("#Password1").val()[i])>=0 && ($("#Password1").val()[i])<=9)
            {
                shuzi1=1;
            }
            else if((($("#Password1").val()[i])>='a' && ($("#Password1").val()[i])<='z' ) ||
                (($("#Password1").val()[i]) >='A' && ($("#Password1").val()[i])<='Z'))
            {
                zimu1=1;
            }
            else if(($("#Password1").val()[i]).match(/^.*?[`~@#\$%\^&\*\(\)\-_=\+\\\|;:'",<\.>\/\?].*$/g))
            {
                fuhao1=1;
            }
        }

        // alert($("#Password").val()+"\n"+"数字："+shuzi+"字母："+zimu+"符号："+fuhao)

        if(len1<8 && len1>0 ||(len1>8 && (shuzi1!==0 && zimu1===0 && fuhao1===0)||(shuzi1===0 && zimu1!==0 && fuhao1===0)||(shuzi1===0 && zimu1===0 && fuhao1!==0))) {
            $("#pass_tishi1").text("")
            $("#pass_tishi1").text("密码强度：弱")
            $("#pass_tishi1").css("color","red")
        }
        else if(len1>=8 && (shuzi1!==0 && zimu1!==0 && fuhao1===0)||(shuzi1===0 && zimu1!==0 && fuhao1!==0)||(shuzi1!==0 && zimu1===0 && fuhao1!==0)){
            $("#pass_tishi1").text("")
            $("#pass_tishi1").text("密码强度：中")
            $("#pass_tishi1").css("color","yellow")
        }
        else if( len1>=8 && shuzi1!==0 && zimu1!==0 && fuhao1!==0){
            $("#pass_tishi1").text("")
            $("#pass_tishi1").text("密码强度：强")
            $("#pass_tishi1").css("color","green")
        }
    })
    $("#Password_again1").keyup(function(){
        if($("#Password_again1").val()!==$("#Password1").val() ){
            $("#pass_yanzheng1").text("前后两次输入的密码不一致！")
        }
        else{
            $("#pass_yanzheng1").text("")
        }
    })
    $("#youxiang1").keyup(function () {
        if(!$("#youxiang1").val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/) ) {
            $("#youxiang_yanzheng1").text("邮箱格式不正确，请重新输入！")
        }
        else{
            $("#youxiang_yanzheng1").text("")
        }
    })
    $("#Tel1").keyup(function () {
        if (!$("#Tel1").val().match(/^1[3|4|5|7|8][0-9]{9}$/)) {
            $("#tel_tishi1").text("手机号码格式不正确!")
        }
        else{
            $("#tel_tishi1").text("")
        }

    })
    //卖家姓名验证
    $("#name").keyup(function () {
        if (!$("#name").val().match(/^[\u4E00-\u9FA5]{1,6}$/)) {
            $("#name_tishi").text("*请填写汉字！")
        }
        else{
            $("#name_tishi").text("")
        }
    })
    //卖家身份证号码验证
    $("#exampleInputAmount").keyup(function () {
        if (!$("#exampleInputAmount").val().match(/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/)) {
            $("#iden_tishi").text("*请正确填写身份证号码！")
        }
        else{
            $("#iden_tishi").text("")
        }
    })

})