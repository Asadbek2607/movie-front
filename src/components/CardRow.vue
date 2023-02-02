<template>
  <div class="col mt-3 mb-4 rounded d-flex flex-wrap" style="background-color: #81878d;">
    <div class="col-12 col-md-6 col-lg-4 col-xl-3 mt-0 p-3 " v-for="movie of getMovies" :key="movie.id" >
      <div class="card h-100">
        <img src="../../public/img/3.jpg" class="card-img-top" alt="Sherlock">
        <div class="card-body">
          <h5 class="card-title">{{ movie.name }}</h5>
          <div class="card-text" v-if="selectedMovie === movie.id" @mouseover="selectedMovie = movie.id"
            @mouseout="selectedMovie = null">
            {{ movie.description }}
          </div>

          <div class="card-text" v-else @mouseover="selectedMovie = movie.id" @mouseout="selectedMovie = null">
            {{ movie.description.split(' ').slice(0, 10).join(' ') }}
          </div>

          <div class="card-text" v-if="movie.description > 30">
            {{ movie.description + '... ' }}
          </div>
          <div  class="my-2 fs-6 fw-light">{{movie.year}} | {{movie.category.name}}</div>
          <router-link :to="'/watch-movie/'+ movie.id" type="button" class="btn btn-primary">Watch</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "CardRow",

  data() {
    return {
      selectedMovie: null,
    }
  },
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
    console.log(this.getMovies, 'Kinolar')
    this.fetchMovies()
  }
}
</script>

<style scoped>

</style> 
