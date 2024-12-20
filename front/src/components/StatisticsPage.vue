<script setup lang="ts">

import DropdownMenu from './StatisticsPage_components/DropdownMenu.vue';
import StatFrameList from './StatisticsPage_components/StatFrameList.vue';
</script>

<template>
  <header>
  </header>
  <StatFrameList />
  <h2>Stats par cours</h2>
  <DropdownMenu></DropdownMenu>
  <StatFrameList />
  <h2>Stats par étudiants</h2>
  <DropdownMenu></DropdownMenu>
</template>

<style scoped>
.frame-list {
  width: 100%;  
  box-sizing: border-box; 
}
</style>