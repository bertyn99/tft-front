<template>
  <div class="items-container">
    <ItemNav @choose-items-category="choose"></ItemNav>
    <div class="items-list">
      <div class="basic-list" v-if="choice == 'basic'">
        <BasicItems v-for=""></BasicItems>
      </div>
      <div class="combined-list" v-if="choice == 'combined'"></div>
      <div class="trait-list" v-if="choice == 'trait'"></div>
    </div>
  </div>
</template>

<script lang="ts">
import ItemNav from "@/components/items/ItemNav.vue";
import { defineComponent } from "vue";
import BasicItems from "./CardItems/BasicItems.vue";
export default defineComponent({
  name: "ListItems",
  components: { ItemNav, BasicItems },
  data() {
    return {
      choice: "basic",
    };
  },
  methods: {
    choose: function (v: string) {
      this.choice = v;
      console.log(this.choice);
    },
  },
});
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
