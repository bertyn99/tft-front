<template>
  <div class="item">
    <ListItems></ListItems>
  </div>
</template>

<script lang="ts">
import ListItems from "../components/items/ListItems.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ItemsView",
  components: { ListItems },
});
</script>
