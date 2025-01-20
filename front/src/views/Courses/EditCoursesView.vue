
<script>
export default {
    data() {
        return {
            course: {
                name: '',
                description: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission logic here
            console.log('Course data:', this.course);
        }
    }
};

function cancel() {
    router.push('/courses');
}
</script>

<template>
    <div class="edit-courses-view">
        <h1>Edit Course</h1>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="courseName">Course Name:</label>
                <input type="text" id="courseName" v-model="course.name" required />
            </div>
            <div class="form-group">
                <label for="courseDescription">Course Description:</label>
                <textarea id="courseDescription" v-model="course.description" required></textarea>
            </div>
            <button type="submit">Save</button>
        </form>
        <button @click="cancel()">Annuler</button>
    </div>
</template>

