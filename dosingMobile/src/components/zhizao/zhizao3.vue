<template>
  <div class="container">
    <div class="logo"><img src="../../assets/images/specialwork_logo.png" alt=""></div>
    <div class="title">
      <div class="title2">
        <span class="left">APP</span>
        <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">全民广告投放监测平台</span>
        <span class="right phone"></span>
      </div>
      <div class="title3">
        <span>阶段&nbsp;&nbsp;:&nbsp;开发中</span>
        <span>所属类型&nbsp;&nbsp;:&nbsp;应用程序</span>
        <span>平台&nbsp;&nbsp;:&nbsp;IOS/Android</span>
        <span>合作方式&nbsp;&nbsp;:&nbsp;开放式合作</span>
      </div>
    </div>
    <div class="article">
      <h3>平台介绍</h3>
      <p>特工组app及配套服务器后台管理系统，利用科技的手段规范户外媒体执行标准，解决工程人员素质参差不齐导致的执行问题，将行业经验提炼出标准执行流程，用科技手段保证流程的规范实施。通过向公众发布上画以及监测任务，并对完成任务的大众提供相应报酬来鼓励并引导第三方公众人员参与到户外媒体广告执行状况的监测中来。共建一个公开、公正、透明、高效的户外广告监测体系，填补户外广告监测空白。</p>
      <h3>平台展示</h3>
      <p><img src="../../assets/images/tegongzu.png" alt=""></p>
      <p ><img src="../../assets/images/tegongzu2.png" ></p>
<!--      <h3>平台专利</h3>-->
<!--      <p style="margin-bottom: 0.5rem"><img src="../../assets/images/toufang4.png" alt=""></p>-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'zhizao3'
  }
</script>

<style scoped>
  .logo{
    text-align: center;
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
  /*.right.pc{*/
  /*  width: .32rem;*/
  /*  background-position: -2.08rem center;*/
  /*}*/
  .right.phone {
    width: .18rem;
    background-position: -1.92rem center;
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
    width: 93%;
    margin:0 auto;
    margin-bottom: 0.5rem;
  }
  .article p img{
    width: 100%;
  }
</style>
