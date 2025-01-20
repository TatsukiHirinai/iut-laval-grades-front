<template>
    <label>
        Note<br>
        <input type="number" v-model="grade" value="0" />
    </label>
</template>

<script>
    export default {
        emits: ['update'],
        data() {
            return {
                grade: ''
            }
        },
        watch: {
            grade(newValue) {
                this.$emit('update', {grade: newValue})
            }
        }
    }
</script>