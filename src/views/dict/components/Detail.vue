<template>
  <div class="app-container">
    <el-form ref="postForm" :model="postForm" :rules="rulesForm">
      <el-row>
        <el-col>
          <el-form-item :label="fields.parentId" :label-width="labelWidth">
            {{ parentName }}
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="name" :label="fields.name" :label-width="labelWidth">
            <el-input v-model="postForm.name" :placeholder="fields.name" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="code" :label="fields.code" :label-width="labelWidth">
            <el-input v-model="postForm.code" :placeholder="fields.code" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="value" :label="fields.value" :label-width="labelWidth">
            <el-input v-model="postForm.value" :placeholder="fields.value" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <el-form-item prop="sort" :label="fields.sort" :label-width="labelWidth">
            <el-input v-model="postForm.sort" :placeholder="fields.sort" clearable />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item :label-width="labelWidth">
        <el-button type="primary" :loading="submitLoading" :disabled="submitLoading" @click="submitFrom">{{ submitText }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
// api
import { dictApi } from '@/api/dict'
// components
// data
import { fields } from '../modules/fields.js'
import { rules as rulesForm } from '../modules/rules.js'
// filter
// function
// mixin
import DetailMixin from '@/components/Mixins/DetailMixin'
import MethodsMixin from '@/components/Mixins/MethodsMixin'
// plugins
// settings
export default {
  name: 'DictDetail',
  components: {},
  mixins: [DetailMixin, MethodsMixin],
  props: {
    parentId: { type: Number, default: 0 },
    isUpdate: { type: Boolean, default: false }
  },
  data() {
    return {
      fields,
      rulesForm,
      parentName: ''
    }
  },
  created() {
    this.submitText = this.isUpdate ? '编辑' : '添加'
    this.parentName = this.parentId === 0 ? '根目录（' + this.parentId + '）' : ''
    this.postForm = { ...this.postForm, parentId: this.parentId, sort: 0 }
  },
  methods: {
    startHandle() {
      console.log('🚀 ~ startHandle ~ this.isUpdate && this.updateId', this.isUpdate && this.updateId)
      if (this.isUpdate && this.updateId) {
        dictApi.detail({ id: this.updateId }).then(({ code, data, msg }) => {
          if (code === 200) {
            console.log('🚀 ~ ', data)
          } else {
            this.$message.error(msg)
          }
        })
      }
    },
    submitFrom() {
      this.$refs.postForm.validate((valid, fields) => {
        if (valid) {
          dictApi.create(this.postForm).then(({ code, data, msg }) => {
            if (code === 200) {
              this.$message.success(msg)
              this.$emit('onCreateSuccess')
            } else {
              this.$message.error(msg)
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
