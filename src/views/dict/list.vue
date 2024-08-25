<template>
  <div class="app-container">
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border :default-expand-all="false" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <!-- <el-table-column prop="id" label="编号" sortable width="150" /> -->
      <el-table-column prop="value" label="名称" />
      <el-table-column prop="label" label="值" />
      <el-table-column prop="code" label="代号" />
      <el-table-column prop="sort" label="排序" />
      <el-table-column label="复制" align="center" width="100">
        <template slot-scope="{ row: { code } }">
          <el-button type="success" icon="el-icon-document-copy" size="mini" @click="handleClipboard(code, $event)"> 复制 </el-button>
        </template>
      </el-table-column>
      <el-table-column label="编辑" align="center" width="100">
        <template slot-scope="{ row: { id } }">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="onUpdateAlone(id)"> 编辑 </el-button>
        </template>
      </el-table-column>
      <el-table-column label="删除" align="center" width="100">
        <template slot-scope="{ row: { id } }">
          <el-button type="danger" icon="el-icon-delete" size="mini" @click="onRemoveAlone(id)"> 删除 </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// api
import { dictApi } from '@/api/dict'
// components
// data
// filter
// function
// mixin
import ListMixin from '@/components/Mixins/ListMixin.vue'
// plugins
import clipboard from '@/libs/clipboard'
// settings
export default {
  name: 'DictList',
  components: {},
  mixins: [ListMixin],
  data() {
    return {}
  },
  created() {},
  methods: {
    handleClipboard(text, event) {
      clipboard(text, event)
    },
    startHandle() {
      dictApi.list({ parentId: 0 }).then(({ code, data, msg }) => {
        if (code === 200) {
          this.tableData = data
        } else {
          this.$message.error(msg)
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped></style>
