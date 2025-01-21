<script setup lang="ts">
import { ref, onMounted } from 'vue';
const apiurl = import.meta.env.VITE_API_URL;

const props = defineProps<{
  cards: { title: string, text1: string, text2: string }[]
}>();


</script>

<template>
  <div class="frame-list">
    <div class="container" style="min-height: auto;">
      <div class="cards">
        <div v-for="(card, index) in props.cards" :key="index" class="card">
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