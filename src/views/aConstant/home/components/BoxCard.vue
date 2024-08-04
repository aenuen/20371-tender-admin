<template>
  <el-card class="box-card-component" style="margin-left:8px;">
    <div slot="header" class="box-card-header">
      <img src="https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt>
    </div>
    <div style="position:relative;">
      <pan-thumb :image="avatar" class="panThumb" />
      <mall-ki class-name="link--mall-ki" :text="`欢迎回来，${realName}`" />
      <div style="padding-top:50px;" class="progress-item">
        <el-button type="primary" :style="{width:buttonWidth}" class="el-icon-edit" @click="gotoCaseCreate">前往案件录入</el-button>
        <el-button type="primary" :style="{width:buttonWidth}" class="el-icon-finished" @click="gotoCaseList">前往案件列表</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex'
import PanThumb from '@/components/PanThumb'
import MallKi from '@/components/TextHoverEffect/Mallki'

export default {
  components: { PanThumb, MallKi },
  filters: {},
  data() {
    return {
      buttonWidth: '47%'
    }
  },
  computed: {
    ...mapGetters([
      'realName',
      'avatar',
      'roles'
    ])
  },
  methods: {
    gotoCaseCreate() {
      this.$router.push({ path: '/case/create' })
    },
    gotoCaseList() {
      this.$router.push({ path: '/case/list' })
    }
  }
}
</script>

<style lang="scss">
.box-card-component {
  .el-card__header {
    padding: 0 !important;
  }
}
</style>
<style lang="scss" scoped>
.box-card-component {
  .box-card-header {
    position: relative;
    height: 220px;

    img {
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;

      &:hover {
        transform: scale(1.1, 1.1);
        filter: contrast(130%);
      }
    }
  }

  .link--mall-ki {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    font-weight: bold;
  }

  .panThumb {
    z-index: 100;
    height: 70px !important;
    width: 70px !important;
    position: absolute !important;
    top: -45px;
    left: 0;
    border: 5px solid #ffffff;
    background-color: #fff;
    margin: auto;
    box-shadow: none !important;

    ::v-deep .pan-info {
      box-shadow: none !important;
    }
  }

  .progress-item {
    margin-bottom: 10px;
    font-size: 14px;
  }

  @media only screen and (max-width: 1510px) {
    .link--mall-ki {
      display: none;
    }
  }
}
</style>
