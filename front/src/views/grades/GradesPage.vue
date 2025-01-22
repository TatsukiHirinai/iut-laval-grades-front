<script>
    const apiUrl = import.meta.env.VITE_API_URL
    export default {
        data() {
            return {
                students: [],
                grades: [],
                studentGrades: [],
                searchQuery: '',
                studentId: ''
            }
        },
        computed: {
            filteredStudents() {
                return this.students.filter(student => {
                    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();
                    return fullName.includes(this.searchQuery.toLowerCase()) ||
                        student.email.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                        student.studentId.toLowerCase().includes(this.searchQuery.toLowerCase());
                });
            }
        },
        async fetchStudents() {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    },
                };
                const response = await fetch('http://'+apiUrl+'/api/students', requestOptions);
                if (!response.ok) {
                    throw new Error('Network error');
                }
                const data = await response.json();
                this.students = data;
                console.log(this.students);
            } catch (error) {
                console.error('Error fetching student list:', error);
            }
        },
        async fetchGrades() {
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                    },
                };
                const response = await fetch('http://'+apiUrl+'/api/grades', requestOptions);
                if (!response.ok) {
                    throw new Error('Network error');
                }
                const data = await response.json();
                this.grades = data;
                console.log(this.grades);
            } catch (error) {
                console.error('Error fetching grades list:', error);
            }
        },
        methods: {
            async fetchStudentGrades(studentId) {
                try {
                    const requestOptions = {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                        },
                    };
                    const response = await fetch('http://'+apiUrl+`/api/grades/student/${studentId}`, requestOptions);
                    if (!response.ok) {
                        throw new Error('Network error');
                    }
                    const data = await response.json();
                    this.studentGrades = data;
                    console.log(this.studentGrades);
                } catch (error) {
                    console.error('Error fetching student grades list:', error);
                }
            },
            async deleteGrade(gradeId) {
                try {
                    const requestOptions = {
                        method: 'DELETE',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                        },
                    };
                    const response = await fetch('http://'+apiUrl+`/api/grades/${gradeId}`, requestOptions);
                    if (!response.ok) {
                        throw new Error('Network error');
                    }
                    console.log('Grade deleted successfully');
                } catch (error) {
                    console.error('Error deleting grade:', error);
                }
            }
        }
    }
</script>

<template>
    <h2>Notes des étudiants
        <RouterLink :to="{name: 'addGrade'}">
            <button>Ajouter une note</button>
        </RouterLink>
    </h2>
    <input type="text" v-model="searchQuery" placeholder="Rechercher..."><br>
    <select v-model="studentId" @change="fetchStudentGrades(studentId)">
        <option value="">Sélectionner un étudiant</option>
        <option v-for="student in filteredStudents" :key="student.id" :value="student.id">
            {{ student.firstName }} {{ student.lastName }}
        </option>
    </select><br>
    <div v-for="grade in grades" :key="grade.id" :value="grade.id">
        Etudiant : {{ grade.studentFirstName }} {{ grade.studentLastName }}
        Note : {{ grade.grade }}
        Cours : {{ grade.courseName }}
        Code du cours : {{ grade.courseCode }}
        Crédits : {{ grade.credits }}
        Semestre : {{ grade.semester }}
        Année : {{ grade.academicYear }}
        <RouterLink :to="{name: 'editGrade', params: {gradeId: grade.id}}">
            <button>Modifier</button>
        </RouterLink>
        <button @click="deleteGrade(grade.id)">Supprimer</button>
    </div>
    <div v-for="grade in studentGrades" :key="grade.id" :value="grade.id">
        Etudiant : {{ grade.studentFirstName }} {{ grade.studentLastName }}
        Note : {{ grade.grade }}
        Cours : {{ grade.courseName }}
        Code du cours : {{ grade.courseCode }}
        Crédits : {{ grade.credits }}
        Semestre : {{ grade.semester }}
        Année : {{ grade.academicYear }}
        <RouterLink :to="{name: 'editGrade', params: {gradeId: grade.id}}">
            <button>Modifier</button>
        </RouterLink>
        <button @click="deleteGrade(grade.id)">Supprimer</button>
    </div>
</template>
