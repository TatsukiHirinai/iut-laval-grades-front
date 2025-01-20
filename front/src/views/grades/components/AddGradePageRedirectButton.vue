<template>
    <button @click="redirectToAddGradePage">Ajouter une note</button>
</template>

<script>
    export default {
        methods: {
            redirectToAddGradePage() {
                this.$router.push('/grades/new')
            }
        }
    }
</script>