$(document).ready(function(){
    initNav();
	 //轮播自动
	 $("#myCarousel").carousel('cycle');

	 var test = window.location.href;
	 var type = GetArgsFromHref(test, "type");
	 var typeName="";
	 if(type==1){
		 typeName="科研成果";
	 }
	 else if(type==2){
		 typeName="专题研究";
	 }
	 else if(type==3){
		 typeName="合作课题";
	 }
    
	 $("#nameNav").html(typeName);
	 $("#nameTitle").html("<i class='fa fa-file-text fa-lg'></i>&nbsp;&nbsp;" + typeName);

	 infoList(type);
});

//加载科研进展的信息列表
function infoList(getType) {
    var test = window.location.href;
	var type = GetArgsFromHref(test, "type");
	if(type==1){
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=1">科研成果1</a></td>'
	    		+ '<td>2015-11-08</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=2">科研成果2</a></td>'
	    		+ '<td>2015-11-08</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=3">科研成果3</a></td>'
	    		+ '<td>2015-11-08</td>'
	    	+ '</tr>'
        );
    }
    else if (type==2){
    	$("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=1">Mathematical Finance</a></td>'
	    		+ '<td>Yuhong Xu; Xingye Yue</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=2">Mathematical Biology</a></td>'
	    		+ '<td>Minxin Chen; Ling Yang; Shenggao Zhou</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=3">Mathematical modeling of biological signal transduction networks</a></td>'
	    		+ '<td></td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=4">Computational Material Science</a></td>'
	    		+ '<td>Jingrun Chen; Rui Du; Xingye Yue</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=5">专题研究5</a></td>'
	    		+ '<td>xxx</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=6">专题研究6</a></td>'
	    		+ '<td>xxx</td>'
	    	+ '</tr>'
        );
    }
    else if (type == 3){
    	$("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=1">合作课题1</a></td>'
	    		+ '<td>xxx</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=1">合作课题2</a></td>'
	    		+ '<td>xxx</td>'
	    	+ '</tr>'
        );
        $("#infoList").prepend(
            '<tr>'
	    		+ '<td><a target="_self" href="researchDetail.html?type=' + getType + '&id=1">合作课题3</a></td>'
	    		+ '<td>xxx</td>'
	    	+ '</tr>'
        );
    }
}