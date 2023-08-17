<template>
  <div>
    <el-upload
      :limit="1"
      :auto-upload="false"
      accept=".xlsx"
      :action="''"
      :on-change="fileChange"
      :show-file-list="false"
    >
      <el-button class="el-upload__text">点击上传</el-button>
    </el-upload>
    <div>{{ uploadObj ? uploadObj.name : '' }}</div>
    <el-button @click="preview" v-if="uploadObj">{{
      uploadObj ? '预览的上传文件' : ''
    }}</el-button>
    <br />
  </div>
  <el-dialog v-model="dialogTableVisible" title="预览内容">
    <el-table
      :data="tableData"
      border
      highlight-current-row
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column
        v-for="item of tableHeader"
        :key="item"
        :prop="item"
        :label="item"
      />
    </el-table>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import * as XLSX from 'xlsx'
import { ref } from 'vue'

// let excelHtml = ref(null)
let tableHeader = ref([])
let tableData = ref([])

let uploadObj = ref(null)
let dialogTableVisible = ref(false)

const preview = () => {
  dialogTableVisible.value = true
}

const fileChange = (rawFile) => {
  uploadObj.value = rawFile
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    // reader.readAsArrayBuffer(rawFile.raw)
    //参数可以是 Blob 或者 File 对象异步结果将在onload 事件中体现
    reader.onload = (e) => {
      const data = e.target.result
      console.log(data)
      const workbook = XLSX.read(data, { type: 'binary' })
      console.log('workbook', workbook)
      const firstSheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[firstSheetName] //取出工作表名称对应的表格数据

      tableHeader.value = getHeaderRow(worksheet) //表头名
      tableData.value = XLSX.utils.sheet_to_json(worksheet) //输出数据，除去表头

      // excelHtml.value = XLSX.utils.sheet_to_html(worksheet)
      resolve()
    }
    reader.readAsBinaryString(rawFile.raw)
  })
}
const getHeaderRow = (sheet) => {
  const headers = []
  const range = XLSX.utils.decode_range(sheet['!ref']) //!ref: "A1:E21"
  // console.log(range);
  // s: {c: 0, r: 0} 开始为A1
  // e: {c: 4, r: 20} 结束为 E21
  const r = range.s.r
  /* start in the first row */
  for (let c = range.s.c; c <= range.e.c; ++c) {
    /* walk every column in the range */
    const cell = sheet[XLSX.utils.encode_cell({ c, r })]
    // console.log(cell); A1的对象的值
    /* find the cell in the first row */
    let hdr = 'UNKNOWN ' + c // <-- replace with your desired default
    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
    headers.push(hdr)
  }
  return headers
}
</script>

<style>
</style>
