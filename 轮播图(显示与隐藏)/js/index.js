var c = 0;

var timer = setInterval(run,2000);

function run() {
    c++;
    c = c==4?0:c;
    $(".flash img").eq(c).animate({opacity:1}).siblings("img").animate({opacity:0});
    $(".flash ul li").eq(c).css('background', '#a10000').siblings('li').css('background', '#ddd')
}

$('.flash').hover(function(){
    clearInterval(timer)
},function(){
    timer = setInterval(run,2000)
})

$(".flash ul li").mouseenter(function() {
    c = $(this).index();
    $(".flash img").eq(c).animate({opacity:1}).siblings("img").animate({opacity:0});
    $(".flash ul li").eq(c).css('background', '#a10000').siblings('li').css('background', '#ddd')
})