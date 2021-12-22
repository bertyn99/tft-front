<template>
  <div class="items-container">
    <ItemNav @choose-items-category="choose"></ItemNav>
    <div class="items-list"></div>
  </div>
</template>

<script lang="ts">
import ItemNav from "@/components/items/ItemNav.vue";
export default {
  name: "ListItems",
  components: { ItemNav },
  data() {
    return {
      choice: "Basic Items",
    };
  },
  methods: {
    choose(v: string) {
      let test = "uihbfiuhkyud";
    },
  },
};
</script>

<style lang="scss">
.items-container {
  padding: var(--spacer);
  background: var(--primary-colors);
}

.items-list {
  display: flex;
  flex-direction: column;
}
</style>
