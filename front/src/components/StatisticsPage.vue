<script setup lang="ts">

import DropdownMenu from './StatisticsPage_components/DropdownMenu.vue';
import StatFrameList from './StatisticsPage_components/StatFrameList.vue';

// URL de base de l'API
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwcm9mQGV4YW1wbGUuY29tIiwicm9sZSI6InByb2Zlc3NvciIsImlhdCI6MTczNzM4MzMzNywiZXhwIjoxNzM3NDY5NzM3fQ.cl-ZngVGdlkwYS1-A87GtxDOsJqTKNzCw76GrFzZA-E"
async function fetchData() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const response = await fetch('http://localhost:3000/api/courses', requestOptions)
        if (!response.ok) {
                throw new Error('Network response was not ok');
            }

        const data = await response.json();
        console.log('Courses', data);
        console.log('OUI');
        return data
    } catch (error) {
        // Handle errors (network issues, invalid response, etc.)
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
    
}
fetchData();
</script>

<template>
  <header>
  </header>
  <StatFrameList />
  <h2>Stats par cours</h2>
  <DropdownMenu></DropdownMenu>
  <StatFrameList />
  <h2>Stats par étudiants</h2>
  <DropdownMenu></DropdownMenu>
</template>

<style scoped>
.frame-list {
  width: 100%;  
  box-sizing: border-box; 
}
</style>