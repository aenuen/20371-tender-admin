<template>
  <div class="app-container">
    <el-form ref="postForm" :model="postForm" :rules="rulesForm">
      <el-row>
        <el-col :span="12">
          <el-form-item prop="company" :label="fields.company" :label-width="labelWidth">
            <el-input v-model="postForm.company" :placeholder="fields.company" maxlength="30" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item prop="credit" :label="fields.credit" :label-width="labelWidth">
            <el-input v-model="postForm.credit" :placeholder="fields.credit" maxlength="18" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="legal" :label="fields.legal" :label-width="labelWidth">
            <el-input v-model="postForm.legal" :placeholder="fields.legal" maxlength="20" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="type" :label="fields.type" :label-width="labelWidth">
            <el-select v-model="postForm.type" class="filter-ele" :placeholder="fields.type" clearable style="width: 100%">
              <el-option v-for="(item, key) in companyTypeAry" :key="key" :value="item" :label="item" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="industry" :label="fields.industry" :label-width="labelWidth">
            <el-select v-model="postForm.industry" class="filter-ele" :placeholder="fields.industry" clearable style="width: 100%">
              <el-option v-for="(item, key) in companyIndustryAry" :key="key" :value="item" :label="item" />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="workerNumber" :label="fields.workerNumber" :label-width="labelWidth">
            <el-input v-model="postForm.workerNumber" :placeholder="fields.workerNumber" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="researcherNumber" :label="fields.researcherNumber" :label-width="labelWidth">
            <el-input v-model="postForm.researcherNumber" :placeholder="fields.researcherNumber" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="yearSaleVolume" :label="fields.yearSaleVolume" :label-width="labelWidth">
            <el-input v-model="postForm.yearSaleVolume" :placeholder="fields.yearSaleVolume" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item prop="email" :label="fields.email" :label-width="labelWidth">
            <el-input v-model="postForm.email" :placeholder="fields.email" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="mobile" :label="fields.mobile" :label-width="labelWidth">
            <el-input v-model="postForm.mobile" :placeholder="fields.mobile" clearable />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="contacts" :label="fields.contacts" :label-width="labelWidth">
            <el-input v-model="postForm.contacts" :placeholder="fields.contacts" maxlength="10" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="address" :label="fields.address" :label-width="labelWidth">
            <el-input v-model="postForm.address" :placeholder="fields.address" maxlength="50" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item :label-width="labelWidth">
        <el-button type="primary" :loading="submitLoading" :disabled="submitLoading" @click="submitFrom">{{ submitText }}</el-button>
        <el-button @click="geTextData">测试数据</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// api
import { companyApi } from '@/api/company'
// components
// data
import { fields, companyTypeAry, companyIndustryAry } from '../modules/fields'
import { ruleDetail } from '../modules/rules'
// filter
// function
// mixin
import DetailMixin from '@/components/Mixins/DetailMixin'
import MethodsMixin from '@/components/Mixins/MethodsMixin'
// plugins

// settings
export default {
  name: 'CompanyBaseData',
  components: {},
  mixins: [DetailMixin, MethodsMixin],
  props: {
    isUpdate: { type: Boolean, default: false }
  },
  data() {
    return {
      fields,
      companyTypeAry,
      companyIndustryAry,
      submitText: '',
      textData: {
        company: '福建居乐律师事务所',
        credit: '350583198306167132',
        legal: '石志辉',
        type: '国有企业',
        industry: '采矿业',
        workerNumber: '10',
        researcherNumber: '5',
        yearSaleVolume: '5000000.00',
        email: 'aenuen@qq.com',
        mobile: '13055297726',
        contacts: '石志辉',
        address: '福建省福州鼓楼区井大路68号建银大厦15层'
      },
      rulesForm: ruleDetail
    }
  },
  created() {
    this.submitText = this.isUpdate ? '编辑公司' : '新增公司'
  },
  methods: {
    geTextData() {
      this.postForm = { ...this.postForm, ...this.textData }
    },
    submitFrom() {
      this.$refs.postForm.validate((valid, fields) => {
        this.submitLoadingOpen()
        if (valid) {
          companyApi.create(this.postForm).then(({ code, msg }) => {
            if (code === 200) {
              this.submitLoadingClose()
              this.$message.success(msg) // 新增成功
              this.routerGo('/company/list')
            } else {
              this.submitLoadingClose()
              this.$message.error(msg) // 新增失败
            }
          })
        } else {
          this.validateErrHandle(fields)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
