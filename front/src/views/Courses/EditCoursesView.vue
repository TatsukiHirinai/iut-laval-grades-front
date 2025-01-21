<script setup>
import { ref , onMounted , computed} from 'vue'
import { useRoute , useRouter } from 'vue-router';

var courses = ref([]);
var status = ref('');
var code = ref('');
var nom = ref('');
var credit = ref('');
var description = ref('');

const router = useRouter();
const route = useRoute();
const courseId = route.params.id;

async function ModifyCourses(code , nom , credit , description) {
    const requestOptions = {
		method: 'PUT',
		headers: { 
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`,
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({code: code, name: nom , credits : credit , description : description})
	};
    try {
        const response = await fetch('http://localhost:3000/api/courses/'+courseId, requestOptions);
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

function cancel() {
    router.push('/courses');
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
        const response = await fetch('http://localhost:3000/api/courses', requestOptions);
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
        <form @submit.prevent="submitForm">
            <br><br>
            <p>Code du cours (min 2 charactere)</p>
            <input v-model="code" placeholder="code du cours" type="text"
            minlength="2"/>
            <br><br>
            <p>Nom du cours</p>
            <input v-model="nom" placeholder="nom du cours" type="text"/>
            <br><br>
            <p>Crédits du cours (entre 1 et 60)</p>
            <input v-model="credit" type="number"     
                min="1"
                max="60"
                placeholder="Enter a number between 1 and 100"/>
            <br><br>
            <p>Desciption du cours</p>
            <input v-model="description" placeholder="description" type="text"/>
            <br><br>
            <p>{{ status }}</p>
            <button @click="ModifyCourses(code , nom , credit , description)">Modifier</button>
            <button @click="cancel()">Annuler</button>
        </form>

</template>