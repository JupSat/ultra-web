<template>
  <div class="chart-example">
    <div class="example-content">
      <div class="front-card-body">
        <div>
          <div>
            xxxx 标题
            <span class="warning-icon"></span>
            单位：xxx
          </div>
          <div class="chart-title">
            <span>xxxx 金额</span>
            <span>排名</span>
          </div>
        </div>
        <div id="exampleCharId1" class="body-chart"></div>
      </div>
      <div class="front-card-body">
        <div>
          <div>
            xxxx 标题
            <span class="warning-icon"></span>
            单位：xxx
          </div>
          <div class="chart-title">xxxx 金额</div>
        </div>
        <div id="exampleCharId2" class="body-chart"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Example2',
}
</script>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import { debounce } from 'lodash'

const setEChartPie = () => {
  const chart1 = document.getElementById('exampleCharId1')
  const myChart = echarts.init(chart1)
  let option = null

  option = {
    title: {
      // text: 'xxxxx',
      //   left: 300,
      align: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 1048, name: 'Search Engine' },
          { value: 735, name: 'Direct' },
          { value: 580, name: 'Email' },
          { value: 484, name: 'Union Ads' },
          { value: 300, name: 'Video Ads' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  option && myChart.setOption(option)
}

const setEChartsLine = () => {
  const chart1 = document.getElementById('exampleCharId2')
  const myChart = echarts.init(chart1)
  let option = null

  option = {
    title: {
      // text: 'xxxxx',
      //   left: 300,
      align: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads'],
      bottom: 18,
      itemGap: 120,
    },
    grid: {
      left: '3%',
      right: '4%',
      // bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: getLastYearDates(),
    },
    yAxis: {
      name: '单位',
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'line',
        data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'line',
        data: [220, 182, 191, 234, 290, 330, 310, 102, 134, 120, 130, 170],
      },
    ],
  }
  option && myChart.setOption(option)
}

const initECharts = () => {
  setEChartPie()
  setEChartsLine()
}

const resize = () => {
  initECharts()
}

onMounted(() => {
  initECharts()
  window.addEventListener(
    'resize',
    window.addEventListener(
      'resize',
      debounce(() => {
        resize()
      }, 300)
    )
  )
})

onUnmounted(() => {
  window.removeEventListener(
    'resize',
    window.addEventListener(
      'resize',
      debounce(() => {
        resize()
      }, 300)
    )
  )
})

const getLastYearDates = () => {
  const dates = [] // 存储最近一年的年份和月份
  const now = new Date()
  const thisYear = now.getFullYear() // 获取当前年份
  const lastYear = thisYear - 1 // 获取去年年份
  let year = thisYear
  let month = now.getMonth() + 1 // 获取当前月份
  for (let i = 0; i < 12; i++) {
    if (month === 0) {
      // 如果当前月份为0，则表示上一年的12月份
      month = 12
      year = lastYear
    }

    const tempMonth = month < 10 ? '0' + month : month
    // 将年份和月份存储到数组中
    dates.push(`${year}-${tempMonth}`)
    // 月份递减
    month--
  }
  console.log('list', dates)
  return dates.reverse()
}
</script>

<style lang="scss" scoped>
.chart-example {
  width: 100vw;
  .example-content {
    display: flex;
  }

  .example-content2 {
    width: 100%;
    height: 200px;
  }
}

.front-card-body {
  width: 812px;
  height: 520px;
}

.body-chart {
  width: 812px;
  height: 100%;
}

.chart-title {
  display: flex;
  justify-content: space-evenly;
}

.warning-icon::before {
  content: '!';
  display: inline-block;
  width: 20px;
  height: 20px;
  color: #60621f;
  // font-weight: bold;
  font-size: 20px;
  text-align: center;
  line-height: 20px;
  border: 2px solid #606266;
  border-radius: 50%;
}
</style>
