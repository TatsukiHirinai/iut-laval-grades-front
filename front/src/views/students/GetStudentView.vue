<script>
const apiUrl = import.meta.env.VITE_API_URL;
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
            fetch('https://' + apiUrl + '/api/students/' + studentId, requestOptions)
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
    <div class="student-details-solo">
        <div class="header">
            <RouterLink to="/students" class="back-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left">
                    <line x1="19" x2="5" y1="12" y2="12"></line>
                    <polyline points="12 19 5 12 12 5"></polyline>
                </svg>
                Retour à la liste
            </RouterLink>
        </div>

        <div class="student-card">
            <div class="student-info">
                <h1>{{ student.firstName }} {{ student.lastName }}</h1>
                <p><strong>Numéro étudiant:</strong> {{ student.studentId }}</p>
            </div>
            <button class="download-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Relevé de notes
            </button>
        </div>

        <table class="student-details-table">
            <tbody>
                <tr>
                    <td><strong>Email</strong></td>
                    <td>{{ student.email }}</td>
                </tr>
                <tr>
                    <td><strong>Date de naissance</strong></td>
                    <td>{{ formatDate(student.dateOfBirth) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>