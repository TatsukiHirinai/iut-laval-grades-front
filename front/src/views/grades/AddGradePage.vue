<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const studentsList = ref('')
    const coursesList = ref('')
    const grade    = ref('')
    const semester = ref('')
    const year     = ref('')
    var   status   = ref('')

    function goToGradesPage() {
        router.push('/grades')
    }

    async function addGrade(student, course, grade, semester, year) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student: student,
                course: course,
                grade: grade,
                semester: semester,
                year: year
            })
        }
        try {
            const response = await fetch('http://localhost:3000/api/grades', requestOptions)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            status.value = 'success'
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error)
            status.value = 'Input error'
        }
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

    async function getCoursesList() {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }
        try {
            const response = await fetch('http://localhost:3000/api/courses', requestOptions)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            coursesList = data
            status = 'success'
        } catch (error) {
            console.error('There was a problem with the fetch operation :', error)
            status = 'Fetch error'
        }
    }

    getStudentsList()
    getCoursesList()
</script>

<template>
    <h2>Ajouter une note</h2>
    <label>Etudiant</label><br>
    <select>
        <option value="" default>Sélectionner un étudiant</option>
        <option v-for="student in studentsList" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <label>Cours</label><br>
    <select>
        <option value="" default>Sélectionner un cours</option>
        <option v-for="course in coursesList" :key="course.id" :value="course.id">
            {{ course.name }}
        </option>
    </select><br>
    <label>Note</label><br>
    <input type="number" v-model="grade" placeholder="0"><br>
    <label>Semestre</label><br>
    <input type="text" v-model="semester" placeholder="S1, S2, etc."><br>
    <label>Année</label><br>
    <input type="text" v-model="year" placeholder="2025"><br>
    <button @click="goToGradesPage">Annuler</button>
    <button @click="addGrade">Ajouter</button>
</template>