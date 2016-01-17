$(document).ready(function () {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    //加载种类的文字信息
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");

    var typeName;
    if (type == 1) {
        typeName = '中心简介';
        content = '<p> 苏州大学数学与交叉科学研究中心（以下简称“数学交叉中心”）成立于2012年11月，为校级科研机构，依托单位是苏州大学数学科学学院。</p>' +
        '<p> 交叉中心设立学术委员会与执行委员会，实行中心主任负责制。现有四个交叉研究部，分别是：数学与生物交叉研究部、数学与金融交叉研究部、数学与材料交叉研究部、数据科学与优化计算研究部。</p>' +
        '<p> 交叉中心的成立，旨在搭建一个数学与其它学科交叉合作的高水平研究平台；通过体制机制创新，凝聚校内外数学及相关学科力量，协同攻关，成为国内一流的交叉科学研究基地。</p>' +
        '<p> 交叉中心将通过设立重大研究专题、承担国家和企业重大项目、组织数学与相关学科交叉论坛，开展数学及其应用交叉研究、合作交流、交叉型人才培养。</p>';
    }
    else if (type == 2) {
        typeName = '机构设置';
        organization = [{
            director1:'鄂维南院士',
            associate_director1:'',
            members1:'陈发来、鄂维南、黄京芳、柳春、明平兵、汤华中、岳兴业、张平文',
            director2:'鄂维南院士',
            associate_director2:'柳春教授、岳兴业教授（常务）',
            members2:''
        }];
        
    }
    else if (type == 3) {
        typeName = '研 究 部';
        departments = ['数学与生物交叉研究部','数学与材料交叉研究部','数学与金融交叉研究部','数据科学与优化计算研究部'];
    }
    else if (type == 4) {
        typeName = '联系我们';
        tel = '0791-6990909999';
        email = 'wufenfen@mail.ustc.edu.cn';
        address = '苏州市十梓街1号173号信箱';
        postalcode = '215006';
    }

    $("#nameNav").text(typeName);
    $("#nameTitle").html('<i class="fa fa-lg fa-home"></i>&nbsp;&nbsp;' + typeName);
    if (type == 1) {
        $("#infoContent").html(content);
    }
    else if (type == 2) {
        getMembers();
    }
    else if (type == 3) {
        getDepartment();
    }
    else if (type == 4) {
        $("#infoContent").html('<p>' +"联系电话：" + tel +'</p>'  +
                                '<p>' + "邮箱：" + email +'</p>' +
                                '<p>' +  "通信地址：" + address +'</p>' + 
                                '<p>' + "邮政编码：" + postalcode+'</p>');
    }

    
}); 
//获取研究部的信息
function getDepartment(){
    for (var i = 0; i < departments.length; i++) {  
        $("#infoContent").append("<a class='btn  btn-success btn-flat' target='_self' href='infoDetail.html?type=3&id=" + (i+1) +"'>" +departments[i] +"</a> ");
    }
    $("#infoContent").css("text-indent","0");
    $("#infoContent").css("text-align","center");
}

//获取机构设置的人员
function getMembers(){
    for (var i = 0; i < organization.length; i++) {     
        $("#infoContent").append("第"+ getChineseNumber(i+1) +"届学术委员会" 
        + '<p>' +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "主任：" + organization[i].director1 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "副主任：" + organization[i].associate_director1 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "委员：" + organization[i].members1 +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "执行委员会" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "主任：" + organization[i].director2 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "副主任：" + organization[i].associate_director2 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "委员：" + organization[i].members2+'</p>');
    };
}

//获取中文的数字
function getChineseNumber(digital){
    var ten = parseInt(digital/10);
    if(ten==0){//只有个位数
        return singleNumber(digital);
    }
    else if(ten==1){ //两位数
        return '十' + singleNumber(digital%10);
    }
    else if(ten<10){ //两位数
        return singleNumber(ten) + '十' + singleNumber(digital%10);
    }
    else { //不处理过大的数字
        return digital;
    }

}

function singleNumber(digital){
    switch(digital){
        case 1:
            return "一";
        case 2:
            return "二";
        case 3:
            return "三";
        case 4:
            return "四";
        case 5:
            return "五";
        case 6:
            return "六";
        case 7:
            return "七";
        case 8:
            return "八";
        case 9:
            return "九";
    }
}