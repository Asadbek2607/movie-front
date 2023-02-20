<template>

    <div class="row mt-5 justify-content-center ">
        <div class="col-10 col-md-6 col-lg-4 p-5 rounded customBg bg-dark">
            <form @submit.prevent="registr" class="d-flex flex-column">
                <h3 class="text-white text-center mb-4">Sign Up</h3>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="form.email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
                </div>
                <button type="submit" class="btn mt-3 mx-auto text-white" style="background-color: black;">Create Account</button>
            </form>
        </div>
    </div>
    
    
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "SignUp",
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['signUp']),
        registr() {
            this.signUp(this.form)
                .then(() => {
                    this.$router.push('/')
                })
                .catch(() => {
                    alert('Error creating account')
                })
        }
    }
}
</script>

<style scoped>
.customBg {
    
    background-image: url("../../public/img/dark-denim-3.png");

}
</style>