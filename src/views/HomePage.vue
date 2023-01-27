<template>

  <main class="col-12 col-xl-10 p-0 mt-4">
    <div class="row m-0">
      <div class="col bg-secondary rounded">
        <CardRow/>
        <PaginationRow/>
      </div>
    </div>
  </main>

</template>

<script>
import CardRow from "@/components/CardRow.vue";
import PaginationRow from "@/components/PaginationRow.vue";

export default {
  name: "HomePage",
  components: {PaginationRow, CardRow}
}
</script>

<style scoped>

</style>