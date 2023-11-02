$(".icon").click(function(){
    $("nav").slideToggle();
});

$(window).resize(function(){
    if(window.innerWidth>=1024){
        $('nav').show();
    }
});

let w = $("#slidewrap").innerWidth();
        $(window).resize(function(){
            w = $("#slidewrap").innerWidth();
        });

function prev(){
    $(".slide li:last").prependTo(".slide");
    $(".slide").css("margin-left", -w);
    $(".slide").stop().animate({marginLeft:0}, 800);
}
function next(){
    $(".slide").stop().animate({marginLeft:-w}, 800, function(){
        $(".slide li:first").appendTo(".slide");
        $(".slide").css({marginLeft:0});
    });
}
setInterval(next, 3000);

$(".prev").click(function(){
    prev();
});
$(".next").click(function(){
    next();
});

$(".img img").hover(function(){
    $(this).siblings().css("opacity", 0.5);
}, function(){
    $(this).siblings().css("opacity", 1);
});

$(".prof").hover(function(){
    $(this).children(".txtarea").stop().animate({bottom:0}, 300);
}, function(){
    $(this).children(".txtarea").stop().animate({bottom:-40}, 300);
});


$(".prof").click(function(){
    $(".box").css("display", "block");
});


let p = $(".product").innerWidth() / 3;
        $(window).resize(function(){
            p = $(".product").innerWidth() / 3;
        });

$(".prev1").click(function(){
    $(".product ul li:last").prependTo(".product ul");
    $(".product ul").css("margin-left", -p);
    $(".product ul").stop().animate({marginLeft:0}, 600);
});
$(".next1").click(function(){
    $(".product ul").stop().animate({marginLeft:-p}, 600, function(){
        $(".product ul li:first").appendTo(".product ul");
        $(".product ul").css({marginLeft:0});
    });
});

