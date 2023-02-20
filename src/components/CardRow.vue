<template>
    <div class="col mt-3 mb-4 rounded d-flex flex-wrap" style="background-color: #353A3E;" ><!--style="background-color: #81878d;-->
        <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-0 p-3 " v-for="movie of getMovies" :key="movie.id">
            <div class="card h-100">
                <img :src="'http://localhost:8505'+'/media/'+ movie.cardImage.filePath" class="card-img-top" alt="movie title">
                <div class="card-body">
                    <h5 class="card-title">{{ movie.name }}</h5>
                    <div class="my-2 fs-6 fw-light">{{ movie.year }} | {{ movie.category.name }}&thinsp;| {{ movie.rating/10 }} <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow"
                            class="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg> </div>
                </div>
                <div class="d-flex flex-column">
                    <router-link :to="'/watch-movie/' + movie.id" type="button" class="btn btn-dark mx-4 text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#fff" class="bi bi-plus"
                            viewBox="0 0 16 16">
                            <path
                                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                        </svg>
                        Watchlist
                    </router-link>
                    <router-link :to="'/watch-movie/' + movie.id" type="button"
                        class="btn btn-outline-dark  mx-5 mt-1 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                            class="bi bi-play-fill" viewBox="0 0 16 16">
                            <path
                                d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                        </svg>
                        Trailer
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "CardRow",
    computed: {
        ...mapGetters(['getMovies', 'getCategories']),
    },
    methods: {
        ...mapActions(['fetchMovies', 'fetchCategories']),
    },
    watch: {
        '$route.params.id'() {
            this.fetchMovies(this.$route.params.id)
        },
    },
    mounted() {
        this.fetchMovies()
    }
}
</script>

<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style> 
