<template>
    <div class="row justify-content-center">
        <div class="col-8 m-3 customBg rounded">
            <div class="container col-6 mt-5">
                <form ref="form" @submit.prevent="updateMovie" class="d-flex flex-column">
                    <div class="form-group mb-3">
                        <label for="name" class="text-white">Movie Name</label>
                        <input type="text" class="form-control" id="name" v-model="form.name" required>
                    </div>
                    <div class="form-group mb-3">
                        <label for="description" class="text-white">Description</label>
                        <textarea 
                            class="form-control" 
                            id="description" 
                            v-model="form.description" 
                            required
                        >
                        </textarea>
                    </div>
                    <div class="form-group mb-3">
                        <label for="year" class="text-white">Year</label>
                        <input class="form-control" @input="restrictYearInput" type="number" id="year"
                            v-model="form.year" required min="1800" max="2023">
                    </div>
                    <div class="form-group mb-5">
                        <label for="category" class="text-white form-label">Category</label>
                        <br>
                        <label for="category" class="text-white form-label">Selected category: {{ form.categoryName }}</label>
                        <select 
                            class="form-control form-select" 
                            v-model="form.category" 
                            id="category"
                        >
                            <option 
                                v-for="category in getCategories" 
                                :value="'api/categories/' + category.id"
                                :key="category.id"
                            >
                                {{ category.name }}
                            </option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-dark mb-3 mx-auto">Edit Movie</button>
                </form>
                <div class="alert alert-success position-fixed top-50 start-50 translate-middle" role="alert"
                    v-if="showSuccessAlert">
                    Movie edited successfully!
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'


export default {
    name: 'EditMovie',
    data() {
        return {
            showSuccessAlert: false,
            form: {
                id: null,
                name: '',
                description: '',
                year: '',
                category: '',
                categoryName: ''

            }
        }
    },
    // get categories from store using mapGetters
    computed: {
        ...mapGetters(['getCategories', 'getMovie']),
    },
   
    // add movie using mapActions
    methods: {
        ...mapActions(['editMovie', 'fetchMovie', 'fetchCategories']),

        updateMovie() {
            this.editMovie(this.form)
                .then(() => {
                    //show success message
                    this.showSuccessAlert = true;
                    setTimeout(() => {
                        this.showSuccessAlert = false;
                    }, 3000);
                    //reset form
                    this.form = {
                        name: '',
                        description: '',
                        category: '',
                        year: ''
                    }
                })
                .catch(() => {
                    alert('Error adding movie')
                })
        }
    },
    // fetch categories when component is mounted (created) 
    mounted() {
        this.fetchCategories()
        // console.log(this.$route.params.movieId)
        
        this.fetchMovie(this.$route.params.movieId)
            .then(() => {
                this.form.id = this.getMovie.id;
                this.form.name = this.getMovie.name;
                this.form.description = this.getMovie.description;
                this.form.year = this.getMovie.year;
                this.form.category = this.getMovie.category.id;
                this.form.categoryName = this.getMovie.category.name;

            })
            .catch((error) => {
                alert('Error fetching movie')
                console.log(error)
            })        
    }

}
</script>
<style scoped>
.customBg {
    background-color: #848B92;
    background-image: url("../../public/img/dark-denim-3.png");

}
</style>



