<template>

  <div class="col mt-3 mb-5 rounded d-flex flex-wrap" style="background-color: #81878d;">

    <div
        class="col-12 col-md-6 col-lg-4 col-xl-3 mt-0 p-3"
        v-for="movie of getMovies"
        :key="movie.id"
    >
      <div class="card h-100">
        <img src="img/1.jpg" class="card-img-top" alt="Sherlock">
        <div class="card-body">
          <h5 class="card-title">{{ movie.name }}</h5>
          <p class="card-text">{{ movie.description }}<br>
            <small>2009 | {{ }}</small>
          </p>
          <router-link to="WatchMoviePage" class="btn btn-primary">Ko'rish</router-link>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CardRow",

  computed: {
    ...mapGetters(['getMovies'])
  },
  methods:{
    ...mapActions(['fetchMovies'])
  },
  mounted() {
    console.log(this.getMovies, 'Kinolar')
    this.fetchMovies()
  }
}
</script>

<style scoped>

</style>