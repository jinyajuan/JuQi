$(function () {
	
	$("#chujia").keyup(function(){
		//alert("11")
		$("#effectivePrice").text($("#chujia").val())
//		alert("22")
	})
	
	
	
    $("#orderForm .span24 input , #queren").click(function () {
      
       // alert('111')
       var chujia=$("#chujia").val()
       //alert(typeof chujia)
       var zuigao=$("#zuigao").text()
       //alert(typeof zuigao)
       if(parseInt(chujia) <= parseInt(zuigao))
       {
       	alert("您的出价低于当前最高竞价，不符合竞拍规则，请重新输入您的竞价！")
       	$("#chujia").val("");
       }


    })

   

})