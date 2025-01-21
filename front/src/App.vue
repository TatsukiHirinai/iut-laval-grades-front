<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
const route = useRoute();
const firstName = localStorage.getItem('firstName')
const departement = localStorage.getItem('departement')
</script>

<template>
  <header v-if="route.name !== 'connection'" class="global-header">
    <div class="header-container">
      <div class="header-left">
        <img src=".\assets\logo.png" alt="Logo" class="logo" />
        <span class="subtitle">{{ firstName }} - {{ departement }}</span>
      </div>

      <nav class="header-nav">
        <RouterLink to="/students" class="nav-link">
          <span>👥 Étudiants</span>
        </RouterLink>
        <RouterLink to="/courses" class="nav-link">
          <span>📚 Cours</span>
        </RouterLink>
        <RouterLink to="/grades" class="nav-link">
          <span>🎓 Notes</span>
        </RouterLink>
        <RouterLink to="/statistics" class="nav-link">
          <span>📊 Statistiques</span>
        </RouterLink>
        <RouterLink to="/connection" class="nav-link">
          <span>↪ Déconnexion</span>
        </RouterLink>
      </nav>
    </div>
  </header>
  <header v-if="route.name == 'connection'" class="global-header">
    <div class="header-container">
      <div class="header-left">
        <img src=".\assets\logo.png" alt="Logo" class="logo" />
        <span class="subtitle">{{ firstName }} - {{ departement }}</span>
      </div>

      <nav class="header-nav">
      </nav>
    </div>
  </header>
  <RouterView />
</template>
