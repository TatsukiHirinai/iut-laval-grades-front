<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const studentsList = ref('')
    const input = ref('')

    function goToAddGradePage() {
        router.push('/grades/new')
    }

    async function getStudentsList() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const response = await fetch('http://localhost:3000/api/students', requestOptions)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            studentsList = data
            status = 'success'
        } catch (error) {
            console.error('There was a problem with the fetch operation :', error)
            status = 'Fetch error'
        }
    }

    getStudentsList()
</script>

<template>
    <h2>Notes des étudiants <button @click="goToAddGradePage">Ajouter une note</button></h2>
    <input v-model="input" type="text" placeholder="Rechercher..."><br>
    <select>
        <option value="" default>Sélectionner un étudiant</option>
        <option v-for="student in students" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <div></div>
</template>