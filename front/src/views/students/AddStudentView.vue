<script setup>
import { ref } from 'vue'

const firstName = ref('')
const lastName = ref('')
const dateOfBirth = ref('')
const email = ref('')
const studentId = ref('')
const id = ref('')

function createStudent() {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: id,
      firstName: firstName,
      lastName: lastName,
      email: email,
      dateOfBirth: "" + dateOfBirth,
      studentId: studentId,
    }),
  }
  fetch('http://localhost:3000/api/students', requestOptions).then((response) => {
    if (response.ok) {
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
      fetch('http://localhost:3000/api/students', requestOptions).then((response) => {
        log(response)
      })
    } else {
    }
  })
}
</script>

<template>
  Add Student
  <div>
    <input v-model="firstName" name="firstName" required value />
    <input v-model="lastName" name="lastName" required value />
    <input v-model="dateOfBirth" name="dateOfBirth" type="date" required value />
    <input v-model="email" name="email" type="email" required value />
    <input v-model="studentId" name="studentId" required value />
    <button @click="createStudent()">Ajouter</button>
    <button type="button">Annuler</button>
  </div>
</template>
