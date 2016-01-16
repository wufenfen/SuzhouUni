$(document).ready(function () {

    $.material.init();
    //apply dropdownHover to all elements with the data-hover="dropdown" attribute
    //导航栏 鼠标滑动 自动下拉
    $('[data-hover="dropdown"]').dropdownHover();
});

