<template>
  <div class="row gap-1 gap-xl-0">
    <CategorySidebar/>
    <main class="col-12 col-lg-8 col-xl-10 p-0 mt-4">

      <div class="row m-0">

        <div class="col bg-secondary rounded mb-5">
          <CardRow/>
          <PaginationRow/>
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
  components: {PaginationRow, CardRow, CategorySidebar}
}
</script>

<style scoped>

</style>