<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import ConnectionView from './views/ConnectionView.vue';
</script>

<template>
  <header>
  </header>
  <nav>
    <router-link to="/courses">Courses</router-link>
    <router-link to="/connection">Connection</router-link>
    <router-view></router-view>
  </nav>
</template>

<style scoped>
</style>
