<script setup lang="ts">
import { ref, onMounted } from 'vue';

const cards = ref([
  { title: 'Moyenne générale', text1: 'N/A', text2: 'Moyenne de toutes les notes' },
  { title: "Nombre d'étudiants", text1: 'N/A', text2: 'Total des étudiants inscrits' },
  { title: 'Nombre de cours', text1: 'N/A', text2: 'Total des cours disponibles' },
  { title: 'Taux de réussite', text1: 'N/A', text2: 'Taux de réussite moyen' }
]);
function getCurrentSchoolYear(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Les mois sont indexés à partir de 0

    // L'année scolaire commence en septembre et se termine en août
    if (currentMonth >= 9) {
        // Si nous sommes en septembre ou plus tard, l'année scolaire est de l'année en cours à l'année suivante
        return `${currentYear}-${currentYear + 1}`;
    } else {
        // Si nous sommes avant septembre, l'année scolaire est de l'année précédente à l'année en cours
        return `${currentYear - 1}-${currentYear}`;
    }
}
async function fetchGlobalData() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const date = getCurrentSchoolYear();
        const response = await fetch(`http://localhost:3000/api/stats/global?academicYear=${date}`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

onMounted(async () => {
    const globalData = await fetchGlobalData();
    if (globalData) {
        console.log('Global data:', globalData);
        cards.value = [
          { title: 'Moyenne générale', text1: globalData.globalAverage !== null ? globalData.globalAverage.toString() : 'N/A', text2: 'Moyenne de toutes les notes' },
          { title: "Nombre d'étudiants", text1: globalData.totalStudents !== null ? globalData.totalStudents.toString() : 'N/A', text2: 'Total des étudiants inscrits' },
          { title: 'Nombre de cours', text1: globalData.totalCourses !== null ? globalData.totalCourses.toString() : 'N/A', text2: 'Total des cours disponibles' },
          { title: 'Taux de réussite', text1: globalData.averageSuccessRate !== null ? globalData.averageSuccessRate.toString() : 'N/A', text2: 'Taux de réussite moyen' }
        ];
    } else {
        console.error('No global data received');
    }
});
</script>

<template>
    <div class="frame-list">
        <div class="container">
          <div class="cards">
            <div v-for="(card, index) in cards" :key="index" class="card">
              <h3>{{ card.title }}</h3>
              <p>{{ card.text1 }}</p>
              <p>{{ card.text2 }}</p>
            </div>
          </div>
        </div>
    </div>
</template>

<style scoped>
.frame-list {
  width: 100%;  
  box-sizing: border-box; 
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
}

.card {
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  width: 200px;
  text-align: center;
}
</style>