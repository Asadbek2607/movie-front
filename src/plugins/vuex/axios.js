import axios from "axios";
import store from "@/plugins/vuex/store";

axios.defaults.headers.common['Content-Type'] = 'application/ld+json'

// Add a request interceptor to add the token to the header of each request if it exists in the store (except for the login request) 
axios.interceptors.request.use((config)=>{
    if(config.url !== 'http://localhost:8505/api/users/auth'){
        config.headers.Authorization = 'bearer ' + store.getters.getToken
    }

    return config
})

export default axios