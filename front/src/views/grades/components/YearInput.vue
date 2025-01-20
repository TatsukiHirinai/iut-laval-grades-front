<template>
    <label>
        Année<br>
        <input type="text" v-model="year" placeholder="2023-2024" value="2025">
    </label>
</template>

<script>
    export default {
        emits: ['update'],
        data() {
            return {
                year: ''
            }
        },
        watch: {
            year(newValue) {
                this.$emit('update', {year: newValue})
            }
        }
    }
</script>