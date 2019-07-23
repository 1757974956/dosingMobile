<template>
  <div class="container">
    <ul>
      <li><router-link to="/services/services1.html">
        <div class="box1">
          <img src="./../../assets/images/servicesbg1.png" alt="">
          <div class="title">
            <p style="color: #fff;font-size: 0.3rem;text-align: center;font-weight: bolder;">营销策划</p>
          </div>
          <div class="title2">
            <span class="left">BRAND</span>
            <span class="right pc"></span>
          </div>
        </div>
        <div class="title3">
          <span>洞见品牌发展之路</span>
        </div>
      </router-link></li>
      <li><router-link to="/services/services2.html">
        <div class="box1">
          <img src="./../../assets/images/servicesbg2.png" alt="">
          <div class="title">
            <p style="color: #fff;font-size: 0.3rem;text-align: center;font-weight: bolder;">设计制作</p>
          </div>
          <div class="title2">
            <span class="left">DESIGN</span>
            <span class="right pc"></span>
          </div>
        </div>
        <div class="title3">
          <span>覆盖城市生活社区</span>
        </div>
      </router-link></li>
      <li><router-link to="/services/services3.html">
        <div class="box1">
          <img src="./../../assets/images/servicesbg3.png" alt="">
          <div class="title">
            <p style="color: #fff;font-size: 0.3rem;text-align: center;font-weight: bolder;">活动营销</p>
          </div>
          <div class="title2">
            <span class="left">AVTIVE</span>
            <span class="right pc"></span>
          </div>
        </div>
        <div class="title3">
          <span>用事件影响关注 / 活动聚焦</span>
        </div>
      </router-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'services'
  }
</script>
<style scoped>
  li{
    list-style: none;
  }
  .container {
    width: 100%;
    background-color: #EBEAF1;
    height: 11.8rem;
  }
  .container ul{
    overflow: hidden;
    padding: 0.3rem 0.15rem 0.7rem;
  }
  .container ul li{
    height: 1.8rem;
    position: relative;
    float: left;
    width: 45%;
    margin: 0.15rem;
    margin-bottom: 0.6rem;
  }
  .container .box1 {
    width:100%;
    position: relative;
    margin-bottom: 0.6rem;
    height: 1.65rem;
    overflow: hidden;
  }
  .container .box1 img {
    width: 100%;
    height: 100%;
  }
  .title {
    position: absolute;
    top: 30%;
    width: 4rem;
    left: 50%;
    margin-left: -2rem;
    text-align: center;
  }
  .title img {
    width: 100%;
  }
  .title2 {
    height: 0.45rem;
    position: absolute;
    bottom: 0rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.5);
    overflow: hidden;
  }
  .left {
    color: #fff;
    background-color: #C9161C;
    float: left;
    width: 50%;
    height: 0.45rem;
    font-size: 0.25rem;
    line-height: 0.45rem;
    padding-left: 0.1rem;
  }
  .right {
    background: url("../../assets/images/mediaIcon.png") no-repeat;
    float: right;
    height: 100%;
    background-size: 2.68rem .3rem;
    margin-right: .2rem;
  }
  .right.pc {
    width: .25rem;
    background-position: -2.4rem center;
  }
  .title3 {
    background-color: #fff;
    position: absolute;
    bottom: -0.32rem;
    width: 100%;
    height: 0.46rem;
    line-height: 0.46rem;
    font-size: 0;
    border-right: 0.05rem;
    white-space: nowrap;
    overflow: hidden;
  }
  .title3 span {
    margin-left: 0.15rem;
    color: #969696;
    font-size: 0.12rem;
    white-space: nowrap;
  }
</style>
