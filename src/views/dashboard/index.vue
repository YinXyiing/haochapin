<!--
 * @Author: your name
 * @Date: 2020-05-27 21:12:18
 * @LastEditTime: 2020-05-28 17:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \government-service-assessment\src\views\dashboard\index.vue
-->
<template>
  <div class="dashboard">
    <div class="edition_heart">
      <v-dashBoardHeader></v-dashBoardHeader>
      <section class="dashboard_left">
        <div class="rank_bord">
          <div class="rank_head">
            <p class="rank_circle"></p>
            <span>总体排名前十名</span>
            <div class="rank_more">更多》</div>
          </div>
          <div class="rank_table">
            <div class="rank_table_head">
              <span>总体排名</span>
              <span>市级政府</span>
              <span>总指数得分</span>
            </div>
            <ul>
              <li v-for="item in dataList" :key="item.index">{{item.text}}</li>
            </ul>
          </div>
        </div>
        <div class="indic_anay">
          <div class="indic_head">
            <p class="indic_circle"></p>
            <span>指标分析</span>
          </div>
          <div class="indic_harts" ref="indic_harts"></div>
        </div>
      </section>
      <section class="dashboard_right">
        <div class="dashboard_right_top">
          <div class="map_board">ditu地图</div>
          <div class="map_right">
            <div class="overview">
              <div class="overview_head">
                <p class="overview_circle"></p>
                <span>总体概况</span>
              </div>
              <div class="overview_fir">
                <div>
                  <img src="../../assets/dashboard/省级政务服务平台@1x.png" alt />
                  <p>省级政务服务平台</p>
                </div>
                <div>
                  <img src="../../assets/dashboard/进驻部门数量@1x.png" alt />
                  <p>进驻部门数量</p>
                </div>
                <div>
                  <img src="../../assets/dashboard/行政权力事项@1x.png" alt />
                  <p>行政权力事项</p>
                </div>
              </div>
              <div class="overview_sec">
                <div>
                  <img src="../../assets/dashboard/依申请事项@1x.png" alt />
                  <p>依申请事项</p>
                </div>
                <div>
                  <img src="../../assets/dashboard/办理时限压缩@1x.png" alt />
                  <p>办理时限压缩</p>
                </div>
                <div>
                  <img src="../../assets/dashboard/证照信息@1x.png" alt />
                  <p>证照信息</p>
                </div>
              </div>
              <div class="overview_thr">
                企业实名用户
                <span>3548万</span>个人实名用户
                <span>1.45亿</span>
              </div>
            </div>
            <div class="con_tradist"></div>
          </div>
        </div>
        <div class="dashboard_right_bottom"></div>
      </section>
    </div>
  </div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
import echarts from 'echarts'
export default {
  data () {
    return {
      dataList: [
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' },
        { text: '学习' }
      ]
    }
  },
  components: {
    vDashBoardHeader
  },
  mounted () {
    const indicdata = echarts.init(this.$refs.indic_harts)
    var option = {
      // title: {
      //   text: '基础雷达图'
      // },
      tooltip: {},
      legend: {
        data: ['2018', '2017', '2016']
      },
      radar: {
        // shape: 'circle',
        name: {
          textStyle: {
            color: '#fff',
            // backgroundColor: '#999',
            // borderRadius: 3,
            padding: [3, 5]
          }
        },
        indicator: [
          { name: '服务方式完备度', max: 6500 },
          { name: '服务事项覆盖度', max: 16000 },
          { name: '办理指南准确度', max: 30000 },
          { name: '办理指南准确度', max: 38000 },
          { name: '在线办理成熟度', max: 52000 },
          { name: '在线服务成效度', max: 25000 }
        ]
      },
      series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
          {
            value: [4300, 10000, 28000, 35000, 50000, 19000],
            name: '2018'
          },
          {
            value: [5000, 14000, 28000, 31000, 42000, 21000],
            name: '2017'
          },
          {
            value: [4000, 14000, 14000, 31000, 24600, 21000],
            name: '2016'
          }
        ]
      }]
    }
    indicdata.setOption(option)
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.dashboard {
  background: url("../../assets/dashboard/background.png") no-repeat;
  width: 100vw;
  height: 200vh;
  background-size: 100% 100%;
  .edition_heart {
    width: 95%;
    height: 95%;
    padding: 4px 30px;
    .dashboard_left {
      width: 24%;
      height: 100%;
      float: left;
      margin-top: 12px;
      margin-left: 30px;
      .rank_bord {
        width: 100%;
        height: 420px;
        border: 1px solid #00adff;
        border-radius: 25px 0 0 0;
        .rank_head {
          width: 100%;
          height: 40px;
          // display: flex;
          background-color: rgba(43, 255, 251, 0.2);
          border-radius: 25px 0 0 0;
          line-height: 40px;
          .rank_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            float: left;
          }
          span {
            color: #00adff;
          }
          .rank_more {
            float: right;
            width: 60px;
            height: 25px;
            // border-radius: 8px;
            // background-color: rgb(0, 173, 255);
            color: #00adff;
            line-height: 25px;
            margin-top: 6px;
            cursor: pointer;
          }
        }
        .rank_table_head {
          width: 95%;
          height: 30px;
          margin-top: 10px;
          margin-left: 6px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 30px;
          span {
            margin: 0 10px;
            color: #00adff;
          }
        }
        ul,
        li {
          border-bottom: 1px solid #2bfffb;
          padding: 0;
          padding-bottom: 4px;
          margin: 0;
          list-style: none;
          color: #fff;
          margin: 9px 4px;
        }
        ul li:last-child {
          border: 0;
        }
      }
      .indic_anay {
        width: 100%;
        height: 460px;
        border: 1px solid rgb(0, 173, 255);
        border-radius: 0 0 0 25px;
        margin-top: 12px;
        .indic_head {
          width: 100%;
          height: 40px;
          // display: flex;
          background-color: rgba(43, 255, 251, 0.2);
          // border-radius: 25px 0 0 0;
          line-height: 40px;
          .indic_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            float: left;
          }
          span {
            color: #00adff;
          }
        }

        .indic_harts {
          width: 96%;
          height: 95%;
          padding: 2%;
        }
      }
    }
    .dashboard_right {
      float: left;
      width: 70%;
      height: 100%;
      margin-left: 14px;
      margin-top: 12px;
      .dashboard_right_top {
        width: 100%;
        height: 620px;

        .map_board {
          width: 58%;
          height: 100%;
          float: left;
          border: 1px solid #00adff;
        }
        .map_right {
          width: 38%;
          height: 100%;
          float: right;
          .overview {
            width: 100%;
            height: 420px;
            border: 1px solid #00adff;
            border-radius: 0 25px 0 0;
            .overview_head {
              width: 100%;
              height: 40px;
              // display: flex;
              background-color: rgba(43, 255, 251, 0.2);
              border-radius: 0 25px 0 0;
              line-height: 40px;
              .overview_circle {
                width: 10px;
                height: 10px;
                margin-left: 8px;
                border-radius: 50%;
                background: gold;
                float: left;
              }
              span {
                color: #00adff;
              }
            }
            .overview_fir {
              display: flex;
              color: #fff;
              margin-top: 12px;
              font-size: 12px;
              div {
                margin: 0 8px;
              }
              p {
                text-align: center;
              }
            }
            .overview_sec {
              display: flex;
              color: #fff;
              margin-top: 12px;
              font-size: 12px;
              div {
                margin: 0 8px;
              }
              p {
                text-align: center;
              }
            }
            .overview_thr {
              width: 90%;
              height: 30px;
              text-align: center;
              line-height: 30px;
              font-size: 12px;
              background-color: #00adff;
            }
          }
          .con_tradist {
            width: 100%;
            height: 180px;
            border: 1px solid #ccc;
            margin-top: 12px;
          }
        }
      }
      .dashboard_right_bottom {
        width: 100%;
        height: 252px;
        margin-top: 20px;
        border: 1px solid #00adff;
        border-radius: 0 0 25px 0;
      }
    }
  }
}
</style>
