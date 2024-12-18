<script setup>
import { ref } from 'vue'

const mail = ref('');
const mdp = ref('');

function fetchData() {
			fetch('http://localhost:3000/api/auth/login', {
				method: 'GET',
				headers: {
					'email': 'prof@example.com',
					'password': 'password123',
				}
			})
				.then(response => {
					response.json().then(res => console.log(res));
				})
				.catch(err => {
					console.error(err);
				});
		}


</script>  

<template>

    <input v-model="mail" placeholder="email" />
    <input v-model="mdp" placeholder="password" />
    <button @click="fetchData">Valider</button>

</template>

