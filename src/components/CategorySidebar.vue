<template>
  <aside class="col-12 col-xl-2 p-0 mt-4">
    <ul
        class="list-group mx-1"
        v-for="category in getCategories"
    >
      <router-link class="list-group-item " to="WatchMoviePage">{{category.name}}</router-link>

    </ul>
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
    console.log(this.getCategories, 'categories')
    this.fetchCategories()
  }
}
</script>

<style scoped>

</style>