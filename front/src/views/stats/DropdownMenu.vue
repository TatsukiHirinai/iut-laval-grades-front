<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
const apiUrl = import.meta.env.VITE_API_URL;

// Déclarez une prop pour les options
const props = defineProps<{
  options: string[];
  menuType: string;
}>();

const emit = defineEmits(['select']);

function handleSelection(option: string) {
  emit('select', { option, menuType: props.menuType }); // Passe l'option et le type de menu
}
</script>

<template>
  <nav class="navbar">
    <ul class="menu">
      <!-- Élément principal avec dropdown -->
      <li class="menu-item dropdown">
        <a href="#" class="dropdown-btn">Sélectionner un étudiant</a>
        <!-- Menu déroulant visible au survol -->
        <ul class="dropdown-menu">
          <li
            v-for="(option, index) in props.options"
            :key="index"
            class="dropdown-item"
          >
            <a href="#" @click.prevent="handleSelection(option)">{{ option }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  width: 100%;
  background-color: #333;
}

.menu {
  display: flex;
  justify-content:flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
}

.menu-item {
  position: relative;
  width: 100%;
}

.dropdown-btn{
  width: 100%;
}

.menu-item a {
  display: block;
  padding: 15px;
  color: white;
  text-decoration: none;
  text-align: center;
}

.menu-item a:hover {
  background-color: #444;
}

/* Styles pour le menu déroulant */
.dropdown-menu {
  display: none; /* Masqué par défaut */
  position: absolute;
  left: 0;
  top: 100%;
  background-color: #444;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  z-index: 10;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
}

.dropdown:hover .dropdown-menu {
  display: block; /* Visible au survol */
}

.dropdown-item a {
  display: block;
  padding: 10px;
  color: white;
  text-decoration: none;
}

.dropdown-item a:hover {
  background-color: #666;
}
</style>
