<template>
  <div class="champ">
    <div class="champions-container">
      <ListChampions></ListChampions>
    </div>
  </div>
</template>

<script lang="ts">
import ListChampions from "@/components/champions/ListChampions.vue";

export default {
  name: "ChampionView",
  components: { ListChampions },
};
</script>
<style lang="scss">
.champ {
}

.champions-container {
  background: var(--primary-color);
  margin: 0 auto;
  padding: 0.5rem;
}
</style>
