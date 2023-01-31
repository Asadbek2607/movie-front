<template>
    
        <div class="row mt-5 justify-content-center">
            <div class="col-3 col-xl-4 p-5 bg-light rounded">
                <form @submit.prevent="auth">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label text-success">Email</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            v-model="form.email">
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label text-success">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" v-model="form.password">
                    </div>
                    <button type="submit" class="btn btn-primary mt-3">Submit</button>
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

</style>