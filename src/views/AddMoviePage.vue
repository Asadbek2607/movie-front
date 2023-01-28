<template>
  <div class="container col-6 mt-5">
    <form ref="form" @submit.prevent="submit">
      <div class="form-group mb-3">
        <label for="name">Movie Name</label>
        <input type="text" class="form-control" id="name" v-model="form.name" required>
      </div>
      <div class="form-group mb-3">
        <label for="description">Description</label>
        <textarea class="form-control" id="description" v-model="form.description" required></textarea>
      </div>
      <div class="form-group mb-5">
        <label for="category">Category</label>
        <select class="form-control form-select" v-model="form.category" id="category">
          <option v-for="category of getCategories" :value="'api/categories/'+category.id" :key="category.id">{{ category.name }}</option>
        </select>
      </div>
      <button  class="btn btn-primary">Add Movie</button>
    </form>
    <div class="alert alert-success mt-5" role="alert" v-if="showSuccessAlert">
      Movie added successfully—check it out!
    </div>
  </div>
</template>
<script>
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'AddMoviePage',
  data() {
    return {
      showSuccessAlert: false,
      form: {
        name: '',
        description: '',
        category: ''
      }
    }
  },
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods: {
    ...mapActions(['fetchCategories', 'addMovie']),

      submit(){
        this.addMovie(this.form)
            .then(()=>{
              //show success message
              this.showSuccessAlert = true;
              setTimeout(() => {
                this.showSuccessAlert = false;
              }, 3000);
              this.$refs.form.reset()

            })
            .catch(()=>{
              alert('Error adding movie')
            })
      }
    },

  mounted() {
    this.fetchCategories()
  }

}
</script>
<style scoped>

</style>



