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
		     news_title='人工智能之父马文·明斯基逝世 享年88岁';//新闻标题
		     news_content='<p style="text-align:center;font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; "> \
    <img src="http://news.sciencenet.cn/upload/news/images/2016/1/2016126150243640.jpg" style="border: 0px;"/>  \
</p> <p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em; "> \
    麻省理工学院媒体实验室名誉教授，数学家，计算机科学家，人工智能领域先驱马文•明斯基<a href="http://web.media.mit.edu/~minsky/" target="_blank" style="text-decoration: none; color: rgb(128, 0, 0);"><strong>（Marvin Minsky）</strong></a>，于1月24日因脑溢血在波士顿布莱根妇女医院去世，享年88岁。\
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
    明斯基出生于1927年，是一个土生土长的纽约人。二战期间，他从美国海军服役结束后进入哈佛大学就读，以优异成绩毕业后考入了普林斯顿大学，在1954年获得数学博士学位。期间，他在普林斯顿大学建造了第一个神经网络仿真器。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em; "> \
    1958年，明斯基进入了麻省理工学院电气工程与计算机科学学院，第二年与他人共同创立了人工智能实验室（现为计算机科学与人工智能实验室）。在人工智能实验室，他力图探索如何赋予一台机器以人类的感知和智力。他创造出了可以操控物品的机器手，制定了新的编程框架，探讨了大量关于人工智能的哲学问题，并于1969年获得图灵奖。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em; "> \
    除了在人工智能方面的天分，明斯基还是一位天才的钢琴家。世界上极少数人可以即兴创作赋格曲，他便是其中之一。1981年他发表了论文《音乐，心灵与意义》，在音乐、心理与精神间建立了联系。此外，他还发明了共焦扫描显微镜，参与发明了第一个LOGO编程语言“海龟”等等。</p>';//新闻内容
		     news_date='2016-01-26';//新闻发布日期
		     news_url='http://news.sciencenet.cn/htmlnews/2016/1/337137.shtm';//新闻来源，比如超链接
	     }
	     if(id==2){
		     news_title='2015年度中华医学科技奖在京颁奖'; 
		     news_content='<p> \
     《 人民日报 》（ 2016年01月31日 04 版） \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
    本报北京1月30日电 （记者王君平）由中华医学会主办、扬子江药业集团协办的中华医学科技奖（2015）颁奖大会30日在京召开，共有83项医学科研成果获奖，其中一等奖7项，二等奖27项，三等奖45项，另有卫生管理奖和医学科普奖各2项。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     作为我国医药卫生行业最权威的奖项，中华医学科技奖自2001年设立以来，共评选出获奖尖端医学科研成果1199项。扬子江药业集团连续15年独家支持中华医学科技奖。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     2015年中华医学科技奖采取限额推荐方式，全国共有149个单位推荐了202项科技成果，依据《中华医学科技奖奖励条例》确立的公平、公正、公开的评审原则，经形式审查、网评、初审、公示、终审以及中华医学会常务理事会确认等环节，遴选出83项获奖项目。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     大会同期颁发了第二届树兰医学奖。由树森·兰娟院士人才基金设立的“树兰医学奖”，两年来已评选产生获奖人才20余名。 \
</p>';
		     news_date='2016-01-31';
		     news_url='http://news.sciencenet.cn/htmlnews/2016/1/337530.shtm';
	     }
	     if(id==3){
		     news_title='加拿大一科研机构将开放数据促进科学发展'; 
		     news_content='<p style="text-align: center;"> \
    <img src="http://news.sciencenet.cn/upload/news/images/2016/2/20162199376760.jpg" style="border: 0px;"/> \
</p> \
<p style="text-align: center;"> \
    加拿大蒙特利尔神经学研究所计划开放研究成果，包括不同神经节律之间进行交流的脑区链接数据。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     加拿大麦吉尔大学蒙特利尔神经科学研究所（MNI）主任Guy Rouleau对当前神经科学研究向临床转化的速度之慢感到沮丧。“我们现在的工作糟透了。”他说，“这不是因为我们没有好的尝试；而是因为相关问题实在复杂。” \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     因此他和研究所的同事决定采取一项彻底的措施。从今年开始，该所进行的任何研究将会全部遵循“开放科学”行为原则，例如在研究成果出版的第一时间，所有研究结果和数据将可以实现开放获取，而且该机构将不会对其任何发现申请专利保护。尽管一些大规模计划，如由政府资助的人类基因组计划，已经实现了所有数据开放获取，但是MNI将是遵循开放获取原则的首个科研机构，Rouleau说。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     “这是一项实验，此前从未有人这样做过。”他说。其目的是减少重复试验，并使数据分享可以在更广泛的范围内以及更早的时间进行，从而让神经科学研究变得更加有效。Rouleau希望，MNI生物库组织样本、更广泛的大脑扫描数据库以及其他数据的开放获取可以发挥一定作用。“我们认为，这是一种促进科学发现以及神经科学应用的通道。” \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     经过在研究人员（大约涉及70名项目首席科学家和600余名科研人员与相关职工）之间进行1年的咨询之后，该机构最终决定采取这一行动；同时邀请来自其他机构的合作者遵循开放获取原则。 \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
     MNI神经学家Lesley Fellows表示，该机构研究人员大都支持这一计划，尽管对于如何实施一些开放计划仍存在担忧，如怎样保护患者的隐私，是否具有充沛的财政支持等。然而，Fellows表示，需要这样一种让研究结果尽可能公开的道义<strong>。（红枫）</strong> \
</p> \
<p style="font-family: 宋体; font-size: 14px; line-height: 24px; white-space: normal; text-indent: 2em;  "> \
    《中国科学报》 (2016-02-01 第3版 国际) \
</p>';
		     news_date='2016-02-01';
		     news_url='http://news.sciencenet.cn/htmlnews/2016/2/337588.shtm';
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
		     notice_title ='公告通知标题2';
		     notice_content ='公告通知内容2';
		     notice_date ='公告通知发布日期2';
		     notice_attachment ='公告通知附件2';
	     }
	     if(id==3){
		     notice_title ='';
		     notice_content ='';
		     notice_date ='';
		     notice_attachment ='';
	     }
	 }
	 if (type == 3) {
	     if(id==20){
		     talk_title='Point-spread function reconstruction in ground-based astronomy';
		     talk_abstract='我是摘要';
		     talk_speaker='报告人1';
		     talk_time='2015-11-9';
		     talk_room='会议地点1';
	     }
	     if(id==19){
		     talk_title='金融数据分析前沿讲座';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-11-06';
		     talk_room='';
	     }
	     if(id==18){
		     talk_title='Recent Developments in Linear Programming and Its Application in Finance';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-11-04';
		     talk_room='';
	     }
	     if(id==17){
		     talk_title='从数据库到大数据：应用，技术和新思维';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-09-25';
		     talk_room='';
	     }
	     if(id==16){
		     talk_title='Nonlinearities of biopolymer gels increase the range of force transmission';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-09-16';
		     talk_room='';
	     }
	     if(id==15){
		     talk_title='Variational Implicit Solvation of Biomolecules';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-09-09';
		     talk_room='';
	     }
	     if(id==14){
		     talk_title='Efficient and unconditionally stable numerical schemes for phase field models';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-07-08';
		     talk_room='';
	     }
	     if(id==13){
		     talk_title='RKDG method with conservation constraints and hierarchical reconstruction limiter for solving conservation laws';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-07-01';
		     talk_room='';
	     }
	     if(id==12){
		     talk_title='Short Selling and Endogenous Price Uncertainty';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-06-16';
		     talk_room='';
	     }
	     if(id==11){
		     talk_title='Energy stable schemes for a diffusive interface model with Peng-Robinson equation of state';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-22';
		     talk_room='';
	     }
	     if(id==10){
		     talk_title='王成老师系列报告（10讲）';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-19';
		     talk_room='';
	     }
	     if(id==9){
		     talk_title='Averaging for nonlinear PDEs';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-18';
		     talk_room='';
	     }
	     if(id==8){
		     talk_title='统计、交叉、金融工程中心大数据系列报告（三）2';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-12';
		     talk_room='';
	     }
	     if(id==7){
		     talk_title='天元讲堂：统计、交叉、金融工程中心大数据系列报告（三）';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-05-11';
		     talk_room='';
	     }
	     if(id==6){
		     talk_title='The Internet financing and risk management';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-04-20 ';
		     talk_room='';
	     }
	     if(id==5){
		     talk_title='Reverse Computation in noise-driven dynamic complex networks';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-04-17 ';
		     talk_room='';
	     }
	     if(id==4){
		     talk_title='面向证券市场操纵行为的大数据特异群组挖掘研究';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2015-04-16';
		     talk_room='';
	     }
	     if(id==3){
		     talk_title='Variational Implicit-Solvent Model and Size-Modified Poisson--Boltzmann Theory for Charged Biomolecules';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2014-12-19';
		     talk_room='';
	     }
	     if(id==2){
		     talk_title='Spectral and pseudo-spectral schemes for nonlinear PDEs (10 Lectures)';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2014-12-15';
		     talk_room='';
	     }
	     if(id==1){
		     talk_title='Modeling and simulation of multi-phase flow on solid surfaces';
		     talk_abstract='';
		     talk_speaker='';
		     talk_time='2014-12-15';
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
	     $("#namecontent").text(news_title);
	     $("#content").html('<strong>时间</strong>：' + news_date + '<p>' +  '<p>' +  '<strong>内容</strong>：' + news_content + '<p>' + '<p>' + '<strong>链接</strong>：' + news_url);
     }
     else if (type == 2){
     	 $("#nameNav").text(notice_title);
	     $("#namecontent").text(notice_title);
	     $("#content").html('<strong>时间</strong>：' + notice_date + '<p>' + '<p>' + '<strong>内容</strong>：' + notice_content + '<p>' + '<p>' + '<strong>链接</strong>：' + notice_attachment);
     }
     else if (type == 3){
     	 $("#nameNav").text(talk_title);
	     $("#namecontent").text(talk_title);
	     $("#content").html('<strong>报告人</strong>：' + talk_speaker + '<p>' + '<p>' + '<strong>时间</strong>：' + talk_time + '<p>' +'<p>' +  '<strong>地点</strong>：' + talk_room + '<p>' + '<p>' + '<strong>报告摘要</strong>：' + talk_abstract);
     }
     else if (type == 4){
     	 $("#nameNav").text(conference_name);
	     $("#namecontent").text(conference_name);
	     $("#content").html('<strong>会议日期</strong>：' +　conference_period + '<p>' +  '<p>' + '<strong>会议地点</strong>：' + conference_place + '<p>' +  '<p>' + '<strong>会议主页链接</strong>：' + conference_url );
     }
});

