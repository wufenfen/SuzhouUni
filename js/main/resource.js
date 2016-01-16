$(document).ready(function () {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    //加载种类的文字信息
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");
    var typeName = "";
    if (type == 1) {
        typeName = "文档下载";
    }
    else if (type == 2) {
        typeName = "其它资源";
    }

    $("#nameNav").html(typeName);
    $("#nameTitle").html("<i class='fa fa-files-o fa-lg'></i>&nbsp;&nbsp;" + typeName);
});
