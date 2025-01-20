<script setup>
    import HeaderPlaceholder from './components/HeaderPlaceholder.vue'
    import SelectStudentDropdown from './components/SelectStudentDropdown.vue'
    import SelectCourseDropdown from './components/SelectCourseDropdown.vue'
    import GradeInput from './components/GradeInput.vue'
    import SemesterInput from './components/SemesterInput.vue'
    import YearInput from './components/YearInput.vue'
    import CancelButton from './components/CancelButton.vue'
    import AddGradeButton from './components/AddGradeButton.vue'
</script>

<template>
    <HeaderPlaceholder />
    <h2>Ajouter une note</h2>
    <SelectStudentDropdown /><br>
    <SelectCourseDropdown /><br>
    <GradeInput /><br>
    <SemesterInput /><br>
    <YearInput /><br>
    <CancelButton /><AddGradeButton />
</template>