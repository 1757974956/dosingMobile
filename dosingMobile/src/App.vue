<template>
  <div id="app">
<!--顶部logo-->
    <header>
      <div class="top">
        <div class="header_left">
          <img src="./assets/images/logo.png" alt="">
        </div>
        <div class="header_right">
          <img src="./assets/images/menu.png" alt="">
        </div>
      </div>
    </header>
    <router-view></router-view>
<!--底部信息-->
    <footer>
      <div class="footer">
        <div class="icon">
          <a href="http://mail.dosing100.com/" class="email"></a>
          <a href="tel:400-027-0050" class="phone"></a>
          <a href="http://j.map.baidu.com/ukttF" class="address"></a>
        </div>
        <p>Copyright © 2013 道森媒体股份有限公司</p>
      </div>
    </footer>
<!--侧边栏-->
    <div class="menu">
      <ul>
        <li class="color" ><router-link tag="a"to="/index.html"> 首页</router-link></li>
        <li><router-link tag="a" to="/zhizao.html">智造</router-link></li>
        <li><router-link tag="a" to="/media.html">媒体</router-link></li>
        <li><router-link tag="a" to="/trench.html">渠道</router-link></li>
        <li><router-link tag="a" to="/services.html">服务</router-link></li>
        <li><router-link tag="a" to="/aboutUs.html">关于我们</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>

export default {
  name: 'App',
  data(){
    return{
      flag:false
    }
  },
  mounted () {
    $(".header_right").on("click",function () {
        if (this.flag==true){
          $(this).css("height","1rem")
          $(".menu").addClass("move1")
          $("#app").addClass("app")
          // $("#app").removeClass("app")
          $("#app").removeClass("app2")

          this.flag=!this.flag
        }else {
          $(".menu").addClass("move")
          $("#app").addClass("app")
          $(".menu").removeClass("move1")
          $("#app").removeClass("app2")
          $("#app").removeClass("app3")
          this.flag=!this.flag
        }
      this.flag=this.flag
      console.log(this.flag)
      if (this.flag==true){
        $(".menu a").on("click",function () {
          $("#app").addClass("app2").removeClass("app3 app")
        })
      }
    })

    $(".menu a").on("click",function () {
        $(this).addClass("color").siblings().removeClass("color")
      //   if (this.flag==true){
      //     $(this).css("height","1rem")
      //     $(".menu").addClass("move1")
      //     $("#app").removeClass("app2")
      //     $("#app").removeClass("app")
      //     // $("#app").addClass("app")
      //   }else {
      //     $(".menu").addClass("move")
      //     $("#app").addClass("app2")
      //
      //     $(".menu").addClass("move1")
      //     $(".menu").removeClass("move1")
      //
      //     this.flag=false
      //   }
      })
    // this.flag=true
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #fff;
  }

  .color{
    color: #ea0027 !important;
  }
  #app{
    padding-top: 1rem;
  }
  header{
    width: 100%;
    font-size: 0;
    height: 1rem;
    overflow: hidden;
    box-shadow: -2px 0.01rem 5px #ccc;
    position: fixed;
    z-index: 999;
    background-color: #fff;
    top: 0;
  }
  .top{
    width: 100%;
    overflow: hidden;
  }
 .top .header_left{
   float: left;
   display: inline-block;
   margin: .3rem 0 0 .35rem;
  }
  .top .header_left img{
    width: 2.2rem;
    display: inline-block;
  }
  .top .header_right{
    float: right;
    width: 0.35rem;
    margin:0.4rem 0.4rem 0 0;
  }
  .top .header_right img{
    width: 100%;
    display: inline-block;
  }
  .footer{
    position: absolute;
    left: 0;
    z-index: 99;
    width: 100%;
    height: .55rem;
    background-color: #373737;
    overflow: hidden;
    box-sizing: border-box;
    padding: 0 .3rem;
  }
  .footer .icon{
    display: flex;
    display: -webkit-flex;
    justify-content: center;
    align-items: center;
    float: right;
    height: 100%;
  }
  .footer .icon a {
    display: inline-block;
    width: .32rem;
    height: .3rem;
    background: url('assets/images/phone.png') no-repeat;
    background-size: 1.91rem .35rem;
  }
  .footer p {
    line-height: .56rem;
    font-size: .2rem;
    color: #8b8b8b;
  }
  .footer .icon .email {
    margin-right: .2rem;
    background-position: -1.58rem center;
  }
  .footer .icon .phone {
    margin-right: .2rem;
    background-position: -.32rem center;
  }
  .footer .icon .address {
    background-position: -0.96rem center;
  }
  .menu{
    width:2em;
    background-color: #29292f;
    float: right;
    padding: 0.5rem 0 0 0.5rem;
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(2.5rem);
    height: 100%;
  }
  .menu ul{

  }
  .menu ul li{
    color: #fff;
    font-size: 0.3rem;
    line-height: 2.5;
  }
  .move{
    animation: menu 0.2s linear forwards;
  }
  @keyframes menu {
    from{
      transform: translateX(2.5rem);
    }
    to{
      transform: translateX(2.5rem);
    }
  }
  .app{
    animation: app .2s linear forwards;
  }
  @keyframes app {
    from{
      transform: translateX(0px);
    }
    to{
      transform: translateX(-2.5rem);
    }
  }
  .move1{
    animation: menu1 0.2s linear forwards !important;
  }
  @keyframes menu1 {
    from{
      transform: translateX(2.5rem);
    }
    to{
      transform: translateX(2.5rem);
    }
  }
  .app2{
    animation: app1 0.2s linear forwards;
  }
  @keyframes app1 {
    from{
      transform: translateX(-2.5rem);
    }
    to{
      transform: translateX(0rem);
      overflow: hidden;
    }
  }



  .app3{
    animation: app3 0.2s linear forwards;
  }
  @keyframes app3 {
    from{
      transform: translateX(-2.5rem);
    }
    to{
      transform: translateX(0rem);
      overflow: hidden;
    }
  }
</style>
