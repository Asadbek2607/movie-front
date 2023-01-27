import axios from "axios";

export default{
    actions:{
        fetchToken(context,data){
            return new Promise((resolve,reject)=>{
                axios.post('http://localhost:8505/api/users/auth', data)
                     .then((response)=>{
                         console.log('Token olindi')
                         resolve()
                     })
                     .catch((error)=>{
                         console.log('Token olishda xatolik!')
                         reject()
                     })
            })
        }
    },
    mutations:{
        updateToken(state, token){
            state.token = token
        }
    },
    state:{
        token:null
    },
    getters:{
        getToken(state){
            return state.token
        }
    }
}