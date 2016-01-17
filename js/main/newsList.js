$(document).ready(function () {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");
    var typeName = "";
    if (type == 1) {
        typeName = "学术新闻";
    }
    else if (type == 2) {
        typeName = "公告通知";
    }
    else if (type == 3) {
        typeName = "学术报告";
    }
    else if (type == 4) {
        typeName = "学术会议";
    }
    infoList(type);
    $("#nameNav").html(typeName);
    $("#nameTitle").html("<i class='fa fa-list-alt fa-lg'></i>&nbsp;&nbsp;" + typeName);
});

//加载新闻动态的新闻列表
function infoList(getType) {
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");
    if (type == 1){ //学术新闻
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="../../材料/summerschool.htm">Summer school on mathematical finance</a></td>'
                +'<td>July 8 - July 19</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="http://math.suda.edu.cn/meeting/cpms2013/CPMS2013.html">材料科学中的计算问题</a></td>'
                +'<td>21-24 August 2013</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="http://math.suda.edu.cn/meeting/MBE2014/MBE2014.html">分子生物学及电生理学的数学建模及模拟</a></td>'
                +'<td>2-5 June 2014</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="http://cqf.nus.edu.sg/2015_Graduate_Summer_School_on_Quantitative_Finance/Registration.html">2015 Graduate summer school on quantitative finance</a></td>'
                +'<td>3-13 July 2015</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="http://math.suda.edu.cn/meeting/MBE2016/MBE2016.html">分子生物学及电生理学的数学建模及模拟</a></td>'
                +'<td>16-18 June 2016</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self"  href="我是超链接地址 ">我是新闻的标题</a></td>'
                +'<td>21-24 August 2016</td>'
            +'</tr>'
        );
    }
    else if(type==2){ //通知公告
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=1">公告通知1</a></td>'
                +'<td></td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=2">公告通知2</a></td>'
                +'<td></td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=3">公告通知3</a></td>'
                +'<td></td>'
            +'</tr>'
        );

    }
    else if(type==3){ //学术报告
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=1">Point-spread function reconstruction in ground-based astronomy</a></td>'
                +'<td>2015-11-9</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=2">金融数据分析前沿讲座</a></td>'
                +'<td>2015-11-06</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=3">Recent Developments in Linear Programming and Its Application in Finance</a></td>'
                +'<td>2015-11-04</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=4">从数据库到大数据：应用，技术和新思维</a></td>'
                +'<td>2015-09-25</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=5">Nonlinearities of biopolymer gels increase the range of force transmission</a></td>'
                +'<td>2015-09-16</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=6">Variational Implicit Solvation of Biomolecules</a></td>'
                +'<td>2015-09-09</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=7">Efficient and unconditionally stable numerical schemes for phase field models</a></td>'
                +'<td>2015-07-08</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=8">RKDG method with conservation constraints and hierarchical reconstruction limiter for solving conservation laws</a></td>'
                +'<td>2015-07-01</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=9">Short Selling and Endogenous Price Uncertainty</a></td>'
                +'<td>2015-06-16</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=10">Energy stable schemes for a diffusive interface model with Peng-Robinson equation of state</a></td>'
                +'<td>2015-05-22</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=11">王成老师系列报告（10讲）</a></td>'
                +'<td>2015-05-19</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=12">Averaging for nonlinear PDEs</a></td>'
                +'<td>2015-05-18</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=13">统计、交叉、金融工程中心大数据系列报告（三）2</a></td>'
                +'<td>2015-05-12</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=14">天元讲堂：统计、交叉、金融工程中心大数据系列报告（三）</a></td>'
                +'<td>2015-05-11</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=15">The Internet financing and risk management</a></td>'
                +'<td>2015-04-20</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=16">Reverse Computation in noise-driven dynamic complex networks</a></td>'
                +'<td>2015-04-17</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=17">面向证券市场操纵行为的大数据特异群组挖掘研究</a></td>'
                +'<td>2015-04-16</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=18">Variational Implicit-Solvent Model and Size-Modified Poisson--Boltzmann Theory for Charged Biomolecules</a></td>'
                +'<td>2014-12-19</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=19">Spectral and pseudo-spectral schemes for nonlinear PDEs (10 Lectures)</a></td>'
                +'<td>2014-12-15</td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=20">Modeling and simulation of multi-phase flow on solid surfaces</a></td>'
                +'<td>2014-12-15</td>'
            +'</tr>'
        );
    }
    else if(type==4){ //学术会议
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=1">会议标题1</a></td>'
                +'<td></td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=2">会议标题2</a></td>'
                +'<td></td>'
            +'</tr>'
        );
        $("#infoList").append(
            '<tr>'
                +'<td><a target="_self" href="newsDetail.html?type='+getType+'&id=3">会议标题3</a></td>'
                +'<td></td>'
            +'</tr>'
        );
        
    }

    
}


