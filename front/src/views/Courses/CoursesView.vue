<script setup>
import { ref, onMounted, computed } from "vue";
import { useRouter } from "vue-router";

const apiUrl = import.meta.env.VITE_API_URL;
const courses = ref([]);
const searchTerm = ref("");

const token = ref(localStorage.getItem("authToken"));

const router = useRouter();

async function fetchCourses() {
    const requestOptions = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    };
    try {
        const response = await fetch('https://'+apiUrl+'/api/courses', requestOptions);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        courses.value = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
}

onMounted(() => {
    fetchCourses();
});

const filteredCourses = computed(() =>
    courses.value.filter((course) =>
        course.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
);

async function deleteCourse(id) {
    const requestOptions = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token.value}`,
        },
    };
    try {
        const response = await fetch("http://localhost:3000/api/courses/" + id, requestOptions);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
    fetchCourses();
}

function editCourse(course) {
    router.push({ name: "editCourses", params: { id: course.id } });
}
</script>

<template>
    <div class="container">
        <div class="header">
            <h1>Liste des cours</h1>
            <RouterLink to="/courses/new">
                <button class="add-btn">Ajouter un cours</button>
            </RouterLink>
        </div>

        <div class="search-bar">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
            </svg>
            <input type="text" v-model="searchTerm" placeholder="Rechercher un cours..." />
        </div>

        <table class="course-table">
            <thead>
                <tr>
                    <th>Code</th>
                    <th>Nom</th>
                    <th>Crédits</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="course in filteredCourses" :key="course.code">
                    <td class="course-link">{{ course.code }}</td>
                    <td>{{ course.name }}</td>
                    <td>{{ course.credits }}</td>
                    <td class="actions">
                        <button @click="editCourse(course)" class="icon-btn edit-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <path d="M12 20h9"></path>
                                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z"></path>
                            </svg>
                        </button>
                        <button @click="deleteCourse(course.id)" class="icon-btn delete-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6l-2 14H7L5 6m5 0V4h4v2m-2 4v6m4-6v6"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>