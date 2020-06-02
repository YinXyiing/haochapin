<!--
 * @Author: your name
 * @Date: 2020-05-28 16:28:08
 * @LastEditTime: 2020-06-01 17:50:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \government-service-assessment\src\components\DashBoardHeader.vue
-->
<template>
  <div class="dashBoardHeader">
    <div class="dashBoardHeader_main">
      <div class="dashBoardHeader_title">
        <slot></slot>
      </div>
    </div>
    <div class="nav_btn" @click="navShow">目录导航</div>

    <div class="nav_border" v-if="isShowNav">
      <div class="phome">
        <router-link to="/">
          <span>首页</span>
        </router-link>
      </div>
      <div class="phome">
        <router-link to="/">
          <span>各地区情况</span>
        </router-link>
      </div>
      <div class="phome">
        <router-link to="/">
          <span>整体分析</span>
        </router-link>
      </div>
      <div class="divBorder">
        <router-link to="/overrank">
          <span>总体排名</span>
        </router-link>
      </div>
      <div class="divBorder">
        <router-link to="/servemethod">
          <span>服务方式完备度</span>
        </router-link>
      </div>
      <div class="divBorder">
        <router-link to="/serviceCoverage">
          <span>服务事项覆盖度</span>
        </router-link>
      </div>
      <div class="divBorder">
        <router-link to="/">
          <span>办理指南准确度</span>
        </router-link>
      </div>
      <div class="divBorder">
        <router-link to="/">
          <span>在线办理成熟度</span>
        </router-link>
      </div>
      <div class="divBorder">
        <router-link to="/">
          <span>在线服务成效度</span>
        </router-link>
      </div>
      <p class="phome">
        <router-link to="/">
          <span>数据对比</span>
        </router-link>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShowNav: false
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
    navShow () {
      // console.log( " -------- " )
      this.isShowNav = true
    },
    navHidden () {
      this.isShowNav = false

    },



  }
}
</script>

<style lang='scss' scoped>
.dashBoardHeader {
  &_main {
    margin: 0 auto;
    background: url("../assets/dashboard/topTitle.png") no-repeat;
    width: 695px;
    height: 50px;
    text-align: center;
    line-height: 50px;
    .dashBoardHeader_title {
      color: #2bfffb;
      font-size: 18px;
    }
  }
  .nav_btn {
    margin-bottom: 12px;
    width: 108px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #00adff;
    border-radius: 8px;
    box-shadow: inset 0px 0px 8px 6px rgba(0, 173, 255, 0.4);
    margin-left: 36px;
    cursor: pointer;
    z-index: 999;
  }
  .nav_border {
    width: 155px;
    height: 560px;
    background-color: rgba(4, 37, 74, 0.86);
    // background-color: #fff;
    cursor: pointer;
    padding-top: 30px;
    margin-top: -15px;
    padding-left: 25px;
    position: absolute;
    z-index: 888;
    .router-link-active {
      text-decoration: none;
    }
  }
  .phome {
    color: #00adff;
    width: 132px;
    height: 40px;
    border-radius: 8px;
    box-shadow: inset 0px 0px 8px 6px rgb(0, 173, 255);
    text-align: center;
    line-height: 100%;
    margin-top: 5px;

    .router-link-active {
      width: 100%;
      height: 98%;

      text-align: center;
      text-decoration: none;
      align-items: center;
      line-height: 100%;
      color: #00adff !important;
    }

    a {
      width: 100%;
      height: 100%;
      color: #00adff !important;
      text-decoration: none;
      text-align: center;
    }
    span {
      display: block;
      width: 100%;
      height: 90%;
      padding-top: 10%;
    }
  }
  .divBorder {
    width: 132px;
    height: 40px;
    color: #00adff;
    border-bottom: 1px solid #00adff;
    margin-top: 12px;
    .router-link-active {
      width: 100%;
      height: 98%;

      text-align: center;
      text-decoration: none;
      align-items: center;
      line-height: 100%;
      color: #00adff !important;
    }

    a {
      width: 100%;
      height: 100%;
      color: #00adff !important;
      text-decoration: none;
      text-align: center;
    }
    span {
      display: block;
      width: 100%;
      height: 90%;
      padding-top: 10%;
    }
  }
}
</style>
