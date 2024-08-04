<template>
  <div>
    <div style="height:100px;line-height:100px;text-align: center">
      案件审批流程
    </div>
    <el-steps :active="stepIndex">
      <el-step title="基本资料" icon="el-icon-edit" />
      <el-step title="上传附件" icon="el-icon-upload" />
      <el-step title="提交审批" icon="el-icon-check" />
      <el-step title="审批通过" icon="el-icon-d-arrow-right" />
      <el-step title="提交原件" icon="el-icon-postcard" />
      <el-step title="等待发票" icon="el-icon-hot-water" />
      <el-step title="等待入账" icon="el-icon-hot-water" />
      <el-step title="完成" icon="el-icon-finished" />
    </el-steps>
  </div>
</template>
<script>
export default {
  name: 'ViewsHomeComponentsStep',
  components: { // 引用组件
  },
  filters: { // 过滤器
  },
  directives: { // 自定义指令
  },
  props: { // 定义传值
  },
  data() { // 定义数据
    return {
      stepIndex: 8
    }
  },
  computed: { // 监控自定义的变量
  },
  watch: { // 监控值变换
  },
  mounted() { // 渲染后运行
  },
  created() { // 渲染时运行
  },
  methods: { // 方法函数
  }
}
</script>

<style scoped lang="scss">
</style>
