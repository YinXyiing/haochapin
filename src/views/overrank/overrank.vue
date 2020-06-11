<template>
  <div class="dashboard">
    <div class="edition_heart">
      <v-dashBoardHeader>网上政务服务能力调查评估</v-dashBoardHeader>
      <section class="dashboard_left">
        <div class="rank_bord">
          <div class="rank_head">
            <p class="rank_circle"></p>
            <span>总体排名</span>
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
      <section class="dashboard_right">
        <div class="dashboard_right_top">
          <div class="map_board">
            <div class="map_title">
              <p class="map_circle"></p>
              <span>服务能力分布</span>
            </div>
            <div class="echarts">
              <div :style="{height:'580px',width:'100%'}" ref="myEchart"></div>
            </div>
          </div>
          <div class="map_right">
            <div class="overview_fir">
              <div class="overview_head">
                <p class="overview_circle"></p>
                <span>市级政府网上服务能力年度对比</span>
              </div>
              <div class="city_level" ref="city_level" style="height:100%;width:100%"></div>
            </div>
            <div class="overview_sec">
              <div class="overview_head">
                <p class="overview_circle"></p>
                <span>市级政府网上服务能力年度对比</span>
              </div>
              <div class="area_level" ref="area_level" style="height:100%;width:100%"></div>
            </div>
          </div>
        </div>
        <div class="dashboard_right_bottom">
          <div class="analysis_title">
            <div class="analysis_circle">
              <p class="data_circle"></p>
              <span>数据分析</span>
            </div>
            <!-- 数据分析选项按钮 -->
          </div>
          <div>
            <!-- 数据分析数据面板显示 -->
            <div
              class="total_rank_board"
              ref="total_matter_board"
              :class="[(selectIndex==0)?'demonstrateA':'demonstrateB']"
              style="height:200px;width:100%"
            ></div>
            <div
              class="right_matter_board"
              ref="right_matter_board"
              :class="[(selectIndex==1)?'demonstrateA':'demonstrateB']"
              style="height:200px;width:900px"
            ></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
import echarts from 'echarts'
// import '../../../node_modules/echarts/map/js/province/shanxi'
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
    const totaldata = echarts.init(this.$refs.total_matter_board)
    const cityleveldata = echarts.init(this.$refs.city_level)
    const arealeveldata = echarts.init(this.$refs.area_level)

    var polyOption = {
      // title: {
      //   text: '折线图堆叠'
      // },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['2018', '2017', '2016']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        color: '#fff'
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        },

        type: 'category',
        boundaryGap: false,
        data: ['太原', '大同', '朔州', '阳泉', '长治', '忻州', '吕梁', '晋中', '临汾', '运城', '晋城']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          textStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          name: '2018',
          type: 'line',
          stack: '总量',
          data: [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134]
        },
        {
          name: '2017',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234]
        },
        {
          name: '2016',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410, 150, 232, 201, 154]
        }
      ]
    }
    var leveldataOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: '非常高', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: '高', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: '中', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: '低', 2015: 72.4, 2016: 53.9, 2017: 39.1 },

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
    var areadataOption = {
      legend: {},
      tooltip: {},
      dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
          { product: '华北', 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          { product: '东北', 2015: 83.1, 2016: 73.4, 2017: 55.1 },
          { product: '华中', 2015: 86.4, 2016: 65.2, 2017: 82.5 },
          { product: '华东', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '华南', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '西南', 2015: 72.4, 2016: 53.9, 2017: 39.1 },
          { product: '西北', 2015: 72.4, 2016: 53.9, 2017: 39.1 },

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
    cityleveldata.setOption(leveldataOption)
    totaldata.setOption(polyOption)
    arealeveldata.setOption(areadataOption)
    // citydata.setOption(dataOption)
    // var that = this
    // this.myChart.on('click', function (params) {
    //   var cityname = params.name
    //   that.$router.push(`/citydetail/${cityname}`)
    // })
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
          roam: false,
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
  // background: url("../../assets/dashboard/background.png") no-repeat;
  // width: 100vw;
  // height: 200vh;
  // background-size: 100% 100%;
  .edition_heart {
    width: 100%;
    height: 100%;

    .table_backgrA {
      background-color: rgba(43, 255, 251, 0.2);
    }
    .table_backgrB {
      background-color: rgba(43, 255, 251, 0);
    }
    .demonstrateA {
      display: block;
    }
    .demonstrateB {
      display: none;
    }
    .dashboard_left {
      width: 24%;
      height: 100%;
      float: left;
      margin-top: 12px;
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
            margin-right: 6px;
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
          .nav_circle {
            width: 8px;
            height: 8px;
            border-radius: 50%;
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
            margin-right: 6px;
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
              margin-right: 6px;
              float: left;
            }
            span {
              color: #00adff;
            }
          }
        }
        .map_right {
          width: 38%;
          height: 100%;
          float: right;
          .overview_fir {
            width: 100%;
            height: 290px;
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
                margin-right: 6px;
                float: left;
              }
              span {
                color: #00adff;
              }
            }
          }
          .overview_sec {
            width: 100%;
            height: 290px;
            margin-top: 30px;
            border: 1px solid #00adff;
            .overview_head {
              width: 100%;
              height: 40px;
              // display: flex;
              background-color: rgba(43, 255, 251, 0.2);
              line-height: 40px;
              .overview_circle {
                width: 10px;
                height: 10px;
                margin-left: 8px;
                border-radius: 50%;
                background: gold;
                margin-right: 6px;
                float: left;
              }
              span {
                color: #00adff;
              }
            }
          }
          .con_tradist {
            width: 100%;
            height: 180px;
            // border: 1px solid #ccc;
            margin-top: 12px;
            display: flex;
            color: #fff;
            .imgbox {
              width: 98%;
              height: 137px;
              background-color: rgba(24, 78, 136, 0.3);
              text-align: center;
              line-height: 137px;
            }
            .area_com {
              width: 30%;
              height: 100%;
              .area_title {
                width: 98%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-radius: 15px 15px 0 0;
                background-color: rgba(200, 119, 122, 0.7);
              }
            }
            .index_com {
              width: 30%;
              height: 100%;
              margin-left: 4%;
              .index_title {
                width: 98%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-radius: 15px 15px 0 0;
                background-color: rgba(48, 161, 186, 0.7);
              }
            }
            .dime_com {
              width: 30%;
              height: 100%;
              margin-left: 4%;
              .dime_title {
                width: 98%;
                height: 40px;
                text-align: center;
                line-height: 40px;
                border-radius: 15px 15px 0 0;
                background-color: rgba(114, 127, 184, 0.7);
              }
            }
          }
        }
      }
      .dashboard_right_bottom {
        width: 100%;
        height: 280px;
        margin-top: 20px;
        border: 1px solid #00adff;
        border-radius: 0 0 25px 0;
        .analysis_title {
          width: 100%;
          height: 36px;
          background-color: rgba(10, 115, 249, 0.35);
          line-height: 36px;
          .analysis_circle {
            float: left;
            margin-left: 5px;
            color: #2bfffb;
            .data_circle {
              width: 10px;
              height: 10px;
              margin-left: 8px;
              border-radius: 50%;
              background: gold;
              margin-right: 6px;
              float: left;
            }
            span {
              margin-left: 4px;
            }
          }
          .analysis_tab {
            width: 80%;
            height: 100%;
            display: flex;
            float: right;
            margin-left: 6%;
            margin-top: 5px;
            // background: #fff;
            .total_rank,
            .right_matter,
            .apply_matter,
            .serve_matter,
            .settle_depart,
            .guide_ele {
              cursor: pointer;
              width: 100px;
              height: 25px;
              background-color: rgba(167, 167, 167, 0.1);
              line-height: 25px !important;
              margin-left: 5px;
              color: #aaa;
              font-size: 12px;
              img {
                width: 20%;
                margin-top: 2px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
