<script>
const authToken = localStorage.getItem('authToken');
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
            fetch(`https://'+apiUrl+'/api/students/${studentId}`, requestOptions)
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
    <div class="container">
        <div class="header">
            <RouterLink to="/students">
                <button>Retour</button>
            </RouterLink>
        </div>

        <div v-if="error" class="error-message">
            <p>{{ error }}</p>
        </div>

        <div v-else-if="isLoading">
            <p>Loading...</p>
        </div>

        <div v-else>
            <div>
                <p>{{ student.firstName }}</p>
                <p>{{ student.lastName }}</p>
                <p><strong>Numéro d'étudiant :</strong> {{ student.studentId }}</p>
                <p><strong>Email :</strong> {{ student.email }}</p>
                <p><strong>Date de naissance :</strong> {{ formattedDateOfBirth }}</p>
                <button><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-download h-5 w-5 mr-2">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" x2="12" y1="15" y2="3"></line>
                    </svg>Relevé de notes</button>
            </div>
            <div>
                Notes
            </div>
        </div>
    </div>
</template>