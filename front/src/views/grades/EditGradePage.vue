<script setup>
    import { useRouter } from 'vue-router'

    const router = useRouter()

    function goToGradesPage() {
        router.push('/grades')
    }

    var currentURL = window.location.pathname.split('/')[2]
</script>

<template>
    <h2>Modifier une note</h2>
    <label>Note</label><br>
    <input type="number" v-model="grade" placeholder="0"><br>
    <button @click="goToGradesPage">Annuler</button>
    <button @click="editGrade(grade, currentURL)">Modifier</button>
    <div>{{ status }}</div>
</template>

<script>
    export default {
        data() {
            return {
                grade: '',
                status: ''
            }
        },
        methods: {
            async editGrade(grade, currentURL) {
                try {
                    const requestOptions = {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        },
                        body: JSON.stringify({grade: grade})
                    }
                    const response = await fetch(`http://localhost:3000/api/grades/${currentURL}`, requestOptions)
                    if (!response.ok) {
                        console.log('Network error')
                    } else {
                        console.log('Modification successful')
                        status = 'success !'
                    }
                } catch (error) {
                    console.error('Error editing grade', error)
                }
            }
        }
    }
</script>