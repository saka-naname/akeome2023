function hatuyume() {
    $("#hatuyume .overlay").animate({
        bottom: "0vh"
    },{
        duration: 3000,
        easing: "easeOutSine"
    });

    $("#hatuyume .year .year-2").animate({
        bottom: "0em"
    }, {
        duration: 3000,
        easing: "easeInOutSine"
    });

    $("#hatuyume .mtfuji-container").delay(1800).animate({
        bottom: "0"
    }, {
        duration: 1500,
        easing: "easeOutCirc"
    });

    $("#hatuyume .sun").delay(2700).animate({
        bottom: "9vh"
    }, {
        duration: 1500,
        easing: "easeOutCirc"
    });

    $("#hatuyume .year").delay(4500).animate({
        opacity: 0.0,
    }, {
        duration: 600,
        easing: "easeOutCirc"
    })
}

$(document).ready(() => {
    let py, toucharea = document.getElementById("hatuyumeTouchArea");
    
    $(toucharea).on("click", (e) => {
        $(toucharea).off();
        $(toucharea).hide();
        hatuyume();
    });

    $("#hatuyume").on("touchmove", e => {
        e.preventDefault();
    });
});