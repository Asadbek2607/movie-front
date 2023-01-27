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

    <div class="row gap-1 gap-xl-0">
      <!-- Sidebar -->
      <CategorySidebar/>
      <!--Sidebar END-->

      <!-- Content Start-->
      <RouterView/>
      <!-- Content END -->

    </div>
    <!--Footer start-->
    <FooterRow/>
    <!--Footer End-->

  </div>
</template>

<style scoped>

</style>
