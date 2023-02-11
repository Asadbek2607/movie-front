<template>

    <div class="row pb-3 watchMoveBg">
        <div class="col-3">
            <div class="card mt-3" style="width: 18rem;">
                <img src="../../public/img/2.jpg" class="card-img-top" alt="Movie Poster">
                <div class="card-body">
                    <h5 class="card-title">{{ getMovie.name }} </h5>
                    <p class="card-text"> {{ getMovie.description }} </p>
                    <hr>
                    <p class="card-text">
                        <small class="text-muted">
                            <strong>Year:</strong> {{getMovie.year}} &emsp;
                            <strong>Category:</strong> {{getMovie.categoryName}} &emsp;
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
.watchMoveBg {
    background-color: #848B92;
    background-image: url("../../public/img/dark-denim-3.png");
}
</style>