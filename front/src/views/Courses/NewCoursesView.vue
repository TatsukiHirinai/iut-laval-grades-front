<script setup>
import { ref } from 'vue'

var token = ref('');
const code = ref('');
const nom = ref('');
const credit = ref('');
const description = ref('');

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

        <br><br>
    	<input v-model="code" placeholder="code du cours" type="text"/>
        <br><br>
        <input v-model="nom" placeholder="nom du cours" type="text"/>
        <br><br>
        <input v-model="credit" placeholder="0" type="number"/>
        <br><br>
        <input v-model="description" placeholder="description" type="text"/>
        <br><br>
        <button @click="AddCourses(code , nom , credit , description)">Ajouter</button>
        <button @click="">Annuler</button>

</template>