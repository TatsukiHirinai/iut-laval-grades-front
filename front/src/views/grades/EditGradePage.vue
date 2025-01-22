<script>
    const apiUrl = import.meta.env.VITE_API_URL
    export default {
        data() {
            return {
                grade: ''
            }
        },
        methods: {
            async editGrade(grade) {
                try {
                    const requestOptions = {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json',
                            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
                        },
                        body: JSON.stringify({
                            grade: grade
                        })
                    }
                    const response = await fetch('http://'+apiUrl+`/api/grades/${window.location.pathname.split('/')[2]}`, requestOptions)
                    if (!response.ok) {
                        console.log('Network error')
                    }
                    console.log('Modification successful')
                } catch (error) {
                    console.error('Error editing grade', error)
                }
            } catch (error) {
                console.error('Error editing grade', error)
            }
        }
    }
</script>

<template>
    <h2>Modifier une note</h2>
    <label>Note</label><br>
    <input type="number" v-model="grade" placeholder="0"><br>
    <RouterLink>
        <button>Annuler</button>
    </RouterLink>
    <button @click="editGrade(grade, currentURL)">Modifier</button>
    <div>{{ status }}</div>
</template>
