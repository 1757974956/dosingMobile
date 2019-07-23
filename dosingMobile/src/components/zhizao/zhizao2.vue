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
      <p>通过模块化的软件设计架构，将用户管理、资源采集与资源管理、户外媒体智能发布、发布实施方案设计、执行动态跟踪、户外广告媒体资源监测、报表管理、客户关系管理、运维数据监控等功能模块集合，形成具有户外广告行业特色的智能发布平台，通过平台可以为客户提供高新技术服务，从定位置、定人群、定媒体、定时段、定预算、定方案几个方面入手，提供高效优质的户外广告方案设计及智能发布服务。</p>
      <h3>平台展示</h3>
      <p><img src="../../assets/images/toufang1.png" alt=""></p>
      <p style="margin-top: 0.2rem;"><img src="../../assets/images/toufang2.png" alt="" style="width: 50%;"><img src="../../assets/images/toufang3.png" alt="" style="width: 50%;"></p>
      <h3>平台专利</h3>
      <p style="margin-bottom: 0.5rem"><img src="../../assets/images/toufang4.png" alt=""></p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zhizao2'
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
    margin:0.4rem  auto;
    margin-top: 0.4rem;
    width: 90%;
    padding-left: 0.15rem;
    color: #565656;
  }
  .article p{
    font-size: 0.2rem;
    color: #828283;
    width: 93%;
    margin:0 auto;
  }
  .article p img{
    width: 100%;
  }
</style>
