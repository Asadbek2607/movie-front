import axios from "@/plugins/vuex/axios";

export default{
    actions:{
        fetchMovies(context){
            return new Promise((resolve,reject)=>{
                axios.get('http://localhost:8505/api/movies')
                    .then((response)=>{
                        console.log('Kinolar olindi')
                        console.log(response)

                        let movies = {
                            models: response.data['hydra:member'],
                            totalItems : response.data['hydra: totalItems']
                        }

                        context.commit('updateMovies', movies)
                        resolve()
                    })
                    .catch((error)=>{
                        console.log('Kinolar olishda xatolik!')
                        console.log(error)
                        reject()
                    })
            })
        }
    },
    mutations:{
        updateMovies(state, movies){
            state.movies = movies
        }
    },
    state:{
        movies:{
            models:[],
            totalItems:0,
        }
    },
    getters:{
        getMovies(state){
            return state.movies.models
        }
    }
}