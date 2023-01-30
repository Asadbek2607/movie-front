<script>
import HeaderRow from "@/components/HeaderRow.vue";
import FooterRow from "@/components/FooterRow.vue";

export default {
  components: {FooterRow,  HeaderRow},
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
