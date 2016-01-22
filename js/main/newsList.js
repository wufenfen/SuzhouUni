$(document).ready(function() {
    var href = window.location.href;
    if (href.match('newsList')) {
        initNav();
        //轮播自动
        $("#myCarousel").carousel('cycle');
        var typeName = "";
        var type = GetArgsFromHref(href, "type");
        if (type == 1) {
            typeName = "学术新闻";
        } else if (type == 2) {
            typeName = "公告通知";
        } else if (type == 3) {
            typeName = "学术报告";
        } else if (type == 4) {
            typeName = "学术会议";
        }

        var infoLists = getInfoList(type); //加载信息

        var page = 1; //全局变量页数
        var size = 10;
        var total = infoLists.length; //总页数
        addTheList(infoLists, type, page, size, total); //添加当前页

        $("#nameNav").html(typeName);
        $("#nameTitle").html("<i class='fa fa-list-alt fa-lg'></i>&nbsp;&nbsp;" + typeName);

        $("#previous").click(function() { //向前翻页
            if (page == 1) {
                return;
            } else {
                page--;
            }
            addTheList(infoLists, type, page, size, total);
        });

        $("#next").click(function() { //向后翻页
            if (page * 10 >= total) {
                return;
            } else {
                page++;
            }
            addTheList(infoLists, type, page, size, total);
        });

    } 
    else { //获取首页的信息。
        var news = getInfoList(1);
        var last_Index = news.length-1;
        for (var i = last_Index; i >=0 && i > last_Index-3 ; i--) {
             $("#news").append("<tr><td width='75%'><h5 name='abbr'><a class='btn-link' href='newsDetail.html?type=1&id=" +
            news[i].id + "'><i class='fa fa-hand-o-right'></i>" + news[i].title +
            " </a> </h5></td><td><h5>" + news[i].date + "</h5>  </td> </tr>");
        };

        var report = getInfoList(3);
        var last_Index = report.length-1;
        for (var i = last_Index; i >=0 && i > last_Index-3 ; i--) {
             $("#report").append("<tr><td width='75%' ><h5 name='abbr'><a class='btn-link' href='newsDetail.html?type=3&id=" +
            report[i].id + "'><i class='fa fa-hand-o-right'></i>" + report[i].title +
            " </a> </h5></td><td><h5>" + report[i].date + "</h5>  </td> </tr>");
        };

        var notice = getInfoList(2);
        var last_Index = notice.length-1;
        for (var i = last_Index; i >=0 && i > last_Index-3 ; i--) {
             $("#notice").append("<tr><td width='75%' ><h5 name='abbr'><a class='btn-link' href='newsDetail.html?type=2&id=" +
            notice[i].id + "'><i class='fa fa-hand-o-right'></i>" + notice[i].title +
            " </a> </h5></td><td><h5>" + notice[i].date + "</h5>  </td> </tr>");
        };
    }

});

//加载新闻动态的新闻列表
function getInfoList(type) {
    var infoLists = [];
    if (type == 1) { //学术新闻
        infoLists = [{
            id: 1, //填写对应的id号，在详情页一一对应
            href: "../../材料/summerschool.htm", //如果需要额外的链接，写在此处
            title: 'Summer school on mathematical finance', //填写标题
            date: '2013-06-8' //填写日期
        }, {
            id: 2,
            href: "http://math.suda.edu.cn/meeting/cpms2013/CPMS2013.html",
            title: "材料科学中的计算问题",
            date: "2013-08-21"
        }, {
            id: 3,
            href: "http://math.suda.edu.cn/meeting/MBE2014/MBE2014.html",
            title: "分子生物学及电生理学的数学建模及模拟",
            date: "2014-06-2"
        }, {
            id: 4,
            href: "http://cqf.nus.edu.sg/2015_Graduate_Summer_School_on_Quantitative_Finance/Registration.html",
            title: "2015 Graduate summer school on quantitative finance",
            date: "2016-01-3"
        }, {
            id: 5,
            href: "http://math.suda.edu.cn/meeting/MBE2016/MBE2016.html",
            title: "分子生物学及电生理学的数学建模及模拟",
            date: "2016-01-16"
        }, {
            id: 6,
            href: "我是超链接地址",
            title: "是吗？你会变化吗",
            date: "2016-01-28"
        }];

    } else if (type == 2) { //通知公告
        infoLists = [{
            id: 1, //填写对应的id号，在详情页一一对应
            href: "", //如果需要额外的链接，写在此处
            title: '公告通知1公告通知1公告通知1公告通知1公告通知1公告通知1', //填写标题
            date: '2016-01-19' //填写日期
        }, {
            id: 2,
            href: "",
            title: "公告通知2",
            date: "2016-01-24"
        }, {
            id: 3,
            href: "",
            title: "公告通知3",
            date: "2016-01-27"
        }];
    } else if (type == 3) { //学术报告
        infoLists = [{
            id: 1,
            href: '',
            title: "Modeling and simulation of multi-phase flow on solid surfaces",
            date: "2014-12-15"
        }, {
            id: 2,
            href: '',
            title: "Spectral and pseudo-spectral schemes for nonlinear PDEs (10 Lectures)",
            date: "2014-12-15"
        }, {
            id: 3,
            href: '',
            title: "Variational Implicit-Solvent Model and Size-Modified Poisson--Boltzmann Theory for Charged Biomolecules",
            date: "2014-12-19"
        }, {
            id: 4,
            href: '',
            title: "面向证券市场操纵行为的大数据特异群组挖掘研究",
            date: "2015-04-16"
        }, {
            id: 5,
            href: '',
            title: "Reverse Computation in noise-driven dynamic complex networks",
            date: "2015-04-17"
        }, {
            id: 6,
            href: '',
            title: "The Internet financing and risk management",
            date: "2015-04-20"
        }, {
            id: 7,
            href: '',
            title: "天元讲堂：统计、交叉、金融工程中心大数据系列报告（三）",
            date: "2015-05-11"
        }, {
            id: 8,
            href: '',
            title: "统计、交叉、金融工程中心大数据系列报告（三）2",
            date: "2015-05-12"
        }, {
            id: 9,
            href: '',
            title: "Averaging for nonlinear PDEs",
            date: "2015-05-18"
        }, {
            id: 10,
            href: '',
            title: "王成老师系列报告（10讲）",
            date: "2015-05-19"
        }, {
            id: 11,
            href: '',
            title: "Energy stable schemes for a diffusive interface model with Peng-Robinson equation of state",
            date: "2015-05-22"
        }, {
            id: 12,
            href: '',
            title: "Short Selling and Endogenous Price Uncertainty",
            date: "2015-06-16"
        }, {
            id: 13,
            href: '',
            title: "RKDG method with conservation constraints and hierarchical reconstruction limiter for solving conservation laws",
            date: "2015-07-01"
        }, {
            id: 14,
            href: '',
            title: "Efficient and unconditionally stable numerical schemes for phase field models",
            date: "2015-07-08"
        }, {
            id: 15,
            href: '',
            title: "Variational Implicit Solvation of Biomolecules",
            date: "2015-09-09"
        }, {
            id: 16,
            href: '',
            title: "Nonlinearities of biopolymer gels increase the range of force transmission",
            date: "2015-09-16"
        }, {
            id: 17,
            href: '',
            title: "从数据库到大数据：应用，技术和新思维",
            date: "2015-09-25"
        }, {
            id: 18,
            href: '',
            title: "Recent Developments in Linear Programming and Its Application in Finance",
            date: "2015-11-04"
        }, {
            id: 19,
            href: '',
            title: "金融数据分析前沿讲座",
            date: "2015-11-06"
        }, {
            id: 20,
            href: '',
            title: "Point-spread function reconstruction in ground-based astronomy",
            date: "2015-11-9"
        }];
    } else if (type == 4) { //学术会议
        infoLists = [{
            id: 1,
            href: "",
            title: '会议标题1',
            date: '2016-01-7'
        }, {
            id: 2,
            href: "",
            title: "会议标题2",
            date: "2016-01-14"
        }, {
            id: 3,
            href: "",
            title: "会议标题3",
            date: "2016-01-27"
        }];
    }
    return infoLists;
}

//page表示第几页 size表示每页显示几条
function addTheList(infoLists, type, page, size, total) {
    $("#infoList").html(''); //添加之前先清空本页
    var start = (page - 1) * size; //开始的页数  第一项从0开始
    var end = start + size; //结束的页数
    if (type == 1) { //链接跳转到其他页面
        for (var i = start; i < total && i < end; i++) {
            $("#infoList").prepend("<tr> <td><a  href=\'" + infoLists[i].href + '\'>' + infoLists[i].title + '</a></td>  <td>' + infoLists[i].date + '</td> </tr>');
        };
    } else { //跳转到自己填写的页面 
        for (var i = start; i < total && i < end; i++) {
            $("#infoList").prepend("<tr> <td><a  href='newsDetail.html?type=" + type + '&id=' + infoLists[i].id + '\'>' + infoLists[i].title + '</a></td>  <td>' + infoLists[i].date + '</td> </tr>');
        };
    }
    $("#pageInfo").html(' &nbsp;  &nbsp;第' + page + '页/共' + Math.ceil(infoLists.length / 10) + '页');
}
