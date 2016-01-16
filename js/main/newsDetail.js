$(document).ready(function(){
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

	 $("#typeNav").html(typeName);

	 var id = GetArgsFromHref(test, "id");
	 var name;
	 if (type == 1) {
	     if(id==1){
		     news_title='新闻标题1';//新闻标题
		     news_abstract='新闻摘要1';//新闻摘要
		     news_content='新闻内容1';//新闻内容
		     news_date='新闻发布日期1';//新闻发布日期
		     news_url='新闻来源1';//新闻来源，比如超链接
	     }
	     if(id==2){
		     news_title='';
		     news_abstract='';
		     news_content='';
		     news_date='';
		     news_url='';
	     }
	     if(id==3){
		     news_title='';
		     news_abstract='';
		     news_content='';
		     news_date='';
		     news_url='';
	     }
	 }
	 if (type == 2) {
	     if(id==1){
		     notice_title ='公告通知标题1';//公告通知标题
		     notice_content ='公告通知内容1';//公告通知内容
		     notice_date ='公告通知发布日期1';//公告通知发布日期
		     notice_attachment ='公告通知附件1';//公告通知附件，指向一个可下载链接
	     }
	     if(id==2){
		     notice_title ='';
		     notice_content ='';
		     notice_date ='';
		     notice_attachment ='';
	     }
	     if(id==3){
		     notice_title ='';
		     notice_content ='';
		     notice_date ='';
		     notice_attachment ='';
	     }
	 }
	 if (type == 3) {
	     if(id==1){
		     talk_title='Point-spread function reconstruction in ground-based astronomy';
		     talk_abstract='摘要1';
		     talk_speaker='报告人1';
		     talk_time='2015-11-9';
		     talk_room='会议地点1';
	     }
	     if(id==2){
		     talk_title='金融数据分析前沿讲座';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-11-06';
		     talk_room='';
	     }
	     if(id==3){
		     talk_title='Recent Developments in Linear Programming and Its Application in Finance';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-11-04';
		     talk_room='';
	     }
	     if(id==4){
		     talk_title='从数据库到大数据：应用，技术和新思维';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-09-25';
		     talk_room='';
	     }
	     if(id==5){
		     talk_title='Nonlinearities of biopolymer gels increase the range of force transmission';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-09-16';
		     talk_room='';
	     }
	     if(id==6){
		     talk_title='Variational Implicit Solvation of Biomolecules';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-09-09';
		     talk_room='';
	     }
	     if(id==7){
		     talk_title='Efficient and unconditionally stable numerical schemes for phase field models';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-07-08';
		     talk_room='';
	     }
	     if(id==8){
		     talk_title='RKDG method with conservation constraints and hierarchical reconstruction limiter for solving conservation laws';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-07-01';
		     talk_room='';
	     }
	     if(id==9){
		     talk_title='Short Selling and Endogenous Price Uncertainty';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-06-16';
		     talk_room='';
	     }
	     if(id==10){
		     talk_title='Energy stable schemes for a diffusive interface model with Peng-Robinson equation of state';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-22';
		     talk_room='';
	     }
	     if(id==11){
		     talk_title='王成老师系列报告（10讲）';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-19';
		     talk_room='';
	     }
	     if(id==12){
		     talk_title='Averaging for nonlinear PDEs';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-18';
		     talk_room='';
	     }
	     if(id==13){
		     talk_title='统计、交叉、金融工程中心大数据系列报告（三）2';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-12';
		     talk_room='';
	     }
	     if(id==14){
		     talk_title='天元讲堂：统计、交叉、金融工程中心大数据系列报告（三）';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-11';
		     talk_room='';
	     }
	     if(id==15){
		     talk_title='The Internet financing and risk management';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-04-20 ';
		     talk_room='';
	     }
	     if(id==16){
		     talk_title='Reverse Computation in noise-driven dynamic complex networks';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-04-17 ';
		     talk_room='';
	     }
	     if(id==17){
		     talk_title='面向证券市场操纵行为的大数据特异群组挖掘研究';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-04-16';
		     talk_room='';
	     }
	     if(id==18){
		     talk_title='Variational Implicit-Solvent Model and Size-Modified Poisson--Boltzmann Theory for Charged Biomolecules';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2014-12-19';
		     talk_room='';
	     }
	     if(id==19){
		     talk_title='Spectral and pseudo-spectral schemes for nonlinear PDEs (10 Lectures)';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2014-12-15';
		     talk_room='';
	     }
	     if(id==20){
		     talk_title='Modeling and simulation of multi-phase flow on solid surfaces';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2014-12-15';
		     talk_room='';
	     }
	     if(id==21){
		     talk_title='';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='';
		     talk_room='';
	     }
	 }
	 if (type == 4) {
	     if(id==1){
		     conference_name='会议标题1';//会议名称
		     conference_period='会议日期1';//会议日期，如：2015年11月18日—23日
		     conference_place='会议地点1';//会议地点，如：安徽合肥中国科学技术大学数学科学学院
		     conference_url='会议主页链接1';//会议主页链接
	     }
	     if(id==2){
		     conference_name='会议标题2';
		     conference_period='';
		     conference_place='';
		     conference_url='';
	     }
	     if(id==3){
		     conference_name='会议标题3';
		     conference_period='';
		     conference_place='';
		     conference_url='';
	     }
	 }

     if (type == 1){
         $("#nameNav").text(news_title);
	     $("#nameTitle").text(news_title);
	     $("#namecontent").text(news_title);
	     $("#content").html('&nbsp&nbsp&nbsp&nbsp' + '时间：' + news_date + '<p>' + '<p>' + '&nbsp&nbsp&nbsp&nbsp' + '摘要：' + news_abstract + '<p>' + '<p>' + '&nbsp&nbsp&nbsp&nbsp' + '内容：' + news_content + '<p>' + '<p>' + '链接：' + '&nbsp&nbsp&nbsp&nbsp' + news_url);
     }
     else if (type == 2){
     	 $("#nameNav").text(notice_title);
	     $("#nameTitle").text(notice_title);
	     $("#namecontent").text(notice_title);
	     $("#content").html('日期：' + notice_date + '<p>' + '<p>' + '内容：' + notice_content + '<p>' + '<p>' + '链接：' + notice_attachment);
     }
     else if (type == 3){
     	 $("#nameNav").text(talk_title);
	     $("#nameTitle").text(talk_title);
	     $("#namecontent").text(talk_title);
	     $("#content").html('报告人：' + talk_speaker + '<p>' + '<p>' + '报告时间：' + talk_time + '<p>' +'<p>' +  '报告地点：' + talk_room + '<p>' + '<p>' + '摘要：' + talk_abstract);
     }
     else if (type == 4){
     	 $("#nameNav").text(conference_name);
	     $("#nameTitle").text(conference_name);
	     $("#namecontent").text(conference_name);
	     $("#content").html('日期：' +　conference_period + '<p>' +  '<p>' + '会议地点：' + conference_place + '<p>' +  '<p>' + '链接：' + conference_url );
     }
});

