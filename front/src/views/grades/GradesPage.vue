<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'

    const router = useRouter()
    const input = ref('')

    function goToAddGradePage() {
        router.push('/grades/new')
    }
</script>

<template>
    <h2>Notes des étudiants <button @click="goToAddGradePage">Ajouter une note</button></h2>
    <input v-model="input" type="text" placeholder="Rechercher..."><br>
    <select></select><br>
    <div></div>
</template>