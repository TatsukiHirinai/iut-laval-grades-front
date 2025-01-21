<script setup lang="ts">

import DropdownMenu from '../stats/DropdownMenu.vue';
import StatFrameList from '../stats/StatFrameList.vue';
import { ref, onMounted } from 'vue';

const coursesList = ref<string[]>([]);
const studentsList = ref<string[]>([]);

async function fetchData() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const response = await fetch('http://localhost:3000/api/courses', requestOptions);
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

async function fetchStudents() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const response = await fetch('http://localhost:3000/api/students', requestOptions);
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
    const courses = await fetchData();
    if (Array.isArray(courses)) {
        coursesList.value = courses.map((course: any) => course.name); // Assuming the course object has a 'name' property
    } else {
        console.error('Courses data is not an array:', courses);
    }

    const globalData = await fetchGlobalData();
    if (globalData) {
        console.log('Global data:', globalData);
    } else {
        console.error('No global data received');
    }
    const students = await fetchStudents();
    if (Array.isArray(students)) {
        studentsList.value = students.map((student: any) => student.name); // Assuming the student object has a 'name' property
    } else {
        console.error('Students data is not an array:', students);
    }
});
</script>

<template>
  <header>
  </header>
  <StatFrameList />
  <h2>Stats par cours</h2>
  <DropdownMenu :options=coursesList></DropdownMenu>
  <StatFrameList />
  <h2>Stats par étudiants</h2>
  <DropdownMenu :options=studentsList></DropdownMenu>
</template>

<style scoped>
.frame-list {
  width: 100%;  
  box-sizing: border-box; 
}
</style>