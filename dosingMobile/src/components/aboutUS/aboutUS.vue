<template>
  <div class="container">
    <div class="contain">
      <div class="nav">
        <ul class="ul">
          <li v-for="(item,index) in li" :class="{active:tabId==index}" @click="tabId=index">{{item.title}}</li>
        </ul>
      </div>
      <div class="box">
        <div v-show="tabId===0" class="article">
          <p><img src="../../assets/images/company.jpg" alt=""></p>
          <p>www.dosing100.com</p>
          <h5>总部地址</h5>
          <p>武汉市洪山区野芷湖西路16号创意天地11栋12F</p>
          <p style="margin-top: 0.25rem;">道森媒体总部 &nbsp; &nbsp;TEL ：420-027-0050</p>
          <p>广推手 &nbsp; &nbsp; TEL:13971616020&nbsp; &nbsp;420-027-0050</p>
          <p>道森网络科技&nbsp; &nbsp;TEL：13476121217</p>
          <p style="text-align: center;"><img src="../../assets/images/logo2.png" alt="" style="width: 70%;margin: 0.6rem 0"></p>
          <p>国家高新技术企业 / 国家一级广告企业 / 湖北省著名商标 / 武汉市著名商标 / 湖北省文化产业示范基地 /武汉市第三批文化与科技融合示范企业 /
            湖北省广告人才培训基地/团中央青年就业创业见习基地/湖北省广告行业自律先进单位/ 2016年度优秀上市企业
          </p>
          <h3>公司介绍</h3>
          <p>道森媒体股份成立于2009年，是国家“高新技术企业”2016年8月9日挂牌新三板。</p>
          <p class="p">近年来，道森媒体股份致力于打造“中国广告零售第一股”，依托自主研发的“广告程序化购买智能平台”，通过整合所有拥有媒体属性的社群资源及行业伙伴的媒体产品，运用大数据驱动的技术，将广告主及受众紧密相连，最大限度优化投放过程，精准匹配受众与广告主的需求，为中小微企业及个人提供效果广告和情怀服务。</p>
          <p class="p">未来，道森也将全力打造共享广告生态圈综合平台，改变传统媒体投放方式及市场格局，将“广告程序化购买智能平台”打造成一个包含广告发布、广告创意、广告策划、广告设计、广告制作、广告人才交流与培训、广告发布监测与管理、广告数据统计与收集的广告生态圈，建成服务广告行业发展的集约化、专业化、权威化的公共服务平台。</p>
          <h3>公司理念</h3>
          <p>1、全国战略</p>
          <p>构建全国媒体网络运营系统，做核心城市本地化运营的中小微广告零售运营商</p>
          <p>2、科技研发</p>
          <p class="p"> 新的时代浪潮下，科学技术作为支撑，对创意产生、策略落地都起到至关重要的作用。道森媒体一直保持着前沿科技的关注度，始终致力于用科学技术解放冗余生产力、优化改造产品体系，辅以精准的营销策略，助力客户品牌传播裂变。</p>
          <p>3、服务</p>
          <p class="p">品牌是消费者对于企业方方面面体验的集合，真正的战场并不在看得见的市场竞争，而在品牌受众的心海。道森媒体致力于为中小微企业及个人提供效果型广告和情怀服务，致力于打造“中国广告零售第一股”。</p>
          <p>4、整合营销</p>
          <p class="p">在竞争激烈、复杂多变的市场大环境下，我们一直在思考供需关系的不对称，致使媒体资源出现剩余，当媒体资源富余时，是否应有广告价值的分享！伴随“全民创业”、“全民推广”的时代到来，围绕中小微企业及个人，以切实解决需求为导向，用创意让传播发光发热，多维度、多渠道、多角度的整合资源，切实有效的为客户提供专业服务。</p>
          <h3>价值观</h3><p>务实（Pragmatic）</p>
          <p> 道虽迩，不行不至；事虽小，不为不成</p>
          <p> 高效（Efficient）</p>
          <p> 每个人都是独一无二的个体，组合在一起羽翼才会丰满，才能飞得更高！</p>
          <p> 执着（Persistent）</p>
          <p> 争取过荣耀，历经过挫败、却依然不卑不亢、一心坚持，这才是一个奋斗者该有的姿态</p>
          <p> 创新（innovative）</p>
          <p> 变则通，通则久。</p>
          <p> 前行的路上我们时刻保持激情，极致没有尽头，只为更好！</p>
        </div>
        <div v-show="tabId===1" class="artcle2" style="display: none">
          <div class="page2">
            <p><img src="../../assets/images/team.jpg" alt=""></p>
            <p><img src="../../assets/images/team3.jpg" alt=""></p>
            <p style="margin: 0.5rem 0">道森媒体股份拥有一支深谙广告科技开发、专业媒体推广服务及对社会媒体有深度理解的顶尖管理团队，聚集了大批科技、法律、金融、财务、市场规划等专业领域极具创新性思维和丰富运作经验的顶尖管理人才。</p>
            <p><img src="../../assets/images/team1.jpg" alt=""></p>
            <p style="margin-top: 0.5rem;">杨皆红 董事长</p>
            <p>道森媒体股份创始人，道森媒体股份董事长，曾任纳斯达克上市传媒公司的高管。</p>
            <p>现任湖北省广告协会副会长、湖北省青年创业基金会理事、致公党湖北省党代表、 湖北省青联委员。被誉选为湖北省现代服务业领军人物、十大最具创造力楚商、湖北省优秀广告人、黄鹤英才计划人才及武汉市十大杰出创业人物等。</p>
            <p style="margin-top: 0.5rem;">1996年毕业于武汉理工大学，2005年获得华中科技大学工商管理硕士学位。同时，完成了清华大学及香港大学《现代企业资本战略董事长研修班》的修读课程。</p>
            <p style="margin-top: 0.5rem;">
              作为一名风雨兼程的创业老兵，他是中国第一批分众传媒业的创业者，也是中国电梯海报的第一批创业人及成功运营者，从业二十余年，从经营第一块电梯广告到“打造中国广告零售第一股”，问道之路从未停歇，他带领着道森从一家区域化的广告公司跨越成为全国布局的公众公司 。
            </p>
            <p>“滴滴”的出现改变了人们的出行方式，我希望我们也能改变传统媒体投放方式及市场格局，什么时候别人提到”广告零售”能想到道森，我就觉得成功了。”</p>
            <p style="text-align: right">——杨皆红</p>
          </div>
        </div>
        <div v-show="tabId===2" class="artcle3" style="display: none">
          <div v-show="tabId===2" class="artcle3" style="display: none">
            <div class="page3">
              <h1>道可道  非常道</h1>
              <p>天道盈而不溢，盛而不骄，劳而不矜其功，积极进取，胜而不骄，败而不妥，道便无处不在</p>
              <p>世界在变，广告也在变，你该如何选择路途的方向？</p>
              <p>我们不能告诉你，你所坚持不懈奋斗着的梦想，是否会照进现实！但我们长达19年的拼搏岁月能告诉你，那些不被看见不被体恤的坚持有多孤独！</p>
              <p>或许你正背起行囊，或许已久经沙场，也许在路上意气风发，也许在路上黯然神伤，得到得不到的，终会相忘于江湖！</p>
              <p>路还是路，不同的是会多了一群陪你前行的人！奋斗、进取、快乐、徜徉、感悟、释然，无数个精彩都在发生，</p>
              <p>总会有些精彩，在你记忆的轨迹，留下闪亮的瞬间！</p>
              <p>我们与你一样，都在找寻那些精彩……</p>
              <p style="border-bottom:1px solid #848485;">
                <span style="display: inline-block;width:70px; height: 3px;background-color: #db2424; vertical-align: bottom;margin-top: 0.8rem;"></span></p>
              <p style="font-size: 0.5rem;color:#b91c22;padding-top: 0.5rem;border-bottom:1px solid #848485;"><strong>我们&nbsp;</strong>在寻找</p>
              <div class="page3_container">
                <div  class="page3_one">
                  <p>Sales Representative<br>销售代表</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、负责完成公司下达的销售任务，达成月、季度、年度业绩指标；</p>
                    <p>2、熟悉广告传媒行业，对广告行业发展趋势有一定的敏锐性；</p>
                    <p> 3、积极巩固市场，有计划开发新客户，逐步提高市场占有率；</p>
                    <p> 4、做好老客户的维护工作，提高客户满意度；</p>
                    <p> 5、严格按照公司制度管理和要求安排工作。</p>
                    <h4>任职要求</h4>
                    <p>1、25-40岁左右，大专及以上学历，具有广告从业经验者优先；</p>
                    <p> 2、3年以上市场营销经验；</p>
                    <p> 3、在业绩达成方面有独到见解和工作方法，能完成公司的阶段性销售任务指标；</p>
                    <p>4、能独立完成新客户的开发、洽谈、跟进等工作，有一定的客户资源者优先；</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Sales Manager<br>销售经理</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、开拓市场，根据销售目标和销售计划实施市场开发，挖掘潜在客户，保证市场占有率；。</p>
                    <p> 2、能进行市场调研分析，分析市场和竞争对手情况，把握市场机会应对市场危机；</p>
                    <p> 3、具有大客户公关能力，能很好的发展和协调客户关系；</p>
                    <p> 4、能完成销售经理级别的任务额，具有团队协作精神。</p>
                    <h4>任职资格</h4>
                    <p>3年以上的销售工作经验，具有良好的资源，家居建材、互联网电子、旅游行业、汽车行业等资源优先考虑。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Customer Manager<br>客户经理</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、负责部门大客户开发、关系维护与服务管理工作；</p>
                    <p> 2、指导与实施大客户营销活动，推广部门业务开展工作；</p>
                    <p> 3、与目标大客户建立良好的业务关系；挖掘大客户的需求，灵活有效的完成销售任务；</p>
                    <p> 4、积极开展市场调查、分析和预测。做好市场信息的收集、整理、反馈，掌握市场动态，积极适时、合理有效地开辟新的营销途径，努力拓宽业务渠道，不断扩大公司名气的市场占有率；</p>
                    <p> 5、具备提案能力，有效传达客户需求，协助策划、设计进行方案跟进;</p>
                    <p> 6、负责建立大客户信息档案和管理工作，并进行科学的客户关系管理，及时高效的为大客户提供高品质服务以保证客户满意度。
                    </p>
                    <h4>任职资格</h4>
                    <p>1、具备两年相关工作经验;</p>
                    <p> 2、有设计、策划活动经验者或有一定市场资源者优先;</p>
                    <p> 3、肯吃苦、肯付出，有较强的沟通能力和客户开发能力。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Sales Directort<br>销售总监</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、负责B端大客户开发工作；</p>
                    <p> 2、负责建立销售团队，管理销售团队；</p>
                    <p> 3、协助部门销售经理及媒介专员开发客户；</p>
                    <p> 4、部门外延辅导工作。</p>
                    <h4>任职资格</h4>
                    <p>男女不限，年龄不限，拥有三年以上广告行业工作经验，有一定的策划能力，在广告类企业任职过销售总监，对家居建材，旅游，商业，汽车，互联网电子行业熟悉。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Department Assistant<br>部门助理</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、协助部门管理；</p>
                    <p> 2、部门人员工作安排，做好督导及管理工作；</p>
                    <p> 3、外联工作：负责与厂家及客户市场人员建立、保持良好有效的沟通；</p>
                    <p> 4、内部沟通：与公司各部门保持良好、有效的沟通对接；</p>
                    <p> 5、负责公司内部流程工作；</p>
                    <p> 6、上级安排的其他工作。</p>
                    <h4>任职资格</h4>
                    <p>1、年龄30岁左右，大专及以上学历，熟练运用OFFICE办公软件；</p>
                    <p> 2、懂策划，可以做出简单的策划方案；</p>
                    <p> 3、工作积极主动，严谨细致、责任心强；</p>
                    <p> 4、灵活应变，适应能力较强。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Sales Admin Assistant<br>销售行政助理</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、接待来访客人并及时准确通知被访人员； </p>
                    <p>2、负责店面日常费用报销、借支，以及相关文档跟踪统计等；</p>
                    <p>3、负责部门办公用品的领用和分发工作；</p>
                    <p> 4、协助公司员工的复印、传真及其他后勤支持；</p>
                    <p> 5、配合店长做好店面工作上传下达和催办落实情况；</p>
                    <p> 6、辅助店面销售日常工作，包括但不限于客户信息的收集与整理、销售数据的的汇总与整理、销售简单报价方案与产品营销推广方案的制作；</p>
                    <p> 7、完成上级领导交办的其他任务。</p>
                    <h4>任职资格</h4>
                    <p>1、大专及以上学历，1年相关工作经验，文秘、助理、客服、策划等相关专业；</p>
                    <p> 2、较强的服务意识，能熟练地掌握并应用WORD、EXCEL等办公软件及办公设备；</p>
                    <p> 3、具备良好的协调能力、沟通能力，主动性强。工作认真负责，细心，有良好的团队合作意识。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Planners<br>策划</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、为公司品牌建设服务，让公司参与到更多的对外营销中去；</p>
                    <p>2、为公司业务提供策划创意支持；</p>
                    <p>3、为客户提供策划创意支持；</p>
                    <p>4、对公司内部的各项文化建设提供创意和可行性方案；</p>
                    <p>5、公司自媒体运营（微信、网站、线上媒体）；</p>
                    <p>6、协助公司其他部门出台营销策略。</p>
                    <h4>任职资格</h4>
                    <p>1、广告、市场营销等大专及以上学历，3年以上广告公司策划工作相关工作经验；</p>
                    <p> 2、文字功底深厚，善于观察，对事物有敏感的视觉角度，并具有超凡的创意能力；</p>
                    <p> 3、擅长软文、广告、策划方案的撰写；</p>
                    <p> 4、工作积极主动，严谨细致、责任心强。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Senior Designer<br>资深设计师</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、负责公司媒体、品牌产品对外推广宣传设计；</p>
                    <p> 2、负责公司网站、微信平台、微网站更迭设计；</p>
                    <p> 3、负责公司物料（画册、写真、喷绘、名片、工作证、展架等）设计；</p>
                    <p> 4、能积极参与市场推广、活动组织等企划方案设计并执行。</p>
                    <h4>任职资格</h4>
                    <p>1、大专及以上学历，美术类、设计类、广告类相关专业；</p>
                    <p> 2、具备3年以上平面设计相关工作经验，能独立完成整个设计，有优秀作品和成功的案例；</p>
                    <p> 3、熟悉各类平面设计软件（Photoshop、Coreldraw、illustrator等）及办公软件；</p>
                    <p> 4、设计思维活跃，有出色的创意能力，做事认真细致，对市场有敏锐的洞察力，具有把握不同风格、视觉的能力；</p>
                    <p> 5、具备文案理解分析、策划、撰写能力，富有创意，拥有较强执行力，良好团队合作精神，有上进心，能承受工作带来的压力。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Event Executive<br>活动统筹执行</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、根据品牌活动计划，负责市场活动执行方案策划与实施；</p>
                    <p> 2、负责与活动相关的市场信息的收集整理和合作沟通，活动的整体统筹把控；</p>
                    <p> 3、负责活动相关的供应商管理和物料制作；</p>
                    <p> 4、负责活动现场的人员和设备协调管理；</p>
                    <p> 5、负责活动效果的及时反馈总结和线索跟进；</p>
                    <p> 6、负责部门负责人临时交办的各项任务。</p>
                    <h4>任职资格</h4>
                    <p>1、大专及以上学历，市场营销、广告等相关专业；</p>
                    <p> 2、具有1-2年的活动策划、活动执行相关工作经验，能独立完成整个项目的执行，有成功的案例经验；</p>
                    <p> 3、熟练操作word、excel和ppt等办公软件；</p>
                    <p> 4、具备独立的客户提案能力，具备项目拓展与高端客户管理能力；</p>
                    <p> 5、思维活跃、有想法、有创意、做事认真、细致；</p>
                    <p> 6、有创意力与执行力，具备良好的团队合作精神，有上进心，能承受工作带来的压力。</p>
                    <p> 7、思路清晰，较强的表达能力，良好的跨部门沟通、协调能力，善于协调资源推动项目进展；</p>
                    <p> 8、熟悉物料材质及制作流程，了解市场采购价格。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>New media Commissioner<br>新媒体运营专员</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、负责官方微博、微信公众号等社交媒体的运营推广、日常更新与维护；</p>
                    <p> 2、跟踪微信及各平台推广效果，分析数据并反馈，总结经验，建立有效运营手段，提升用户活跃度，定期与粉丝互动增加粉丝数量；</p>
                    <p> 3、及时掌握营销资讯和新闻热点，不断研究新的运营手段和推广模式；</p>
                    <p> 4、竞争品牌新媒体信息的搜集、整理及分析，不断拓展新媒体资源；</p>
                    <p> 5、公司企业文化对外软文的发布；</p>
                    <p> 6、负责对内、对外方案撰写；</p>
                    <p> 7、领导安排的其他相关工作。</p>
                    <h4>任职资格</h4>
                    <p>1、一年以上新媒体工作经验；</p>
                    <p> 2、深刻理解互联网文化，熟悉微博、微信等平台，具有投入到网络新媒体领域的激情和兴趣；</p>
                    <p> 3、有较强的策划和文字驾驭能力，有创新意识，能独立完成活动策划和执行；</p>
                    <p> 4、责任心强，有良好的沟通能力、实施能力和团队合作精神；</p>
                    <p> 5、微博控、各类网站社区的活跃用户优先。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Financial executive<br>财务主管</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、财务、审计相关专业大专及以上学历，3年以上财务工作经验；；</p>
                    <p> 2、能熟练操作金蝶K3、全盘帐务及纳税申报等财务工作经验；</p>
                    <p> 3、熟悉新会计准则及税收法规，有二年以上财务分析、税收策划、预算管理经验；</p>
                    <p> 4、能独立编制合并报表；熟练掌握相关合并事宜；配合投融资、并购审计及券商工作；</p>
                    <p> 5、具备团队精神，思维敏捷、严谨，工作踏实、认真，有很强的敬业精神；</p>
                    <p> 6、有中级会计师或以上职称，有大型会计事务所IPO审计经验优先。</p>
                  </div>
                </div>
                <div class="page3_one">
                  <p>Outdoor repairman<br>户外维修员</p>
                  <p><span class="span"></span></p>
                  <div class="page3_txt">
                    <h4>职位描述:</h4>
                    <p>1、主要维修广告电子屏及其他广告电子设备；</p>
                    <p> 2、认真做好巡视检查工作，在巡视中要仔细观察运行情况，并及时、认真、准确的做好工作记录，以备查验。</p>
                    <h4>任职资格</h4>
                    <p>1、身体健康，年龄20-40岁。
                    </p>
                    <p> 2、有电工工作经验，家住南湖者优先。
                    </p>
                  </div>
                </div>
              </div>
              <div class="mail">
                <h4>招聘邮箱 ：hr@dosing100.com</h4>
              </div>
            </div>
          </div>
        </div>
        <div v-show="tabId===3" class="artcle4" style="display: none">
          <div class="page4">
            <p>1、本网欢迎其他网站转载或引用本网内容，但是下列内容除外：本网所指向的非本网内容的相关链接内容;已作出不得转载或未经许可不得转载声明的内容;没有本网署名或本网引用、转载的其他来源的内容。其他网站在免费转载本网站拥有版权的文章的同时，也就自动同意本网有权免费转载其网站上拥有版权的文章。</p>
            <p style="margin: 0.55rem 0">2、本网转载其他来源的文章除为丰富网站信息之外，也有宣传撰稿人本人，传播其观点及思想之意。我们尽可能地注明来源和作者。但是，因为网络信息传播的特殊性，无法事先与每个作者联系，有些转载作品可能因故无法确证原作者而暂未标明来源的，并非故意侵犯原作者版权。 如果你认为本网转载的内容涉及侵权，请于作品在本网发表之日起15日内与我们联系。</p>
            <p>3、对不遵守上述声明或其他违法、恶意使用本网内容者，本网留追究其法律责任的权力。</p>
            <p style="margin: 0.51rem 0">4、本网不保证所有信息、文本、图形、链接及其它项目的绝对准确性和完整性，故仅供参考使用。其中政策法规和标准的文档不可作为正式法规和标准文本使用。本网站对任何由于使用本网站而引起的损失，不承担责任。</p>
            <p>版权问题/文章转载授权联系邮箱：scb@dosing100.com</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    name: 'aboutUS',
    data(){
      return{
        tabId:0,
        li:[
          {title:"企业介绍"},
          {title:"道森智囊"},
          {title:"加入我们"},
          {title:"版权声明"},
        ]
      }
    },
    methods:{
      active(index){
        this.active=index;
      }
    },
    mounted () {
      $(".page3_container .page3_one").on("click",function () {
        console.log(111)
        if (this.flag==true){
          $(this).css("height","1rem")
          this.flag=!this.flag
        }else {
          $(this).css("height","100%")
          this.flag=!this.flag
        }
      })
    }
  }
</script>

<style scoped>

  li {
    list-style: none;
  }
  * {
    margin: 0;
    padding: 0;
  }
  .container {
    background-color: #EBEAF1;
    padding: 0.2rem 0.1rem;
  }
  .contain {
    padding: 0.1rem;
    width: 95.7%;
    margin: auto;
  }
  .nav {
    width: 100%;
  }
  .nav ul {
    overflow: hidden;
  }
  .nav li {
    float: left;
    width: 23.5%;
    margin: 0 0.069rem;
    color: #cbcbcb;
    background-color: #414343;
    font-size: 0.25rem;
    text-align: center;
    height: 0.5rem;
    line-height: 0.5rem;
    border-radius: 5px 5px 0 0;

  }
  .nav li:nth-child(1){
    /*float: right;*/
    margin-left: 0;
  }
  .nav li:nth-child(4){
    float: right;
    margin-right: 0;

  }
  .nav .active{
    background-color: #D1D1D1;
    color: #6b6b6b;
    border-bottom: 5px solid #D1D1D1;
  }
  .article {
    padding-top: 0.35rem;
    background-color: #D1D1D1;
    padding-bottom: 1rem;
  }
  .article p {
    width: 90%;
    margin: auto;
    font-size: 0.2rem;
    color: #787878;
    line-height: 1.5;
  }
  .article p:nth-child(1) {
    text-align: center;
  }
  .article img {
    width: 100%;
  }
  h5 {
    font-size: 0.2rem;
    width: 90%;
    margin: auto;
    color: #787878;
    margin-top: 0.35rem;
  }
  .p{
    text-indent: 2em;
  }
  h3{
    font-size: 0.3rem;
    color: #787878;
    text-align: center;
    margin-top: 0.7rem;
  }
  .artcle2{
    padding-top: 0.35rem;
    background-color: #D1D1D1;
    padding-bottom: 0.5rem;
  }
  .page2{
    width: 90%;
    margin: auto;
  }
  .page2 img{
    width: 100%;
  }
  .page2 p{
    font-size: 0.2rem;
    color: #787878;
  }
  .page3{
    padding-top: 1rem;
    background-color: #D1D1D1;
    padding-bottom: 0.6rem;
  }
  .page3 h1{
    text-align: center;
    color: #595757;
    font-size: 0.5rem;
  }
  .page3 p{
    text-align: center;
    color: #787878;
    font-size: 0.2rem;
    line-height: 2;
    padding: 0 0.2rem;
  }
  .page3_container{
    width: 95%;
    margin: 0 auto;
  }
  .page3_container .page3_one{
    border-bottom: 1px solid #787878;
    padding-bottom:1rem;
    margin-bottom:1rem;
    height: 1rem;
    overflow: hidden;
  }
  .page3_container .page3_one p{
    text-align: left;
    color: #787878;
    font-size: 0.2rem;
    line-height: 2;
  }
  h4{
    text-align: center;
    color: #727272;
    margin-top: .5rem;
    font-size: .25rem;
  }
  .page3_one p:nth-child(1){
    text-align: center;
    font-size: 0.38rem;
  }
  .artcle4{
    padding-top: 0.35rem;
    background-color: #D1D1D1;
    padding-bottom: 0.5rem;
  }
  .page4{
    width: 90%;
    margin: auto;
  }
  .page4 p{
    font-size: 0.2rem;
    color: #787878;
    line-height: 1.6;
  }
</style>
