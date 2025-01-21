<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router';

var courses = ref([]);
var status = ref('');
var code = ref('');
var nom = ref('');
var credit = ref('');
var description = ref('');

const apiUrl = import.meta.env.VITE_API_URL;
const router = useRouter();
const route = useRoute();
const courseId = route.params.id;

async function ModifyCourses(code, nom, credit, description) {
    const requestOptions = {
        method: 'PUT',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ code: code, name: nom, credits: credit, description: description })
    };
    try {
        const response = await fetch('https://'+apiUrl+'/api/courses/'+courseId, requestOptions);
        if (!response.ok) {
            status.value = 'There was a problem please try again';
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        status.value = 'The course has been added successfully';
        router.push('/courses');
        return data;
    } catch (error) {
        status.value = 'There was a problem please try again';
        return null;
    }

}

async function fetchCourses(courseId) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
        },
    };
    try {
        const response = await fetch('https://'+apiUrl+'/api/courses', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        courses.value = data;

        const course = courses.value.find(course => course.id == courseId);
        if (course) {
            // Update form fields with course data
            code.value = course.code;
            nom.value = course.name;
            credit.value = course.credits;
            description.value = course.description;
        }
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

onMounted(() => {
    fetchCourses(courseId);
});

</script>

<template>
    <div class="container">
        <div class="form-header">
            <h1>Ajouter un cours</h1>
        </div>

        <form @submit.prevent="submitForm" class="course-form">
            <div class="form-group">
                <label for="code">Code du cours</label>
                <input id="code" v-model="code" type="text" minlength="2" placeholder="Code du cours" required />
            </div>

            <div class="form-group">
                <label for="nom">Nom du cours</label>
                <input id="nom" v-model="nom" type="text" placeholder="Nom du cours" required />
            </div>

            <div class="form-group">
                <label for="credits">Crédits</label>
                <input id="credits" v-model="credit" type="number" min="1" max="60" placeholder="0" required />
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea id="description" v-model="description" rows="4" placeholder="Description"></textarea>
            </div>

            <div class="form-actions">
                <RouterLink to="/courses">
                    <button type="button" class="button cancel">Annuler</button>
                </RouterLink>
                <button type="submit" class="button add"
                    @click="ModifyCourses(code, nom, credit, description)">Modifier
                </button>
            </div>
        </form>
    </div>
</template>