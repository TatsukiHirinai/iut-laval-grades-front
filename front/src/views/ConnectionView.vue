<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useToast } from 'vue-toastification';

const router = useRouter();
const mail = ref('');
const mdp = ref('');
const toast = useToast();

async function fetchData() {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({ email: mail.value, password: mdp.value })
	};
	try {
		const response = await fetch('http://localhost:3000/api/auth/login', requestOptions)
		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();

		localStorage.setItem('authToken', data['token']);
		localStorage.setItem('id', data['professor'].id);
		localStorage.setItem('email', data['professor'].email);
		localStorage.setItem('firstName', data['professor'].firstName);
		localStorage.setItem('departement', data['professor'].department);

		toast.success('Connexion réussie !');
		router.push('/students');
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
		toast.error('Le mot de passe ou le mail est/sont incorrect(s)');
	}
}

</script>

<template>
	<div class="container">
		<h1>IUT de Laval - Gestion des notes</h1>
		<form @submit.prevent="fetchData" class="form-connection">
			<div class="form-group">
				<label for="lastName" class="label">Email :</label>
				<input v-model="mail" placeholder="..." name="email" type="email" required class="input" />
			</div>
			<div class="form-group">
				<label for="lastName" class="label">Mot de passe :</label>
				<input v-model="mdp" placeholder="..." name="mdp" type="password" required class="input" />
			</div>
			<div class="form-actions">
				<button type="submit" class="button add" style="width: 100%;">Se connecter</button>
			</div>
		</form>
	</div>
</template>
