<template>
  <div class="app-container">
    <panel-group />
    <el-row :gutter="8">
      <el-col :xs="{ span: 24 }" :sm="{ span: 24 }" :md="{ span: 24 }" :lg="{ span: 12 }" :xl="{ span: 6 }">
        <box-card />
      </el-col>
      <el-col :xs="{ span: 24 }" :sm="{ span: 24 }" :md="{ span: 24 }" :lg="{ span: 12 }" :xl="{ span: 18 }">
        <step style="margin: 30px" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import PanelGroup from './components/PanelGroup'
import BoxCard from './components/BoxCard'
import Step from './components/WorkStep'
import { guide } from './utils/guide'
import Cookies from 'js-cookie'
import { userApi } from '@/api/user'

export default {
  name: 'ViewsHomeIndex',
  components: {
    PanelGroup,
    BoxCard,
    Step
  },
  mounted() {
    const isDriverShowed = Cookies.get('isDriverPassed')
    if (!isDriverShowed) {
      userApi.isFirst().then(({ code, data }) => {
        if (code === 200) {
          if (+data === 1) {
            this.showDriver()
          }
        }
      })
    }
  },
  methods: {
    showDriver() {
      this.$driver.defineSteps(guide)
      this.$driver.start()
      Cookies.set('isDriverPassed', true)
    }
  }
}
</script>
