<template>
  <div class="app-container">
    <div class="filter-container">
      <!-- 企业名称 -->
      <el-input v-model="queryList.company" :placeholder="fields.company" class="filter-ele" clearable @keyup.enter.native="handleFilter" @clear="handleFilter" @blur="handleFilter" />
      <!-- 统一信用代码 -->
      <el-input v-model="queryList.credit" :placeholder="fields.credit" class="filter-ele" clearable @keyup.enter.native="handleFilter" @clear="handleFilter" @blur="handleFilter" />
      <!-- 法人代表 -->
      <el-input v-model="queryList.legal" :placeholder="fields.legal" class="filter-ele" clearable @keyup.enter.native="handleFilter" @clear="handleFilter" @blur="handleFilter" />
      <!-- 企业类型 -->
      <el-select v-model="queryList.type" :placeholder="fields.type" class="filter-ele" clearable @clear="handleFilter" @change="handleFilter">
        <el-option v-for="(item, key) in companyTypeAry" :key="key" :value="String(item.value)" :label="item.label" />
      </el-select>
      <!-- 所属行业 -->
      <el-select v-model="queryList.industry" :placeholder="fields.industry" class="filter-ele" clearable @clear="handleFilter" @change="handleFilter">
        <el-option v-for="(item, key) in companyIndustryAry" :key="key" :value="String(item.value)" :label="item.label" />
      </el-select>
      <!-- 联系邮箱 -->
      <el-input v-model="queryList.email" :placeholder="fields.email" class="filter-ele" clearable @keyup.enter.native="handleFilter" @clear="handleFilter" @blur="handleFilter" />
      <!-- 联系电话 -->
      <el-input v-model="queryList.mobile" :placeholder="fields.mobile" class="filter-ele" clearable @keyup.enter.native="handleFilter" @clear="handleFilter" @blur="handleFilter" />
      <!-- 联系人 -->
      <el-input v-model="queryList.contacts" :placeholder="fields.contacts" class="filter-ele" clearable @keyup.enter.native="handleFilter" @clear="handleFilter" @blur="handleFilter" />
      <!-- 搜索按钮 -->
      <el-button class="filter-btn el-icon-search" @click="handleFilter"> 搜索 </el-button>
      <!-- 新增按纽 -->
      <el-button type="success" class="filter-btn el-icon-plus" @click="$router.push('create')"> 新增 </el-button>
      <!-- 批量删除按钮 -->
      <el-button type="danger" class="filter-btn el-icon-delete" style="width: auto" @click="removeBatchConfirm"> 批量删除 </el-button>
    </div>
    <!-- 表格 -->
    <div style="width: 100%">
      <ListTable :table-data="tableData" :table-loading="tableLoading" :table-sort="tableSort" @onSortChange="onSortChange" @onSelectorChange="onSelectorChange" @onRemoveAlone="onRemoveAlone" />
    </div>
    <!-- 分页 -->
    <div style="text-align: center">
      <Pagination :hidden="tableDataLength <= 0" :total="tableDataLength" :page.sync="queryList.page" :limit.sync="queryList.pageSize" @pagination="refresh" />
    </div>
  </div>
</template>
<script>
// api
import { companyApi } from '../../api/company'
// components
import Pagination from '@/components/Pagination'
import ListTable from './components/ListTable'
// data
import { fields, companyTypeAry, companyIndustryAry } from './modules/fields'
// filter
// function
// mixin
import ListMixin from '@/components/Mixins/ListMixin'
// plugins
import { keyLight } from 'abbott-methods/import'
// settings
export default {
  name: 'CompanyList',
  components: { Pagination, ListTable },
  mixins: [ListMixin],
  data() {
    return { fields, companyTypeAry, companyIndustryAry }
  },
  created() {},
  methods: {
    // 初始设置
    setData() {
      return { sort: '-id' }
    },
    // 获取列表
    startHandle() {
      companyApi.list(this.queryList).then((res) => {
        const { code, data } = res
        const { list, count } = data
        if (code === 200) {
          this.tableData = list
          this.tableDataLength = count
          this.tableData.forEach((item) => {
            item.company_kw = keyLight(this.queryList, 'company', item.company)
            item.credit_kw = keyLight(this.queryList, 'credit', item.credit)
            item.legal_kw = keyLight(this.queryList, 'legal', item.legal)
            item.type_kw = keyLight(this.queryList, 'type', item.type)
            item.industry_kw = keyLight(this.queryList, 'industry', item.industry)
            item.email_kw = keyLight(this.queryList, 'email', item.email)
            item.mobile_kw = keyLight(this.queryList, 'mobile', item.mobile)
            item.contacts_kw = keyLight(this.queryList, 'contacts', item.contacts)
          })
        }
      })
    },
    // 单个删除
    removeAlone() {
      companyApi.remove({ id: this.removeId }).then(({ code, msg }) => {
        if (code === 200) {
          this.$message.success(msg)
          this.removeId = 0
          this.refreshStrong()
        } else {
          this.$message.error(msg)
        }
      })
    },
    // 批量删除
    removeBatch() {
      companyApi.removeBatch({ ids: this.selectorAry }).then(({ msg, code }) => {
        if (code === 200) {
          this.$message.success(msg)
          this.selectorAry = []
          this.refreshStrong()
        } else {
          this.$message.error(msg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
