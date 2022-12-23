<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import DynamicCom from './components/DynamicCom.vue'
  import Video from './components/Video.vue'
</script>
<template>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <DynamicCom></DynamicCom>
  <!-- <Video></Video> -->
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
