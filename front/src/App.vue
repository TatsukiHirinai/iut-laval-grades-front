<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/students">List Student</RouterLink>
      <RouterLink to="/connection">Connexion</RouterLink>
      <RouterLink to="/courses">Courses</RouterLink>
      <RouterLink to="/stats">Stats</RouterLink>
    </nav>
  </header>
  <RouterView />
</template>
