<!--
 * @Author: your name
 * @Date: 2020-05-27 21:12:18
 * @LastEditTime: 2020-05-28 17:57:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \government-service-assessment\src\views\dashboard\index.vue
-->
<template>
<div class="dashboard">
<v-dashBoardHeader></v-dashBoardHeader>
</div>
</template>
<script>
import vDashBoardHeader from '@/components/DashBoardHeader'
export default {
  data () {
    return {
    }
  },
  components: {
    vDashBoardHeader
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.dashboard{
  background: url('../../assets/dashboard/background.png') no-repeat;
  width: 100vw;
  height: 100vh
}
</style>
