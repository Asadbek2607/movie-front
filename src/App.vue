<script>
import HeaderRow from "@/components/HeaderRow.vue";
import CatalogSidebar from "@/components/CatalogSidebar.vue";
import FooterRow from "@/components/FooterRow.vue";
import HomePage from "@/views/HomePage.vue";
import MovieInfoPage from "@/views/WatchMoviePage.vue";

export default {
  components: {MovieInfoPage, HomePage, FooterRow, CatalogSidebar, HeaderRow}
}
</script>

<template>
  <div class="container-fluid">

    <!-- Header section -->
    <HeaderRow/>
    <!-- Header section end -->

    <div class="row gap-1 gap-xl-0">
      <!-- Sidebar -->
      <CatalogSidebar/>
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
