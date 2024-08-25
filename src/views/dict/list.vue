<template>
  <div class="app-container">
    <div class="filter-container">
      <el-button type="primary" @click="createRoot">根目录添加</el-button>
    </div>
    <el-table :data="tableData" style="width: 100%; margin-bottom: 20px" row-key="id" border :default-expand-all="false" :tree-props="{ children: 'children', hasChildren: 'hasChildren' }">
      <el-table-column prop="name" :label="fields.name" />
      <el-table-column :label="fields.code">
        <template slot-scope="{ row: { code } }">
          {{ code || '--' }}
        </template>
      </el-table-column>
      <el-table-column :label="fields.value">
        <template slot-scope="{ row: { value } }">
          {{ value || '--' }}
        </template>
      </el-table-column>
      <el-table-column prop="sort" :label="fields.sort" />
      <el-table-column label="复制" align="center" width="100">
        <template slot-scope="{ row: { code } }">
          <el-button type="success" icon="el-icon-document-copy" size="mini" @click="handleClipboard(code, $event)"> 复制 </el-button>
        </template>
      </el-table-column>
      <el-table-column label="添加" align="center" width="100">
        <template slot-scope="{ row: { id } }">
          <el-button type="primary" icon="el-icon-edit" size="mini" @click="createAlone(id)"> 编辑 </el-button>
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
    <BackToTop />
    <el-dialog v-if="detailVisible" width="950px" :close-on-click-modal="false" title="字典" :visible.sync="detailVisible" :before-close="detailClosed">
      <Detail :is-update="isUpdate" :update-id="updateId" :parent-id="parentId" @onCreateSuccess="onCreateSuccess" @onUpdateSuccess="onUpdateSuccess" />
    </el-dialog>
  </div>
</template>
<script>
// api
import { dictApi } from '@/api/dict'
// components
import BackToTop from '@/components/BackToTop'
import Detail from './components/Detail'
// data
import { fields } from './modules/fields.js'
// filter
// function
// mixin
import ListMixin from '@/components/Mixins/ListMixin.vue'
// plugins
import clipboard from '@/libs/clipboard'
// settings
export default {
  name: 'DictList',
  components: { BackToTop, Detail },
  mixins: [ListMixin],
  data() {
    return {
      fields,
      detailVisible: false,
      parentId: 0,
      isUpdate: false
    }
  },
  created() {},
  methods: {
    onCreateSuccess() {
      this.parentId = 0
      this.detailVisible = false
      this.startHandle()
    },
    onUpdateSuccess() {},
    // 弹窗关闭，重置数据
    detailClosed() {
      this.parentId = 0
      this.isUpdate = false
      this.detailVisible = false
    },
    // 根目录添加
    createRoot() {
      this.isUpdate = false
      this.detailVisible = true
      this.parentId = 0
    },
    // 个人添加
    createAlone(id) {
      console.log('🚀 ~ createAlone ~ id', id)
      this.parentId = id
      this.detailVisible = true
    },
    // 个人编辑
    updateAlone() {
      this.isUpdate = true
      this.detailVisible = true
    },
    // 个人删除
    removeAlone() {
      dictApi.remove({ id: this.removeId }).then(({ code, data, msg }) => {
        if (code === 200) {
          this.$message.success(msg)
          this.startHandle()
        } else {
          this.$message.error(msg)
        }
      })
    },
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
<style lang="scss" scoped>
.el-table .highlight-row {
  background: #f5f5f5;
}
</style>
