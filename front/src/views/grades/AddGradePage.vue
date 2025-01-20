<script setup>
    import { ref } from 'vue'
    import HeaderPlaceholder from './components/HeaderPlaceholder.vue'
    import SelectStudentDropdown from './components/SelectStudentDropdown.vue'
    import SelectCourseDropdown from './components/SelectCourseDropdown.vue'
    import GradeInput from './components/GradeInput.vue'
    import SemesterInput from './components/SemesterInput.vue'
    import YearInput from './components/YearInput.vue'
    import CancelButton from './components/CancelButton.vue'

    const student  = ref('')
    const course   = ref('')
    const grade    = ref('')
    const semester = ref('')
    const year     = ref('')
    var   status   = ref('')

    async function fetchData(student, course, grade, semester, year) {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                student: student,
                course: course,
                grade: grade,
                semester: semester,
                year: year
            })
        }
        try {
            const response = await fetch('http://localhost:3000/api/grades', requestOptions)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const data = await response.json()
            status.value = 'success'
        } catch (error) {
            console.error('There was a problem with the fetch operation:', error)
            status.value = 'Input error'
        }
    }
</script>

<template>
    <HeaderPlaceholder />
    <h2>Ajouter une note</h2>
    <SelectStudentDropdown /><br>
    <SelectCourseDropdown /><br>
    <GradeInput /><br>
    <SemesterInput /><br>
    <YearInput /><br>
    <CancelButton />
    <button @click="fetchData()">Ajouter</button>
</template>