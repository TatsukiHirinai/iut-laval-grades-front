<template>
    <button class='search-button' v-on:click='search()'>Search</button>
</template>

<script>
    function search() {
        console.log(querySelector('class=["search-bar"]'));
    }
</script>