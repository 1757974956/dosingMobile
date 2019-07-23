<template>
  <div class="container">
    <div class="box1">
      <router-link to="/zhizao/zhizao1.html">
        <img src="./../../assets/images/zhizaobg1.png" alt="">
        <div class="title">
          <img src="./../../assets/images/zhizaologo1.png" alt="" style="width: 80%;">
          <p style="color: #fff;font-size: 0.4rem;text-align: center;font-weight: bolder;">SaaS智能云平台</p>
        </div>
        <div class="title2">
          <span class="left">PLATFORM</span>
          <span class="right pc"></span>
        </div>
        <div class="title3">
          <span>阶段 : 开发中</span>
          <span>所属类型 : 应用程序</span>
          <span>平台 : WINDOWS</span>
          <span>合作方式 : 开放式合作</span>
        </div>
      </router-link>
    </div>
    <div class="box1">
      <router-link to="/zhizao/zhizao2.html">
        <img src="./../../assets/images/zhizaobg2.png" alt="">
        <div class="title">
          <img src="./../../assets/images/zhizaologo2.png" alt="" style="width: 80%;">
          <p style="color: #fff;font-size: 0.4rem;text-align: center;font-weight: bolder;">智能投放发布平台</p>
        </div>
        <div class="title2">
          <span class="left">PLATFORM</span>
          <span class="right pc"></span>
        </div>
        <div class="title3">
          <span>阶段 : 开发中</span>
          <span>所属类型 : 应用程序</span>
          <span>平台 : WINDOWS</span>
          <span>合作方式 : 开放式合作</span>
        </div>
      </router-link>
    </div>
    <div class="box1" style="margin-bottom:0.2rem">
      <router-link to="/zhizao/zhizao3.html">
        <img src="./../../assets/images/zhizaobg3.png" alt="">
        <div class="title">
          <img src="./../../assets/images/zhizaologo3.png" alt="" style="width: 70%;margin-top: 0.45rem;">
          <p style="color: #fff;font-size: 0.4rem;text-align: center;font-weight: bolder;">全民广告投放监测平台</p>
        </div>
        <div class="title2">
          <span class="left">APP</span>
          <span class="right phone"></span>
        </div>
        <div class="title3">
          <span>阶段 : 开发中</span>
          <span>所属类型 : 应用程序</span>
          <span>平台 : IOS/Android</span>
          <span>合作方式 : 开放式合作</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zhizao'
  }
</script>
<style scoped>
  .container {
    width: 100%;
    background-color: #EBEAF1;
    padding: 0.5rem 0;
    /*margin-bottom: 0.5rem;*/
  }
  .container .box1 {
    width: 92%;
    margin: 0 auto;
    position: relative;
    /*margin: 0.3rem 0;*/
    margin-bottom: 0.6rem;
  }
  .container .box1 img {
    width: 100%;
  }
  .title {
    position: absolute;
    top: 0;
    width: 4rem;
    left: 50%;
    margin-left: -2rem;
    text-align: center;
  }
  .title img {
    width: 100%;
  }
  .title2 {
    height: 0.55rem;
    position: absolute;
    bottom: 0.26rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  .left {
    color: #fff;
    background-color: #C9161C;
    float: left;
    width: 2.2rem;
    height: 0.55rem;
    font-size: 0.3rem;
    line-height: 0.55rem;
    padding-left: 0.2rem;
  }
  .right {
    background: url("../../assets/images/mediaIcon.png") no-repeat;
    float: right;
    height: 100%;
    background-size: 2.68rem .3rem;
    margin-right: .2rem;
  }
  .right.pc {
    width: .32rem;
    background-position: -2.08rem center;
  }
  .right.phone {
    width: .18rem;
    background-position: -1.92rem center;
  }
  .title3 {
    background-color: #fff;
    position: absolute;
    bottom: -0.2rem;
    width: 100%;
    height: 0.46rem;
    line-height: 0.46rem;
    font-size: 0;
    border-right: 0.05rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .title3 span {
    margin-left: 0.36rem;
    color: #969696;
    font-size: 0.12rem;
    white-space: nowrap;

  }
</style>
