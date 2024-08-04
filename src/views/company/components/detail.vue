<template>
  <div class="app-container">
    <el-form ref="postForm" :model="postForm" :rules="rulesForm">
      <el-row>
        <el-col :span="12">
          <el-form-item prop="license" :label="fields.license" :label-width="labelWidth">
            <AloneUpload :accept="license.accept" :action="license.action" :data="licenseData" show-remove show-update @onSu="suLicense" @onRe="reLicense" />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="rule" :label="fields.rule" :label-width="labelWidth">
            <AloneUpload :accept="rule.accept" :action="rule.action" :data="ruleData" show-remove show-update @onSu="suRule" @onRe="reRule" />
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>
<script>
// api
// components
import AloneUpload from '@/components/Upload/Alone'
// data
import { fields } from '../modules/fields'
// filter
// function
// mixin
import DetailMixin from '@/components/Mixins/DetailMixin.vue'
// plugins
import { mapGetters } from 'vuex'
// settings
import { rule, license } from '../modules/upload'
export default {
  components: { AloneUpload },
  mixins: [DetailMixin],
  data() {
    return {
      rule,
      license,
      fields,
      licenseData: { cid: 0, uid: 0 },
      ruleData: { cid: 0, uid: 0 }
    }
  },
  computed: {
    ...mapGetters(['aid'])
  },
  created() {
    this.licenseData.uid = this.aid
    this.ruleData.uid = this.aid
  },
  methods: {
    suLicense(id) {
      this.licenseData.cid = id
      this.$message.success('营业执照上传成功')
    },
    reLicense() {},
    suRule(id) {
      this.ruleData.cid = id
      this.$message.success('公司章程上传成功')
    },
    reRule() {}
  }
}
</script>
<style lang="scss" scoped></style>
