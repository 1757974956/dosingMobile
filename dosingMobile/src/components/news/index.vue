<template>
  <div class="home">
<!--轮播图-->
    <mt-swipe :auto="4000">
      <mt-swipe-item><router-link to="/zhizao.html"><img src="../../assets/images/tbg1.jpg" alt="" style="width: 100%;"></router-link></mt-swipe-item>
      <mt-swipe-item><router-link to="/zhizao/zhizao2.html"><img src="../../assets/images/tbg2.jpg" alt="" style="width: 100%;"></router-link></mt-swipe-item>
      <mt-swipe-item><router-link to="/zhizao/zhizao3.html"><img src="../../assets/images/tbg3.jpg" alt="" style="width: 100%;"></router-link></mt-swipe-item>
    </mt-swipe>
    <div class="container">
<!--      <router-link to="/media">7747</router-link>-->
      <!--导航-->
      <div class="nav">
        <ul>
          <li>
          <router-link to="/zhizao.html">
            <div class="img"></div>
            <p style="text-align: center;">道森智造</p>
          </router-link>
        </li>
          <li>
            <router-link to="/media.html">
              <div class="img"></div>
              <p style="text-align: center;">媒体产品</p>
            </router-link>
          </li>
          <li>
            <router-link to="/trench.html">
              <div class="img"></div>
              <p style="text-align: center;">渠道</p>
            </router-link>
          </li>
          <li style="border:none">
            <router-link to="/services.html">
              <div class="img"></div>
              <p style="text-align: center;">服务</p>
            </router-link>
          </li>
          <li>
            <router-link to="/aboutUs/aboutUs1.html" style="border-bottom: none;">
              <div class="img"></div>
              <p style="text-align: center;">道森智囊</p>
            </router-link>
          </li>
          <li>
            <router-link to="/aboutUs/aboutUs2.html" style="border-bottom: none;">
              <div class="img"></div>
              <p style="text-align: center;">招聘计划</p>
            </router-link>
          </li>
          <li>
            <router-link to="/aboutUs.html" style="border-bottom: none;">
              <div class="img"></div>
              <p style="text-align: center;">关于我们</p>
            </router-link>
          </li>
          <li style="border:none">
            <router-link to style="border-bottom: none;">
              <div class="img"></div>
              <p style="text-align: center;">更多</p>
            </router-link>
          </li>
        </ul>
      </div>
<!--新闻列表-->
      <div class="newsList">
        <ul class="ul">
          <li v-for="item in list.slice(0,a)">
            <router-link :to="'/dynamic.html?type=event&user=DOSN-dynamic&time='+item.time+'title='+item.title+'&htmlname='+item.dcname">
              <div class="left">
                <img v-lazy="item.txtimg" alt=""data-original="../document/imgLibrary/image43.jpg">
                <p class="left_p">{{item.label}}</p>
              </div>
              <div class="right">
                <p class="right-p1">{{item.title}}</p>
                <p class="right-p2"><span class="span">{{item.author}}</span>&nbsp;|&nbsp;<span>{{item.time}}</span></p>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
<!--加载更多-->
      <div class="load-more mr-bottom more" v-if="a<list.length" @click='loadMore' >加载更多</div>
      <div class="load-more mr-bottom more" v-else>没有更多了</div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'index',
    data () {
      return {
        a:0,
        list:[],
      }
    },
    methods: {
      getList () {
        this.$http.get('../static/newsList.json').then(data => {
          console.log(data.body)
          this.list = data.body
          console.log(this.list)
        })
      },
      loadMore () {
        this.a+=10
      },
    },
    created () {
      this.getList()
      this.loadMore()
      // this.getBgc()
    },
  }
</script>

<style scoped>
/*轮播图部分*/
  .mint-swipe, .mint-swipe-items-wrap {
    overflow: hidden;
    position: relative;
    height: 2.8rem;
    /* width: 2rem; */
  }
/*通用样式*/
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
}
li{
  list-style: none;
}
/*.home{*/
/*  padding-top: 1rem;*/
/*}*/
  /*导航部分*/
  .container{
    width: 100%;
    background-color: #ebeaf1;
    padding-bottom: 0.2rem;
  }
  .nav{
    width: 93%;
    background-color: #fff;
    margin: auto;
  }
  .nav .img{
    margin: 0 auto;
    height: .25rem;
    width: 0.23rem;
    margin-bottom: .11rem;
    margin-top: 0.3rem;
    text-align: center;
    background: url("../../assets/images/eyes.png") no-repeat 0 center;
    background-size: .5rem .25rem;
  }
  .nav ul{
    overflow: hidden;
    font-size: 0;
  }
  .nav ul li{
    float: left;
    width: 24.6%;
    border-right: 1px solid #ccc;
    text-align: center;
  }
  .nav ul li a{
    width: 70%;
    display: inline-block;
    border-bottom: 1px solid #ccc;
    font-size: 0.2rem;
    color: #979696;
    padding-bottom: 0.27rem;
  }
/*  新闻列表*/
  .newsList{
    width: 93%;
    margin: 0 auto;
    margin-top: 0.4rem;
  }
  .newsList ul{
    /*height: 15rem;*/
    /*overflow: hidden;*/
  }
  .newsList ul li{
    overflow: hidden;
    height: 1.5rem;
    padding: .2rem .15rem;
    background: #fff;
  }
.newsList .left{
  width: 2.8rem;
  /*height: 1rem;*/
  height: 100%;
  float: left;
  position: relative;
}
.newsList .left .left_p{
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.2rem;
  color: #fff;
  background-color: #f00;
  width: 0.7rem;
  text-align: center;
}
.newsList .left img{
  width: 100%;
  height: 100%;
  display: block;
}
.newsList .right{
  margin-left: 3rem;
  position: relative;
  height: 100%;
}
.newsList .right .right-p1{
  font-size: 0.25rem;
  color: #4a4a4a;
  font-weight: bolder;
  /*line-height: 1.5;*/
  letter-spacing: 0.6px;
}
.newsList .right .right-p2{
  font-size: 0.2rem;
  color: #8b8b8b;
  position: absolute;
  bottom: 0;
  white-space: nowrap;
}
.newsList .right .right-p2 .span{
  background: url("../../assets/images/user.png") no-repeat;
  padding-left: 0.2rem;
  padding: 0 .05rem 0 .23rem;
  background-size: .16rem .15rem;
  background-position: 0 0.07rem;
}
  .more{
    width: 90%;
    background-color: #b3b3b3;
    font-size: 0.25rem;
    height: 0.6rem;
    line-height: 0.6rem;
    margin: 0.25rem  auto 0;
    text-align: center;
    color: #ececec;
    border-radius:0.05rem;
  }
</style>
