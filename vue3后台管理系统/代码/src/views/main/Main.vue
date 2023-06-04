<template>
  <div class="main">
    <h2>main: {{ counterStore.counter }}-{{ counterStore.doubleCounter }}</h2>
    <button @click="changeCounter">修改counter</button>
  </div>
</template>

<script setup lang="ts">
import useLoginStore from '@/store/login/login'
import useCounterStore from '@/store/counter'

const counterStore = useCounterStore()

function changeCounter() {
  counterStore.changeCounterAction(999)
}

const loginStore = useLoginStore()
loginStore.loadLocalDataAction()
</script>

<style lang="less" scoped>
.main {
  color: red;
}
</style>
