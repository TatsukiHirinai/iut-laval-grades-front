<script>
const authToken = localStorage.getItem('authToken');

export default {
    name: 'GetStudentView',
    data() {
        return {
            student: null,
        };
    },
    created() {
        this.fetchStudentDetails();
    },
    methods: {
        fetchStudentDetails() {
            const studentId = this.$route.params.id;
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                }
            }
            fetch(`http://localhost:3000/api/students/${studentId}`, requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.student = data;
                })
                .catch(error => {
                    console.error('Error fetching student details:', error);
                });
        },
        formatDate(dateString) {
            const date = new Date(dateString);
            const day = String(date.getDate()).padStart(2, '0');
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        }
    },
};
</script>

<template>
    <div>
        <h1>Student Details</h1>
        <div v-if="student">
            <p><strong>Prénom :</strong> {{ student.firstName }}</p>
            <p><strong>Nom :</strong> {{ student.lastName }}</p>
            <p><strong>Numéro d'étudiant :</strong> {{ student.studentId }}</p>
            <p><strong>Email :</strong> {{ student.email }}</p>
            <p><strong>Date de naissance :</strong> {{ formatDate(student.dateOfBirth) }}</p>
        </div>
        <div v-else>
            <p>Loading...</p>
        </div>
    </div>
</template>