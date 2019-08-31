$(".head-left ul li")eq(0).hover(function() {
    $(".discover").css("display","block");
}, function() {
    // 鼠标移出时移出hover类
    $(this).removeClass('hover')
});