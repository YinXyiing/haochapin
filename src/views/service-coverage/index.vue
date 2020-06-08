<!--
 * @Author: your name
 * @Date: 2020-06-01 10:22:23
 * @LastEditTime: 2020-06-03 10:19:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \haochapin\src\views\service-coverage\index.vue
--> 
<template>
  <div class="serviceCoverage">
    <v-dashBoardHeader>市级政府网上政务服务能力调查评估</v-dashBoardHeader>
    <div class="serviceCoverage_main">
      <div class="serviceCoverage_left">
        <section class="serviceCoverage_leftCount">
          <div class="rank_head">
            <p class="rank_circle"></p>
            <span>办事指南发布数量</span>
          </div>
          <div class="serviceCoverage_leftCountBottom">
            <ul class="exchangePane clearfix">
              <li>
                <span>行政权力事项</span>
              </li>
              <li>
                <span>行政权力事项</span>
              </li>
              <li>
                <span>行政权力事项</span>
              </li>
              <li>
                <span>行政权力事项</span>
              </li>
            </ul>
            <div class="publishCount" ref="publishCount"></div>
          </div>
        </section>
        <section class="serviceCoverage_leftPercent"></section>
      </div>
      <div class="serviceCoverage_middle"></div>
      <div class="serviceCoverage_right"></div>
    </div>
  </div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
import echarts from 'echarts'
export default {
  data () {
    return {

    }
  },
  components: {
    vDashBoardHeader
  },
  mounted () {
    var publishCount = echarts.init(this.$refs.publishCount)
    var publishCountOption = {
      height: 460,
      legend: {
        bottom: 0
      },
      toolbox: {


        feature: {
          saveAsImage: {
            iconStyle: {
              borderColor: 'yellow'
            },
            emphasis: {
              iconStyle: {
                borderColor: 'red'
              }
            }
          }

        }
      },
      grid: {
        left: 40,   // 与容器左侧的距离
        // right: '5%', // 与容器右侧的距离
        //top: '5%',   // 与容器顶部的距离
        bottom: 0, // 与容器底部的距离
      },
      top: 0,
      left: '0%',
      yAxis: {
        type: 'category',
        data: ['大同', '朔州', '阳泉', '长治', '沂州', '大同', '朔州', '阳泉', '长治', '沂州', '沂州'],

        boundaryGap: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      xAxis: {
        type: 'value',
        boundaryGap: true,
        splitLine: {
          show: false
        }
      },
      grid: {
        show: false
      },
      textStyle: {
        color: '#000',
        fontSize: 14
      },
      series: [{
        itemStyle: {
          color: '#E7465A',
        },

        barWidth: 12,
        barCategoryGap: '70%',
        data: [20, 200, 150, 80, 70, 110, 130, 20, 200, 150, 80],
        type: 'bar'
      }]
    }
    publishCount.setOption(publishCountOption)
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.serviceCoverage {
  .clearfix:after {
    content: "";
    display: block;
    clear: both;
    visibility: hidden;
    height: 0;
    font-size: 0;
  }
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
  &_left {
    margin-right: 17px;
    width: 333px;
    &Count {
      width: 100%;
      border: 1px solid #00adff;
      border-radius: 25px 0 0 0;
      &Bottom {
        .exchangePane {
          display: flex;
          justify-content: center;
          padding: 0;
          li {
            // margin-right: 15px;
            // float: left;
            // width: 74px;
            padding: 0 3px;
            line-height: 19px;
            height: 19px;
            list-style: none;
            white-space: nowrap;
            font-size: 0.12rem;
            -webkit-transform-origin-x: 0; //缩小后文字居左
            color: #2bfffb;
            text-align: center;
            background: rgba(74, 144, 226, 0.3);
            transform: scale(0.9) skewX(-20deg);
            border: 1px solid #50e3c2;
            span {
              display: inline-block;
              transform: skewX(20deg);
            }
          }
        }
        .publishCount {
          // box-sizing: border-box;
          padding: 0 14px;
          margin-top: -65px;
          width: 100%;
          height: 555px;
        }
      }
    }
  }
  &_middle {
    width: 47%;
  }
}
</style>