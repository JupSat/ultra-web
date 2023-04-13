<!--
 * @Description: 
 * @version: 
 * @Author: JupSat
 * @email: jupsat@163.com
 * @Date: 2023-04-10 15:36:29
 * @LastEditors: JupSat
 * @LastEditTime: 2023-04-13 15:34:16
-->
<template>
  <div class="chart-example">
    <div class="example-content">
      <div class="front-card-body">
        <div id="chartId" class="body-chart"></div>
      </div>
      <div class="front-card-body">
        <div id="chartId2" class="body-chart"></div>
      </div>
    </div>
    <div class="example-content2">
      <div id="chartId3" class="body-chart"></div>
    </div>
    <div class="example-table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="Date" width="150" :align="'center'">
          <el-table-column
            prop="state"
            label="State"
            width="120"
            :align="'center'"
          />
          <el-table-column
            prop="city"
            label="City"
            width="120"
            :align="'center'"
          />
          <el-table-column prop="address" label="Address" :align="'center'" />
          <el-table-column
            prop="zip"
            label="Zip"
            width="120"
            :align="'center'"
          />
        </el-table-column>
        <el-table-column label="Delivery Info" :align="'center'">
          <el-table-column
            prop="state"
            label="State"
            width="120"
            :align="'center'"
          />
          <el-table-column
            prop="city"
            label="City"
            width="120"
            :align="'center'"
          />
          <el-table-column prop="address" label="Address" :align="'center'" />
          <el-table-column
            prop="zip"
            label="Zip"
            width="120"
            :align="'center'"
          />
        </el-table-column>
      </el-table>
    </div>
    <div>
      <div>el-checkbox内部添加内容，但点击不触发选中</div>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="Option A" />
        <el-checkbox label="Option B">
          <div style="display: flex; align-items: center">
            <div>测试</div>
            <div @click.stop="($event) => $event.preventDefault()">
              <el-input v-model="inputVal" clearable></el-input>
            </div>
          </div>
        </el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
  <div class="icon-example">
    <div>自定义图标</div>
    <div class="warning-icon"></div>
  </div>
</template>

<script>
export default {
  name: 'Example',
}
</script>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import * as echarts from 'echarts'

const setEChartsLine = () => {
  const chart1 = document.getElementById('chartId')
  const myChart = echarts.init(chart1)
  let option = null

  option = {
    title: {
      text: 'Stacked Line',
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
      bottom: '10%',
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

const setEChartsBar = () => {
  const chart1 = document.getElementById('chartId2')
  const myChart = echarts.init(chart1)
  let option = null

  option = {
    title: {
      text: 'Stacked Line',
      //   left: 300,
      align: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads'],
      bottom: 18,
      orient: 'vertical',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      //   boundaryGap: false,
      data: getLastYearDates(),
    },
    yAxis: {
      name: '单位',
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310, 102, 134, 120, 130, 170],
      },
    ],
  }
  option && myChart.setOption(option)
}

const setEChartsBar2 = () => {
  const chart1 = document.getElementById('chartId3')
  const myChart = echarts.init(chart1)
  let option = null

  option = {
    title: {
      text: 'Stacked Line',
      //   left: 300,
      align: 'center',
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: ['Email', 'Union Ads'],
      bottom: 10,
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '15%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: getLastYearDates(),
    },
    yAxis: {
      name: '单位',
      type: 'value',
    },
    series: [
      {
        name: 'Email',
        type: 'bar',
        data: [120, 132, 101, 134, 90, 230, 210, 101, 134, 90, 230, 210],
      },
      {
        name: 'Union Ads',
        type: 'bar',
        data: [220, 182, 191, 234, 290, 330, 310, 102, 134, 120, 130, 170],
      },
    ],
  }
  option && myChart.setOption(option)
}

const initECharts = () => {
  setEChartsLine()
  setEChartsBar()
  setEChartsBar2()
}

const resize = () => {
  initECharts()
}

onMounted(() => {
  initECharts()
  window.addEventListener('resize', () => {
    resize()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', () => {
    resize()
  })
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
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-08',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-06',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
  {
    date: '2016-05-07',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036',
  },
]

const inputVal = ref('')

const checkList = ref([])
</script>

<style lang="scss" scoped>
.chart-example {
  width: 100vw;
  //   text-align: center;
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
  width: 100%;
  height: 100%;
}

.example-table {
  width: 100%;
}

.icon-example {
  margin-top: 20px;
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
