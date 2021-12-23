<template>
  <router-link to="builder"
    ><div class="card-container">
      <img :src="champ?.icon" :class="{ test: color }" alt="" />
      <p class="card-name">{{ champ?.name }}</p>
    </div>
  </router-link>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Champion } from "@/types/champion";
import { defineComponent } from "vue";
export default defineComponent({
  name: "CardChampion",
  props: {
    champ: {
      type: Object as PropType<Champion>,
    },
  },
  computed: {
    color() {
      return true;
    },
  },
});
</script>

<style lang="scss">
.card-container {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  align-items: center;
  & img {
    box-sizing: border-box;
    height: 100%;
    max-width: 100%;
    /*  max-height: 8rem;
    max-width: 7rem; */
    aspect-ratio: 1/1;
    object-fit: cover;
    border: solid white 2px;
    border-radius: 12px;
  }

  &:hover .card-name {
    opacity: 1;
  }
}

.card-name {
  @include text-style-h-6;
  color: var(--text-color);
  opacity: 0.7;
  text-decoration: none;
}
</style>
