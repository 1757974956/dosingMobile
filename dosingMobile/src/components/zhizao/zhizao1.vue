<template>
    <div class="container">
      <div class="title">
        <div class="title2">
          <span class="left">PLATFORM</span>
          <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">智能投放发布平台</span>
          <span class="right pc"></span>
        </div>
        <div class="title3">
          <span>阶段&nbsp;&nbsp;:&nbsp;&nbsp;开发中</span>
          <span>所属类型&nbsp;&nbsp;:&nbsp;&nbsp;应用程序</span>
          <span>平台&nbsp;&nbsp;:&nbsp;&nbsp;WINDOWS</span>
          <span>合作方式&nbsp;&nbsp;:&nbsp;&nbsp;开放式合作</span>
        </div>
      </div>
      <div class="article">
        <h3>平台介绍</h3>
        <p>万物皆媒，媒体剩余价值亟待挖掘。媒体资源重复建设，资源共享成为解决之道。SSP供应方平台，通过接入线上、线下传统媒体资源与新媒体资源，并完成媒体资源建模与数据清理，形成海量媒体资源供应平台。DSP平台集投放策略、实施优化、分析报告为一体的需求方平台，帮助广告主针对目标人群开展精准的广告投放。DOSN/AD+完成程序化购买和自动优化、跨渠道的预算管控、整合管理资源的统一接口、高效透明的广告投放、效果预测及购买决策、受众洞察和再次购买定向。</p>
        <h3>平台展示</h3>
        <p><img src="../../assets/images/yunpingtai.png" alt=""></p>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'zhizao1'
  }
</script>

<style scoped>
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
    box-shadow: 0 0.01rem 2px #ccc;
  }
  .title3 span{
    margin-left: 0.36rem;
    color: #969696;
    font-size: 0.12rem;
    white-space:nowrap;
  }
  h3{
    border-left: 0.1rem  solid red;
    font-size: 0.3rem;
    margin:0.4rem  auto;
    margin-top: 0.4rem;
    width: 90%;
    padding-left: 0.15rem;
    color: #565656;
  }
  .article p{
    font-size: 0.2rem;
    color:#828283;
    width: 93%;
    margin:0 auto;
  }
  .article p img{
    width: 100%;
  }
</style>
