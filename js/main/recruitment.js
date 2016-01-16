$(document).ready(function () {

    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    //加载种类的文字信息
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");
    
    var typeName;
    if (type == 1) {
        typeName = '人才引进';
    }
    else if (type == 2) {
        typeName = '学生招募';
    }
    
    $("#nameNav").html(typeName);
    $("#nameTitle").html('<i class="fa fa-user-plus fa-lg"></i>&nbsp;&nbsp;' + typeName);
});

