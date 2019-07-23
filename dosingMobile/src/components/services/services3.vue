<template>
  <div class="container">
    <div class="logo">活动营销</div>
    <div class="title">
      <div class="title2">
        <span class="left">AVTIVE</span>
        <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">活动营销</span>
        <span class="right pc"></span>
      </div>
      <div class="title3">
        <span>阶段：已上线</span>
        <span>所属类型：应用程序</span>
        <span>平台 ：WINDOWS</span>
      </div>
    </div>
    <div class="article">
      <h3>用事件影响关注度/活动聚焦销售力</h3>
      <p>多项大型活动策划的成功经验</p>
      <p>阵容强大的专业活动策划团队</p>
      <p>优秀的媒体广告整合推广能力</p>
      <p>良好的媒体及政府间的合作关系</p>
      <h3></h3>
      <ul>
        <li>吸引<br>关注</li>
        <li>刺激用户体验</li>
        <li>体验品牌价值</li>
        <li>展生<br>共鸣</li>
        <li>提升<br>购买力</li>
      </ul>
      <h3></h3>
      <p><span class="span1"></span><span>文创/会议论坛项目</span>  <span class="span1"></span><span>文化娱乐演出项目</span></p>
      <p style="margin-bottom: 2.87rem;"><span class="span1"></span><span>品牌/产品推广活动</span>  <span class="span1"></span><span>社区活动项目推广</span></p>
<!--      <p><span class="span1"></span><span>公关活动传播策略</span>  <span class="span1"></span><span>线上传播策略</span></p>-->
<!--      <p><span class="span1"></span><span>媒介整合投放</span></p>-->
      <!--      <p >细化用户标签,互动式闭环营销,场景+网状覆盖</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'services3'
  }
</script>

<style scoped>
  .article{
    margin-top: 0.8rem;
  }
  .logo{
    text-align: center;
    font-size: 0.5rem;
    color: #565656;
    margin: 0.4rem;
    font-weight: bolder;
  }
  .logo img{
    width: 50%;
    margin-top: 0.5rem;
  }
  .title{
    width: 95%;
    height: 1rem;
    position: relative;
    margin: 0 auto;
  }
  .title2{
    height: 0.55rem;
    position: absolute;
    bottom: 0.26rem;
    width: 100%;
    background: #4c4c4c;
    overflow: hidden;
  }
  .left{
    color: #fff;
    background-color: #C9161C;
    float: left;
    width: 2.2rem;
    height: 0.55rem;
    font-size: 0.3rem;
    line-height: 0.55rem;
    padding-left: 0.2rem;
  }
  .right{
    background: url("../../assets/images/mediaIcon.png") no-repeat ;
    float: right;
    height: 100%;
    background-size: 2.68rem .27rem;
    margin-right: .2rem;
  }
  .right.pc{
    width: .32rem;
    background-position: -2.08rem center;
  }
  .title3{
    background-color: #fff;
    position: absolute;
    bottom: -0.2rem;
    width: 100%;
    height: 0.46rem;
    line-height: 0.46rem;
    font-size: 0;
    border-right: 0.05rem;
    white-space:nowrap;
    overflow: hidden;
    box-shadow: 0 0.01rem 3px #ccc;
  }
  .title3 span{
    margin-left: 0.36rem;
    color: #969696;
    font-size: 0.12rem;
    white-space:nowrap;
  }
  h3{
    border-left: 0.08rem  solid red;
    font-size: 0.3rem;
    margin:0.5rem  auto;
    /*margin-top: 0.4rem;*/
    width: 90%;
    padding-left: 0.15rem;
    color: #565656;
  }
  .article p{
    font-size: 0.2rem;
    color: #828283;
    width: 87%;
    margin:0 auto;
    margin-bottom: 0.2rem;
  }
  .article p img{
    width: 100%;
  }
  .span1{
    display: inline-block;
    width: 0.2rem;
    height: 0.2rem;
    /*border-radius: 50%;*/
    background-color: #727272;
    margin: 0 0.1rem;
  }
  .article ul{
    overflow: hidden;
    /*width: 92%;*/
    /*margin: auto;*/
  }
  .article ul li{
    float: left;
    background-color: #ad2330;
    color: #fff;
    font-size: 0.25rem;
    width: 12%;
    list-style: none;
    margin: 0 0.2rem;
    padding: 0.2rem 0.1rem;
    text-align: center;
    font-weight: bolder;
  }
</style>
