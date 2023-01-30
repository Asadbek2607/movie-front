<template>
  <aside class="col-12 col-xl-2 p-0 mt-4">
    <div class="list-group mx-1">
      <router-link 
        class="list-group-item list-group-item-action"
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

</style>