<template>
  <div class="champions-list">
    <CardChampion
      v-for="champ in champions"
      :key="champ.name"
      :champ="champ"
    ></CardChampion>
  </div>
</template>

<script lang="ts">
import { Champion } from "@/types/champion";
import ressource from "@/service/ressource/index";
import CardChampion from "./CardChampion.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ListChampions",
  components: { CardChampion },
  data() {
    return {
      champions: ([] as Champion[]) || null,
      loading: false,
    };
  },
  created() {
    ressource.getAllChampions().then((r: any) => {
      this.champions = r.data.data;
    });
  },
});
</script>

<style lang="scss">
.champions-list {
  padding-right: 1rem;
  padding-left: 1rem;

  display: grid;
  gap: 0.5rem 1rem;
  grid-template-columns: repeat(2, 1fr);
  @include bq(medium) {
    grid-template-columns: repeat(4, 1fr);
  }

  @include bq(large) {
    background: yellow;
    max-width: 1200px;
    max-height: 1200px;
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
