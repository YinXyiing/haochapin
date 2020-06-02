<template>
  <div class="dashboard">
    <div class="edition_heart">
      <v-dashBoardHeader>网上政务服务能力调查评估</v-dashBoardHeader>
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
      <section class="serve_mid">
        <div class="map_board">
          <div class="map_title">
            <p class="map_circle"></p>
            <span>服务能力分布</span>
          </div>
          <div class="echarts">
            <div :style="{height:'580px',width:'100%'}" ref="myEchart"></div>
          </div>
        </div>
        <div class="num_analysis">
          <div class="analysis_title">
            <p class="analysis_circle"></p>
            <span>市本级部门进驻市级网上政务服务平台的数据分析</span>
          </div>
          <div class="analysis_content">
            <div class="content_fir">
              <img src="../../assets/dashboard/省级政务服务平台@1x.png" alt />
              <p>市级政务服务平台</p>
              <p>进一张网办所有事</p>
            </div>
            <div class="content_sec">
              <div class="city_level">
                <p class="city_box">地市级</p>
                <p class="el-icon-caret-right"></p>
                <p>
                  <span>441</span>个地市政府
                </p>
              </div>
              <div class="county_level">
                <p class="county_box">区县级</p>
                <p class="el-icon-caret-right"></p>
                <p>
                  <span>3278</span>县级政府
                </p>
              </div>
              <div class="town_level">
                <p class="town_box">乡镇级</p>
                <p class="el-icon-caret-right"></p>
                <p>
                  <span>4431</span>个乡镇
                </p>
              </div>
              <div class="village_level">
                <p class="village_box">村居级</p>
                <p class="el-icon-caret-right"></p>
                <p>
                  <span>24431</span>个村居
                </p>
              </div>
            </div>
            <div class="content_thr">
              <div class="city_depart">
                <p class="el-icon-caret-right"></p>
                <p>
                  <span>4431</span>个市直属
                </p>
              </div>
              <div class="county_depart">
                <p class="el-icon-caret-right"></p>
                <p>
                  <span>4431</span>个县直属
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="serve_right">
        <div class="annual_comp">
          <div class="annual_title">
            <p class="annual_circle"></p>
            <span>市级政府网上政务能力年度对比</span>
          </div>
          <div class="annual_comp_chart" ref="annual_comp_chart"></div>
        </div>
        <div class="unified_entr">
          <div class="unified_title">
            <p class="unified_circle"></p>
            <span>政务服务界面统一入口</span>
          </div>
          <div class="unified_chart_box">
            <div ref="unified_chart_left" style="width:100%;height:100%;"></div>
            <div ref="unified_chart_right" style="width:100%;height:100%;"></div>
          </div>
        </div>
        <div class="serve_hall">
          <div class="serve_title">
            <p class="serve_circle"></p>
            <span>市级政府实体政务服务大厅建设情况</span>
          </div>
          <div class="serve_hall_chart" ref="serve_hall_chart"></div>
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
    const annualdata = echarts.init(this.$refs.annual_comp_chart)
    const servedata = echarts.init(this.$refs.serve_hall_chart)
    const unifiedleftdata = echarts.init(this.$refs.unified_chart_left)
    const unifiedrightdata = echarts.init(this.$refs.unified_chart_right)
    var annualdataOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: '已经开通', 2015: 43.3, 2016: 35.8, 2017: 23.7 },
          { product: '暂未开通', 2015: 83.1, 2016: 73.4, 2017: 55.1 },


        ]
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          },
          axisLabel: {
            rotate: 30,
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
        { type: 'bar' },
        { type: 'bar' },
      ]
    }
    var servedataOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: '已经建立', 2015: 43.3, 2016: 85.8, 2017: 13.7 },
          { product: '准备建立', 2015: 43.1, 2016: 53.4, 2017: 55.1 },
          { product: '暂未计划', 2015: 13.1, 2016: 43.4, 2017: 55.1 },
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
        { type: 'bar' },
        { type: 'bar' }
      ]
    }
    var unifiedleftOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        top: 10,
        data: ['一级域名', '二级域名']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '一级域名' },
            { value: 310, name: '二级域名' },

          ]
        }
      ]
    }
    var unifiedrightOption = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        top: 10,
        data: ['一级域名', '二级域名']
      },
      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 335, name: '一级域名' },
            { value: 310, name: '二级域名' },

          ]
        }
      ]
    }
    annualdata.setOption(annualdataOption)
    servedata.setOption(servedataOption)
    unifiedleftdata.setOption(unifiedleftOption)
    unifiedrightdata.setOption(unifiedrightOption)
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
      .rank_bord {
        width: 100%;
        height: 920px;
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
    .serve_mid {
      width: 49%;
      height: 920px;
      margin-left: 16px;
      //   display: flex;
      float: left;
      .map_board {
        width: 100%;
        height: 620px;
        border: 1px solid #00adff;
        .map_title {
          width: 100%;
          height: 40px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 40px;
          .map_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-right: 8px;
            margin-left: 8px;
            float: left;
          }
          span {
            color: #00adff;
          }
        }
      }
      .num_analysis {
        width: 100%;
        height: 280px;
        border: 1px solid #00adff;
        margin-top: 16px;
        .analysis_title {
          width: 100%;
          height: 40px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 40px;
          .analysis_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            float: left;
            margin-right: 8px;
          }
          span {
            color: #00adff;
          }
        }
        .analysis_content {
          width: 100%;
          height: 220px;
          padding-top: 20px;
          font-size: 16px;
          display: flex;
          .content_fir {
            width: 26%;
            height: 80%;
            padding: 5% 3px;
            text-align: center;
            color: #56bfe7;
          }
          .content_sec {
            width: 40%;
            height: 100%;
            margin-left: 14px;
            .city_level {
              display: flex;
              color: #00adff;
              .city_box {
                width: 62px;
                height: 25px;
                background-color: rgba(43, 255, 251, 0.2);
                text-align: center;
                line-height: 25px;
                font-size: 14px;
                border-radius: 8px;
              }
              .el-icon-caret-right {
                color: gold;
                margin-top: 18px;
              }
              p:last-child {
                color: #fff;
                span {
                  color: #00adff;
                }
              }
            }
            .county_level {
              display: flex;
              color: #00adff;
              .county_box {
                width: 62px;
                height: 25px;
                background-color: rgba(43, 255, 251, 0.2);
                text-align: center;
                line-height: 25px;
                font-size: 14px;
                border-radius: 8px;
              }
              .el-icon-caret-right {
                color: gold;
                margin-top: 18px;
              }
              p:last-child {
                color: #fff;
                span {
                  color: #00adff;
                }
              }
            }
            .town_level {
              display: flex;
              color: #00adff;
              .town_box {
                width: 62px;
                height: 25px;
                background-color: rgba(43, 255, 251, 0.2);
                text-align: center;
                line-height: 25px;
                font-size: 14px;
                border-radius: 8px;
              }
              .el-icon-caret-right {
                color: gold;
                margin-top: 18px;
              }
              p:last-child {
                color: #fff;
                span {
                  color: #00adff;
                }
              }
            }
            .village_level {
              display: flex;
              color: #00adff;
              .village_box {
                width: 62px;
                height: 25px;
                background-color: rgba(43, 255, 251, 0.2);
                text-align: center;
                line-height: 25px;
                font-size: 14px;
                border-radius: 8px;
              }
              .el-icon-caret-right {
                color: gold;
                margin-top: 18px;
              }
              p:last-child {
                color: #fff;
                span {
                  color: #00adff;
                }
              }
            }
          }
          .content_thr {
            width: 28%;
            height: 100%;
            color: #00adff;

            .city_depart,
            .county_depart {
              display: flex;
              p:last-child {
                color: #fff;
              }
            }
            span {
              color: #00adff;
            }
            .el-icon-caret-right {
              color: gold;
              margin-right: 4px;
              margin-top: 18px;
            }
          }
        }
      }
    }
    .serve_right {
      width: 18%;
      height: 920px;
      float: left;
      margin-left: 12px;
      font-size: 12px;
      .annual_comp {
        width: 100%;
        height: 310px;
        border: 1px solid #00adff;
        margin-bottom: 16px;
        .annual_title {
          width: 100%;
          height: 40px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 40px;
          .annual_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-right: 8px;
            margin-left: 8px;
            float: left;
          }
          span {
            color: #00adff;
          }
        }
        .annual_comp_chart {
          width: 90%;
          height: 90%;
          margin-left: 6px;
        }
      }
      .unified_entr {
        width: 100%;
        height: 265px;
        border: 1px solid #00adff;
        margin-bottom: 16px;
        .unified_title {
          width: 100%;
          height: 40px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 40px;
          .unified_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-right: 8px;
            margin-left: 8px;
            float: left;
          }
          span {
            color: #00adff;
          }
        }
        .unified_chart_box {
          width: 100%;
          height: 220px;
          display: flex;
        }
      }
      .serve_hall {
        width: 100%;
        height: 305px;
        border: 1px solid #00adff;
        border-radius: 0 0 25px 0;
        .serve_title {
          width: 100%;
          height: 40px;
          background-color: rgba(43, 255, 251, 0.2);
          line-height: 40px;
          .serve_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-right: 8px;
            margin-left: 8px;
            float: left;
          }
          span {
            color: #00adff;
          }
        }
        .serve_hall_chart {
          width: 100%;
          height: 100%;
          margin-left: 6px;
        }
      }
    }
  }
}
</style>
