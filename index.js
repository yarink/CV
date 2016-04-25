$(document).ready(function () {
    $(document).scroll(function () {
        var scroll = $(this).scrollTop() + 80;

        if ((scroll > $("#description").offset().top && scroll < $("#professional").offset().top)
            || scroll > $("#education").offset().top){
            $("nav").addClass("header_white");
            $("nav").removeClass("header_brown");
        } else {
            $("nav").addClass("header_brown");
            $("nav").removeClass("header_white");
        }
    });
});