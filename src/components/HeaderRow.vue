<template>
    <!-- Header section -->
    <div class="row">
        <header class="header p-0">
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../public/img/favicon.png" alt="logo" width="45">
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
                            style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <router-link class="nav-link active text-white" aria-current="page"
                                    to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link text-white" to="/login">Login</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Manage
                                </a>
                                <ul class="dropdown-menu">
                                    <li><router-link class="dropdown-item" to="/movie-list">Movie List</router-link>
                                    </li>
                                    <li><router-link to="/add-movie" class="dropdown-item">Add Movie</router-link></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                           
                        </ul>
                        <form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Start typing to search ..."
                                aria-label="Search" v-model="searchTerm">

                        </form>
                    </div>
                </div>
            </nav>
        </header>
    </div>
    <!-- Header section end -->
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "HeaderRow",
    data() {
        return {
            searchTerm: ''
        };
    },
    computed: {
        ...mapGetters(['getMovies', 'getCategories', 'getFilteredMovies']),
    },
    methods: {
        ...mapActions(['fetchMovies', 'fetchCategories', 'filterMoviesByName']),

    },
    watch: {
        searchTerm() {
            //this.filterMoviesByName(this.searchTerm);
            this.$store.dispatch('filterMoviesByName', this.searchTerm);

        },
    },

}
</script>

<style scoped>

</style>