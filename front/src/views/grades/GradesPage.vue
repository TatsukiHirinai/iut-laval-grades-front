<script setup>
    import { ref } from 'vue'

    const input = ref('')

    function goToAddGradePage() {
        this.$router.push('/grades/new')
    }
</script>

<template>
    <h2>Notes des étudiants <button @click="goToAddGradePage">Ajouter une note</button></h2>
    <input v-model="input" type="text" placeholder="Rechercher..."><br>
    <select></select><br>
    <div></div>
</template>