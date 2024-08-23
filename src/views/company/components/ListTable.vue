<template>
  <el-table :key="1" :loading="tableLoading" :data="tableData" border fit highlight-current-row style="width: 100%" :default-sort="tableSort" @sort-change="onSortChange" @selection-change="onSelectorChange">
    <el-table-column type="selection" width="50" align="center" />
    <el-table-column :label="fields.id" prop="id" align="center" width="80" sortable="custom" />
    <el-table-column :label="fields.work" align="center" width="120" fixed="left">
      <template slot-scope="{ row: { id } }">
        <el-button type="primary" icon="el-icon-edit" size="mini" @click="$router.push({ path: `update/${id}` })" />
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="onRemoveAlone(id)" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.company" prop="company" align="center">
      <template slot-scope="{ row: { company_kw } }">
        <span v-html="company_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.credit" prop="credit" align="center">
      <template slot-scope="{ row: { credit_kw } }">
        <span v-html="credit_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.legal" prop="legal" align="center">
      <template slot-scope="{ row: { legal_kw } }">
        <span v-html="legal_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.type" prop="type" align="center">
      <template slot-scope="{ row: { type_kw } }">
        <span v-html="type_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.industry" prop="industry" align="center">
      <template slot-scope="{ row: { industry_kw } }">
        <span v-html="industry_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.email" prop="email" align="center">
      <template slot-scope="{ row: { email_kw } }">
        <span v-html="email_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.mobile" prop="mobile" align="center">
      <template slot-scope="{ row: { mobile_kw } }">
        <span v-html="mobile_kw" />
      </template>
    </el-table-column>
    <el-table-column :label="fields.contacts" prop="contacts" align="center">
      <template slot-scope="{ row: { contacts_kw } }">
        <span v-html="contacts_kw" />
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
// api
// components
// data
import { commonFields } from '@/components/CommonData'
import { fields } from '../modules/fields'
// filter
// function
// mixin
import TableMixin from '@/components/Mixins/TableMixin'
// plugins
// settings
export default {
  name: '',
  components: {},
  mixins: [TableMixin],
  props: {
    tableLoading: Boolean,
    tableSort: { type: Object, default: () => {} },
    tableData: { type: Array, default: () => [] }
  },
  data() {
    return {
      fields: { ...commonFields, ...fields }
    }
  },
  created() {},
  methods: {}
}
</script>
<style lang="scss" scoped></style>
