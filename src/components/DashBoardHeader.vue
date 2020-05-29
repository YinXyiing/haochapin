<!--
 * @Author: your name
 * @Date: 2020-05-28 16:28:08
 * @LastEditTime: 2020-05-28 17:59:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \government-service-assessment\src\components\DashBoardHeader.vue
-->
<template>
<div class="dashBoardHeader">
    <div class="dashBoardHeader_main"></div>
</div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  components: {
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang='scss' scoped>
.dashBoardHeader{
    &_main{
        margin: 0 auto;
        background: url('../assets/dashboard/topTitle.png') no-repeat;
        width: 695px;
        height: 50px;
    }
}
</style>
