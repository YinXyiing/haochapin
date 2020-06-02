<template>
  <div class="dashboard">
    <div class="edition_heart">
      <v-dashBoardHeader>市级政府网上政务服务能力调查评估</v-dashBoardHeader>
      <section class="dashboard_right">
        <section class="effect_top">
          <div class="map_box">
            <div class="map_title">
              <p class="map_circle"></p>
              <span>市级行政许可事项办理跑动次数情况分析</span>
            </div>
            <div class="echarts">
              <div :style="{height:'540px',width:'100%'}" ref="myEchart"></div>
            </div>
          </div>
          <div class="user_analysis">
            <div class="user_happ">
              <div class="user_title">
                <p class="user_circle"></p>
                <span>市级平台用户情况分析</span>
              </div>
              <div class="user_data">
                <div class="happ_top">
                  <div class="has_first">
                    <img src="../../assets/dashboard/个人用户.png" alt />
                    <p>个人用户</p>
                  </div>
                  <div class="has_second">
                    <p>注册用户</p>
                    <p>1.66亿</p>
                  </div>
                  <div class="has_third">
                    <p>实名用户</p>
                    <p>1.55亿</p>
                  </div>
                </div>
                <div class="happ_bottom">
                  <div class="has_first">
                    <img src="../../assets/dashboard/企业用户.png" alt />
                    <p>企业用户</p>
                  </div>
                  <div class="has_second">
                    <p>注册用户</p>
                    <p>1.66亿</p>
                  </div>
                  <div class="has_third">
                    <p>实名用户</p>
                    <p>1.55亿</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="user_exper">
              <div class="user_title">
                <p class="user_circle"></p>
                <span>市级政府服务平台搜索功能用户体验分析</span>
              </div>
              <div class="exper_matter" ref="exper_matter" style="height:100%;width:100%;"></div>
            </div>
          </div>
        </section>
        <section class="effect_bottom">
          <div class="chart_left">
            <div class="user_title">
              <p class="user_circle"></p>
              <span>市级行政许可事项即办件占比分析</span>
            </div>
            <div class="donow_matter" ref="donow_matter" style="height:100%;width:100%;"></div>
          </div>
          <div class="chart_right">
            <div class="user_title">
              <p class="user_circle"></p>
              <span>市级行政许可事项办理期压缩情况分析</span>
            </div>
            <div class="compre_matter" ref="compre_matter" style="height:100%;width:100%;"></div>
          </div>
        </section>
      </section>
      <section class="dashboard_left">
        <div class="rank_bord">
          <div class="rank_head">
            <p class="rank_circle"></p>
            <span>服务方式完备度排名</span>
          </div>
          <div class="rank_table">
            <div class="rank_table_head">
              <div class="table_left">
                <span>排名</span>
                <span>县级政府</span>
                <span>指数</span>
              </div>
              <div class="table_right">
                <span>排名</span>
                <span>市级政府</span>
                <span>指数</span>
              </div>
            </div>
            <div class="over_rank_list">
              <ul>
                <li
                  v-for="item in dataList"
                  :key="item.index"
                  :class="[(item.num%2===0)?'table_backgrA':'table_backgrB']"
                >
                  <p>{{item.id}}</p>
                  <p>{{item.text}}</p>
                  <p>{{item.score}}</p>
                </li>
              </ul>
              <ul>
                <li
                  v-for="item in dataList"
                  :key="item.index"
                  :class="[(item.num%2===0)?'table_backgrA':'table_backgrB']"
                >
                  <p>{{item.id}}</p>
                  <p>{{item.text}}</p>
                  <p>{{item.score}}</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="nav_bord">
            <div class="nav_box">
              <p class="nav_circle"></p>总体排名
            </div>
            <div class="nav_box">
              <p class="nav_circle"></p>服务方式完备度
            </div>
            <div class="nav_box">
              <p class="nav_circle"></p>服务事项覆盖度
            </div>
            <div class="nav_box">
              <p class="nav_circle"></p>办事指南准确度
            </div>
            <div class="nav_box">
              <p class="nav_circle"></p>在线办理成熟度
            </div>
            <div class="nav_box">
              <p class="nav_circle"></p>在线服务成效度
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
import echarts from 'echarts'
import '../../assets/js/shanxi'
export default {
  data () {
    return {
      chart: null,
      selectIndex: 0,
      dataList: [
        { id: '1', text: '学习', score: '100', num: 1 },
        { id: '2', text: '学习', score: '100', num: 2 },
        { id: '3', text: '学习', score: '100', num: 3 },
        { id: '4', text: '学习', score: '100', num: 4 },
        { id: '5', text: '学习', score: '100', num: 5 },
        { id: '6', text: '学习', score: '100', num: 6 },
        { id: '7', text: '学习', score: '100', num: 7 },
        { id: '8', text: '学习', score: '100', num: 8 },
        { id: '9', text: '学习', score: '100', num: 9 },
        { id: '10', text: '学习', score: '100', num: 10 },
        { id: '11', text: '学习', score: '100', num: 11 },
        { id: '12', text: '学习', score: '100', num: 12 },
        { id: '13', text: '学习', score: '100', num: 13 },
        { id: '14', text: '学习', score: '100', num: 14 },
        { id: '15', text: '学习', score: '100', num: 15 },
        { id: '16', text: '学习', score: '100', num: 16 }
      ],
      myChart: ''
    }
  },
  components: {
    vDashBoardHeader
  },
  mounted () {
    this.chinaConfigure()
    const donowDom = echarts.init(this.$refs.donow_matter)
    const comperDom = echarts.init(this.$refs.compre_matter)
    const experDom = echarts.init(this.$refs.exper_matter)
    var donowOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: '太原', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: '大同', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: '朔州', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: '阳泉', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '长治', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '忻州', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '吕梁', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '晋中', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '临汾', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '运城', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '晋城', 2015: 72.4, 2016: 53.9, 2017: 39.1 }
        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar' },

      ]
    }
    var comperOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015'],
        source: [
          { product: '太原', 2015: 43.3 },
          { product: '大同', 2015: 83.1 },
          { product: '朔州', 2015: 86.4 },
          { product: '阳泉', 2015: 72.4 },
          { product: '长治', 2015: 72.4 },
          { product: '忻州', 2015: 72.4 },
          { product: '吕梁', 2015: 72.4 },
          { product: '晋中', 2015: 72.4 },
          { product: '临汾', 2015: 72.4 },
          { product: '运城', 2015: 72.4 },
          { product: '晋城', 2015: 72.4 }
        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar' },

      ]
    }
    var experOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015'],
        source: [
          { product: '太原', 2015: 43.3 },
          { product: '大同', 2015: 83.1 },
          { product: '朔州', 2015: 86.4 },
          { product: '阳泉', 2015: 72.4 },
          { product: '长治', 2015: 72.4 },
          { product: '忻州', 2015: 72.4 },
          { product: '吕梁', 2015: 72.4 },
          { product: '晋中', 2015: 72.4 },
          { product: '临汾', 2015: 72.4 },
          { product: '运城', 2015: 72.4 },
          { product: '晋城', 2015: 72.4 }
        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      yAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      // Declare several bar series, each will be mapped
      // to a column of dataset.source by default.
      series: [
        { type: 'bar' },

      ]
    }
    donowDom.setOption(donowOption)
    comperDom.setOption(comperOption)
    experDom.setOption(experOption)
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    setSelect (index) {
      console.log('--------index----->', index)
      if (this.selectIndex === index) {
        return
      }
      this.selectIndex = index
    },
    chinaConfigure () {
      var that = this
      this.myChart = echarts.init(this.$refs.myEchart)
      window.onresize = this.myChart.resize
      this.myChart.setOption({ // 进行相关配置
        // backgroundColor: '#02AFDB',
        tooltip: {
          trigger: 'item',
          confine: true,
          formatter: (params) => {
            var dataCon = params.name
            var txtCon = dataCon + ':' + '这个城市挺美啊'
            return txtCon
          }
        }, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true
          // color: ['orangered', 'yellow', 'lightskyblue']
        },
        geo: { // 这个是重点配置区
          map: '山西', // 表示中国地图
          roam: true,
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          itemStyle: {
            normal: {
              label: {
                show: false,
                textStyle: {
                  color: 'red'
                }
              }
            }
          }
        },
        {
          name: '选择省份', // 浮动框的标题
          type: 'map',
          value: '1',
          geoIndex: 0,
          data: [{
            name: '太原',
            value: 599
          }]
        }
        ]
      })
    }

  }
}
</script>

<style lang='scss' scoped>
.dashboard {
  .edition_heart {
    width: 100%;
    height: 100%;
    .table_backgrA {
      background-color: rgba(43, 255, 251, 0.2);
    }
    .table_backgrB {
      background-color: rgba(43, 255, 251, 0);
    }
    .dashboard_left {
      width: 24%;
      height: 100%;
      float: left;
      margin-left: 30px;
      border: 1px solid #00adff;
      border-radius: 0 25px 25px 0;
      .rank_bord {
        width: 100%;
        height: 920px;

        border-radius: 0 25px 25px 0;
        .rank_head {
          width: 100%;
          height: 40px;
          display: flex;
          background-color: rgba(43, 255, 251, 0.2);
          border-radius: 0 25px 0 0;
          line-height: 40px;
          .rank_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-right: 8px;
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
        .rank_table {
          width: 100%;
          height: 60%;
        }
        .rank_table_head {
          width: 98%;
          height: 30px;
          margin-top: 10px;
          margin-left: 6px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 30px;
          display: flex;
          span {
            margin: 0 8px;
            color: #00adff;
            font-size: 12px;
          }
          .table_left,
          .table_right {
            width: 100%;
            height: 100%;
          }
        }
        .over_rank_list {
          width: 100%;
          display: flex;
          font-size: 12px;
          ul {
            width: 50%;
          }
        }
        ul,
        li {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        ul li {
          display: flex;
          width: 95%;
          height: 32px;

          font-size: 12px;
          list-style: none;
          color: #fff;
          p {
            margin-left: 10%;
            width: 20%;
            height: 18px;
          }
        }
        ul li:last-child {
          border: 0;
        }
      }
      .nav_bord {
        width: 100%;
        .nav_box {
          width: 80%;
          margin-left: 10%;
          height: 40px;
          background-color: rgba(43, 255, 251, 0.1);
          margin-top: 8px;
          text-align: center;
          line-height: 40px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          .nav_circle {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            margin-right: 6px;
            border: 2px solid #00adff;
            align-items: center;
          }
          .router-link-active {
            width: 100%;
            height: 100%;
            text-align: center;
            text-decoration: none;
            color: #fff;
            align-items: center;
          }
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
            margin-right: 8px;
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
      .user_title {
        width: 100%;
        height: 40px;
        background-color: rgba(43, 255, 251, 0.2);
        line-height: 40px;
        .user_circle {
          width: 10px;
          height: 10px;
          margin-left: 8px;
          margin-right: 6px;
          border-radius: 50%;
          background: gold;
          float: left;
        }
        span {
          color: #00adff;
        }
      }
      width: 70%;
      height: 100%;
      float: left;
      .effect_top {
        width: 100%;
        height: 590px;
        display: flex;
        .map_box {
          width: 60%;
          height: 100%;
          margin-left: 6px;
          border: 1px solid #00adff;
          border-radius: 25px 0 0 0;
          .map_title {
            width: 100%;
            height: 40px;
            background-color: rgba(43, 255, 251, 0.2);
            line-height: 40px;
            border-radius: 25px 0 0 0;
            .map_circle {
              width: 10px;
              height: 10px;
              margin-left: 8px;
              margin-right: 6px;
              border-radius: 50%;
              background: gold;
              float: left;
            }
            span {
              color: #00adff;
            }
          }
        }
        .user_analysis {
          width: 40%;
          height: 100%;
          margin-left: 16px;
          .user_happ {
            width: 100%;
            height: 282px;
            border: 1px solid #00adff;
            .user_title {
              width: 100%;
              height: 40px;
              background-color: rgba(43, 255, 251, 0.2);
              line-height: 40px;
              .user_circle {
                width: 10px;
                height: 10px;
                margin-left: 8px;
                margin-right: 6px;
                border-radius: 50%;
                background: gold;
                float: left;
              }
              span {
                color: #00adff;
              }
            }
            .user_data {
              width: 100%;
              height: 240px;
              color: #fff;
              .happ_top {
                width: 100%;
                height: 48%;
                display: flex;
                margin-left: 16px;
                .has_first,
                .has_second,
                .has_third {
                  width: 30%;
                  height: 100%;
                  p:last-child {
                    color: #00adff;
                  }
                }
                .has_first {
                  text-align: center;
                  margin-top: 16px;
                  p {
                    color: #00adff !important;
                    margin-top: 1px;
                  }
                }
              }
              .happ_bottom {
                width: 100%;
                height: 48%;
                display: flex;
                margin-left: 16px;
                .has_first,
                .has_second,
                .has_third {
                  width: 30%;
                  height: 100%;
                  p:last-child {
                    color: gold;
                  }
                }
                .has_first {
                  margin-top: 16px;
                  text-align: center;
                  p {
                    color: #00adff !important;
                    margin-top: 1px;
                  }
                }
              }
            }
          }
          .user_exper {
            width: 100%;
            height: 285px;
            border: 1px solid #00adff;
            margin-top: 16px;
            .user_title {
              width: 100%;
              height: 40px;
              background-color: rgba(43, 255, 251, 0.2);
              line-height: 40px;
              .user_circle {
                width: 10px;
                height: 10px;
                margin-left: 8px;
                margin-right: 6px;
                border-radius: 50%;
                background: gold;
                float: left;
              }
              span {
                color: #00adff;
              }
            }
          }
        }
      }
      .effect_bottom {
        width: 100%;
        height: 320px;
        display: flex;
        margin-top: 16px;
        .chart_left,
        .chart_right {
          width: 49%;
          height: 100%;
          border: 1px solid #00adff;
          margin-left: 6px;
        }
        .chart_right {
          margin-left: 15px;
        }
        .chart_left {
          border-radius: 0 0 0 25px;
        }
      }
    }
  }
}
</style>
