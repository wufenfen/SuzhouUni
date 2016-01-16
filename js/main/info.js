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
        infoContent_paragraph_1 = '苏州大学数学与交叉科学研究中心（以下简称“数学交叉中心”）成立于2012年11月，为校级科研机构，依托单位是苏州大学数学科学学院。';
        infoContent_paragraph_2 = '交叉中心设立学术委员会与执行委员会，实行中心主任负责制。现有四个交叉研究部，分别是：数学与生物交叉研究部、数学与金融交叉研究部、数学与材料交叉研究部、数据科学与优化计算研究部。';
        infoContent_paragraph_3 = '交叉中心的成立，旨在搭建一个数学与其它学科交叉合作的高水平研究平台；通过体制机制创新，凝聚校内外数学及相关学科力量，协同攻关，成为国内一流的交叉科学研究基地。';
        infoContent_paragraph_4 = '交叉中心将通过设立重大研究专题、承担国家和企业重大项目、组织数学与相关学科交叉论坛，开展数学及其应用交叉研究、合作交流、交叉型人才培养。';
        infoContent_paragraph_5 = '';
        infoContent_paragraph_6 = '';
        infoContent_paragraph_7 = '';
        infoContent_paragraph_8 = '';
        infoContent_paragraph_9 = '';
        infoContent_paragraph_10 = '';
    }
    else if (type == 2) {
        typeName = '机构设置';
        director1 = '鄂维南院士';
        associate_director1 = ''
        members1 = '陈发来、鄂维南、黄京芳、柳春、明平兵、汤华中、岳兴业、张平文';
        director2 = '鄂维南院士';
        associate_director2 = '柳春教授、岳兴业教授（常务）';
        members2 = '';
    }
    else if (type == 3) {
        typeName = '研 究 部';
        department_1 = '数学与生物交叉研究部';
        department_2 = '数学与材料交叉研究部';
        department_3 = '数学与金融交叉研究部';
        department_4 = '数据科学与优化计算研究部';
        department_5 = '';
    }
    else if (type == 4) {
        typeName = '联系我们';
        tel = '';
        email = '';
        address = '苏州市十梓街1号173号信箱';
        postalcode = '215006';
    }

    $("#nameNav").text(typeName);
    $("#nameTitle").html('<i class="fa fa-lg fa-home"></i>&nbsp;&nbsp;' + typeName);
    if (type == 1) {
        $("#infoContent").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_1 
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_2 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_3 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_4 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_5 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_6 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_7 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_8 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_9 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + infoContent_paragraph_10+'</p>');
    }
    else if (type == 2) {
        $("#infoContent").html("第一届学术委员会" 
        + '<p>' +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "主任：" + director1 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "副主任：" + associate_director1 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "委员：" + members1 +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "执行委员会" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "主任：" + director2 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "副主任：" + associate_director2 +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "委员：" + members2+'</p>');
    }
    else if (type == 3) {
        $("#infoContent").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + department_1 
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + department_2 +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + department_3 +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + department_4 +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + department_5+'</p>');
    }
    else if (type == 4) {
        $("#infoContent").html("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "联系电话：" + tel 
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "邮箱：" + email +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "通信地址：" + address +'</p>'
        + '<p>' + "&nbsp;" +'</p>'
        + '<p>' + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + "邮政编码：" + postalcode+'</p>');
    }

    
});

