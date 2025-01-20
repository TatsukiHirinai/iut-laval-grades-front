<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

var token = ref('');
var status = ref('');
const code = ref('');
const nom = ref('');
const credit = ref('');
const description = ref('');

token = localStorage.getItem('authToken');

const router = useRouter();

async function AddCourses(code , nom , credit , description) {
    const requestOptions = {
		method: 'POST',
		headers: { 
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({code: code, name: nom , credits : credit , description : description})
	};
    try {
        const response = await fetch('http://localhost:3000/api/courses', requestOptions);
        if (!response.ok) {
            status.value = 'There was a problem please try again';
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        status.value = 'The course has been added successfully';
        router.push('/courses');
        return data;
    } catch (error) {
        status.value = 'There was a problem please try again';
        return null;
    }
    
}

function cancel() {
    router.push('/courses');
}
</script>  

<template>
        <form @submit.prevent="submitForm">
            <br><br>
            <p>Code du cours (min 2 charactere)</p>
            <input v-model="code" placeholder="code du cours" type="text"
            minlength="2"/>
            <br><br>
            <p>Nom du cours</p>
            <input v-model="nom" placeholder="nom du cours" type="text"/>
            <br><br>
            <p>Crédits du cours (entre 1 et 60)</p>
            <input v-model="credit" type="number"     
                min="1"
                max="60"
                placeholder="Enter a number between 1 and 100"/>
            <br><br>
            <p>Desciption du cours</p>
            <input v-model="description" placeholder="description" type="text"/>
            <br><br>
            <p>{{ status }}</p>
            <button @click="AddCourses(code , nom , credit , description)">Ajouter</button>
            <button @click="cancel()">Annuler</button>
        </form>

</template>