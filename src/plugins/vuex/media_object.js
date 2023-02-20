import axios from "@/plugins/vuex/axios";

export default {
    actions: {
        // POST picture to database and add it to the state of the store (in the movie object)  
        uploadPicture(context, formData) {
            return new Promise((resolve, reject) => {
                axios.post('http://localhost:8505/api/media_objects', formData, 
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    )
                    .then((response) => {
                        console.log('Picture added successfully')
                        console.log(response)

                        // Create a picture object to add to the state of the store 
                        let cardImage = {
                            cardImageId: response.data.id
                        }
                        // Add the picture to the state of the store
                        context.commit('uploadFile', cardImage)
                        resolve()
                    })
                    .catch((error) => {
                        console.log('Error adding picture ' + error)
                        reject()
                    })
            })
        },

    },
    mutations: {
        uploadFile(state, cardImage) {
            state.cardImage = cardImage
        },

    },
    state: {
        cardImage:{
            cardImageId: null
        }
    },
    getters: {
        getFile(state) {
            return state.cardImage
        }

    }
}