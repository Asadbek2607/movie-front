<template><!-- Header section -->
    <div class="row border-bottom">
        <!--<header class="header p-0">
            <nav class="navbar navbar-expand-lg bg-secondary">
                <div class="container-fluid">
                    <router-link class="navbar-brand" to="/">
                        <img src="../../public/img/favicon.png" alt="logo" width="45">
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
                        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                            <li class="nav-item">
                                <router-link class="nav-link active text-white" aria-current="page"
                                    to="/">Home</router-link>
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
                        <form role="search">
                            <input class="form-control me-2" type="search" placeholder="Start typing to search ..."
                                aria-label="Search" v-model="searchTerm">
                        </form>
                        <router-link class="nav-link text-white" to="/login">Log In</router-link>
                        <router-link class="nav-link text-white" to="/sign-up">Sign Up</router-link>
                        <div class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Account
                            </a>
                            <ul class="dropdown-menu">
                                <router-link class="dropdown-item" to="/movie-list">Your Wishlist</router-link>

                                <router-link to="/add-movie" class="dropdown-item">Log Out</router-link>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header> -->
        <!-- Navbar -->
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-0">
            <!-- Container wrapper -->
            <div class="container-fluid">
                <!-- Navbar brand -->
                <router-link class="navbar-brand" to="/">
                    <img src="../../public/img/favicon.png" alt="logo" width="45" />
                </router-link>

                <!-- Toggle button -->
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
                    aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Collapsible wrapper -->
                <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <!-- Home btn -->
                        <router-link class="nav-link active text-white" aria-current="page" to="/">Home</router-link>
                        <!-- Dropdown -->
                        <div v-if="!isLoggedIn" class="nav-item dropdown w-25">
                            <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Manage
                            </a>
                            <ul class="dropdown-menu bg-secondary">
                                <router-link class="dropdown-item text-white" to="/movie-list">Movie List</router-link>
                                <router-link to="/add-movie" class="dropdown-item text-white">Add Movie</router-link>
                            </ul>
                        </div>
                    </ul>
                    <!-- Search -->
                    <form role="search" class="">
                        <input class="form-control me-2" type="search" placeholder="Start typing to search ..."
                            aria-label="Search" v-model="searchTerm" />
                    </form>

                    <!-- Account -->
                    <div class="navbar-nav d-lg-flex flex-row ms-xl-5 me-1">
                        <div class="nav-item d-lg-flex flex-row me-5 me-lg-0">
                            <div class="nav-item dropdown" v-if="isLoggedIn">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Account
                                </a>
                                <ul class="dropdown-menu bg-secondary">
                                    <router-link class="dropdown-item text-white" to="/movie-list">Your Wishlist</router-link>
                                    <router-link to="/add-movie" class="dropdown-item text-white">Log Out</router-link>
                                </ul>
                            </div>
                            <div v-if="!isLoggedIn" class="d-flex flex-row">
                                <router-link class="nav-link text-white" to="/login">Log In</router-link>
                                <router-link class="nav-link text-white" to="/sign-up">Sign Up</router-link>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
            <!-- Container wrapper -->
        </nav>
        <!-- Navbar -->
    </div>

<!-- Header section end --></template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "HeaderRow",
    data() {
        return {
            searchTerm: "",
            isLoggedIn: false,
        };
    },
    computed: {
        ...mapGetters(["getMovies", "getCategories", "getFilteredMovies"]),
    
    },
    methods: {
        ...mapActions(["fetchMovies", "fetchCategories", "filterMoviesByName"]),
    },
    watch: {
        searchTerm() {
            //this.filterMoviesByName(this.searchTerm);
            this.$store.dispatch("filterMoviesByName", this.searchTerm);
        },
        isLoggedIn() {
            return localStorage.getItem('token') !== this.isLoggedIn;
        }
       
    },
};
</script>

<style scoped>
.dropdown-menu[data-bs-popper] {
    left: -55px;
}
.dropdown-item:hover{
    background-color: #000c18;
    color: #000c18;
}
</style>
