<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    function goToGradesPage() {
        try {
            router.push('/grades')
        } catch (error) {
            console.error('Error redirecting to Grades Page :', error)
        }
    }
</script>

<template>
    <h2>Ajouter une note</h2>
    <label>Etudiant</label><br>
    <select v-model="studentId">
        <option value="" default>Sélectionner un étudiant</option>
        <option v-for="student in studentsList" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <label>Cours</label><br>
    <select v-model="courseId">
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
    <button @click="addGrade(studentId, courseId, grade, semester, year)">Ajouter</button>
</template>

<script>
    export default {
        data() {
            return {
                studentsList: [],
                coursesList: [],
                studentId: '',
                courseId: '',
                grade: '',
                semester: '',
                year: ''
            }
        },
        async mounted() {
            this.fetchStudentsList(),
            this.fetchCoursesList()
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
            async fetchCoursesList() {
                try {
                    const requestOptions = {method: 'GET', headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}}
                    const response = await fetch('http://localhost:3000/api/courses', requestOptions)
                    const data = await response.json()
                    this.coursesList = data
                    this.id = data.length
                } catch (error) {
                    console.error('Error fetching courses list:', error)
                }
            },
            async addGrade(studentId, courseId, grade, semester, academicYear) {
                try {
                    const requestOptions = {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        },
                        body: JSON.stringify({
                            studentId: studentId,
                            courseId: courseId,
                            grade: grade,
                            semester: String(semester),
                            academicYear: String(academicYear)
                        })
                    }
                    const response = await fetch('http://localhost:3000/api/grades', requestOptions)
                    if (!response.ok) console.log('HTTP Error :', response.status)
                    else {
                        const data = await response.json()
                        if (data) console.log('Grade added successfully')
                    }
                } catch (error) {
                    console.error('Error adding grade:', error)
                }
            }
        }
    }
</script>