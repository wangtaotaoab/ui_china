// 更多
$(".main_right .operate_nav>div").hover(function() {
	$(".main_right .operate_nav>div ul").slideDown();
}, function() {
timer_btn = setTimeout(function(){
		$(".main_right .operate_nav>div ul").slideUp()
	},500);
});
$(".main_right .operate_nav>div ul").mouseenter(function(){
	$(".main_right .operate_nav>div ul").slideDown();
	clearTimeout(timer_btn);
})
$(".main_right .operate_nav>div ul").mouseleave(function(){
	$(".main_right .operate_nav>div ul").slideUp()
})

$(".main_right .operate_nav>a").hover(function(){
	$(this).addClass("on").siblings().removeClass("on");
},function(){
	$(".main_right .operate_nav>a").removeClass("on");
})
$(".main_right .operate_nav>a").click(function(){
	$(this).addClass("oshow").siblings().removeClass("oshow");
	var num = $(this).index()/2;
	console.log(num);
	$(".main_right .work").eq(num).addClass("show_now").siblings().removeClass("show_now");
})


// 评论区
var submit_btn = document.getElementById("submit_btn");
var ul1 = document.getElementById("ul1");
submit_btn.onclick = function(){
	var text = document.getElementById("discuss_text");
	var oLi = document.createElement("li");
	var aLi = ul1.getElementsByTagName("li");
	var aBtn = ul1.getElementsByTagName("a");
	oLi.innerHTML = '<i class="iHead"></i> &nbsp;&nbsp;' + text.value + '<a href="javascript:" class="remove">删除</a>';
	
	if(aLi.length != 0){
		ul1.insertBefore(oLi,aLi[0]);
	}else{
		ul1.appendChild(oLi);
	}
	for(var i=0;i<aLi.length;i++){
		aLi[i].setAttribute("class","addli");
	}
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].setAttribute("class","adda");
		aBtn[i].onclick = function(){
			ul1.removeChild(this.parentNode);
		}
	}
	text.value = "";
	$(".discuss_content ul li").hover(function(){
		$(this).children("a").css({
			"opacity":"1",
			"text-decoration":"none",
			"color":"white"
		});
	},function(){
		$(this).children("a").css("opacity","0");
	})
}
