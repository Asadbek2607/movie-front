<template>
    <div class="row gap-1 gap-xl-0">
        <CategorySidebar />
        <main class="col-12 col-lg-8 col-xl-10 p-0">

            <div class="row m-0">

                <div class="col bg-dark">
                    <div 
                        class="welcomeMsg mt-5" 
                        v-if="!isLoggedIn"
                    >
                            <h1 class="text-white">
                                Welcome to <span class="text-primary">A</span>lite!
                                <br>
                                Please, 
                                <router-link class="text-primary text-decoration-none " to="/login">log in</router-link>
                                or 
                                <router-link class="text-primary text-decoration-none" to="/sign-up">register</router-link> 
                                to see the movies.
                            </h1>
                    </div>
                    <CardRow v-if="isLoggedIn"/>
                    <PaginationRow v-if="isLoggedIn" />
                </div>
            </div>
        </main>
    </div>
</template>

<script>
import CardRow from "@/components/CardRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";
import CategorySidebar from "@/components/CategorySidebar.vue";

export default {
    name: "HomePage",
    components: { PaginationRow, CardRow, CategorySidebar },
    data() {
        return {
            isLoggedIn: localStorage.getItem('token'),
        };
    },
   
    watch:{
        isLoggedIn() {
            return localStorage.getItem('token') !== this.isLoggedIn;
        }
    },
    
}
</script>

<style scoped></style>