<template>
  <div class="uploadMulti">
    <div class="uploadList">
      <div v-for="(item, key) in fileList" :key="key" class="item" :style="heightAdd50">
        <div class="line">
          <div class="file" :style="common">
            <el-image v-if="fileClassify(item.url) === 'pic'" :src="getFullUrl(item.url)" fit="cover" :style="common" />
            <el-image v-else-if="fileClassify(item.url) === 'doc'" :src="doc" fit="cover" :style="common" />
            <el-image v-else-if="fileClassify(item.url) === 'xls'" :src="xls" fit="cover" :style="common" />
            <el-image v-else-if="fileClassify(item.url) === 'pdf'" :src="pdf" fit="cover" :style="common" />
          </div>
          <div class="mask" :style="common" />
          <div class="icon">
            <span v-if="fileClassify(item.url) === 'pic'" @click="onUploadPreview(getFullUrl(item.url))">
              <i class="el-icon-zoom-in" />
            </span>
            <span v-else @click="onUploadDownload(getFullUrl(item.url))">
              <i class="el-icon-download" />
            </span>
            <span @click="onUploadRemove(item.fileId)">
              <i class="el-icon-delete" />
            </span>
          </div>
        </div>
        <div class="name" :style="height50">{{ item.fileName }}</div>
      </div>
      <el-dialog v-if="dialogVisible" :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>
    <div class="load" :style="heightAdd50">
      <el-upload v-if="limit > fileList.length" class="uploaderItem" :multiple="false" :action="action" :headers="headers" :accept="accept" :data="data" :show-file-list="false" :on-success="onSuccess" :before-upload="onBeforeUpload" :on-error="onUploadError" :style="common">
        <i class="el-icon-plus uploaderIcon" :style="[common, lineHeight]" />
        <div v-if="progress" class="progress" :style="common">
          <el-progress type="circle" :percentage="percentage" :width="width - 20" />
        </div>
      </el-upload>
    </div>
  </div>
</template>
<script>
// api
// components
// data
// filter
// function
// mixin
// plugins
import { getToken } from '@/libs/token'
import { fileClassify } from 'abbott-methods/import'
// settings
import { serveUrl } from '@/settings'
export default {
  name: 'ComponentsUploadMulti',
  components: {},
  mixins: [],
  props: {
    fileList: { type: Array, default: () => [] },
    action: { type: String, default: '' },
    accept: { type: String, default: '' },
    data: { type: Object, default: () => {} },
    fileExceed: { type: Number, default: 2 },
    limit: { type: Number, default: 5 },
    width: { type: Number, default: 100 },
    height: { type: Number, default: 100 }
  },
  data() {
    return {
      fileClassify,
      dialogVisible: '',
      dialogImageUrl: '',
      percentage: 0,
      progress: false,
      doc: require(`@/assets/image/fileType/word.png`),
      xls: require(`@/assets/image/fileType/excel.png`),
      pdf: require(`@/assets/image/fileType/PDF.png`)
    }
  },
  computed: {
    common() {
      return { width: this.width + 'px', height: this.height + 'px' }
    },
    heightAdd50() {
      return { width: this.width + 'px', height: this.height + 50 + 'px' }
    },
    height50() {
      return { width: this.width + 'px', height: 50 + 'px' }
    },
    lineHeight() {
      return { lineHeight: this.height + 'px' }
    },
    headers() {
      return {
        Authorization: `${getToken()}`
      }
    }
  },
  created() {},
  methods: {
    // 获取网址
    getFullUrl(url) {
      const arr = url.split('/')
      return `${serveUrl}/file/images/${arr[arr.length - 1]}`
    },
    // 上传成功
    onSuccess({ code, data }, file) {
      console.log('🚀 ~ onSuccess ~ data:', data)
      if (code === 200) {
        this.isUpdate = false
        if (typeof data === 'string') {
          data = { url: data }
        }
        this.fileList.push(data)
        this.$message.success('上传成功')
      }
      this.percentage = 100
      setTimeout(() => {
        this.progress = false
        this.percentage = 0
      }, 500)
    },
    // 上传错误
    onUploadError() {
      this.percentage = 0
      this.progress = false
      this.$message.error('上传失败，请稍候再试…')
    },
    // 上传之前
    onBeforeUpload(file) {
      this.progress = true
      this.percentage = 30
      if (this.fileList.length >= this.limit) {
        this.$message.warning(`上传失败，只能上传 ${this.limit}个文件!`)
        this.percentage = 0
        this.progress = false
        return false
      } else {
        const isSmall = file.size / 1024 / 1024 < this.fileExceed
        if (!isSmall) {
          this.$message.error(`上传失败，文件大小不能超过 ${this.fileExceed}MB!`)
          this.percentage = 0
          this.progress = false
        }
        return isSmall
      }
    },
    // 浏览
    onUploadPreview(url) {
      this.dialogImageUrl = url
      this.dialogVisible = true
    },
    // 下载
    onUploadDownload(url) {
      window.open(url)
    },
    // 删除
    onUploadRemove(fileId) {
      this.$emit('onUploadRemove', fileId)
    }
  }
}
</script>
<style lang="scss" scoped>
@import url(./styles/Multi.scss);
</style>
