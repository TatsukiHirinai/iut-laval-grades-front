<script setup>
import { useRouter } from 'vue-router'

const apiUrl = import.meta.env.VITE_API_URL;

const router = useRouter()

function goToAddGradePage() {
    router.push('/grades/new')
}

function editGrade(gradeId) {
    router.push(`/grades/${gradeId}/edit`)
}
</script>

<template>
    <div class="container">
        <div class="header">
            <h2>Notes des étudiants</h2>
            <button class="add-grade-button" @click="goToAddGradePage">Ajouter une note</button>
        </div>

        <div class="filters">
            <input v-model="input" type="text" placeholder="Rechercher..." class="search-bar"
                @change="showAvailableStudents(input)" />
            <select v-model="studentId" class="students-dropdown" @change="fetchGradesPerStudentId(studentId)">
                <option value="" default>Tous les étudiants</option>
                <option v-for="student in filteredStudentsList" :key="student.id" :value="student.id">
                    {{ student.firstName }} {{ student.lastName }}
                </option>
            </select>
        </div>

        <table class="grades-table">
            <thead>
                <tr>
                    <th>Étudiant</th>
                    <th>Cours</th>
                    <th>Note</th>
                    <th>Semestre</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="grade in gradesList" :key="grade.id">
                    <td>{{ grade.studentFirstName }} {{ grade.studentLastName }}</td>
                    <td>{{ grade.courseName }}</td>
                    <td>{{ grade.grade }}/20</td>
                    <td>{{ grade.semester }} - {{ grade.academicYear }}</td>
                    <td class="actions">
                        <button class="edit-button" @click="editGrade(grade.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-edit">
                                <path
                                    d="M11 4h10M6 20h12a2 2 0 0 0 2-2v-7.4a2 2 0 0 0-.6-1.4l-8-8a2 2 0 0 0-1.4-.6H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" />
                            </svg>
                        </button>
                        <button class="delete-button" @click="deleteGrade(grade.id)">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-trash">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path
                                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m5 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2">
                                </path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    data() {
        return {
            studentsList: [],
            gradesList: [],
            studentGradesList: [],
            studentId: '',
            input: '',
            filteredStudentsList: ''
        }
    },
    async mounted() {
        this.fetchStudentsList(),
            this.fetchGradesList()
    },
    methods: {
        async fetchStudentsList() {
            try {
                const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` } }
                const response = await fetch('http://' + apiUrl + '/api/students', requestOptions)
                const data = await response.json()
                this.studentsList = data
                this.filteredStudentsList = this.studentsList
            } catch (error) {
                console.error('Error fetching student list:', error)
            }
        },
        async fetchGradesList() {
            try {
                const requestOptions = { method: 'GET', headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` } }
                const response = await fetch('http://' + apiUrl + '/api/grades', requestOptions)
                const data = await response.json()
                this.gradesList = data
            } catch (error) {
                console.error('Error fetching grades list:', error)
            }
        },
        async fetchGradesPerStudentId(studentId) {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
                }
                const response = await fetch(`http://` + apiUrl + `/api/grades/student/${studentId}`, requestOptions)
                const data = await response.json()
                this.studentGradesList = data
                console.log(this.studentGradesList)
            } catch (error) {
                console.error('Error fetching student grades list:', error)
            }
        },
        async deleteGrade(gradeId) {
            try {
                const requestOptions = {
                    method: 'DELETE',
                    headers: { 'Authorization': `Bearer ${localStorage.getItem('authToken')}` }
                }
                const response = await fetch(`http://` + apiUrl + `/api/grades/${gradeId}`, requestOptions)
                if (!response.ok) {
                    console.log('Network error')
                } else {
                    console.log('Grade deleted successfully')
                }
            } catch (error) {
                console.error('Error deleting grade:', error)
            }
        },
        async showAvailableStudents(input) {
            const result = [];
            for (let i = 0; i < this.studentsList.length; i++) {
                const student = this.studentsList[i];
                if (student.firstName.toLowerCase().includes(input.toLowerCase())) {
                    result.push(student);
                }
            }

            this.filteredStudentsList = result;
        }
    }
}
</script>