<script setup>
import { useRouter } from 'vue-router'

const apiUrl = import.meta.env.VITE_API_URL;

const router = useRouter()

function goToGradesPage() {
    router.push('/grades')
}
</script>

<template>
    <div class="container">
        <h2>Ajouter une note</h2>

        <form class="form-wrapper">
            <div class="form-group">
                <label for="student">Étudiant</label>
                <select id="student" v-model="studentId">
                    <option value="" default>Sélectionner un étudiant</option>
                    <option v-for="student in studentsList" :key="student.id" :value="student.id">
                        {{ student.firstName }} {{ student.lastName }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label for="course">Cours</label>
                <select id="course" v-model="courseId">
                    <option value="" default>Sélectionner un cours</option>
                    <option v-for="course in coursesList" :key="course.id" :value="course.id">
                        {{ course.name }}
                    </option>
                </select>
            </div>

            <div class="form-group">
                <label for="grade">Note</label>
                <input id="grade" type="number" v-model="grade" placeholder="0" min="0" max="20" />
            </div>

            <div class="form-group">
                <label for="semester">Semestre</label>
                <input id="semester" type="text" v-model="semester" placeholder="S1, S2, etc." />
            </div>

            <div class="form-group">
                <label for="year">Année académique</label>
                <input id="year" type="text" v-model="year" placeholder="2025" />
            </div>

            <div class="form-buttons">
                <button type="button" class="button cancel" @click="goToGradesPage">
                    Annuler
                </button>
                <button type="button" class="button add" @click="addGrade(studentId, courseId, grade, semester, year)">
                    Ajouter
                </button>
            </div>
        </form>
    </div>
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
                const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` } }
                const response = await fetch('http://' + apiUrl + '/api/students', requestOptions)
                const data = await response.json()
                this.studentsList = data
            } catch (error) {
                console.error('Error fetching student list:', error)
            }
        },
        async fetchCoursesList() {
            try {
                const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` } }
                const response = await fetch('http://' + apiUrl + '/api/courses', requestOptions)
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
                const response = await fetch('http://' + apiUrl + '/api/grades', requestOptions)
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