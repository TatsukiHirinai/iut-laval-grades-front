<script setup lang="ts">
import { ref } from 'vue'

// Données des cadres : titre et texte pour chaque cadre
const cards = ref([
  { title: 'Moyenne générale', text1: '99/20' ,text2: 'Moyenne de toutes les notes' },
  { title: "Nombre d'étudiants", text1: '99',text2: 'Total des étudiants inscrits' },
  { title: 'Nombre de cours', text1: '99',text2: 'Total des cours disponibles' },
  { title: 'Taux de réussite', text1: '999.99%',text2: 'Taux de réussite moyen' }
])
</script>

<template>
    <div class="frame-list">
        <div class="container">
          <div class="cards">
            <div v-for="(card, index) in cards" :key="index" class="card">
              <p class="value">{{ card.title }}</p>
              <h3>{{ card.text1 }}</h3>
              <p class="value">{{ card.title }}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  padding: 20px;
}

.cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;  
  width: 100%;
  max-width: 1200px;
}

.card {
  width: 22%;  
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.card h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
  color: black;
}
.card p {
  color: #333;
}

.card p #value{
    font-size: 1.2em;
    color: black;
}
</style>