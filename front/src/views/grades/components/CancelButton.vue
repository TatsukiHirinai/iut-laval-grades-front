<template>
    <button @click="redirectToGradesPage()">Annuler</button>
</template>

<script>
    export default {
        methods: {
            redirectToGradesPage() {
                this.$router.push('/grades')
            }
        }
    }
</script>