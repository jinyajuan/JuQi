$(function () {

    $("#Password").keyup(function () {

        var shuzi=0,zimu=0,fuhao=0
        var len=$("#Password").val().length

        for(var i=0;i<len;i++){
            if(($("#Password").val()[i])>=0 && ($("#Password").val()[i])<=9)
            {
                shuzi=1;
            }
            else if((($("#Password").val()[i])>='a' && ($("#Password").val()[i])<='z' ) ||
                (($("#Password").val()[i]) >='A' && ($("#Password").val()[i])<='Z'))
            {
                zimu=1;
            }
            else if(($("#Password").val()[i]).match(/^.*?[`~@#\$%\^&\*\(\)\-_=\+\\\|;:'",<\.>\/\?].*$/g))
            {
                fuhao=1;
            }
        }

        // alert($("#Password").val()+"\n"+"数字："+shuzi+"字母："+zimu+"符号："+fuhao)

        if(len<8 && len>0 ||(len>8 && (shuzi!==0 && zimu===0 && fuhao===0)||(shuzi===0 && zimu!==0 && fuhao===0)||(shuzi===0 && zimu===0 && fuhao!==0))) {
            $("#pass_tishi").text("")
            $("#pass_tishi").text("密码强度：弱")
            $("#pass_tishi").css("color","red")
        }
        else if(len>=8 && (shuzi!==0 && zimu!==0 && fuhao===0)||(shuzi===0 && zimu!==0 && fuhao!==0)||(shuzi!==0 && zimu===0 && fuhao!==0)){
            $("#pass_tishi").text("")
            $("#pass_tishi").text("密码强度：中")
            $("#pass_tishi").css("color","yellow")
        }
        else if( len>=8 && shuzi!==0 && zimu!==0 && fuhao!==0){
            $("#pass_tishi").text("")
            $("#pass_tishi").text("密码强度：强")
            $("#pass_tishi").css("color","green")
        }
    })

    // $('#Password').bind($("#Password").val(""), function() {
    //     $("#pass_tishi").text("*长度至少为8位，必须包含数字、字母、符号中的至少两种")
    // });

    $("#Password_again").keyup(function(){
        if($("#Password_again").val()!==$("#Password").val() ){
            $("#pass_yanzheng").text("前后两次输入的密码不一致！")
        }
        else{
            $("#pass_yanzheng").text("")
        }
    })
    $("#inputEmail").keyup(function () {
        if(!$("#inputEmail").val().match(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/) ) {
            $("#youxiang_yanzheng").text("邮箱格式不正确，请重新输入！")
        }
        else{
            $("#youxiang_yanzheng").text("")
        }
    })
    $("#Tel").keyup(function () {
        if (!$("#Tel").val().match(/^1[3|4|5|7|8][0-9]{9}$/)) {
            $("#tel_tishi").text("手机号码格式不正确!")
        }
        else{
            $("#tel_tishi").text("")
        }

    })

})