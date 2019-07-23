<template>
  <div class="container">
    <div class="logo">互联网媒体</div>
    <div class="title">
      <div class="title2">
        <span class="left">MEDIA</span>
        <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">互联网媒体</span>
        <span class="right" style="width: 0.29rem; background-position: -1.47rem center;"></span>
      </div>
      <div class="title3">
        <span>产品属性&nbsp;&nbsp;:&nbsp;整合线上媒体资源</span>
      </div>
    </div>
    <div class="article">
      <h3>线上助推——腾讯社交广告</h3>
      <h3>组合投放，一次投放覆盖腾讯全媒体</h3>
      <p>整合腾讯资讯、社交、工具三大体系优质的PC和移动端资源， 玩转腾讯广告生态圈，发挥共生效应，各资源间相互影响、相互促进，为企业打出组合拳，无限放大广告价值</p>
      <p>智慧抓取社会群体网络流量</p>
      <p>定向投放朋友圈广告、腾讯新闻、腾讯视频等平台，</p>
      <p>针对目标受众群的网络习惯，定向锁定目标群时间、地域，实现高效果转化。</p>
      <p><img src="../../assets/images/01.png" alt=""></p>
      <h3></h3>
      <p style="text-align: center;"><img src="../../assets/images/02.png" alt="" style="width: 50%;"></p>
      <p style="text-align: center;">信息流广告服务商</p>
      <p style="text-align: center;">微信ID ：QQ-HUBEI</p>



    </div>
  </div>
</template>

<script>
  export default {
    name: 'media6'
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
    width: 95%;
    margin:0 auto;
    margin-bottom: 0.2rem;
  }
  .article p img{
    width: 100%;
  }
</style>

