<!--
 * @Author: your name
 * @Date: 2020-06-01 10:22:23
 * @LastEditTime: 2020-06-02 09:47:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \haochapin\src\views\service-coverage\index.vue
--> 
<template>
<div class="serviceCoverage">
  <v-dashBoardHeader>市级政府网上政务服务能力调查评估</v-dashBoardHeader>
  <div class="serviceCoverage_main">
    <div class="serviceCoverage_left">
      <div class="serviceCoverage_leftCount">
        <div class="rank_head">
          <p class="rank_circle"></p>
          <span>办事指南发布数量</span>
        </div>
      </div>
      <div class="serviceCoverage_leftPercent"></div>
    </div>
    <div class="serviceCoverage_middle">
    </div>
    <div class="serviceCoverage_right">
    </div>
  </div>
</div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
export default {
  data () {
    return {
    }
  },
  components: {
    vDashBoardHeader
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.serviceCoverage{
  .rank_head {
          width: 100%;
          height: 44px;
          // display: flex;
          background-color: rgba(43, 255, 251, 0.2);
          border-radius: 25px 0 0 0;
          line-height: 44px;
          .rank_circle {
            width: 12px;
            height: 12px;
            margin-left: 24px;
            margin-right: 7px;
            border-radius: 50%;
            background: gold;
            float: left;
          }
          span {
            color: #00adff;
          }
        }
  &_left{
    margin-right: 17px;
    width: 23%;
  }
  &_middle{
    width: 47%;
  }
  
}
</style>