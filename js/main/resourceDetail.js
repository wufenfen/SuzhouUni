$(document).ready(function () {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");
    var typeName = "";
    if (type == 1) {
        typeName = "文档下载";
    }
    else if (type == 2) {
        typeName = "优化算法库";
    }
    else if (type == 3) {
        typeName = "会议在线管理";
    }
    $("#typeNav").html(typeName);

    var id = GetArgsFromHref(test, "id");
    var name;
    if (id == 1) {
        name = '资源标题1';
    }
    $("#nameNav").text(name);
});

