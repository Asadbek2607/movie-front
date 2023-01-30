import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        fetchMovies(context, categoryId=null) {
            let categoryUrl =''

            if (categoryId) {
                categoryUrl = '?category=' + categoryId
            }
            
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8505/api/movies' + categoryUrl)
                    .then((response) => {
                        console.log('Kinolar olindi')
                        console.log(response)

                        let movies = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra: totalItems']
                        }

                        context.commit('updateMovies', movies)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Kinolar olishda xatolik!')
                        console.log(error)
                        reject()
                    })
            })
        },
        addMovie(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/movies', data)
                    .then((response) => {

                        context.commit('addMovie', response.data)
                        console.log('Movie added successfully')
                        console.log(response.data.movies)
                        resolve()
                        context.dispatch('showSuccessAlert').then(r => {
                         
                        })

                    })
                    .catch((error) => {
                        console.log('Error adding movie')
                        console.log(error)
                        reject()
                    })
            })
        },
        showSuccessAlert(context) {
            context.commit('setSuccessAlert', true)
        },

        // Filter movies by name
        filterMoviesByName(context, name) {
            return new Promise((resolve, reject) => {
                axios.get(`http://localhost:8505/api/movies?name=${name}`)
                    .then((response) => {
                        let filteredMovies = {
                            models: response.data['hydra:member'],
                            totalItems: response.data['hydra:totalItems']
                        };
        
                        context.commit('updateMovies', filteredMovies);
                        resolve();
                    })
                    .catch((error) => {
                        console.log('Error filtering movies by name');
                        console.log(error);
                        reject();
                    });
            });
        },
        

    },
    mutations: {
        updateMovies(state, movies) {
            state.movies = movies
        },
        addMovie(state, movie) {
            state.movies.models.push(movie)
        },
        updateFilteredMovies(state, filteredMovies) {
            state.filteredMovies = filteredMovies;
        },
        setSuccessAlert(state, value) {
            state.showSuccessAlert = value
        },

    },
    state: {
        movies: {
            models: [],
            totalItems: 0,
        },
        filteredMovies: {
            models: [],
            totalItems: 0,
        }
    },
    getters: {
        getMovies(state) {
            return state.movies.models
        },
        getFilteredMovies(state) {
            return state.filteredMovies.models;
        }
    }
}