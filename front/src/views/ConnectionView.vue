<script setup>
import { ref } from 'vue'

const mail = ref('');
const mdp = ref('');
var status = ref('');

function fetchData(email , password) {
	const requestOptions = {
		method: 'POST',
		headers: { 
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({email: email, password: password})
	};
	fetch('http://localhost:3000/api/auth/login', requestOptions)
		.then((response) => {
			if (response.ok) {
				successfullConnexion(response.json());
			} else {
				failedConnexion(response.status);
			}
		})
}

function successfullConnexion(response) {
	console.log(response.then((value) => `${value.token}`));

}

function failedConnexion(errorCode) {
	console.log("non : " + errorCode);
	status = mail;
}

</script>  

<template>
	<input v-model="mail" placeholder="email" type="email"/>
	<input v-model="mdp" placeholder="password" type="password"/>
	<button @click="fetchData(mail , mdp)">Valider</button>
	<p>status : {{ status }}</p>

</template>

