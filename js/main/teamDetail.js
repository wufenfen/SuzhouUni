$(document).ready(function() {
    initNav();
    //轮播自动
    $("#myCarousel").carousel('cycle');

    //加载种类的文字信息
    var test = window.location.href;
    var type = GetArgsFromHref(test, "type");

    var typeName;
    if (type == 1) {
        typeName = '教 师';
    } else if (type == 2) {
        typeName = '访问讲座教授';
    } else if (type == 3) {
        typeName = '博士后';
    } else if (type == 4) {
        typeName = '学 生';
    }

    $("#typeNav").text(typeName);

    var id = GetArgsFromHref(test, "id");
    var name;
    if (type == 1) {
        if (id == 1) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '岳兴业';
            name_en = 'Xingye Yue';
            professional_title = '教授，博士生导师';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'xyyue@suda.edu.cn';
            mailbox = "School of Mathematical Sciences and Mathematical Center for Interdiscipline Research, Soochow University, Suzhou, Jiangsu 215006 China";
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = 'Multi-scale modeling and simulation on porous media and composite; Computational Finance; Numerical Methods for G-expectation.';
            education = '<p> Sept. 1984 – June 1988 BS, Soochow University Major: Mathematical Education </p>' +
                '<p> Sept. 1988 – June 1991 MS, Soochow University Major: Applied Mathematics </p>' +
                '<p> Sept. 1995 – June 1998 PhD, Soochow University Major: Applied Mathematics  Supervisor: Professor Lishang Jiang</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }

        if (id == 2) {
            photoUrl = '../images/team/photo (2).jpg';
            name_cn = '陈景润';
            name_en = 'Jingrun Chen';
            professional_title = '教授';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'jingrunchen@suda.edu.cn';
            mailbox = 'Department of Mathematics, UC Santa Barbara, USA, 2011 - 2015. Professor, Mathematical Center for Interdisciplinary Research and School of Mathematical         Sciences, Soochow University, Suzhou, China';
            research_area = '重点研究材料的多尺度建模、分析与仿真';
            research_interests = 'Multiscale modeling, analysis and simulation of materials with emphasis on Mechanical properties, including quasicontinuum type methods and multigrid-type methods for solids; Electronic properties, including electronic structures of solids and transport properties of charge carriers in organic semiconductors; Magnetic properties, including spin transfer torques in spintronic devices.';
            education = '<p> 2005 B.S.,Nanjing University, China Major: Mathematics</p>' +
                '<p> 2010 Ph.D., Chinese Academy of Sciences Major: Mathematics</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';

        }
        if (id == 3) {
            photoUrl = '../images/team/photo (3).jpg';
            name_cn = '陈旻昕';
            name_en = 'Minxin Chen';
            professional_title = '副教授';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'chenminxin@suda.edu.cn';
            mailbox = 'School of Mathematical Sciences and Mathematical Center for Interdiscipline Research, Soochow University, Suzhou, Jiangsu 215006 China';
            research_area = '分子模拟， 计算结构生物学';
            research_interests = 'Molecular modeling, computational structural biology';
            education = '<p>Sept. 1997 – Janu 2001 BS, Soochow University Major: Mathematics</p>' +
                '<p>Sept. 2001 – Janu 2006 PhD, Academy of mathematics and system science, Chinese Academy of Sciences Major: Computational Mathematics</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';

        }
        if (id == 4) {
            photoUrl = '../images/team/photo (4).jpg';
            name_cn = '杜锐';
            name_en = 'Rui Du';
            professional_title = '副教授';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'durui@suda.edu.cn';
            mailbox = 'Mathematical Center for Interdisciplinary Research and School of Mathematical Sciences, Soochow University, Suzhou, China';
            research_area = '数值均匀化，区域分解方法，数值分析';
            research_interests = 'Numerical homogenization, domain decomposition method, numerical analysis';
            education = '<p> B.S. 2005, Wuhan University, Wuhan, China Major: Mathematics </p>' +
                 '<p> Ph.D. 2010, Chinese Academy of Sciences, Beijing, China Major: Mathematics </p>';
            experience = '';
            publication = '';

        }
        if (id == 5) {
            photoUrl = '../images/team/photo (5).jpg';
            name_cn = '徐玉红';
            name_en = '';
            professional_title = '博士';
            department = '数学与应用数学系--方程组';
            emailaddress = 'yhxu@suda.edu.cn';
            mailbox = 'Associate Professor, Center for financial engineering, Soochow university, 215006 Suzhou P.R. CHINA';
            research_area = '非线性期望,后向随机微分方程,不确定条件下的期权定价与风险度量,不完全信息的经济模型等';
            research_interests = 'Nonlinear expectation, Backward stochastic differential equation, Option pricing and risk measurement under uncertainty, Economic models with incomplete information, Utility theory, Asset allocation, Stochastic control, Stochastic differential games, Equilibrium theory of two price economy';
            education = '<p> Ph.D student supervised by Prof. Shige Peng, 2009-09 ～2013.07, Shandong University Major: Mathematics </p>';
            experience = '';
            publication = '';
        }
        if (id == 6) {
            photoUrl = '../images/team/photo (6).jpg';
            name_cn = '杨凌';
            name_en = '';
            professional_title = '教授（博士生导师）';
            department = '数学与应用数学系--方程组';
            emailaddress = 'lyang@suda.edu.cn';
            mailbox = 'Professor, Center for Systems Biology at Soochow University, China';
            research_area = '生物系统的数学模型';
            research_interests = 'Dynamics of circadian rhythm, Dynamics of cardiac metabolism, Cell cycle control and biological signal transduction, Mechanisms of biochemical oscillations';
            education = '<p> M.S. 1997, Soochow University, China Major: Applied Mathematics </p>' +
                '<p> Ph.D. 2002, Shanghai University, China Major: Applied Mathematics </p>';
            experience = '';
            publication = '';
        }
        if (id == 7) {
            photoUrl = '../images/team/photo (7).jpg';
            name_cn = '杨周旺';
            name_en = '';
            professional_title = '教授';
            department = '计算与应用数学系--数据科学组';
            emailaddress = 'yangzw@ustc.edu.cn';
            mailbox = 'Professor, University of Science and Technology of China';
            research_area = '数据科学与优化计算';
            research_interests = 'Data Science, Sparse Modeling and Sparse Optimization';
            education = '<p> B.S. 1993.9--1997.7, University of Science and Technology of China Major: Mathematics </p>' +
                '<p> M.S. 1997.9--2000.7, University of Science and Technology of China Major: Operations Research </p>' +
                '<p> Ph.D. 2002.9--2005.7, University of Science and Technology of China Major: Computational Mathematics</p>';
            experience = '';
            publication = '';
        }
        if (id == 8) {
            photoUrl = '../images/team/photo (8).jpg';
            name_cn = '周圣高';
            name_en = '';
            professional_title = '副教授';
            department = '计算与应用数学系--数据科学组';
            emailaddress = '******@****';
            mailbox = 'Associate Professor, Soochow University, Jiangsu, China';
            research_area = '科学计算、数值计算、生物数学';
            research_interests = 'Scientific computing and numerical analysis, Mathematical biology';
            education = '<p> B.S., 2003–2007, Hangzhou Normal University, China Major: Mathematics and Applied Mathematics </p>' +
                '<p> Ph.D. 2007–2012, Zhejiang University, China Major: Computational Mathematics</p>';
            experience = 'Postdoctoral Researcher, University of California, San Diego, La Jolla, CA, USA. 2012-2015';
            publication = '';

        }
    }

    $('#photo').attr('src',photoUrl);
    $('#photo').attr('alt',name_cn);  
    $("#nameNav").text(name_cn);
    $("#nameTitle").html('<i class="fa fa-user fa-lg"></i>&nbsp;&nbsp;' + name_cn);
    $("#Name_en").text(name_en);
    $("#Professional_title").text(professional_title);
    $("#Department").text(department);
    $("#Emailaddress").text(emailaddress);
    $("#Research_area").text(research_area);
    $("#Mailbox").html(mailbox);
    $("#Research_interests").html(research_interests);
    $("#Education").html(education);
    $("#experience").html(experience);
    $("#Publication").html(publication);
});
