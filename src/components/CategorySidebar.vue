<template>
  <aside class="col-12 col-lg-3 col-xl-2 p-0 pt-3">
    <div class="list-group mx-1">
      <router-link 
        class="list-group-item list-group-item-action bg-dark text-white border-0"
        v-for="category in getCategories" 
        :key="category.id" 
        :to="'/categories/' + category.id">
        {{category.name}}
      </router-link>

    </div>
  </aside>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "CategorySidebar",
  computed: {
    ...mapGetters(['getCategories'])
  },
  methods:{
    ...mapActions(['fetchCategories'])
  },
  mounted() {
    this.fetchCategories()
  }
}
</script>

<style scoped>

.list-group-item:hover,
.list-group-item:focus {
  background-color: #c43f2d !important;
  color: #fff;
}

.list-group-item {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>