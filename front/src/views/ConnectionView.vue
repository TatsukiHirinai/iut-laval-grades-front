<script setup>
import { ref } from 'vue'

const mail = ref('');
const mdp = ref('');
var status = ref('');

async function fetchData(email , password) {
	const requestOptions = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({email: email, password: password})
	};
	try {
		const response = await fetch('http://localhost:3000/api/auth/login', requestOptions)
		if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			const data = await response.json();

			localStorage.setItem('authToken', data['token']);
			
	} catch (error) {
        // Handle errors (network issues, invalid response, etc.)
        console.error('There was a problem with the fetch operation:', error);

    }
	
}

</script>  

<template>
	<input v-model="mail" placeholder="email" type="email"/>
	<input v-model="mdp" placeholder="password" type="password"/>
	<button @click="fetchData(mail , mdp)">Valider</button>
	<p>status : {{ status }}</p>

</template>

