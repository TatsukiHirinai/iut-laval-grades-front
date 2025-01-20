<script setup>
    import HeaderPlaceholder from './components/HeaderPlaceholder.vue'
    import AddGradePageRedirectButton from './components/AddGradePageRedirectButton.vue'
    import SearchBar from './components/SearchBar.vue'
    import SelectStudentsDropdown from './components/SelectStudentsDropdown.vue'
    import GradesTable from './components/GradesTable.vue'
</script>

<template>
    <HeaderPlaceholder /><br>
    <h2>Notes des étudiants <AddGradePageRedirectButton /></h2>
    <SearchBar /><br>
    <SelectStudentsDropdown />
    <GradesTable />
</template>