<script setup lang="ts">

import DropdownMenu from './StatisticsPage_components/DropdownMenu.vue';
import StatFrameList from './StatisticsPage_components/StatFrameList.vue';
</script>

<template>
  <header>
  </header>
  <StatFrameList />
  <DropdownMenu></DropdownMenu>
  <StatFrameList />
  <DropdownMenu></DropdownMenu>
</template>

<style scoped>
.frame-list {
  width: 100%;  
  box-sizing: border-box; 
}
</style>