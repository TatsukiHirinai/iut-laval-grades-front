<script>
const apiUrl = import.meta.env.VITE_API_URL;
export default {
    data() {
        return {
            students: [],
            searchQuery: ''
        };
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
    async created() {
        try {
            const requestOptions = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
                },
            };
            const response = await fetch('https://'+apiUrl+'/api/students', requestOptions);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            this.students = data;
            console.log(this.students);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    }
};
</script>

<template>
    <div class="container">
        <div class="header">
            <h1>Liste des étudiants</h1>
            <RouterLink to="/students/add">
                <button>Ajouter un étudiant</button>
            </RouterLink>
        </div>

        <div class="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input type="text" v-model="searchQuery" placeholder="Rechercher un étudiant..." />
        </div>

        <div class="student-list">
            <ul class="ul-student">
                <li v-for="student in filteredStudents" :key="student.id" class="student-item">
                    <RouterLink :to="{ name: 'getstudent', params: { id: student.id } }" class="student-details">
                        <div>
                            <p class="student-name">{{ student.firstName }} {{ student.lastName }}</p>
                            <p class="student-email">{{ student.email }}</p>
                        </div>
                    </RouterLink>
                    <div>
                        <p class="student-id">{{ student.studentId }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>