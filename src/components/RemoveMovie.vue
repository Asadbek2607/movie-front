<template>

  <div class="row mx-5 table-responsive mt-2 ">
    <table class="table table-hover table-striped ">
      <thead class="table-dark">
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Cover</th>
          <th scope="col">Name</th>
          <th scope="col">Year</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody class="align-middle">

        <tr v-for="movie in getMovies" :key="movie.id">
          <th scope="row">{{ movie.id }}</th>
          <td><img src="../../public/img/3.jpg" alt="Picture Thumbnail 1" class="img-thumbnail"></td>
          <td>{{ movie.name }}</td>
          <td>{{ movie.year }}</td>
          <td>{{ movie.category.name }}</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFC720"
              class="bi bi-pencil-fill me-3" viewBox="0 0 16 16">
              <path
                d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
            </svg><svg @click="removeMovie(movie.id)" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
              fill="#F5564A" class="bi bi-trash" role="button" viewBox="0 0 16 16">
              <path
                d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path fill-rule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
            </svg></td>
        </tr>
        <div class="alert alert-success position-fixed top-50 start-50 translate-middle" role="alert" v-if="showSuccessAlert">
          Movie removed successfully!
        </div>

      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";



export default {
  name: 'RemoveMovie',
  data() {
    return {
      showSuccessAlert: false,
    }
  },
  methods: {
    ...mapActions(['fetchMovies']),
    removeMovie(id) {
      try {
        const confirmed = window.confirm('Are you sure you want to delete this movie?');
        if (confirmed) {
          this.$store.dispatch('removeMovie', id);
           //show success message
           this.showSuccessAlert = true;
                    setTimeout(() => {
                        this.showSuccessAlert = false;
                    }, 3000);
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
  computed: {
    ...mapGetters(['getMovies']),
  },
  mounted() {
    this.fetchMovies();

  },

}
</script>
<style scoped>
td img {
  width: 80px;
}
</style>



