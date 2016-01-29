function GetArgsFromHref(sHref, sArgName) {
    //CuPlayer.com提示：测试数据 
    //实际情况是用window.location.href得到URL 
    var args = sHref.split("?");
    var retval = "";
    if (args[0] == sHref) /*参数为空*/
    {
        return retval; /*CuPlayer.com提示：无需做任何处理*/
    }
    var str = args[1];
    args = str.split("&");
    for (var i = 0; i < args.length; i++) {
        str = args[i];
        var arg = str.split("=");
        if (arg.length <= 1) continue;
        if (arg[0] == sArgName) retval = arg[1];
    }
    return retval;
    //alert(retval); 
} 

//防止trim无效
String.prototype.trim = function() {
	return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
};



//bootstrap的Popver控件初始化
function popoverset(){
	$("[data-toggle='popover']").popover({
		trigger:'manual'
	})
	.on('blur',function(){
		if($(this).parent().children("input[type='text'][readonly='false']").val()==''){
			$(this).popover('show');
		}
	})
	.on('focus',function(){
		$(this).popover('hide');
	});
}


//通用弹出信息
//必须要配合通用弹出框myModal使用
function alertNow(getValue){
	$("#alertInfo").html(getValue);
	$("#myModal").modal('show');
}

//初始化顶部导航栏
function initNav() {
    $("#top-logo").append('<span class="navbar-brand"> <img src="../images/main/logo.png" alt="logo" '
		+'style="height:65px;width:65px;"> </span> <span '
		+'class="navbar-brand nav-item-now" style="font-size:20px;"> <strong>苏州大学数学与交叉科学研究中心</strong> '
	+ '</span>');

    $("#top-nav").append(
        '<li class="dropdown"><span onclick=document.location.href="mainPage.html"; '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 首页 </span> '
		+'</li> '
		+'<li class="dropdown"><span '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 中心概况 <b '
				+'class="caret"></b> </span> '
			+'<ul class="dropdown-menu"> '
				+'<li><a target="_self" href="info.html?type=1">中心简介</a> '
				+'</li> '
				+'<li><a target="_self" href="info.html?type=2">机构设置</a> '
				+'</li> '
				+'<li><a target="_self" href="info.html?type=3">研 究 部</a> '
				+'</li> '
				+'<li><a target="_self" href="info.html?type=4">联系我们</a> '
				+'</li> '
			+'</ul></li> '
		+'<li class="dropdown"><span '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 研究队伍 <b '
				+'class="caret"></b> </span> '
			+'<ul class="dropdown-menu"> '
				+'<li><a target="_self" href="teamList.html?type=1">教 师</a> '
				+'</li> '
				+'<li><a target="_self" href="teamList.html?type=2">客座教授</a> '
				+'</li> '
                +'<li><a target="_self" href="teamList.html?type=3">博士后</a> '
				+'</li> '
				+'<li><a target="_self" href="teamList.html?type=4">学 生</a> '
				+'</li> '
			+'</ul></li> '
		+'<li class="dropdown"><span '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 新闻动态 <b '
				+'class="caret"></b> </span> '
			+'<ul class="dropdown-menu"> '
				+'<li><a target="_self" href="newsList.html?type=1">学术新闻</a> '
				+'</li> '
				+'<li><a target="_self" href="newsList.html?type=2">公告通知</a> '
				+'</li> '
				+'<li><a target="_self" href="newsList.html?type=3">学术报告</a> '
				+'</li> '
				+'<li><a target="_self" href="newsList.html?type=4">学术会议</a> '
				+'</li> '
			+'</ul></li> '
		+'<li class="dropdown"><span '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 科研进展 <b '
				+'class="caret"></b> </span> '
			+'<ul class="dropdown-menu"> '
				+'<li><a target="_self" href="researchList.html?type=1">科研成果</a> '
				+'</li> '
				+'<li><a target="_self" href="researchList.html?type=2">专题研究</a> '
				+'</li> '
				+'<li><a target="_self" href="researchList.html?type=3">合作课题</a> '
				+'</li> '
			+'</ul></li> '
        +'<li class="dropdown"><span '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 招聘信息 <b '
				+'class="caret"></b> </span> '
			+'<ul class="dropdown-menu"> '
				+'<li><a target="_self" href="recruitment.html?type=1">人才引进</a> '
				+'</li> '
				+'<li><a target="_self" href="recruitment.html?type=2">学生招募</a> '
				+'</li> '
			+'</ul></li> '
		+'<li class="dropdown"><span '
			+'class="dropdown-toggle btn btn-primary btn-link btn-nav-now" '
			+'style="padding:12px;" data-hover="dropdown"> 开放资源 <b '
				+'class="caret"></b> </span> '
			+'<ul class="dropdown-menu"> '
				+'<li><a target="_self" href="resource.html?type=1">文档下载</a> '
				+'</li> '
				+'<li><a target="_self" href="resource.html?type=2">其它资源</a> '
				+'</li> '				
			+'</ul></li> '
    );
    //materialDesign初始化
    $.material.init();
    //hover自动下拉初始化  导航栏使用
    $('[data-hover="dropdown"]').dropdownHover();
}

//导航栏 鼠标滑动自动下拉
(function($, window, undefined) {
    // outside the scope of the jQuery plugin to
    // keep track of all dropdowns
    var $allDropdowns = $();

    // if instantlyCloseOthers is true, then it will instantly
    // shut other nav items when a new one is hovered over
    $.fn.dropdownHover = function(options) {

        // the element we really care about
        // is the dropdown-toggle's parent
        $allDropdowns = $allDropdowns.add(this.parent());

        return this.each(function() {
            var $this = $(this).parent(),
                defaults = {
                    delay: 500,
                    instantlyCloseOthers: true
                },
                data = {
                    delay: $(this).data('delay'),
                    instantlyCloseOthers: $(this).data('close-others')
                },
                options = $.extend(true, {}, defaults, options, data),
                timeout;

            $this.hover(function() {
                if(options.instantlyCloseOthers === true)
                    $allDropdowns.removeClass('open');

                window.clearTimeout(timeout);
                $(this).addClass('open');
            }, function() {
                timeout = window.setTimeout(function() {
                    $this.removeClass('open');
                }, options.delay);
            });
        });
    };

    $('[data-hover="dropdown"]').dropdownHover();
})(jQuery, this);

