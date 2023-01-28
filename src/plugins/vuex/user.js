import axios from "axios";

export default{
    actions:{
        fetchToken(context,data){
            return new Promise((resolve,reject)=>{
                axios.post('http://localhost:8505/api/users/auth', data)
                     .then((response)=>{
                         console.log('Token olindi')

                         context.commit('updateToken', response.data.token)
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
            localStorage.setItem('token', token)
            state.token = token
        }
    },
    state:{
        token:localStorage.getItem('token')
    },
    getters:{
        getToken(state){
            return state.token
        }
    }
}