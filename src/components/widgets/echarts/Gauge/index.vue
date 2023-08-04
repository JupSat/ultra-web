<template>
  <div class="chart-example">
    <div class="card-body">
      <div id="gaugeId" class="body-chart"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GaugeChart',
}
</script>

<script setup>
import { onMounted, onUnmounted } from 'vue'
import * as echarts from 'echarts'
import { debounce } from 'lodash'

const setEChartsLine = () => {
  const chart1 = document.getElementById('gaugeId')
  const myChart = echarts.init(chart1)
  let option = null

  option = {
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        center: ['50%', '75%'],
        radius: '90%',
        min: 0,
        max: 1,
        splitNumber: 8,
        axisLine: {
          lineStyle: {
            width: 25,
            color: [
              [0.25, '#FF6E76'],
              [0.5, '#FDDD60'],
              [0.75, '#58D9F9'],
              [1, '#7CFFB2'],
            ],
          },
        },
        pointer: {
          icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
          length: '20%',
          width: 20,
          offsetCenter: [0, '-60%'],
          itemStyle: {
            color: 'inherit',
          },
        },
        axisTick: {
          length: 12,
          lineStyle: {
            color: 'inherit',
            width: 2,
          },
        },
        splitLine: {
          length: 27,
          lineStyle: {
            color: 'white',
            width: 24,
          },
          distance: -26,
        },
        axisLabel: {
          show: false,
        },
        title: {
          offsetCenter: [0, '-10%'],
          fontSize: 20,
        },
        detail: {
          fontSize: 30,
          offsetCenter: [0, '-35%'],
          valueAnimation: true,
          formatter: function (value) {
            return Math.round(value * 100) + ''
          },
          color: 'inherit',
        },
        data: [
          {
            value: 0.7,
            name: 'Grade Rating',
          },
        ],
      },
    ],
  }
  option && myChart.setOption(option)
}

const initECharts = () => {
  setEChartsLine()
}

const resize = () => {
  initECharts()
}

onMounted(() => {
  initECharts()
  window.addEventListener(
    'resize',
    debounce(() => {
      resize()
    }, 300)
  )
})

onUnmounted(() => {
  window.removeEventListener(
    'resize',
    debounce(() => {
      resize()
    }, 300)
  )
})
</script>

<style lang="scss" scoped>
.chart-example {
  width: 100vw;
  .card-body {
    height: 520px;
    .body-chart {
      width: 420px;
      height: 420px;
    }
  }
}
</style>
