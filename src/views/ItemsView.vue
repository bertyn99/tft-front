<template>
  <div class="item">
    <ListItems></ListItems>
  </div>
</template>

<script lang="ts">
import ListItems from "../components/items/ListItems.vue";
export default {
  name: "ItemsView",
  components: { ListItems },
};
</script>
