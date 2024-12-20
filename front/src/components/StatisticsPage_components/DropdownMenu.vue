<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
    <header>
    </header>

    <nav class="navbar">
        <ul class="menu">
          <li class="menu-item">
            <a href="#">Sélectionner un étudiant</a>
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
  justify-content: space-evenly; 
  list-style: none; 
  margin: 0;
  padding: 0;
}


.menu-item {
  position: relative; 
  width: 100%;
}

.menu-item a {
  display: block;
  padding: 15px;
  color: white;
  text-decoration: none;
  text-align: center;
}

.dropdown:hover .dropdown-menu {
  display: block; 
}

.dropdown-menu {
  display: none; 
  position: absolute; 
  left: 0; 
  top: 100%; 
  background-color: #444; 
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); 
  min-width: 100%; 
}

.dropdown-menu li {
  padding: 10px;
}

.dropdown-menu a {
  color: white;
  text-decoration: none;
  display: block;
}

.dropdown-menu a:hover {
  background-color: #666;
}
</style>