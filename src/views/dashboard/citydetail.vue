<template>
  <div>
    <v-dashBoardHeader>市级政府网上政务服务能力调查评估</v-dashBoardHeader>
    <p class="city_name">({{citySolt}})</p>
    <section class="edit_hert">
      <section class="city_detail">
        <div class="detail_top">
          <div class="city_rank">
            <div class="city_rank_title">
              <p class="title_circle"></p>
              <span class="annu_rank">{{citySolt}}年度排名</span>
            </div>
            <div class="city_chart">
              <div class="city_table">
                <div class="city_table_title">
                  <div class="title_fir">评估指南</div>
                  <div class="title_sec">
                    <p>2018年</p>
                    <p>（排名）</p>
                  </div>
                  <div class="title_sec">
                    <p>2017年</p>
                    <p>（排名）</p>
                  </div>
                  <div class="title_sec">
                    <p>2016年</p>
                    <p>（排名）</p>
                  </div>
                </div>
                <div class="rank_list">
                  <li v-for="item in rankData" :key="item.index">
                    <p>{{item.title}}</p>
                    <p>{{item.a2018}}</p>
                    <p>{{item.b2017}}</p>
                    <p>{{item.c2016}}</p>
                  </li>
                </div>
              </div>
              <div class="city_radar">
                <div class="indic_harts" ref="indic_harts" style="height:100%;width:100%"></div>
              </div>
            </div>
            <div clsaa="city_sector">
              <div class="sector_fir" ref="sector_fir" style="height:300px;width:30%"></div>
              <div class="sector_sec" ref="sector_sec" style="height:100%;width:30%"></div>
              <div class="sector_thr" ref="sector_thr" style="height:100%;width:30%"></div>
            </div>
          </div>
          <div class="city_sit">
            <div class="city_sit_title">
              <p class="title_circle"></p>
              <span class="annu_sit">{{citySolt}}整体情况</span>
            </div>
            <div class="over_rank">
              <div>
                <p>
                  总排名
                  <span>1</span>
                </p>
              </div>
              <div>
                <p>
                  总得分
                  <span>100</span>
                </p>
              </div>
            </div>
            <div class="ability_level">
              <p>
                能力水平：
                <span>非常高</span>
              </p>
            </div>
            <div class="time_online">
              <p>
                上线时间
                <span>2020年6月1日</span>
              </p>
            </div>
            <div class="set_degree">
              <p>
                集约化程度：
                <span>市、县、镇、乡、村五级</span>
              </p>
            </div>
            <div class="depart_ment">
              <div class="depart_ment_left">
                <img src="../../assets/dashboard/进驻部门数量@1x.png" alt />
                <div class="depart_mess">
                  <p>49个</p>
                  <p>进驻部门</p>
                </div>
              </div>
              <div class="depart_ment_right">
                <img src="../../assets/dashboard/省级政务服务平台@1x.png" alt />
                <div class="depart_mess">
                  <p>62个</p>
                  <p>指南要素</p>
                </div>
              </div>
            </div>
            <div class="matter">
              <div class="matter_left">
                <img src="../../assets/dashboard/证照信息@1x.png" alt />
                <div class="matter_mess">
                  <p>2087项</p>
                  <p>依申请事项</p>
                </div>
              </div>
              <div class="matter_right">
                <img src="../../assets/dashboard/行政权力事项@1x.png" alt />
                <div class="matter_mess">
                  <p>3402项</p>
                  <p>权利事项</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 准确度分析折线图 -->
        <div class="detail_bottom">
          <div class="detail_bottom_title">
            <p class="title_circle"></p>
            <span class="detail_bottom_sit">{{citySolt}}办事指南准确度分析</span>
          </div>
          <div class="total_rank_board" ref="total_matter_board" style="height:250px;width:100%"></div>
        </div>
      </section>
      <!-- 右侧排名 -->
      <section class="city_score">
        <div class="city_score_title">
          <p class="title_circle"></p>
          <span class="city_score_sit">{{citySolt}}指标指数得分</span>
        </div>
        <div class="score_title">
          <div class="score_title_index">评估指标</div>
          <div class="score_title_scor">得分</div>
          <div class="score_title_rank">排名</div>
        </div>
      </section>
    </section>
  </div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
import echarts from 'echarts'
export default ({
  components: {
    vDashBoardHeader
  },
  data () {
    return {
      cityName: '',
      citySolt: '',
      rankData: [
        { title: '总排名', a2018: '1', b2017: '2', c2016: '3' },
        { title: '服务事项覆盖福', a2018: '1', b2017: '2', c2016: '3' },
        { title: '服务事项覆盖福', a2018: '1', b2017: '2', c2016: '3' },
        { title: '办事指南准确度', a2018: '1', b2017: '2', c2016: '3' },
        { title: '在线办事成熟度', a2018: '1', b2017: '2', c2016: '3' },
        { title: '在线办事成熟度', a2018: '1', b2017: '2', c2016: '3' }
      ]
    }
  },
  created () {

  },
  mounted () {
    this.citySolt = this.$route.params.cityname
    const totaldata = echarts.init(this.$refs.total_matter_board)
    const indicdata = echarts.init(this.$refs.indic_harts)
    const sectorFir = echarts.init(this.$refs.sector_fir)
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
            borderRadius: 3
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
          //   { name: '服务方式完备度', max: 6500 },
          //   { name: '服务事项覆盖度', max: 16000 },
          //   { name: '办理指南准确度', max: 30000 },
          //   { name: '办理指南准确度', max: 38000 },
          //   { name: '在线办理成熟度', max: 52000 },
          //   { name: '在线服务成效度', max: 25000 }
          { name: '', max: 6500 },
          { name: '', max: 16000 },
          { name: '', max: 30000 },
          { name: '', max: 38000 },
          { name: '', max: 52000 },
          { name: '', max: 25000 }
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
    var dataSectorFir = {
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
        orient: 'vertical',
        top: 10,
        data: ['已办', '未办']
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
            { value: 335, name: '已办' },
            { value: 310, name: '未办' },

          ]
        }
      ]
    }
    totaldata.setOption(polyOption)
    indicdata.setOption(radarOption)
    sectorFir.setOption(dataSectorFir)
  }
})
</script>
<style lang='scss' scoped>
.city_name {
  width: 100%;
  height: 36px;
  text-align: center;
  line-height: 36px;
  color: #2bfffb;
  margin-top: -28px;
}
.edit_hert {
  height: 95%;
  width: 95%;
  padding: 2%;
  display: flex;
  .city_detail {
    width: 70%;
    height: 100%;
    .detail_top {
      width: 100%;
      height: 570px;
      display: flex;
      .city_rank {
        width: 72%;
        height: 100%;
        border: 1px solid rgb(0, 173, 255);
        border-radius: 25px 0 0 0;
        .city_rank_title {
          width: 100%;
          height: 44px;
          background-color: rgba(43, 255, 251, 0.2);
          border-radius: 25px 0 0 0;
          display: flex;
          line-height: 44px;
          .title_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-top: 18px;
          }
          .annu_rank {
            color: #2bfffb;
            margin-left: 3px;
          }
        }
        .city_chart {
          height: 305px;
          width: 100%;
          display: flex;
          .city_table {
            height: 100%;
            width: 49%;
            .city_table_title {
              width: 100%;
              height: 35px;
              margin-left: 2px;
              margin-top: 6px;
              background-color: rgba(30, 53, 94, 1);
              display: flex;
              flex-direction: row;
              flex-wrap: no-wrap;
              justify-content: space-around;
              div {
                width: 20%;
                height: 35px;
                text-align: center;
                // line-height: 35px;
                color: #fff;
                font-size: 12px;
              }
              .title_fir {
                line-height: 35px;
              }
              .title_sec {
                p:first-child {
                  font-size: 12px;
                  color: #fff;
                  margin-top: 4px;
                }
                p:last-child {
                  font-size: 12px;
                  color: #fff;
                  margin-top: -10px;
                }
              }
            }
          }
          .rank_list {
            width: 100%;
            li {
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: row;
              flex-wrap: no-wrap;
              justify-content: space-around;
              font-size: 12px;
              color: #fff;
              p {
                width: 20%;
                height: 14px;
                text-align: center;
                line-height: 14px;
              }
            }
          }
          .city_radar {
            height: 100%;
            width: 48%;
            margin-left: 1%;
            .indic_harts {
              height: 100%;
              width: 100%;
            }
          }
        }
        .city_sector {
          width: 100%;
          height: 280px;
          display: flex;
          flex-direction: row;
          flex-wrap: no-wrap;
          justify-content: space-around;
        }
      }
      .city_sit {
        width: 35%;
        height: 100%;
        margin-left: 1%;
        border: 1px solid rgb(0, 173, 255);
        .city_sit_title {
          width: 100%;
          height: 44px;
          background-color: rgba(43, 255, 251, 0.2);
          display: flex;
          line-height: 44px;
          .title_circle {
            width: 10px;
            height: 10px;
            margin-left: 8px;
            border-radius: 50%;
            background: gold;
            margin-top: 18px;
          }
          .annu_sit {
            color: #2bfffb;
            margin-left: 3px;
          }
        }
        .over_rank {
          width: 100%;
          height: 20px;
          display: flex;
          p {
            color: #2bfffb;
            span {
              color: #fff;
            }
          }
          p:last-child {
            margin-left: 30px;
          }
        }
        .ability_level {
          width: 100%;
          height: 20px;
          color: #2bfffb;
          margin-left: 30px;
          margin-top: 40px;
        }
        .time_online,
        .set_degree {
          width: 100%;
          height: 20px;
          color: #2bfffb;
          font-size: 12px;
          margin-left: 30px;
          margin-top: 25px;
        }
        .depart_ment {
          width: 100%;
          height: 80px;
          display: flex;
          margin-top: 40px;
          .depart_ment_left,
          .depart_ment_right {
            width: 50%;
            height: 100%;
            img {
              width: 35px;
              display: block;
              float: left;
              margin: 14px;
            }
            .depart_mess {
              font-size: 12px;
              color: #fff;
              float: left;
            }
          }
        }
        .matter {
          width: 100%;
          height: 80px;
          display: flex;
          margin-top: 40px;
          .matter_left,
          .matter_right {
            width: 50%;
            height: 100%;
            img {
              width: 35px;
              display: block;
              float: left;
              margin: 14px;
            }
            .matter_mess {
              font-size: 12px;
              color: #fff;
              float: left;
            }
          }
        }
      }
    }
    .detail_bottom {
      width: 100%;
      height: 300px;
      border: 1px solid rgb(0, 173, 255);
      border-radius: 0 0 0 25px;
      margin-top: 12px;
      .detail_bottom_title {
        width: 100%;
        height: 44px;
        background-color: rgba(43, 255, 251, 0.2);
        display: flex;
        line-height: 44px;
        .title_circle {
          width: 10px;
          height: 10px;
          margin-left: 8px;
          border-radius: 50%;
          background: gold;
          margin-top: 18px;
        }
        .detail_bottom_sit {
          color: #2bfffb;
          margin-left: 3px;
        }
      }
    }
  }
  .city_score {
    width: 25%;
    height: 880px;
    margin-left: 1%;
    border: 1px solid rgb(0, 173, 255);
    border-radius: 0 25px 25px 0;
    .city_score_title {
      width: 100%;
      height: 44px;
      background-color: rgba(43, 255, 251, 0.2);
      display: flex;
      line-height: 44px;
      border-radius: 0 25px 0 0;
      .title_circle {
        width: 10px;
        height: 10px;
        margin-left: 8px;
        border-radius: 50%;
        background: gold;
        margin-top: 18px;
      }
      .city_score_sit {
        color: #2bfffb;
        margin-left: 3px;
      }
    }
    .score_title {
      width: 100%;
      height: 42px;
      background-color: rgba(43, 255, 251, 0.2);
      margin-top: 6px;
      display: flex;
      color: #fff;
      .score_title_index {
        width: 40%;
        height: 42px;
        line-height: 42px;
        text-align: center;
      }
      .score_title_scor {
        width: 28%;
        height: 42px;
        line-height: 42px;
        text-align: center;
      }
      .score_title_rank {
        width: 28%;
        height: 42px;
        line-height: 42px;
        text-align: center;
      }
    }
  }
}
</style>
