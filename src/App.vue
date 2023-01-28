<script>
import HeaderRow from "@/components/HeaderRow.vue";
import CategorySidebar from "@/components/CategorySidebar.vue";
import FooterRow from "@/components/FooterRow.vue";
import HomePage from "@/views/HomePage.vue";
import MovieInfoPage from "@/views/WatchMoviePage.vue";

export default {
  components: {MovieInfoPage, HomePage, FooterRow, CategorySidebar, HeaderRow}
}
</script>

<template>
  <div class="container-fluid d-flex flex-column min-vh-100">

    <!-- Header section -->
    <HeaderRow/>
    <!-- Header section end -->



      <!-- Content Start-->
      <RouterView/>
      <!-- Content END -->


    <!--Footer start-->
    <FooterRow/>
    <!--Footer End-->

  </div>
</template>

<style scoped>

</style>
