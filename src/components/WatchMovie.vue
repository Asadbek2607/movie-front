<template>

    <div class="row pb-3 watchMovieBg bg-dark">
        <div class="col-3">
            <div class="card mt-3" style="width: 20rem;">
                <img :src="'http://localhost:8505/media/' + getMovie.cardImage" class="card-img-top " alt="movie title">
                <div class="card-body">
                    <h5 class="card-title">{{ getMovie.name }} </h5>
                    <p class="card-text"> {{ getMovie.description }} </p>
                    <hr>
                    <p class="card-text">
                        <small class="text-muted">
                            <strong>Year:</strong> {{getMovie.year}} &thinsp;
                            <strong>Category:</strong> {{getMovie.categoryName}} &thinsp;
                            |  {{  getMovie.rating/10 }} <svg
                            xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow"
                            class="bi bi-star-fill mb-1" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg> 
                        </small>
                    </p>
                </div>
            </div>
        </div>
        <div class="col mt-3">
            <iframe width="924" height="520" src="https://www.youtube.com/embed/AbyJignbSj0"
                title="Gemini Man (2019) - Official Trailer - Paramount Pictures" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>
            </iframe>
        </div>

    </div>

</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
    name: "MovieInfoPage",
    computed: {
        ...mapGetters(['getMovie', 'getCategories']),
    },
    methods: {
        ...mapActions(['fetchMovie', 'fetchCategories']),
    },
    mounted() {
        this.fetchMovie(this.$route.params.movieId)
    }
}
</script>

<style scoped>
.watchMovieBg {
    background-image: url("../../public/img/dark-denim-3.png");
}

.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>