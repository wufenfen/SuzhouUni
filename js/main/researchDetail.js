$(document).ready(function(){
    initNav();
	 //轮播自动
	 $("#myCarousel").carousel('cycle');

	 var test = window.location.href;
	 var type = GetArgsFromHref(test, "type");
	 var typeName = "";
	 if (type == 1) {
	     typeName = "科研成果";
	 }
	 else if (type == 2) {
	     typeName = "专题研究";
	 }
	 else if (type == 3) {
	     typeName = "合作课题";
	 }

	 $("#typeNav").html(typeName);

	 var id = GetArgsFromHref(test, "id");
	 var name;
	 if (type == 1){
	 	meta='科研成果';
	 	 if(id==1){
		     name='科研成果1的标题';
		     author='我是作者';
		     time='我是发布时间';
		     content=' <p>我是内容的第一段</p>' + 
					' <p>我是内容的第二段</p> '  + 
					' <p>我是内容的第三段，但是我太长了，需要换行 \
					我已经换行成功了。但我在页面显示还是连续的。</p> ' +
					'<p>当然你可以不换行，一行到底，老长老长，就是不方便看。 当然你可以不换行，一行到底，老长老长，就是不方便看。当然你可以不换行，一行到底，老长老长，就是不方便看。当然你可以不换行，一行到底，老长老长，就是不方便看。当然你可以不换行，一行到底，老长老长，就是不方便看。当然你可以不换行，一行到底，老长老长，就是不方便看。当然你可以不换行，一行到底，老长老长，就是不方便看。</p>';

         }
         if(id==2){
		     name='科研成果2';
		     author='xxx';
		     time='xxx';
		     content="";
         }
         if(id==3){
		     name='科研成果3';
		     author='xxx';
		     time='xxx';
		     content="";
         }
	 }
	 else if (type == 2){
	 	meta='专题研究';
	 	 if(id==1){
	 	 	 name='Mathematical Finance';
	 	 	 author='Yuhong Xu; Xingye Yue';
	 	 	 time='';
	 	 	 content='<p> Our research interests include several topics in the field of mathematical finance and economics,\
	 	 	 such as risk measurement under model uncertainty, economic models with incomplete information, utility theory, asset allocation,\
	 	 	 game theory and general equilibrium theory of two price economy. We are interested in dynamic portfolio selection and statistics\
	 	 	 under model uncertainty.  We also focus on developing efficient numerical methods for nonlinear expectation (so-called G-expectation).\
	 	 	  Discussions are especially welcome for colleagues and students who share the same interests. </p>';
	 	 
	 	 }
	 	 if(id==2){
	 	 	 name='Mathematical Biology';
	 	 	 author='Minxin Chen; Ling Yang; Shenggao Zhou';
	 	 	 time='';
	 	 	 content='<p> Aqueous solvent plays a significant role in dynamical processes of biological molecules, such as conformational changes,\
	 	 	  molecular recognition, and molecular assembly. Implicit-solvent models are efficient descriptions of such dynamics of biomolecular interactions.\
	 	 	   Central in such models is the solute-solvent interface that separates solute atoms from the solvent that is coarse-grained. We develop a series \
	 	 	   of models to describe the dynamics of the solute-solvent interface, probe the effect of solvent as continuum fluids, and study biomolecular \
	 	 	   interactions in an aqueous environment. We also analyze the mathematical properties of the models and develop numerical software packages for \
	 	 	   the community.</p>' + 
	 	 	   ' <p> Another topic of our research is developing multiscale mathematical models, numerical algorithms, and simulation software for modeling \
	 	 	   and simulating specific large bio-molecular systems, such as ion-channel, DNA chains and other interesting and important biomolecular systems.\
	 	 	    With these models, algorithms and software, many experimental results could be reproduced, understood better and predicted in computers. </p>';
	 	 
	 	 }
	 	 if(id==3){
	 	 	 name='Mathematical modeling of biological signal transduction networks';
	 	 	 author='';
	 	 	 time='';
	 	 	 content='<p> This field is to apply dynamical theories to biological signal transduction networks at the systems level and to collaborate with \
	 	 	 biologist to achieve the Inter-Disciplinary researches. The specific research areas are: </p>' + 
	 	 	 '<p> 1.     Dynamics of circadian clock. Circadian clocks, which mean the oscillators with a period of about 24 hours, have been found in many \
	 	 	 organisms, including cyanobacteria, fungi, plants, invertebrate and vertebrate animals. The circadian clocks are all composed of a negative \
	 	 	 feedback loop (the gene product inactivates its own production) with a delay. Circadian clock systems have some novel dynamical properties, \
	 	 	 such as robust period length, entrainment dynamics, periodic memory effects and nocturnal/diurnal switch pattern (bi-stable phases). We use\
	 	 	 mathematical models to understand the underlying mechanisms and make predictions. Wet lab experiments are also applied to verify the theoretical \
	 	 	 perditions.</p>' + 
	 	 	 '<p>  2. Cell cycle control and other biological signal transductions. Biological processes are regulated by complex networks of genes, proteins, \
	 	 	 and metabolites. Although understanding the functions of individual genes or proteins provides critical detailed information, this reductionist \
	 	 	 approach normally favored by biologists has limitations and it is far from understanding the whole system, since the interactions between the \
	 	 	 building blocks are complex and nonlinear. Due to the complexity, intuition has limited capability for synthesizing all of the information gathered \
	 	 	  from the biological experiments into a cohesive holistic understanding of the system behavior. Computer modeling and complex system theory become \
	 	 	  more and more important for understanding the behaviors of signal transduction networks.<p>';
	
	 	 }
	 	 if(id==4){
	 	 	 name='Computational Material Science';
	 	 	 author='Jingrun Chen; Rui Du; Xingye Yue';
	 	 	 time='时间';
	 	 	 content='<p> Materials science is an interdisciplinary subject, which studies properties of matter from perspectives of both science and engineering. \
	 	 	 The main theme of the material division of the center is the multiscale modeling, mathematical analysis, and computational simulation of various \
	 	 	 aspects of materials. Detailed topics include: numerical homogenization, porous media flow, composite material design, computational fluid mechanics,\
	 	 	  mechanical properties of solids, magnetic material properties, electronic structures, organic solar cells. A significant amount of works in the center\
	 	 	   are done in a collaborative way with people from other disciplines.  Our ultimate goal is two-folded: (1) make ease of material design with tailored \
	 	 	   functions; (2) find and solve “useful” problems which shall drive the development of applied mathematics and computational science.</p>';
	 
	 	 }
	 	 if(id==5){
	 	 	 name='专题研究5';
	 	 	 author='xxx';
	 	 	 time='';
	 	 	 content='<p> </p>';
	 	 
	 	 }
	 	 if(id==6){
	 	 	 name='专题研究6';
	 	 	 author='xxx';
	 	 	 time='';
	 	 	 content='<p> </p>';
	 	 
	 	 }
	 }
	 else if (type == 3){
	 	meta='合作课题';
	 	 if(id==1){
	 	 	 name='合作课题1';
	 	 	 author='xxx';
	 	 	 time='xxx';
	 	 	 content='<p> 合作课题1的内容</p>';
	 	 }
	 	 if(id==2){
	 	 	 name='合作课题2';
	 	 	 author='xxx';
	 	 	 time='xxx';
	 	 	 content='<p> 合作课题2的内容</p>';
	 	 
	 	 }
	 	 if(id==3){
	 	 	 name='合作课题3';
	 	 	 author='xxx';
	 	 	 time='xxx';
	 	 	 content='<p>合作课题3的内容 </p>';
	 	 }

	 }

	 $("#metawebpage").text(meta);
	 $("#nameNav").text(name);
	 $("#nameTitle").text(name);
	 $("#contenttitle").text(name);
	 $("#nameauthor").html(author + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
	 $("#timecontent").html(time + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
	 $("#content").html(content);
});


