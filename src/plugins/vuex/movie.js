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

                        // create movies object to get movies data from response
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

        // POST movie to database and update movies list in store state 
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
                        console.log('Error adding movie ' + error)
                        reject()
                    })
            })
        },
        // show success alert after adding movie to database 
        showSuccessAlert(context) {
            context.commit('setSuccessAlert', true)
        },

        // GET one movie by id 
        fetchMovie(context, movieId) {
            return new Promise((resolve, reject) => {
                axios.get('http://localhost:8505/api/movies/' + movieId)
                    .then((response) => {

                        // create movie object to get movie data from response 
                        let movie = {
                            id: response.data.id,
                            name: response.data.name,
                            description: response.data.description,
                            category: response.data.category,
                            year: response.data.year,
                            categoryName: response.data.category.name,
                            rating: response.data.rating,
                            cardImage: response.data.cardImage.filePath,
                            

                        }
                        console.log('Movie fetched successfully')
                        console.log(response.data)
                        // commit addMovie mutation and pass 'movie' object as payload
                        context.commit('getMovie', movie)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Error fetching movie ' + error)
                        reject()
                    })
            })
        },
        // PUT one movie by id
        editMovie(context, data) {
            return new Promise((resolve, reject) => {
                axios.put(`http://localhost:8505/api/movies/${data.id}`, data)
                    .then((response) => {
                        console.log('Movie updated successfully')
                        console.log(response.data)
                        // commit updateMovie mutation and pass 'movie' object as payload
                        context.commit('updateMovie', response.data)

                        // fetchMovies after updating movie to update movies list in store state
                        //context.dispatch('fetchMovies');
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Error updating movie ' + error)
                        reject()
                    })
            })
        },
        
        // DELETE one movie by id 
        removeMovie(context, movieId) {
            return new Promise((resolve, reject) => {
                axios.delete('http://localhost:8505/api/movies/' + movieId)
                    .then(() => {
                        console.log('Movie deleted successfully')
                        
                        // fetchMovies after deleting movie to update movies list in store state 
                        context.dispatch('fetchMovies');
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Error deleting movie ' + error)
                        reject()
                    })
            })
        },

        // FILTER movies by name
        filterMoviesByName(context, name) {
            return new Promise((resolve, reject) => {
                axios.get(`http://localhost:8505/api/movies?name=${name}`)
                    .then((response) => {

                        // create filteredMovies object to get filtered movies data from response
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
        // Add movie  
        addMovie(state, movie) {
            state.movie = movie
        },
        // Get one movie by id
        getMovie(state, movie) {
            state.movie = movie
        },
        updateMovie(state, movie) {
            state.movie = movie
        },
       
        // Delete movie from movies 
        deleteMovie(state, movieId) {
            // get movie index by id and delete it from movies list 
            state.movies = state.movies.filter(movie => movie.id !== movieId)
        },
        setIsMovieDeleted(state, isMovieDeleted) {
            state.isMovieDeleted = isMovieDeleted
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
        movie: {
            name: null,
            description: null,
            category: null,
            year: null,
            rating: null,
            categoryName: null,
            cardImage: null,

            

        },
       
        isMovieDeleted: false,
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
        },
        
    }
}