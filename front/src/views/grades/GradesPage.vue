<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const input = ref('')

    function goToAddGradePage() {
        router.push('/grades/new')
    }
</script>

<template>
    <h2>Notes des étudiants <button @click="goToAddGradePage">Ajouter une note</button></h2>
    <input v-model="input" type="text" placeholder="Rechercher..."><br>
    <select v-model="selectedStudent">
        <option value="" default>Sélectionner un étudiant</option>
        <option v-for="student in studentsList" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <div></div>
</template>

<script>
    export default {
        data() {
            return {
                studentsList: [],
                gradesList: [],
                selectedStudent: ''
            }
        },
        async mounted() {
            this.fetchStudentsList(),
            this.fetchGradesList()
        },
        methods: {
            async fetchStudentsList() {
                try {
                    const requestOptions = {method: 'GET', headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}}
                    const response = await fetch('http://localhost:3000/api/students', requestOptions)
                    const data = await response.json()
                    this.studentsList = data
                } catch (error) {
                    console.error('Error fetching student list:', error)
                }
            },
            async fetchGradesList() {
                try {
                    const requestOptions = {method: 'GET', headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}}
                    const response = await fetch('http://localhost:3000/api/grades', requestOptions)
                    const data = await response.json()
                    this.gradesList = data
                } catch (error) {
                    console.error('Error fetching grades list:', error)
                }
            }
        }
    }
</script>