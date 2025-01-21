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
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      dateOfBirth: this.dateOfBirth,
      studentId: this.studentId,
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
  Add Student
  <div>
    <p>firstName</p>
    <input v-model="firstName" name="firstName" required value />
    <p>lastName</p>
    <input v-model="lastName" name="lastName" required value />
    <p>dateOfBirth</p>
    <input v-model="dateOfBirth" name="dateOfBirth" type="date" required value />
    <p>email</p>
    <input v-model="email" name="email" type="email" required value />
    <p>studentId</p>
    <input v-model="studentId" name="studentId" required value />
    <button @click="createStudent()">Ajouter</button>
    <button type="button">Annuler</button>
  </div>
</template>
