<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const student  = ref('')
    const course   = ref('')
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
</script>

<template>
    <h2>Ajouter une note</h2>
    <label>Etudiant</label><br>
    <select></select><br>
    <label>Cours</label><br>
    <select></select><br>
    <label>Note</label><br>
    <input v-model="grade" type="number" value="0"><br>
    <label>Semestre</label><br>
    <input v-model="semester" type="text" placeholder="S1, S2, etc."><br>
    <label>Année</label><br>
    <input v-model="year" type="text" placeholder="2023-2024" value="2025"><br>
    <button @click="goToGradesPage">Annuler</button>
    <button @click="addGrade">Ajouter</button>
</template>