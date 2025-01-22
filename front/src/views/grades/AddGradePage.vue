<script>
    const apiUrl = import.meta.env.VITE_API_URL
    export default {
        data() {
            return {
                students: [],
                courses: [],
                studentId: '',
                courseId: '',
                grade: '',
                semester: '',
                year: ''
            }
        },
        mounted() {
            this.fetchStudents(),
            this.fetchCourses()
        },
        methods: {
            async fetchStudents() {
                try {
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        }
                    }
                    const response = await fetch('https://'+apiUrl+'/api/students', requestOptions)
                    if (!response.ok) {
                        throw new Error('Network error')
                    }
                    const data = await response.json()
                    this.students = data
                    console.log(this.students)
                } catch (error) {
                    console.error('Error fetching student list:', error)
                }
            },
            async fetchCourses() {
                try {
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        }
                    }
                    const response = await fetch('https://'+apiUrl+'/api/courses', requestOptions)
                    if (!response.ok) {
                        throw new Error('Network error')
                    }
                    const data = await response.json()
                    this.courses = data
                    console.log(this.courses)
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
                            semester: semester,
                            academicYear: academicYear
                        })
                    }
                    const response = await fetch('https://'+apiUrl+'/api/grades', requestOptions)
                    if (!response.ok) {
                        throw new Error('Network error')
                    }
                    console.log('Grade added successfully')
                } catch (error) {
                    console.error('Error adding grade:', error)
                }
            }
        }
    }
</script>

<template>
    <h2>Ajouter une note</h2>
    <label>Etudiant</label><br>
    <select v-model="studentId">
        <option value="" default>Sélectionner un étudiant</option>
        <option v-for="student in students" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <label>Cours</label><br>
    <select v-model="courseId">
        <option value="" default>Sélectionner un cours</option>
        <option v-for="course in courses" :key="course.id" :value="course.id">
            {{ course.name }}
        </option>
    </select><br>
    <label>Note</label><br>
    <input type="number" v-model="grade" placeholder="0"><br>
    <label>Semestre</label><br>
    <input type="text" v-model="semester" placeholder="S1, S2, etc."><br>
    <label>Année</label><br>
    <input type="text" v-model="year" placeholder="2025"><br>
    <RouterLink :to="{name: 'grades'}">
        <button>Annuler</button>
    </RouterLink>
    <button @click="addGrade(studentId, courseId, grade, semester, year)">Ajouter</button>
</template>