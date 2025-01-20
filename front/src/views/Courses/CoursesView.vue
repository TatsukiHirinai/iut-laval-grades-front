<script setup>
import { ref } from 'vue'

var token = ref('');
var status = ref('');

token = localStorage.getItem('authToken');

async function fetchCourses() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
    };
    try {
        const response = await fetch('http://localhost:3000/api/courses', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Courses:', data);


        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

</script>  

<template>

    <router-link to="/courses/new">Ajouter un cours</router-link>
    <button @click="fetchCourses()">DoSomethings</button>
    <p>Log : {{ status }}</p>

</template>


<style scoped>
.courses-view {
    padding: 20px;
}

.courses-view h1 {
    font-size: 24px;
    margin-bottom: 10px;
}

.courses-view ul {
    list-style-type: none;
    padding: 0;
}

.courses-view li {
    margin: 5px 0;
}
</style>