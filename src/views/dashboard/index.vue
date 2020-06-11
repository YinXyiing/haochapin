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
      <v-dashBoardHeader>网上政务服务能力调查评估</v-dashBoardHeader>
      <section class="dashboard_left">
        <div class="rank_bord">
          <div class="rank_head">
            <p class="rank_circle"></p>
            <span>总体排名前十名</span>
            <div class="rank_more" @click="tomore">更多》</div>
          </div>
          <div class="rank_table">
            <div class="rank_table_head">
              <span>总体排名</span>
              <span>市级政府</span>
              <span>总指数得分</span>
            </div>
            <ul>
              <li v-for="item in dataList" :key="item.index">
                <p>{{item.id}}</p>
                <p>{{item.text}}</p>
                <p>{{item.score}}</p>
              </li>
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
          <div class="map_board">
            <div class="map_title">
              <p class="map_circle"></p>
              <span>地区情况</span>
            </div>
            <div class="echarts">
              <div :style="{height:'620px',width:'100%'}" ref="myEchart"></div>
            </div>
          </div>
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
                  <p>
                    <span>32</span>
                  </p>
                </div>
                <div>
                  <img src="../../assets/dashboard/进驻部门数量@1x.png" alt />
                  <p>进驻部门数量</p>
                  <p>
                    <span>1481</span>
                  </p>
                </div>
                <div>
                  <img src="../../assets/dashboard/行政权力事项@1x.png" alt />
                  <p>行政权力事项</p>
                  <p>
                    <span>109867</span>
                  </p>
                </div>
              </div>
              <div class="overview_sec">
                <div>
                  <img src="../../assets/dashboard/依申请事项@1x.png" alt />
                  <p>依申请事项</p>
                  <p>
                    <span>32</span>
                  </p>
                </div>
                <div>
                  <img src="../../assets/dashboard/办理时限压缩@1x.png" alt />
                  <p>办理时限压缩</p>
                  <p>
                    <span>32</span>
                  </p>
                </div>
                <div>
                  <img src="../../assets/dashboard/证照信息@1x.png" alt />
                  <p>证照信息</p>
                  <p>
                    <span>32</span>
                  </p>
                </div>
              </div>
              <div class="overview_thr">
                企业实名用户
                <span>3548万</span>个人实名用户
                <span>1.45亿</span>
              </div>
            </div>
            <div class="con_tradist">
              <div class="area_com">
                <div class="area_title">地区对比</div>
                <div class="imgbox">
                  <img src="../../assets/dashboard/地区对比@1x.png" alt />
                </div>
              </div>
              <div class="index_com">
                <div class="index_title">指标对比</div>
                <div class="imgbox">
                  <img src="../../assets/dashboard/指标对比@1x.png" alt />
                </div>
              </div>
              <div class="dime_com">
                <div class="dime_title">多维度对比</div>
                <div class="imgbox">
                  <img src="../../assets/dashboard/多维度对比@1x.png" alt />
                </div>
              </div>
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
            <div class="analysis_tab">
              <div @click="setSelect(0)" class="total_rank">
                <img src="../../assets/dashboard/总体排名@1x.png" alt />
                <span>总体排名</span>
              </div>
              <div @click="setSelect(1)" class="right_matter">
                <img src="../../assets/dashboard/权力事项@1x.png" alt />
                <span>权力事项</span>
              </div>
              <div @click="setSelect(2)" class="apply_matter">
                <img src="../../assets/dashboard/依申请事项@1x.png" alt />
                <span>依申请事项</span>
              </div>
              <div @click="setSelect(3)" class="serve_matter">
                <img src="../../assets/dashboard/公共服务事项@1x.png" alt />
                <span>公共服务事项</span>
              </div>
              <div @click="setSelect(4)" class="settle_depart">
                <img src="../../assets/dashboard/进驻部门@1x.png" alt />
                <span>进驻部门</span>
              </div>
              <div @click="setSelect(5)" class="guide_ele">
                <img src="../../assets/dashboard/指南要素@1x.png" alt />
                <span>指南要素</span>
              </div>
            </div>
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
            <div
              class="apply_matter_board"
              ref="apply_matter_board"
              :class="[(selectIndex==2)?'demonstrateA':'demonstrateB']"
            ></div>
            <div
              class="serve_matter_board"
              ref="serve_matter_board"
              :class="[(selectIndex==3)?'demonstrateA':'demonstrateB']"
            ></div>
            <div
              class="settle_depart_board"
              ref="settle_depart_board"
              :class="[(selectIndex==4)?'demonstrateA':'demonstrateB']"
            ></div>
            <div
              class="guide_ele_board"
              ref="guide_ele_board"
              :class="[(selectIndex==5)?'demonstrateA':'demonstrateB']"
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
import { getAllAndroidPlugins } from '@/api/requestHome'
import { post } from '@/util/http'
export default {
  data () {
    return {
      chart: null,
      selectIndex: 0,
      mychart: '',
      dataList: [
        { id: '1', text: '学习', score: '100' },
        { id: '2', text: '学习', score: '100' },
        { id: '3', text: '学习', score: '100' },
        { id: '4', text: '学习', score: '100' },
        { id: '5', text: '学习', score: '100' },
        { id: '6', text: '学习', score: '100' },
        { id: '7', text: '学习', score: '100' },
        { id: '8', text: '学习', score: '100' },
        { id: '9', text: '学习', score: '100' },
        { id: '10', text: '学习', score: '100' }
      ],
      myChart: ''
    }
  },
  components: {
    vDashBoardHeader
  },

  mounted () {
    this.chinaConfigure()
    const indicdata = echarts.init(this.$refs.indic_harts)
    const totaldata = echarts.init(this.$refs.total_matter_board)
    const citydata = echarts.init(this.$refs.right_matter_board)
    var radarOption = {
      title: {
        text: ''
      },
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
            borderRadius: 3,
            // padding: [3, 5]
          }
        },
        formatter: function (text) {
          var strlength = text.length
          if (strlength % 3 !== 0) {
            text = text.replace(/\S{3}/g, function (match) {
              console.log(match)
              return match + '\n'
            })
          } else {
            text = text.replace(/\S{3}/g, function (match) {
              console.log(match)
              return match + '\n'
            })
            strlength = text.length
            text = text.substring(0, strlength - 1)
          }
          return text
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
    var dataOption = {
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
        { type: 'bar' },
        { type: 'bar' }
      ]
    }
    indicdata.setOption(radarOption)
    totaldata.setOption(polyOption)
    citydata.setOption(dataOption)
    var that = this
    this.myChart.on('click', function (params) {
      var cityname = params.name
      that.$router.push(`/citydetail/${cityname}`)
    })
  },
  beforeDestroy () {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  created () {
    // getAllAndroidPlugins()
    //   .then(res => {
    //     console.log(res);
    //   })
    post("logList").then(res => {
      console.log("--------->", res)
    })
  },
  methods: {
    tomore () {
      this.$router.push("/overrank")
      getAllAndroidPlugins()
        .then(res => {
          console.log(res);
        })
    },
    setSelect (index) {
      console.log('--------index----->', index)
      if (this.selectIndex === index) {
        return
      }
      this.selectIndex = index
    },

    chinaConfigure () {
      this.myChart = echarts.init(this.$refs.myEchart)
      window.onresize = this.myChart.resize
      this.myChart.setOption({ // 进行相关配置
        // 基于准备好的dom，初始化echarts实例
        // let mychart = this.echarts.init(document.getElementById('myEchart'))
        // // 监听屏幕变化自动缩放图表
        // window.addEventListener('resize', function () {
        //   mychart.resize()
        // })
        // 绘制图表
        // mychart.setOption({
        // 图表主标题
        // title: {
        //   // 文本
        //   text: '',
        //   // 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
        //   top: 25,
        //   // 值: 'left', 'center', 'right' 同上
        //   left: 'center',
        //   // 文本样式
        //   textStyle: {
        //     // 字体大小
        //     fontSize: 25,
        //     // 字体粗细
        //     fontWeight: 650,
        //     // 字体颜色
        //     color: '#fff'
        //   }
        // },
        // 提示框组件
        tooltip: {
          // 触发类型, 数据项图形触发
          trigger: 'item',
          // 使用函数模板，传入的数据值 ——> value: number | Array
          formatter: function (val) {
            return val.data.name + + val.data.value
          }
        },
        // 视觉映射组件
        visualMap: {
          // continuous 类型为连续型
          type: 'continuous',
          show: true, // 是否显示 visualMap-continuous 组件 如果设置为 false，不会显示，但是数据映射的功能还存在
          // 指定 visualMapContinuous 组件的允许的最小/大值 min/max 必须用户指定
          min: 0,
          // min,max 形成了视觉映射的定义域
          max: 300,
          // 文本样式
          textStyle: {
            // 字体大小
            top: 0,
            fontSize: 15,
            // 字体颜色
            color: '#fff'
          },
          // 拖拽时，是否实时更新
          realtime: false,
          // 是否显示拖拽用的手柄
          calculable: true,
          // 定义在选中范围中的视觉元素
          inRange: {
            // 图元的颜色
            color: ['#FFB6C1', '#DB7093', '#C71585', '#FF00FF', '#BA55D3', '#9932CC']
          }
        },
        series: [
          {
            // 类型
            type: 'map',
            // 系列名称，用于tooltip的显示，legend 的图例筛选 在 setOption 更新数据和配置项时用于指定对应的系列
            map: '山西',
            // 地图类型
            mapType: 'province',
            // 是否开启鼠标缩放和平移漫游 默认不开启 
            // 如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move' 设置成 true 为都开启
            roam: false,
            // 定位 值: 'top', 'middle', 'bottom' 也可以是具体的值或者百分比
            top: 70,
            // 图形上的文本标签
            label: {
              show: false // 是否显示对应地名
            },
            // 地图区域的多边形 图形样式
            itemStyle: {
              // 地图区域的颜色 如果设置了visualMap, 这个属性将不起作用
              areaColor: '#7B68EE',
              // 描边线宽 为 0 时无描边
              borderWidth: 0.5,
              // 图形的描边颜色 支持的颜色格式同 color
              borderColor: '#000',
              // 描边类型，默认为实线，支持 'solid', 'dashed', 'dotted'
              borderType: 'solid'
            },
            // 高亮状态
            emphasis: {
              // 文本标签
              label: {
                // 是否显示标签
                show: true,
                // 文字的颜色 如果设置为 'auto'，则为视觉映射得到的颜色，如系列色
                color: '#fff'
              },
              // 图形样式
              itemStyle: {
                // 地图区域的颜色
                areaColor: '#FF6347'
              }
            },
            // 地图系列中的数据内容数组，数组项可以为单个数值
            data: [
              { name: '太原市', value: 31.4 },
              { name: '运城市', value: 38.4 },
              { name: '大同市', value: 47.9 },
              { name: '朔州市', value: 196.3 },
              { name: '忻州市', value: 102 },
              { name: '阳泉市', value: 30.8 },
              { name: '吕梁市', value: 269.4 },
              { name: '晋中市', value: 65.2 },
              { name: '临汾市', value: 129.8 },
              { name: '长治市', value: 90.5 },
              { name: '晋城市', value: 295.5 },
            ]
          }
        ]
      })
      // 定时显示提示框和高亮效果
      let index = -1
      // setInterval(function () {
      //   // 隐藏提示框
      //   mychart.dispatchAction({
      //     type: 'hideTip',
      //     seriesIndex: 0,
      //     dataIndex: index
      //   })
      //   // 显示提示框
      //   mychart.dispatchAction({
      //     type: 'showTip',
      //     seriesIndex: 0,
      //     dataIndex: index + 1
      //   })
      //   // 取消高亮指定的数据图形
      //   mychart.dispatchAction({
      //     type: 'downplay',
      //     seriesIndex: 0,
      //     dataIndex: index
      //   })
      //   // 高亮指定的数据图形
      //   mychart.dispatchAction({
      //     type: 'highlight',
      //     seriesIndex: 0,
      //     dataIndex: index + 1
      //   })
      //   index++
      //   if (index > cityArr.length - 1) {
      //     index = -1
      //   }
      // }, 2000)
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
          list-style: none;
          margin: 0;
          padding: 0;
        }
        ul li {
          display: flex;
          width: 95%;
          height: 32px;
          line-height: 20px;
          border-bottom: 1px solid #2bfffb;
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
          width: 94%;
          height: 95%;
          font-size: 12px;
          // padding: 2%;
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
              margin-top: 42px;
              font-size: 12px;
              div {
                margin: 0 8px;
                width: 30%;
                img {
                  margin-left: 30%;
                }
                span {
                  color: goldenrod;
                  font-size: 18px;
                }
              }
              p {
                text-align: center;
              }
            }
            .overview_sec {
              display: flex;
              color: #fff;
              margin-top: 42px;
              font-size: 12px;
              div {
                width: 30%;
                margin: 0 8px;
                img {
                  margin-left: 30%;
                }
                span {
                  color: goldenrod;
                  font-size: 18px;
                }
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
              background-color: rgba(28, 140, 189, 0.3);
              margin-top: 15px;
              margin-left: 5%;
              color: #fff;
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
        height: 252px;
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
