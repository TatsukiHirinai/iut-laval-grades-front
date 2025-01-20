<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ConnectionView from './views/ConnectionView.vue';
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/students/add">Add Student</RouterLink>
      <RouterLink to="/connection">Connexion</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
