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
    if (type == 1) { //教授
        if (id == 1) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '岳兴业';
            name_en = 'Xingye Yue';
            professional_title = '教授，博士生导师';
            department = '信息与计算科学系--计算数学组';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = 'Multi-scale modeling and simulation on porous media and composite; Computational Finance; Numerical Methods for G-expectation.';
            education = '<p> Sept. 1984 – June 1988 BS, Soochow University Major: Mathematical Education </p>' +
                '<p> Sept. 1988 – June 1991 MS, Soochow University Major: Applied Mathematics </p>' +
                '<p> Sept. 1995 – June 1998 PhD, Soochow University Major: Applied Mathematics  Supervisor: Professor Lishang Jiang</p>';
            experience = '<p> \
                                July 2009 −− Present Professor Dept. of Math., Soochow University&nbsp; \
                            </p> \
                            <p> \
                                July 2006 −− July 2009 Professor Dept. of Math., Univ of Sci and Tech of China&nbsp; \
                            </p> \
                            <p> \
                                Apr. 2005 −− June 2006 Professor Dept. of Math., Soochow University&nbsp; \
                            </p> \
                            <p> \
                                July 1999 −− Mar. 2005 Associate Professor Dept. of Math., Soochow University&nbsp; \
                            </p> \
                            <p> \
                                July 2000 −− July 2002 Post-doc Fellow Institute of Computational Mathematics, Chinese Academy of Sciences&nbsp; \
                            </p> \
                            <p> \
                                June 1993 −− June 1999 Lecturer Dept. of Math., Soochow University&nbsp; \
                            </p> \
                            <p> \
                                Sep. 1991 −− May 1993 Teaching Assistant Dept. of Math., Soochow University&nbsp; \
                            </p>';
            publication = '<ol class=" list-paddingleft-2" style="list-style-type: decimal;"> \
                            <li> \
                                <p> \
                                    Haitao Cao, Tao Yu and Xingye Yue, A completely discrete heterogeneous multiscale finite element method for multiscale Richards’ equation of van Genuchten-Mualem model, J. Appl. Math, DOI: 10.1155/2014/657816, 2014. \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    Lei Ge, Xiaosong Qian and Xingye Yue, Explicit formulas for pricing creditlinked notes with counterparty risk under reduced-form framework, IMA Journal of Management Mathematics, doi: 10.1093/imaman/dpt028, 2014 \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    Shixin Xu and Xingye Yue, Homogenization of Thermal-Hydro-Mass transfer processes, DCDS-S, V.8(1), 55-76, DOI: 10.3934/dcdss.2015.8.55, 2015. \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    Na Li, Li Ren and Xingye Yue, Application and Validation of an Upscaling Method for Unsaturated Water Flow Processes in Heterogeneous Soils, Vadose Zone Journal, V.14(7), DOI: 10.2136/vzj2014.12.0171, 2015. \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    Haitao Cao, Tao Yu and Xingye Yue, Fully discrete IPDG-HMM for multiscale Richards equation of unsaturated flow in porous media, J. Comput. Appl.Math., V. 290, 352-369, DOI: 10.1016/j.cam.2015.05.012, 2015. \
                                </p> \
                            </li> \
                        </ol>';
        }

        if (id == 2) {
            photoUrl = '../images/team/jingrunchen.jpg';
            name_cn = '陈景润';
            name_en = 'Jingrun Chen';
            professional_title = '教授';
            department = '信息与计算科学系--计算数学组';
            research_area = '重点研究材料的多尺度建模、分析与仿真';
            research_interests = 'Multiscale modeling, analysis and simulation of materials with emphasis on Mechanical properties, including quasicontinuum type methods and multigrid-type methods for solids; Electronic properties, including electronic structures of solids and transport properties of charge carriers in organic semiconductors; Magnetic properties, including spin transfer torques in spintronic devices.';
            education = '<p> 2005 B.S.,Nanjing University, China Major: Mathematics</p>' +
                '<p> 2010 Ph.D., Chinese Academy of Sciences Major: Mathematics</p>';
            experience = '<p>Assistant Specialist, Department of Mathematics, UC Santa Barbara, USA, 2010 - 2011.</p> \
                        <p>Visiting Assistant Professor, Department of Mathematics, UC Santa Barbara, USA, 2011 - 2015.</p> \
                        <p>Professor, Mathematical Center for Interdisciplinary Research and School of Mathematical Sciences, Soochow University, Suzhou, China, 2015 – present</p>';
            publication = '<ol class="custom_num list-paddingleft-1"> \
                        <li class="list-num-1-1 list-num-paddingleft-1"> \
                            <p> \
                                Chen and J. Lu, Analysis of the divide-and-conquer method for electronic &nbsp;structure calculations, accepted by Mathematics of Computation. \
                            </p> \
                        </li> \
                        <li class="list-num-1-2 list-num-paddingleft-1"> \
                            <p> \
                                J. Chen, C. J. Garcia-Cervera, and X. Li, An atomistic/continuum coupling method using enriched bases, Multiscale Model. Simul., 13(2015), 766--789. \
                            </p> \
                        </li> \
                        <li class="list-num-1-3 list-num-paddingleft-1"> \
                            <p> \
                                J. Chen, C. J. Garcia-Cervera, and X. Yang, Mean-field dynamics of spin magnetization coupling in ferromagnetic materials: Application to current-driven domain wall motion, IEEE Trans. Magn., 51(2015), 1--6. \
                            </p> \
                        </li> \
                        <li class="list-num-1-4 list-num-paddingleft-1"> \
                            <p> \
                                J. Chen, C. J. Garcia-Cervera, and X. Yang, A mean-field model of spin dynamics in multilayered ferromagnetic media, Multiscale Model. Simul., 13(2015), 551--570. \
                            </p> \
                        </li> \
                        <li class="list-num-1-5 list-num-paddingleft-1"> \
                            <p> \
                                M. Guide, J. Lin, C. M. Proctor, J. Chen, C. J. Garcia-Cervera, and T.-Q. Nguyen, Effect of copper metalation of tetrabenzoporphyrin donor material on organic solar cell performance, J. Mater. Chem. A, 2(2014), 7890--7896. \
                            </p> \
                        </li> \
                        <li class="list-num-1-6 list-num-paddingleft-1"> \
                            <p> \
                                J. Lin, O. V. Mikhnenko, J. Chen, Z. Masri, A. Ruseckas, A. Mikhailovsky, R. Raab, J. Liu, P. W. M. Blom, M. A. Loi, C. J. Garcia-Cervera, I. D. W. Samuel, and T.-Q. Nguyen, Systematic study of exciton diffusion length in organic semiconductors by six experimental methods, Mater. Horiz., 1(2014), 280--285. \
                            </p> \
                        </li> \
                        <li class="list-num-1-7 list-num-paddingleft-1"> \
                            <p> \
                                J. Chen, P. B. Ming, and J. Z. Yang, A constrained Cauchy-Born elasticity accelerated multigrid method for nanoindentation, Commun. Comput. Phys., 15(2014), 470--486. \
                            </p> \
                        </li> \
                        <li class="list-num-1-8 list-num-paddingleft-1"> \
                            <p> \
                                J. Chen and P. B. Ming, Ghost force influence of a quasicontinuum method in two dimension, J. Comput. Math., 30(2012), 657--683. \
                            </p> \
                        </li> \
                        <li class="list-num-1-9 list-num-paddingleft-1"> \
                            <p> \
                                J. Chen and P. B. Ming, An efficient multigrid method for molecular mechanics modeling in atomic solids, Commun. Comput. Phys., 10(2011), 70--89. \
                            </p> \
                        </li> \
                    </ol>';

        }
        if (id == 3) {
            photoUrl = '../images/team/photo (2).jpg';
            name_cn = '陈旻昕';
            name_en = 'Minxin Chen';
            professional_title = '副教授';
            department = '信息与计算科学系--计算数学组';
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
            research_area = '数值均匀化，区域分解方法，数值分析';
            research_interests = 'Numerical homogenization, domain decomposition method, numerical analysis';
            education = '<p> B.S. 2005, Wuhan University, Wuhan, China Major: Mathematics </p>' +
                 '<p> Ph.D. 2010, Chinese Academy of Sciences, Beijing, China Major: Mathematics </p>';
            experience = '<p> \
                            Assistant Professor, Mathematical Center for Interdisciplinary Research and School of Mathematical Sciences, Soochow University, Suzhou, China, 2014 – present \
                        </p> \
                        <p> \
                            Postdoctor, Department of Informatics, University of Bergen, Norway, 2011-2014 \
                        </p>';
            publication = '<ol class=" list-paddingleft-2" style="list-style-type: decimal;"> \
                            <li> \
                                <p> \
                                    R. Du and P. B. Ming, Convergence of heterogeneous multiscale method for elliptic problem with nonsmooth coefficients, SIAM Multiscale Model. Simul., 8, 1770-1783, 2010 \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    R. Du and P. B. Ming, Heterogeneous multiscale finite element method with novel numerical integration schemes, Commun. Math. Sci., 8, 863-885, 2010 \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    R. Du and L. Zhang, Two-level additive Schwarz methods using rough polyharmonic splines-based coarse spaces, Chin. Ann. Math. 36B(5), 803-812, 2015 \
                                </p> \
                            </li> \
                            <li> \
                                <p> \
                                    R. Du, Y. Ma, T. Rahman, and X. Xu, A FETI-DP preconditioner of discontinuous Galerkin method for multiscale problems in high contrast media, arXiv:1405.3555 \
                                </p> \
                            </li> \
                        </ol>';

        }
        if (id == 5) {
            photoUrl = '../images/team/yhxu.jpg';
            name_cn = '徐玉红';
            name_en = 'Yuhong Xu';
            professional_title = '博士';
            department = '数学与应用数学系--方程组';
            research_area = '非线性期望,后向随机微分方程,不确定条件下的期权定价与风险度量,不完全信息的经济模型等';
            research_interests = 'Nonlinear expectation, Backward stochastic differential equation, Option pricing and risk measurement under uncertainty, Economic models with incomplete information, Utility theory, Asset allocation, Stochastic control, Stochastic differential games, Equilibrium theory of two price economy';
            education = '<p> Ph.D student supervised by Prof. Shige Peng, 2009-09 ～2013.07, Shandong University Major: Mathematics </p>';
            experience = '<p> \
                            2015-07&nbsp;～2015.08&nbsp;&nbsp; HKU, Reseach associate  \
                        </p> \
                        <p> \
                            2013-09&nbsp;～2014.08&nbsp;&nbsp;Université de Brest, France, Postdoctor \
                        </p> \
                        <p> \
                            2013-08&nbsp;～2013.08&nbsp; &nbsp;Soochow University, Associate Professor \
                        </p> \
                        <p> \
                            2009-09&nbsp;～2013.07&nbsp;&nbsp;Shandong University, Ph.D student supervised by Prof. Shige Peng \
                        </p> ';
            publication = '<ol class="custom_num list-paddingleft-1"> \
                        <li class="list-num-1-1 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                Xu Yuhong, Probabilistic solutions for a class of path-dependent HJB equations, Stochastic Analysis and Applications, 31(3) (2013), 440-459. \
                            </p> \
                        </li> \
                        <li class="list-num-1-2 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                Xu Yuhong, Multidimensional dynamic risk measure via conditional g-expectation,&nbsp; Mathematical Finance, (2014) 1-36, doi:10.1111/mafi.12062. \
                            </p> \
                        </li> \
                        <li class="list-num-1-3 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                Xu Yuhong, Multidimensional BSDEs with left-Lipschitz coefficients，J.Math. Sci.Univ. Tokyo, 20 (1) (2013), 115-126. \
                            </p> \
                        </li> \
                        <li class="list-num-1-4 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                Xu Yuhong, Stochastic maximum principle for optimal control with multiple priors, Systems &amp; Control Letters, <a href="http://www.sciencedirect.com/science/journal/01676911/64/supp/C">Volume 64</a>, February 2014, Pages 114–118. \
                            </p> \
                        </li> \
                        <li class="list-num-1-5 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                R. Buckdahn, M. Quincampoix, C. Rainer, Y. H. Xu , Differential games with asymmetric information and without Isaacs condition,1-21, International Journal of Game Theory，DOI 10.1007/s00182-015-0482-x. \
                            </p> \
                        </li> \
                        <li class="list-num-1-6 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                C. Jimenez, M. Quincampoix, Y. H. Xu, Differential games with incomplete information on a continuum of initial positions and without Isaacs condition, 1-14,&nbsp;Dynamic Games and Applications，DOI:&nbsp;10.1007/s13235-014-0134-y. \
                            </p> \
                        </li> \
                        <li class="list-num-1-7 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                Xu Yuhong, Robust valuation and risk measurement under model uncertainty , 1-37, Preprint&nbsp; \
                            </p> \
                        </li> \
                        <li class="list-num-1-8 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                R. Buckdahn, C. Rainer, Y. H. Xu, Stochastic differential games with incomplete information and recursive cost function, 1-17, Preprint. \
                            </p> \
                        </li> \
                        <li class="list-num-1-9 list-num-paddingleft-1"> \
                            <p style="text-align: left;" dir="ltr"> \
                                R. Buckdahn, R.Mu, Y. H. Xu, Nash equilibrium for nonzero sum stochastic differential game without Isaacs condition, 1-14, Preprint. \
                            </p> \
                        </li> \
                    </ol>';
        }
        if (id == 6) {
            photoUrl = '../images/team/lyang.jpg';
            name_cn = '杨凌';
            name_en = '';
            professional_title = '教授（博士生导师）';
            department = '数学与应用数学系--方程组';
            research_area = '生物系统的数学模型';
            research_interests = 'Dynamics of circadian rhythm, Dynamics of cardiac metabolism, Cell cycle control and biological signal transduction, Mechanisms of biochemical oscillations';
            education = '<p> M.S. 1997, Soochow University, China Major: Applied Mathematics </p>' +
                '<p> Ph.D. 2002, Shanghai University, China Major: Applied Mathematics </p>';
            experience = '<p> \
                            Postdoctor in the Cardiovascular Research Laboratory at the University of California, Los Angeles, \
                            <st1:country-region w:st="on"> \
                                USA \
                            </st1:country-region>. \
                        </p> \
                        <p> \
                            Joined the Center for Systems Biology at Soochow University, \
                            <st1:country-region w:st="on"> \
                                China \
                            </st1:country-region>. 2008 \
                        </p>';
            publication = '<ol class=" list-paddingleft-2" style="list-style-type: decimal;"> \
                                <li> \
                                    <p> \
                                        Yan J., Shi G., Zhang Z., Wu X., Liu Z., Xing L., Qu Z., Dong Z., Yang L.*, and Xu Y.* ( *Corresponding author: Yang L. or&nbsp; Xu Y.), An intensity ratio of interlocking loops determines circadian period length, Nucleic Acids Research (2014), Volume: 42 Issue: 16, Pages: 10278-87 \
                                    </p> \
                                </li> \
                                <li> \
                                    <p> \
                                        Liu, Zhiwei; Huang, Moli; Wu, Xi; et al., PER1 Phosphorylation Specifies Feeding Rhythm in Mice, Cell Reports (2014), Volume: 7, Issue: 5, Pages: 1509-1520 \
                                    </p> \
                                </li> \
                                <li> \
                                    <p> \
                                        Shi, G. et al，Dual roles of FBXL3 in the mammalian circadian feedback loops are important for period determination and robustness of the clock, Proceedings of the National Academy of Sciences of the United States of America, 2013，110(12), pp 4750-4755 \
                                    </p> \
                                </li> \
                                <li> \
                                    <p> \
                                        Yan, J., Ni, X., Yang, L.*， Robust Cell Size Checkpoint from Spatiotemporal Positive Feedback Loop in Fission Yeast, Biomed Research International, 2013 \
                                    </p> \
                                </li> \
                                <li> \
                                    <p> \
                                        Feng S., Yan J., Liu Z., Yang L*., The Dynamical Mechanisms of the Cell Cycle Size Checkpoint, Chinese Physics Letters, 29(10), 2012/10. \
                                    </p> \
                                </li> \
                            </ol>'; 
        }
        if (id == 7) {
            photoUrl = '../images/team/photo (7).jpg';
            name_cn = '杨周旺';
            name_en = '';
            professional_title = '教授';
            department = '计算与应用数学系--数据科学组';
            research_area = '数据科学与优化计算';
            research_interests = 'Data Science, Sparse Modeling and Sparse Optimization';
            education = '<p> B.S. 1993.9--1997.7, University of Science and Technology of China Major: Mathematics </p>' +
                '<p> M.S. 1997.9--2000.7, University of Science and Technology of China Major: Operations Research </p>' +
                '<p> Ph.D. 2002.9--2005.7, University of Science and Technology of China Major: Computational Mathematics</p>';
            experience = '';
            publication = '';
        }
        if (id == 8) {
            photoUrl = '../images/team/sgzhou.jpg';
            name_cn = '周圣高';
            name_en = '';
            professional_title = '副教授';
            department = '计算与应用数学系--数据科学组';
            research_area = '科学计算、数值计算、生物数学';
            research_interests = 'Scientific computing and numerical analysis, Mathematical biology';
            education = '<p> B.S., 2003–2007, Hangzhou Normal University, China Major: Mathematics and Applied Mathematics </p>' +
                '<p> Ph.D. 2007–2012, Zhejiang University, China Major: Computational Mathematics</p>';
            experience = 'Postdoctoral Researcher, University of California, San Diego, La Jolla, CA, USA. 2012-2015';
            publication = '';

        }
    }
    else if (type == 2) { //访问教授
        if (id == 1) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '戴民';
            name_en = 'Min Dai';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
        if (id == 2) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '鄂维南';
            name_en = 'WeiNan E';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
        if (id == 3) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '黄京芳';
            name_en = 'JinFang Huang';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
        if (id == 4) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '柳春';
            name_en = 'Chun Liu';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
        if (id == 5) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = '王成';
            name_en = 'Cheng Wang';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
    }
    else if (type == 3) { //博士后
        if (id == 1) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = 'XXX';
            name_en = 'YYY';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
    }
    else if (type == 4) { //学生
        if (id == 1) {
            photoUrl = '../images/team/photo.jpg';
            name_cn = 'YYY';
            name_en = 'YYY';
            professional_title = '头衔';
            department = '系别';
            research_area = '偏微分方程数值解、多尺度建模及模拟';
            research_interests = '研究兴趣';
            education = '<p> 教育经历</p>';
            experience = '<p>工作经历的一整段描述</p>' +
                '<p>我是第二段</p>';
            publication = '<p>任意多的发表论著</p>';
        }
    }

    $('#photo').attr('src',photoUrl);
    $('#photo').attr('alt',name_cn);  
    $("#nameNav").text(name_cn);
    $("#nameTitle").html('<i class="fa fa-user fa-lg"></i>&nbsp;&nbsp;' + name_cn);
    $("#Name_en").text(name_en);
    $("#Professional_title").text(professional_title);
    $("#Department").text(department);
    $("#Research_area").text(research_area);
    $("#Research_interests").html(research_interests);
    $("#Education").html(education);
    $("#experience").html(experience);
    $("#Publication").html(publication);
});
