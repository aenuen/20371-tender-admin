<script>
import { validateErrMsg } from 'abbott-methods/import'

export default {
  data() {
    return {
      postForm: {},
      rulesForm: {},
      labelWidth: '120px',
      submitLoading: false,
      updateId: 0
    }
  },
  created() {
    const updateId = +this.$route.params.id
    if (this.isUpdate && updateId > 0) {
      this.updateId = updateId
      this.getDetail()
    }
    this.startHandle()
  },
  methods: {
    // 获取详情数据
    getDetail() {},
    // 其它额外处理
    startHandle() {},
    // 打开Loading、禁用
    submitLoadingOpen() {
      this.submitLoading = true
    },
    // 关闭Loading、禁用
    submitLoadingClose() {
      this.submitLoading = false
    },
    // 验证不通过提示
    validateErrHandle(fields) {
      const msg = validateErrMsg(fields)
      this.$message.error(msg)
      this.submitLoadingClose()
    },
    // 新增|编辑成功的统一处理
    submitSuccessHandle(msg, path) {
      this.$message.success(msg)
      this.submitLoadingClose()
      this.$refs.postForm.resetFields()
      this.routerClose(path)
    },
    // 新增|编辑失败的统一处理
    submitFailHandle(msg) {
      this.submitLoadingClose()
      this.$message.error(msg)
    },
    // 新增|编辑错误的统一处理
    submitErrorHandle(msg) {
      this.submitLoadingClose()
      this.$message.error(msg)
    }
  }
}
</script>
