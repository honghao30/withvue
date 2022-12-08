<script setup>
import TheHeader from './layouts/TheHeader.vue';
import TheView from './layouts/TheView.vue';
import MainVisual from './components/common/MainVisual.vue';
</script>

<template>
  <MainVisual v-if="IsShow"></MainVisual>
  <TheHeader></TheHeader>
  <TheView></TheView>
  <p>{{ $route.name }}</p>
</template>

<style lang="scss">
@import './assets/scss/reset.scss';
</style>
