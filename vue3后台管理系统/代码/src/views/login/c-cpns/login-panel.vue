<template>
  <div class="panel">
    <h1 class="title">弘源后台管理系统</h1>
    <el-tabs type="border-card" stretch v-model="currentTab">
      <el-tab-pane name="account">
        <template #label>
          <span class="icon">
            <span class="text">账号登录</span>
          </span>
        </template>
        <PanelAccount ref="accountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="icon">
            <span class="text">手机登录</span>
          </span>
        </template>
        <PanelPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox v-model="isKeep" label="记住密码" />
      <el-link type="primary">记住密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="loginAction">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import PanelPhone from './panel-phone.vue'
import PanelAccount from './panel-account.vue'

const currentTab = ref('account')
const isKeep = ref(false)

const accountRef = ref<InstanceType<typeof PanelAccount>>()

function loginAction() {
  console.log('立即登录')
  accountRef.value?.loginAction(isKeep.value)
}
</script>

<style scoped lang="less">
.panel {
  width: 330px;
  margin-bottom: 150px;

  .title {
    text-align: center;
    margin-bottom: 15px;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;

    .text {
      margin-left: 5px;
    }
  }

  .control-account {
    margin-top: 12px;
    display: flex;

    justify-content: space-between;
  }

  .login-btn {
    margin-top: 10px;
    width: 100%;
  }
}
</style>
