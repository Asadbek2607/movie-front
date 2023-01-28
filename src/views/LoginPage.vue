<template>
  <main class="col-12 p-0 mt-4 ">
    <div class="row m-0 justify-content-center">
      <div class="col-4 bg-light rounded ">
        <form @submit.prevent="auth" >
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="form.email"
            >
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="form.password"
            >
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </main>


</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "LoginPage",
  data(){
    return{
      form:{
        email:'',
        password:''
      }
    }
  },
  methods:{
    ...mapActions(['fetchToken']),
    auth(){
      this.fetchToken(this.form)
          .then(()=>{
            this.$router.push('/')
          })
          .catch(()=>{
            alert('Incorrect Credentials')
          })
    }
  }
}
</script>

<style scoped>

</style>