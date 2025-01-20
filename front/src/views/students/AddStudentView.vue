<script setup>
import { ref } from 'vue'

const firstName = ref('');
const lastName = ref('');
const dateOfBirth = ref('');
const email = ref('');
const studentId = ref('');

function removeCircularReferences() {
  const seen = new WeakSet();
  return function (key, value) {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
}

function createStudent() {
  try {
    const student = {
      id: Math.random() * 1243,
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      dateOfBirth: dateOfBirth.value,
      studentId: studentId.value,
    };

    const formattedStudent = {
      firstName: String(student.firstName),
      lastName: String(student.lastName),
      email: String(student.email),
      dateOfBirth: String(student.dateOfBirth),
      studentId: String(student.studentId),
    };

    const studentString = JSON.stringify(formattedStudent, removeCircularReferences());

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
      },
      body: studentString,
    }
    fetch('http://localhost:3000/api/students', requestOptions).then((response) => {
      if (response.ok) {
        console.log('Student added successfully');
        console.log(response);
      } else {
        response.json().then((error) => {
          console.error('Error adding student:', error);
        });
      }
    })

  } catch (error) {
    console.error('Error stringifying student object:', error);
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
          <button type="button" class="button cancel">Annuler</button>
          <button type="submit" class="button add">Ajouter</button>
        </div>
      </form>
    </div>
  </div>
</template>
