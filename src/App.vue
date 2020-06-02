<!--
 * @Author: your name
 * @Date: 2020-05-27 20:44:32
 * @LastEditTime: 2020-05-27 21:10:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \government-service-assessment\src\App.vue
-->
<template>
  <div id="app" class="backboard">
    <router-view />
  </div>
</template>

<style lang="stylus">
.backboard {
  background: url('./assets/dashboard/background.png') no-repeat;
  width: 90vw;
  height: 200vh;
  background-size: 100% 100%;
  padding: 0 5vw;
}
</style>
