<template>
  <div class="champ">
    <div class="container champions-container">
      <ListChampions></ListChampions>
    </div>
  </div>
</template>

<script lang="ts">
import ListChampions from "@/components/champions/ListChampions.vue";

import { defineComponent } from "vue";
export default defineComponent({
  name: "ChampionView",
  components: { ListChampions },
});
</script>
<style lang="scss">
.champ {
  background: var(--primary-color);
}

.champions-container {
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  overflow-y: scroll;
}
</style>
