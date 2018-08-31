$(function() {//页面加载完后才执行js代码

    var width = 1200;
    
    var i = 0;
    // console.log($("#ol li"));
    $("#ol>li").click(function() {
        $(this).addClass("now").siblings().removeClass("now");
        // console.log("hello")
        var index = $(this).index();
        // console.log(index)
        $("#ul").animate({left: -index *width});
    });
    //右轮播
    $(".right").click(function() {
        // i = i==4?0:i;
        if(i>=4) {
            i=0;
            $("#ul").css("left", "0");
        }

        i++;
        $("#ul").animate({left: -i * width});
        // console.log($("#ol li")[i]);
        if(i==4) {
            $("#ol li").eq(0).addClass("now").siblings().removeClass("now");
        } else{
            $("#ol li").eq(i).addClass("now").siblings().removeClass("now");
        }
        
        // console.log(i);
    })
    // 左轮播
    $(".left").click(function() {
        // i = i==4?0:i;
        if(i<=0) {
            i=4;
            $("#ul").css("left", -i * width);

        }

        i--;
        $("#ul").animate({left: -i*width});
        // console.log(i);
        if(i==4) {
            $("#ol li").eq(0).addClass("now").siblings().removeClass("now");
        } else{
            $("#ol li").eq(i).addClass("now").siblings().removeClass("now");
        }
    });

    var timer = setInterval(function() {
        $(".right").click();
    },3000);

    $("#ul").mouseenter(function() {
        clearInterval(timer);
    });

    $("#ul").mouseleave(function() {
        timer = setInterval(function() {
            $(".right").click();
        },3000);
    });

       

})
