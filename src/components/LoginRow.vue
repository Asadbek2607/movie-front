<template>

    <div class="row mt-5 justify-content-center ">
        <div class="col-10 col-md-6 col-lg-4 p-5 rounded customBg bg-dark">
            <h3 class="text-white text-center mb-4">Log In</h3>
            <form @submit.prevent="auth" class="d-flex flex-column">
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label text-white">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                        v-model="form.email">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label text-white">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
                </div>
                <button type="submit" class="btn mt-3 mx-auto text-white" style="background-color: black;">Submit</button>
                <p class="dontHaveAcc text-white text-center mt-3">Don't have an account?</p>
                    <router-link class="text-white mt-2 mx-auto" to="/sign-up">Sign Up</router-link>
            </form>
        </div>
    </div>


</template>

<script>
import { mapActions } from "vuex";

export default {
    name: "LoginRow",
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        ...mapActions(['fetchToken']),
        auth() {
            this.fetchToken(this.form)
                .then(() => {
                    this.$router.push('/')
                    
                })
                .catch(() => {
                    alert('Incorrect Credentials')
                })
        }
    }
}
</script>

<style scoped>
.customBg {
    background-image: url("../../public/img/dark-denim-3.png");
    
}

.dontHaveAcc::after{
    content: " ";
    display: inline-block;
    width: 20%;
    height: 1px;
    position: relative;
    vertical-align: middle;
    background-color: #fff;
    margin: 10px 10px
}
.dontHaveAcc::before{
    content: " ";
    display: inline-block;
    width: 20%;
    height: 1px;
    position: relative;
    vertical-align: middle;
    background-color: #fff;
    margin: 10px 10px
}
</style>