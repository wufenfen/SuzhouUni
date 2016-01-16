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
            mailbox="School of Mathematical Sciences and Mathematical Center for Interdiscipline Research, Soochow University, Suzhou, Jiangsu 215006 China";
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = 'Multi-scale modeling and simulation on porous media and composite; Computational Finance; Numerical Methods for G-expectation.';
            education = '<p> Sept. 1984 – June 1988 BS, Soochow University Major: Mathematical Education </p>'+
              '<p> Sept. 1988 – June 1991 MS, Soochow University Major: Applied Mathematics </p>' + 
              '<p> Sept. 1995 – June 1998        PhD, Soochow University Major: Applied Mathematics  Supervisor: Professor Lishang Jiang</p>';
            experience = '工作经历的一整段描述';
            publication = '任意多的发表论著';
        }

        if (id == 2) {
            name_cn = '陈景润';
            name_en = '';
            professional_title = '教授';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'jingrunchen@suda.edu.cn';
            research_area = '重点研究材料的多尺度建模、分析与仿真';
            current_occupation = 'Visiting Assistant Professor, Department of Mathematics, UC Santa Barbara, USA, 2011 - 2015. Professor, Mathematical Center for Interdisciplinary Research and School of Mathematical         Sciences, Soochow University, Suzhou, China';
            research_interests = 'Multiscale modeling, analysis and simulation of materials with emphasis on Mechanical properties, including quasicontinuum type methods and multigrid-type methods for solids; Electronic properties, including electronic structures of solids and transport properties of charge carriers in organic semiconductors; Magnetic properties, including spin transfer torques in spintronic devices.';
            education_BS_r1 = '2005        B.S.,Nanjing University, China';
            education_BS_r2 = 'Major: Mathematics';
            education_MS_r1 = '2010        Ph.D., Chinese Academy of Sciences';
            education_MS_r2 = 'Major: Mathematics';
            education_PHD_r1 = '';
            education_PHD_r2 = '';
            work_experience_h1 = '';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
        }
        if (id == 3) {
            name_cn = '陈旻昕';
            name_en = '';
            professional_title = '副教授';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'chenminxin@suda.edu.cn';
            research_area = '分子模拟， 计算结构生物学';
            current_occupation = 'Associate Professor, School of Mathematical Sciences and Mathematical Center for Interdiscipline Research, Soochow University, Suzhou, Jiangsu 215006 China';
            research_interests = 'Molecular modeling, computational structural biology';
            education_BS_r1 = 'Sept. 1997 – Janu 2001        BS, Soochow University';
            education_BS_r2 = 'Major: Mathematics';
            education_MS_r1 = 'Sept. 2001 – Janu 2006        PhD, Academy of mathematics and system science, Chinese Academy of Sciences';
            education_MS_r2 = 'Major: Computational Mathematics';
            education_PHD_r1 = '';
            education_PHD_r2 = '';
            work_experience_h1 = '';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
        }
        if (id == 4) {
            name_cn = '杜锐';
            name_en = '';
            professional_title = '博士';
            department = '信息与计算科学系--计算数学组';
            emailaddress = 'durui@suda.edu.cn';
            research_area = '数值均匀化，区域分解方法，数值分析';
            current_occupation = 'Assistant Professor, Mathematical Center for Interdisciplinary Research and School of Mathematical Sciences, Soochow University, Suzhou, China';
            research_interests = 'Numerical homogenization, domain decomposition method, numerical analysis';
            education_BS_r1 = 'B.S. 2005, Wuhan University, Wuhan, China';
            education_BS_r2 = 'Major: Mathematics';
            education_MS_r1 = 'Ph.D. 2010, Chinese Academy of Sciences, Beijing, China';
            education_MS_r2 = 'Major: Mathematics';
            education_PHD_r1 = '';
            education_PHD_r2 = '';
            work_experience_h1 = '';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
        }
        if (id == 5) {
            name_cn = '徐玉红';
            name_en = '';
            professional_title = '博士';
            department = '数学与应用数学系--方程组';
            emailaddress = 'yhxu@suda.edu.cn';
            research_area = '非线性期望,后向随机微分方程,不确定条件下的期权定价与风险度量,不完全信息的经济模型等';
            current_occupation = 'Associate Professor, Center for financial engineering, Soochow university, 215006 Suzhou P.R. CHINA';
            research_interests = 'Nonlinear expectation, Backward stochastic differential equation, Option pricing and risk measurement under uncertainty, Economic models with incomplete information, Utility theory, Asset allocation, Stochastic control, Stochastic differential games, Equilibrium theory of two price economy';
            education_BS_r1 = 'Ph.D student supervised by Prof. Shige Peng, 2009-09 ～2013.07, Shandong University';
            education_BS_r2 = 'Major: Mathematics';
            education_MS_r1 = '';
            education_MS_r2 = '';
            education_PHD_r1 = '';
            education_PHD_r2 = '';
            work_experience_h1 = '';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
        }
        if (id == 6) {
            name_cn = '杨凌';
            name_en = '';
            professional_title = '教授（博士生导师）';
            department = '数学与应用数学系--方程组';
            emailaddress = 'lyang@suda.edu.cn';
            research_area = '生物系统的数学模型';
            current_occupation = 'Professor, Center for Systems Biology at Soochow University, China';
            research_interests = 'Dynamics of circadian rhythm, Dynamics of cardiac metabolism, Cell cycle control and biological signal transduction, Mechanisms of biochemical oscillations';
            education_BS_r1 = 'M.S. 1997, Soochow University, China';
            education_BS_r2 = 'Major: Applied Mathematics';
            education_MS_r1 = 'Ph.D. 2002, Shanghai University, China';
            education_MS_r2 = 'Major: Applied Mathematics';
            education_PHD_r1 = '';
            education_PHD_r2 = '';
            work_experience_h1 = '';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
        }
        if (id == 7) {
            name_cn = '杨周旺';
            name_en = '';
            professional_title = '教授';
            department = '计算与应用数学系--数据科学组';
            emailaddress = 'yangzw@ustc.edu.cn';
            research_area = '数据科学与优化计算';
            current_occupation = 'Professor, University of Science and Technology of China';
            research_interests = 'Data Science, Sparse Modeling and Sparse Optimization';
            education_BS_r1 = 'B.S. 1993.9--1997.7, University of Science and Technology of China';
            education_BS_r2 = 'Major: Mathematics';
            education_MS_r1 = 'M.S. 1997.9--2000.7, University of Science and Technology of China';
            education_MS_r2 = 'Major: Operations Research';
            education_PHD_r1 = 'Ph.D. 2002.9--2005.7, University of Science and Technology of China';
            education_PHD_r2 = 'Major: Computational Mathematics';
            work_experience_h1 = '';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
        }
        if (id == 8) {
            name_cn = '周圣高';
            name_en = '';
            professional_title = '副教授';
            department = '计算与应用数学系--数据科学组';
            emailaddress = '******@****';
            research_area = '科学计算、数值计算、生物数学';
            current_occupation = 'Associate Professor, Soochow University, Jiangsu, China';
            research_interests = 'Scientific computing and numerical analysis, Mathematical biology';
            education_BS_r1 = 'B.S., 2003–2007, Hangzhou Normal University, China';
            education_BS_r2 = 'Major: Mathematics and Applied Mathematics';
            education_MS_r1 = '';
            education_MS_r2 = '';
            education_PHD_r1 = 'Ph.D. 2007–2012, Zhejiang University, China';
            education_PHD_r2 = 'Major: Computational Mathematics';
            work_experience_h1 = 'Postdoctoral Researcher, University of California, San Diego, La Jolla, CA, USA. 2012-2015';
            work_experience_h2 = '';
            work_experience_h3 = '';
            work_experience_h4 = '';
            work_experience_h5 = '';
            work_experience_h6 = '';
            publication_sp1 = '';
            publication_sp2 = '';
            publication_sp3 = '';
            publication_sp4 = '';
            publication_sp5 = '';
            publication_sp6 = '';
            publication_sp7 = '';
            publication_sp8 = '';
            publication_sp9 = '';
            publication_sp10 = '';
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
    $("#Mailbox").html('&nbsp;&nbsp;&nbsp;&nbsp;' + mailbox);
    $("#Research_interests").html('&nbsp;&nbsp;&nbsp;&nbsp;' + research_interests);
    $("#Education").html('&nbsp;&nbsp;&nbsp;&nbsp;' + education);
    $("#experience").html('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + experience);
    $("#Publication").html('&nbsp;&nbsp;&nbsp;&nbsp;' + publication);
});
