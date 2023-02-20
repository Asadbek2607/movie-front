import axios from "axios";

export default {
    actions: {
        fetchToken(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/users/auth', data)
                    .then((response) => {
                        console.log('Token olindi')

                        context.commit('updateToken', response.data.token)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Token olishda xatolik!')
                        reject()
                    })
            })
        },

        signUp(context, data) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/users/my', data)
                    .then((response) => {
                        console.log('Account created')
                        
                        context.commit('addUser', response.data)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Account creation error!')
                        reject()
                    })
            })
        }
    },
    mutations: {
        updateToken(state, token) {
            localStorage.setItem('token', token)
            state.token = token
        },
        addUser(state, user) {
            state.user = user
        }
    },
    state: {
        token: localStorage.getItem('token'),
        user:{
            email:null,
            password:null,
        }
        
    },
    getters: {
        getToken(state) {
            return state.token
        },
        getUser(state) {
            return state.user
        }
    }
}