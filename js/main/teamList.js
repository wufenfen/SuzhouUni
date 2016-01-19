$(document).ready(function () {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    //加载种类的文字信息
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");

    var typeName;
    if (type == 1) {
        typeName = '教 师';
        //加载教师信息
        getFaculty(); 
    }
    else if (type == 2) {
        typeName = '访问讲座教授';
        //加载访问讲座教授信息
        getVisitingProf();
    }
    else if (type == 3) {
        typeName = '博士后';
        //加载博士后信息
        getPostdoc();
    }
    else if (type == 4) {
        typeName = '学 生';
        //加载学生信息
        getStudent();
    }

    $("#nameNav").text(typeName);
    $("#nameTitle").html('<i class="fa fa-lg fa-users"></i>&nbsp;&nbsp;' + typeName);

    
});

//加载教师信息列表 type=1
function getFaculty() {
    $("#infoList").append(
    '<tr>'
        +'<td width="30%"><a target="_self" href="teamDetail.html?type=1&id=3">陈旻昕</a></td>'
        +'<td>分子模拟、计算结构生物学 </td>'
        +'<td>chenminxin@suda.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=2">陈景润</a></td>'
        +'<td>材料的多尺度建模、分析与仿真 </td>'
        +'<td>jingrunchen@suda.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=4">杜锐</a></td>'
        +'<td>数值均匀化、区域分解方法、数值分析 </td>'
        +'<td>durui@suda.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=5">徐玉红</a></td>'
        +'<td>非线性期望、后向随机微分方程、期权定价与风险度量 </td>'
        +'<td>yhxu@suda.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=6">杨凌</a></td>'
        +'<td>生物系统的数学模型 </td>'
        +'<td>lyang@suda.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=1">岳兴业</a></td>'
        +'<td>偏微分方程数值解、多尺度建模及模拟 </td>'
        +'<td>xyyue@suda.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=7">杨周旺</a></td>'
        +'<td>大数据建模分析、优化计算</td>'
        +'<td>yangzw@ustc.edu.cn</td>'
    + '</tr>'
    );
    $("#infoList").append(
    '<tr>'
        +'<td><a target="_self" href="teamDetail.html?type=1&id=8">周圣高</a></td>'
        +'<td>科学计算、数值计算、生物数学</td>'
        +'<td>sgzhou@suda.edu.cn</td>'
    + '</tr>'
    );
}

//加载访问讲座教授信息列表 type=2
function getVisitingProf() {
    $("#infoList").append(
    '<tr>'
        + '<td width="30%"><a target="_self" href="teamDetail.html?type=2&id=1">戴民</a></td>'
        + '<td>这是一段说明名字，例如研究方向</td>'
        + '<td>这里填上邮箱地址</td>'
    + '</tr>'
    );
     $("#infoList").append(
    '<tr>'
        + '<td><a target="_self" href="teamDetail.html?type=2&id=2">鄂维南</a></td>'
        + '<td>这是一段说明名字，例如研究方向</td>'
        + '<td>这里填上邮箱地址</td>'
    + '</tr>'
    );
     $("#infoList").append(
    '<tr>'
        + '<td><a target="_self" href="teamDetail.html?type=2&id=3">黄京芳</a></td>'
        + '<td>这是一段说明名字，例如研究方向</td>'
        + '<td>这里填上邮箱地址</td>'
    + '</tr>'
    );
     $("#infoList").append(
    '<tr>'
        + '<td><a target="_self" href="teamDetail.html?type=2&id=4">柳春</a></td>'
        + '<td>这是一段说明名字，例如研究方向</td>'
        + '<td>这里填上邮箱地址</td>'
    + '</tr>'
    );
     $("#infoList").append(
    '<tr>'
        + '<td><a target="_self" href="teamDetail.html?type=2&id=5">王成</a></td>'
        + '<td>这是一段说明名字，例如研究方向</td>'
        + '<td>这里填上邮箱地址</td>'
    + '</tr>'
    );
     
}


//加载博士后信息列表 type=3
function getPostdoc() {
    $("#infoList").append(
    '<tr>'
		+ '<td width="30%"><a target="_self" href="teamDetail.html?type=3&id=1">XXX</a></td>'
		+ '<td>偏微分方程数值解、多尺度建模及模拟	</td>'
		+ '<td>xyh@suda.edu.cn</td>'
	+ '</tr>'
    );
}

//加载学生信息列表 type=4
function getStudent() {
    $("#infoList").append(
    '<tr>'
		+ '<td width="30%"><a target="_self" href="teamDetail.html?type=4&id=1">YYY</a></td>'
		+ '<td>偏微分方程数值解、多尺度建模及模拟	</td>'
		+ '<td>ykc@suda.edu.cn</td>'
	+ '</tr>'
    );
}

