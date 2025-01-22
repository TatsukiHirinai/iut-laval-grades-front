<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toastification';

const apiUrl = import.meta.env.VITE_API_URL;
const firstName = ref('');
const lastName = ref('');
const dateOfBirth = ref('');
const email = ref('');
const studentId = ref('');

const toast = useToast();

async function createStudent() {
  try {
    const student = {
      id: Math.random() * 1243,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      dateOfBirth: dateOfBirth.value,
      studentId: studentId.value,
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: JSON.stringify(student),
    };

    const response = await fetch('https://'+apiUrl+'/api/students', requestOptions);
    if (response.ok) {
      toast.success('Étudiant ajouté avec succès!');
    } else {
      const errorData = await response.json();
      toast.error(`Erreur: ${errorData.error}`);
    }
  } catch (error) {
    toast.error('Erreur lors de l\'ajout de l\'étudiant.');
  }
}
</script>

<template>
  <div class="container">
    <div class="form-wrapper">

      <div class="header">
        <h1>Ajouter un étudiant</h1>
      </div>

      <form @submit.prevent="createStudent" class="form">
        <div class="form-group">
          <label for="firstName" class="label">Prénom</label>
          <input v-model="firstName" name="firstName" required class="input" />
        </div>

        <div class="form-group">
          <label for="lastName" class="label">Nom</label>
          <input id="lastName" v-model="lastName" name="lastName" required class="input" />
        </div>

        <div class="form-group">
          <label for="email" class="label">Email</label>
          <input id="email" v-model="email" name="email" type="email" required class="input" />
        </div>

        <div class="form-group">
          <label for="dateOfBirth" class="label">Date de naissance</label>
          <input id="dateOfBirth" v-model="dateOfBirth" name="dateOfBirth" type="date" required class="input" />
        </div>

        <div class="form-group">
          <label for="studentId" class="label">Numéro étudiant</label>
          <input id="studentId" v-model="studentId" name="studentId" required class="input" />
        </div>

        <div class="form-actions">
          <RouterLink to="/students">
            <button type="button" class="button cancel">Annuler</button>
          </RouterLink>
          <button type="submit" class="button add">Ajouter</button>
        </div>
      </form>
    </div>
  </div>
</template>
