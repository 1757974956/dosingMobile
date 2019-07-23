<template>
  <div class="container">
    <div class="logo">写字楼智慧媒体</div>
    <div class="title">
      <div class="title2">
        <span class="left">MEDIA</span>
        <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">写字楼智慧媒体</span>
        <span class="right" style="width: .155rem;background-position: -.56rem center;"></span>
      </div>
      <div class="title3">
        <span>产品属性&nbsp;&nbsp;:&nbsp;交互体验的零距离广告</span>
      </div>
    </div>
    <div class="article">
      <p><img src="../../assets/images/media31.png" alt=""></p>
      <p>制作尺寸 : 1080*1920mm</p>
      <p>颜色模式 : cmyk</p>
      <p>分辨率 : 96dpi</p>
      <p>表现形式 : 电子海报、视频、动画</p>
      <p>安装位置 : 电梯等候厅</p>
      <p>安装地点 : 写字楼</p>
      <h3>交互体验的零距离广告</h3>
      <p>传统媒体和数字科技融合</p>
      <p>更多创意广告表现</p>
      <p style="margin-bottom: 0.8rem;">最大限度发挥全方位信息传播效应</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'media3'
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
