<template>
  <div class="basic-container"></div>
</template>

<script lang="ts">
import { Item } from "@/types/items";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    item: { type: Object as PropType<Item>, required: true },
  },
});
</script>

<style lang="scss" scoped></style>
