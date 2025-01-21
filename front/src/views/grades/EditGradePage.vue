<script setup>
import { useRouter } from 'vue-router'

const apiUrl = import.meta.env.VITE_API_URL;

const router = useRouter()

function goToGradesPage() {
    router.push('/grades')
}

var currentURL = window.location.pathname.split('/')[2]
</script>

<template>
    <div class="container">
        <h2>Modifier une note</h2>

        <form class="form-wrapper">
            <div class="form-group">
                <label for="student">Nouvelle note :</label>
                <input type="number" v-model="grade" placeholder="0"><br>
            </div>

            <div class="form-buttons">
                <button type="button" class="button cancel" @click="goToGradesPage">
                    Annuler
                </button>
                <button type="button" class="button add" @click="editGrade(grade, currentURL)">
                    Ajouter
                </button>
            </div>
        </form>
    </div>
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
                    body: JSON.stringify({ grade: grade })
                }
                const response = await fetch(`http://` + apiUrl + `/api/grades/${currentURL}`, requestOptions)
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