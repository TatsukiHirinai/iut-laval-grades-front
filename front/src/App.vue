<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/students/add">Ajouter un étudiant</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
