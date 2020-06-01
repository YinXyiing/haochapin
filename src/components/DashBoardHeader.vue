<!--
 * @Author: your name
 * @Date: 2020-05-28 16:28:08
 * @LastEditTime: 2020-05-28 17:59:44
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
    <div class="nav_border" v-if="isShowNav" @mouseleave="navHidden">
      <p class="phome">首頁</p>
      <p class="phome">各地区情况</p>
      <p class="phome">整体分析</p>
      <div class="divBorder">总体排名</div>
      <div class="divBorder">服务方式完备度</div>
      <div class="divBorder">服务事项覆盖度</div>
      <div class="divBorder">办理指南准确度</div>
      <div class="divBorder">在线办理成熟度</div>
      <div class="divBorder">在线服务成效度</div>
      <p class="phome">数据对比</p>
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
    }
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
  }
  .phome {
    color: #00adff;
    width: 132px;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #00adff;
    border-radius: 8px;
    box-shadow: inset 0px 0px 8px 6px rgb(0, 173, 255);
  }
  .divBorder {
    width: 132px;
    height: 40px;
    color: #00adff;
    border-bottom: 1px solid #00adff;
    margin-top: 12px;
    text-align: center;
    line-height: 40px;
  }
}
</style>
