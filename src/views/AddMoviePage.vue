<template>
    <div class="row justify-content-center">
        <div class="col-8 m-3 bg-light rounded">
            <AddMovie />
        </div>
    </div>
</template>

<script>

import AddMovie from "../components/AddMovie.vue";

export default {
    name: "HomePage",
    components: { AddMovie }
}
</script>

<style scoped>

</style>