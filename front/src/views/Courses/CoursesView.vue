<script setup>
import { ref , onMounted , computed} from 'vue'
import { useRouter } from 'vue-router';

const courses = ref([]);
const searchTerm = ref('');

const token = ref(localStorage.getItem('authToken'));

const router = useRouter();

async function fetchCourses() {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token.value}`, // Use the token from ref
        },
    };
    try {
        const response = await fetch('http://localhost:3000/api/courses', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        courses.value = data; 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
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

function addCourse() {
    router.push('/courses/new');
}
</script>  

<template>
    <div>
      <h1>Liste des cours</h1>
      <!-- Search Input -->
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Rechercher un cours..."
        class="search-bar"
      />
  
      <!-- Table -->
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
          <!-- Loop through filtered courses -->
          <tr v-for="course in filteredCourses" :key="course.code">
            <td>{{ course.code }}</td>
            <td>{{ course.name }}</td>
            <td>{{ course.credits }}</td>
            <td>
              <button @click="editCourse(course)" class="edit-btn">✏️ Modifier</button>
              <button @click="deleteCourse(course)" class="delete-btn">🗑️ Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Add Course Button -->
      <button @click="addCourse" class="add-btn">Ajouter un cours</button>
    </div>
  </template>