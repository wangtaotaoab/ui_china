// 缩小时,头部的按钮显示,点击出现下拉菜单
$(".dropdown>button").click(function(){
	$(".xiala").slideToggle("slow");
})
// 左边下拉菜单
$(".head-left ul li").eq(1).hover(function() {
	$(".discover").slideDown();
}, function() {
timer_btn = setTimeout(function(){
		$(".discover").slideUp()
	},500);
});
$(".discover").mouseenter(function(){
	$(".discover").slideDown();
	clearTimeout(timer_btn);
})
$(".discover").mouseleave(function(){
	$(".discover").slideUp()
})
$(".head-left ul li").eq(2).hover(function() {
	$(".learn").slideDown();
}, function() {
	timer_btn = setTimeout(function(){
		 $(".learn").slideUp()
	},500);
});
$(".learn").mouseenter(function(){
	$(".learn").slideDown();
	clearTimeout(timer_btn);
})
$(".learn").mouseleave(function(){
	$(".learn").slideUp()
})
$(".head-left ul li").eq(3).hover(function() {
	$(".train").slideDown();
}, function() {
	timer_btn = setTimeout(function(){
		 $(".train").slideUp()
	},500);
});
$(".train").mouseenter(function(){
	$(".train").slideDown();
	clearTimeout(timer_btn);
})
$(".train").mouseleave(function(){
	$(".train").slideUp()
})
$(".head-left ul li").eq(5).hover(function() {
	$(".more").slideDown();
}, function() {
	timer_btn = setTimeout(function(){
		 $(".more").slideUp()
	},500);
});
$(".more").mouseenter(function(){
	$(".more").slideDown();
	clearTimeout(timer_btn);
})
$(".more").mouseleave(function(){
	$(".more").slideUp()
})

$(".head-right div").eq(1).hover(function() {
	$(".cloud_top").slideDown();
	console.log('aaa');
}, function() {
	timer_btn = setTimeout(function(){
		 $(".cloud_top").slideUp()
	},500);
});

// 右边侧边栏
$(".cloud_top").mouseenter(function(){
	$(".cloud_top").slideDown();
	clearTimeout(timer_btn);
})
$(".cloud_top").mouseleave(function(){
	$(".cloud_top").slideUp()
})
// 登陆页面跳转
$(".login").click(function(){
	location.href= "html/login.html";
})

// 划过查询按钮
$(".head-right .search").hover(function() {
	$(".searchDiv").slideDown();
}, function() {
	timer_btn1 = setTimeout(function(){
		 $(".searchDiv").slideUp()
	},1000);
});
$(".searchDiv").mouseenter(function(){
	$(".searchDiv").slideDown();
	$(".head-right .search").css("border-top","#3498db");
	clearTimeout(timer_btn1);
})
$(".searchDiv").mouseleave(function(){
	$(".searchDiv").slideUp()
})

// 轮播图
var n = 0;
var timer = null;
var timer_btn = null;
$(".cur ul li").click(function(){
	$(this).addClass("current").siblings().removeClass("current");
	n = $(this).index();
	$(".banner .ban_pic img").eq(n).css("opacity","1").parent().siblings().children().css("opacity","0");
})
function aa(){
	clearInterval(timer);
	timer = setInterval(function(){
		n++;
		if(n>2){n=0}
		$(".banner .ban_pic img").eq(n).css("opacity","1").parent().siblings().children().css("opacity","0");
		$(".cur ul li").eq(n).addClass("current").siblings().removeClass("current");
	},1500);
}
aa();
$(".banner").hover(function() {
	clearInterval(timer);
	$(".wbtn").css("display","block")
}, function() {
	aa();
	timer_btn = setTimeout(function(){
		$(".wbtn").css("display","none");
	},500);
});
$(".wbtn").mouseenter(function(){
	$(".wbtn").css("display","block");
	clearTimeout(timer_btn);
})
$(".wbtn_left").click(function(){
	n--;
	if(n<0){
		n=2
	}
	$(".banner .ban_pic img").eq(n).css("opacity","1").parent().siblings().children().css("opacity","0");
	$(".cur ul li").eq(n).addClass("current").siblings().removeClass("current");
})
$(".wbtn_right").click(function(){
	n++;
	if(n>2){
		n=0;
	}
	$(".banner .ban_pic img").eq(n).css("opacity","1").parent().siblings().children().css("opacity","0");
	$(".cur ul li").eq(n).addClass("current").siblings().removeClass("current");
})



// 内容部分,首页推荐

$(".main_nav .mnav_left span a").click(function(){
	$(this).addClass("navShow").parent().siblings().children().removeClass("navShow");
})

$(".main_nav .mnav_right i").click(function(){
	$(this).addClass("nav_iShow").siblings().removeClass("nav_iShow");
})
$(".main_nav .mnav_right i").eq(0).click(function(){
	$(".mnav_right span a").html("公告：开启比的第一次即刻");
})
$(".main_nav .mnav_right i").eq(1).click(function(){
	$(".mnav_right span a").html("一条：人有坚持，就必然有放弃~");
})
$(".main_nav .mnav_right i").eq(2).click(function(){
	$(".mnav_right span a").html("更新：UI中国团队模块正式开放！");
})

// 蘑菇屋新技能
$(".moveup").hover(function(){
	$(this).css({
		"background-color":"white",
		"border":"1px solid #ccc",
		"overflow":"hidden",
		"box-shadow":"2px 2px 10px #909090"
	})
	$(this).children("img").css({
		"transform":"scale(1.1)",
		"transition":"0.6s"
	});
	$(this).find(".content_pI").css("color","#3498db");
},function(){
	$(this).css({
		"background-color":"transparent",
		"border":"1px solid transparent",
		"box-shadow":"none"
	})
	$(this).children("img").css({
		"transform":"scale(1)",
		"transition":"1s"
	});
	$(this).find(".content_pI").css("color","#333");
})
$(".content_pI").click(function(){
	location.href= "./person.html";
})


// 侧边栏
$(window).scroll(function(){
	var h = $(window).scrollTop();
	console.log(h);
	if(h>200){
		$(".fixed").css("display","block");
	}else{
		$(".fixed").css("display","none");
	}
	
})
$(".arrow").click(function(){
	var h = $(".header").offset().top;
	$("html,body").animate({"scrollTop":h},500);
});

// 即刻作品
$(".main_model ul li").hover(function(){
	$(this).children(".grary").css("opacity","1");
},function(){
	$(this).children(".grary").css("opacity","0");
})