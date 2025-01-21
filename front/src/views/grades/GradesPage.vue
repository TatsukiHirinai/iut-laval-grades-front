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
    <h2>Notes des étudiants <button @click="goToAddGradePage">Ajouter une note</button></h2>
    <input v-model="input" type="text" placeholder="Rechercher..." @change="showAvailableStudents(input)"><br>
    <select v-model="studentId" @change="fetchGradesPerStudentId(studentId)">
        <option v-for="student in filteredStudentsList" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <select v-model="studentId" @change="fetchGradesPerStudentId(studentId)">
        <option value="" default>Sélectionner un étudiant</option>
        <option v-for="student in studentsList" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <div v-for="grade in gradesList" :key="grade.id" :value="grade.id">
        Etudiant : {{ grade.studentFirstName }} {{ grade.studentLastName }}
        Note : {{ grade.grade }}
        Cours : {{ grade.courseName }}
        Code du cours : {{ grade.courseCode }}
        Crédits : {{ grade.credits }}
        Semestre : {{ grade.semester }}
        Année : {{ grade.academicYear }}
        <button @click="editGrade(grade.id)">Modifier</button>
        <button @click="deleteGrade(grade.id)">Supprimer</button>
    </div>
    <div v-for="grade in studentGradesList" :key="grade.id" :value="grade.id">
        Etudiant : {{ grade.studentFirstName }} {{ grade.studentLastName }}
        Note : {{ grade.grade }}
        Cours : {{ grade.courseName }}
        Code du cours : {{ grade.courseCode }}
        Crédits : {{ grade.credits }}
        Semestre : {{ grade.semester }}
        Année : {{ grade.academicYear }}
        <button @click="editGrade(grade.id)">Modifier</button>
        <button @click="deleteGrade(grade.id)">Supprimer</button>
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
                    const requestOptions = {method: 'GET', headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}}
                    const response = await fetch('http://'+apiUrl+'/api/students', requestOptions)
                    const data = await response.json()
                    this.studentsList = data
                    this.filteredStudentsList = this.studentsList
                } catch (error) {
                    console.error('Error fetching student list:', error)
                }
            },
            async fetchGradesList() {
                try {
                    const requestOptions = {method: 'GET', headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}}
                    const response = await fetch('http://'+apiUrl+'/api/grades', requestOptions)
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
                        headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}
                    }
                    const response = await fetch(`http://`+apiUrl+`/api/grades/student/${studentId}`, requestOptions)
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
                        headers: {'Authorization': `Bearer ${localStorage.getItem('authToken')}`}
                    }
                    const response = await fetch(`http://`+apiUrl+`/api/grades/${gradeId}`, requestOptions)
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