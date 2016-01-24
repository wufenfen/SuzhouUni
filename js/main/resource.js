$(document).ready(function () {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    //加载种类的文字信息
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");
    var typeName = "";
    resource = [];//链接的标题
    if (type == 1) {
        typeName = "文档下载";
        resource = [{
            linkTitle:'我是文档下载资源标题1',
            linkUrl:'我是文档下载资源标题1的链接地址',
            date:'2016-01-22'
        },{
            linkTitle:'我是文档下载资源标题2',
            linkUrl:'我是文档下载资源标题2的链接地址',
            date:'2016-01-24'
        },{
            linkTitle:'我是文档下载资源标题3',
            linkUrl:'我是文档下载资源标题3的链接地址',
            date:'2016-01-28'
        }];
    }
    else if (type == 2) {
        typeName = "其它资源";
        resource = [{
            linkTitle:'百度搜索',
            linkUrl:'https://www.baidu.com/',
            date:'2016-01-28'

        },{
            linkTitle:'网易有钱',
            linkUrl:'http://qian.163.com/',
            date:'2016-02-04'

        },{
            linkTitle:'网易邮箱大师',
            linkUrl:'http://mail.163.com/dashi/?from=mail101',
            date:'2016-02-08'

        }]; 
    }
    createLink();
    $("#nameNav").html(typeName);
    $("#nameTitle").html("<i class='fa fa-files-o fa-lg'></i>&nbsp;&nbsp;" + typeName);
});

function createLink(){//生成链接 bywff
    var linkList = document.createElement('ul');
    for (var i = 0; i < resource.length; i++) {
        var linkItem = document.createElement('li');
        var link = document.createElement('a');
        var title = document.createTextNode(resource[i].linkTitle);
        link.appendChild(title);
        link.setAttribute('href',resource[i].linkUrl); //设置超链接的地址
        link.setAttribute('target','_blank'); //设置超链接的属性 新建窗口
        link.style.paddingRight = '2em';  //将标题和时间分开   
        link.style.width = '80%';  //将标题和时间分开   
        linkItem.appendChild(link);
        var date = document.createTextNode(resource[i].date);
        linkItem.appendChild(date);
        linkList.appendChild(linkItem);
    };
    document.getElementById('resource').appendChild(linkList);
} 