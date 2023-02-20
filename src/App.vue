<script>
import HeaderRow from "@/components/HeaderRow.vue";
import FooterRow from "@/components/FooterRow.vue";

export default {
  components: {FooterRow,  HeaderRow},
  
}
</script>

<template>
  <div class="container-fluid d-flex flex-column bg-dark min-vh-100 mt-5">

    <HeaderRow/>
      <RouterView/>
    <FooterRow/>

  </div>
</template>

<style scoped>
* {
 font-weight: 400;
}
</style>
