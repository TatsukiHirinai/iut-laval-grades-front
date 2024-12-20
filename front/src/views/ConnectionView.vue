<script setup>
import { ref } from 'vue'

const mail = ref('');
const mdp = ref('');
var status = ref('');

function fetchData(email , password) {
	console.log(email);
	console.log(password);
	const requestOptions = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({email: email, password: password})
	};
	fetch('http://localhost:3000/api/auth/login', requestOptions)
		.then(response => successfullConnexion())
		.catch(response => failedConnexion())
}

function successfullConnexion() {
	console.log("oui");
}

function failedConnexion() {
	console.log("non");
}

</script>  

<template>

    <input v-model="mail" placeholder="email" />
    <input v-model="mdp" placeholder="password" />
    <button @click="fetchData(mail , mdp)">Valider</button>
	<p>status : {{ status }}</p>

</template>

