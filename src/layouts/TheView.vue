<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>

/*
<template>
  <div>
    <button @click="handleClick">toggle</button>
    <span v-if="isToggled">
      hidden message
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
let isToggled = ref(false)

function handleClick() {
  console.log('dd')  
  isToggled.value = !isToggled.value;
}
</script>
*/
