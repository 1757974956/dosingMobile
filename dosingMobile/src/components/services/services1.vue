<template>
  <div class="container">
    <div class="logo">营销策划</div>
    <div class="title">
      <div class="title2">
        <span class="left">BRAND PLAN</span>
        <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">营销策划</span>
        <span class="right pc"></span>
      </div>
      <div class="title3">
        <span>洞见品牌发展之路</span>
      </div>
    </div>
    <div class="article">
      <h3>品牌混战的时代，以理性的思维<br>敏锐的眼光，洞见品牌发展之路</h3>
      <p>以策略为主导，以创意为中心</p>
      <p>为客户品牌营销、传播等方面提供全方位的品牌策划</p>
      <p>并提供系统、科学的数据分析支持</p>
      <p>助力品牌客户制定最优营销策略</p>
      <h3></h3>
      <p><span class="span1"></span><span>品牌/产品传播策略</span>  <span class="span1"></span><span>品牌/产品形象传播定位</span></p>
      <p><span class="span1"></span><span>品牌/产品推广主题策划</span>  <span class="span1"></span><span>季度/年度整合推广策略</span></p>
      <p><span class="span1"></span><span>公关活动传播策略</span>  <span class="span1"></span><span>线上传播策略</span></p>
      <p style="margin-bottom: 2.97rem;"><span class="span1"></span><span>媒介整合投放</span></p>
<!--      <p >细化用户标签,互动式闭环营销,场景+网状覆盖</p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'services1'
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
</style>
