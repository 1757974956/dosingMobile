<template>
  <div class="container">
    <div class="logo">社区灯箱</div>
    <div class="title">
      <div class="title2">
        <span class="left">MEDIA</span>
        <span style="font-size: 0.2rem;float:left;line-height: 0.55rem;color:#fff;padding-left: 0.2rem;font-weight: bolder;">社区灯箱</span>
        <span class="right" style="width: .4rem;background-position: -.17rem center;"></span>
      </div>
      <div class="title3">
        <span>产品属性&nbsp;&nbsp;:&nbsp;社区文化广告待开采的金矿</span>
      </div>
    </div>
    <div class="article">
      <p><img src="../../assets/images/media21.png" alt=""></p>
      <p>材质 : HP720高清灯箱片</p>
      <p>类型 : 内打灯效果、滚动灯箱</p>
      <p>高清灯箱A</p>
      <p>制作尺寸 : 1830*1300mm</p>
      <p>可视尺寸 : 1680*1160mm</p>
      <p>颜色模式 : cmyk</p>
      <p>分辨率 : 150dpi</p>
      <p>高清灯箱B</p>
      <p>制作尺寸 : 850*1620mm</p>
      <p>可视尺寸 : 750*1450mm</p>
      <p>颜色模式 : cmyk</p>
      <p>分辨率 : 150dpi</p>
      <h3>做到"家"的社区户外媒体</h3>
      <p>深入社区营销媒体</p>
      <p>四"可"定义(可采集、可分析、可画像、可分配)</p>
      <p>挖掘社区文化媒体开槽的金矿</p>
      <p style="margin-bottom: 0.8rem;">绝佳位置 / 重复曝光 / 高频次 / 高记忆</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'media2'
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
