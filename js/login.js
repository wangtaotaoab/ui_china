$(".change_login p").click(function(){
	$(this).attr('id','change_show').siblings().removeAttr("id",'change_show');
})
// 短信验证
$(".massage").click(function(){
	$(".form1 p:nth-child(2)").addClass("hide");
	$(".form1 p:nth-child(3)").removeClass("hide");
	$(".form1 p:nth-child(4)").removeClass("hide");
	$("#num").attr({
		"placeholder":"手机号",
		"type":"number"
	});
})
$(".account_number").click(function(){
	$(".form1 p:nth-child(2)").removeClass("hide");
	$(".form1 p:nth-child(3)").addClass("hide");
	$(".form1 p:nth-child(4)").addClass("hide");
	$("#num").attr({
		"placeholder":"手机号/用户名/邮箱",
		"type":"text"
	});
})
// 账号注册
$(".r_forget .forgetPas").click(function(){
	$(".change_login").addClass("hide");
	$(".form1 p:nth-child(3)").removeClass("hide");
	$(".form1 p:nth-child(2)").addClass("hide");
	$(".form1 p:nth-child(4)").removeClass("hide");
	$(".r_forget").addClass("hide");
	$(".wcheckbox").removeClass("hide");
	$(".login_btn").addClass("hide");
	$(".logon_btn").removeClass("hide");
	$(".haven").removeClass("hide");
	$("#num").attr({
		"placeholder":"手机号",
		"type":"number"
	});
})
// 马上登录
$(".returnLogin").click(function(){
	$(".change_login").removeClass("hide");
	$(".form1 p:nth-child(3)").addClass("hide");
	$(".form1 p:nth-child(2)").removeClass("hide");
	$(".form1 p:nth-child(4)").addClass("hide");
	$(".r_forget").removeClass("hide");
	$(".wcheckbox").addClass("hide");
	$(".login_btn").removeClass("hide");
	$(".logon_btn").addClass("hide");
	$(".haven").addClass("hide");
	$("#num").attr({
		"placeholder":"手机号/用户名/邮箱",
		"type":"text"
	});
})

$('input').on('input propertychange', function() {
	if(($.trim($('#num').val()) !== "") && ($.trim($('#pass').val()) !== "")){
		$('.login_btn').css({
			"color":"white",
			"background-color":"#3498db"
		});
		$('.login_btn').click(function(){
			 location.href= "../index.html";
		})
	}
	else if(($.trim($('#num').val()) !== "")&&($.trim($('#pass_pic').val()) == "Ayfh")&&($.trim($('#veri').val()) == "1234")){
		$('.login_btn').css({
			"color":"white",
			"background-color":"#3498db"
		});
		$('.login_btn').click(function(){
			 location.href= "../index.html";
		})
	}else{
		return false;
	}
	
});
$(".logon_btn").click(function(){
	if(($("#num").val() !=="")&&($("#pass_pic").val()== "Ayfh")&&($("#veri").val()== "1234")){
		location.href= "../index.html";
	}
})
$('#wcheckbox').click(function(){
    if($("input[type='checkbox']").is(':checked')){
        // $(".logon_btn").attr("readonly","readonly");
		$('input.btn').removeClass('change_logon');
        $('input.btn').removeAttr('disabled','disabled');
    }else{
        // $(".logon_btn").removeAttr("readonly");
		$('input.btn').addClass('change_logon');
        $('input.btn').attr('disabled','disabled');
    }
});