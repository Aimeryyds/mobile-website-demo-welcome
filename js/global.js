// JavaScript Document



//全局js
$(function () {
    //start

    $(".menu_m").click(function (event) {
        $(this).toggleClass("act");

        $(".header .r").toggleClass("act");
        $(".nav_main").toggleClass("show");

        if ($(".nav_main").hasClass("show")) {
            $(".menu_m i").css("border-color", "#000");
            $("body").on("touchmove", function (event) {
                event.preventDefault;
            }, false)
        }
        else {
            $(".menu_m i").css("border-color", "#0098d8");
            $("body").off("touchmove");
        }
        


        event.stopPropagation();
    });
    $(".nav_main").click(function (event) {

        $("body").off("touchmove");

        event.stopPropagation();
    });
    $(window).click(function () {

        $("body").off("touchmove");

        $(".menu_m").removeClass("act");
        $(".header .r").removeClass("act");
        $(".nav_main").removeClass("show");

        $(".menu_m i").css("border-color", "#0098d8");
    });

    $(".nav_float").css({ marginTop: $(".nav_float").height() * -0.5 });


    //end
});

