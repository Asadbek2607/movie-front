import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        // Fetch movies from database and update movies list in store state
        fetchMovies(context, categoryId = null) {
            let categoryUrl = ''

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
                        // commit updateMovies mutation and pass 'movies' list as payload
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
        // Add movie to database and update movies list in store state 
        addMovie(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/movies', data)
                    .then((response) => {
                        console.log('Movie added successfully')
                        console.log(response.data.movies)
                        // commit addMovie mutation and pass 'movie' object as payload
                        context.commit('addMovie', response.data)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Error adding movie '+error)
                        reject()
                    })
            })
        },
        // show success alert after adding movie to database 
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
        // Update movies list in store state
        updateMovies(state, movies) {
            state.movies = movies
        },
        // Add movie to movies list in store state
        addMovie(state, movie) {
            state.movie = movie
        },
        // Update filtered movies list in store state
        updateFilteredMovies(state, filteredMovies) {
            state.filteredMovies = filteredMovies;
        },
        setSuccessAlert(state, value) {
            state.showSuccessAlert = value
        },

    },
    state: {
        // Movies list
        movies: {
            models: [],
            totalItems: 0,
        },
        // Movie object to add to database 
        movie:{
            name: null,
            description: null,
            category: null,
            year: null
        },
        // Filtered movies list
        filteredMovies: {
            models: [],
            totalItems: 0,
        }
    },
    getters: {
        getMovies(state) {
            return state.movies.models
        },
        getMovie(state) {
            return state.movie
        },
        getFilteredMovies(state) {
            return state.filteredMovies.models;
        }
    }
}