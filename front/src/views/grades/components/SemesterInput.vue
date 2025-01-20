<template>
    <label>
        Semestre<br>
        <input type="text" v-model="semester" placeholder="S1, S2, etc.">
    </label>
</template>

<script>
    export default {
        emits: ['update'],
        data() {
            return {
                semester: ''
            }
        },
        watch: {
            semester(newValue) {
                this.$emit('update', {semester: newValue})
            }
        }
    }
</script>