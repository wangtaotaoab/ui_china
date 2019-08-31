$(".nav_list li.on").hover(function(){
	$(this).addClass("z").parent().siblings().children(".on").removeClass("z");
},function(){
	$(".nav_list li.on").removeClass("z");
})
$(".nav_list a").click(function(){
	$(this).children(".on").addClass("pos").parent().siblings().children(".on").removeClass("pos");
	var num = $(this).index()/2;
	console.log(num);
	$(".rank_con").eq(num).addClass("watch").siblings().removeClass("watch");
})

var timer_btn = null;
$(".main .periods").hover(function(){
	$(".down_xiala").slideDown();
},function(){
	timer_btn = setTimeout(function(){
		$(".down_xiala").slideUp()
	},500);
})
$(".down_xiala").mouseenter(function(){
	$(".down_xiala").slideDown();
	$(".head-right .search").css("border-top","#3498db");
	clearTimeout(timer_btn);
})
$(".down_xiala").mouseleave(function(){
	$(".down_xiala").slideUp()
})