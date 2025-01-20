<script>
export default {
    data() {
        return {
            students: []
        };
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
            const response = await fetch('http://localhost:3000/api/students', requestOptions);
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
    <RouterLink to="/students/add">
        <button>Add Student</button>
    </RouterLink>
    <div>
        <h1>List of Students</h1>
        <ul>
            <li v-for="student in students" :key="student.id">
                <RouterLink :to="{ name: 'getstudent', params: { id: student.id } }">
                    <div>{{ student.firstName }} {{ student.lastName }} {{ student.email }} {{ student.studentId }}</div>
                </RouterLink>
            </li>
        </ul>
    </div>
</template>