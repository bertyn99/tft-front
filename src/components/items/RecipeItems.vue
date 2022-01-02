<template>
  <div class="recipes-nav-container" v-if="ingredients">
    <p>Recipes:</p>
    <div class="recipe">
      <div
        class="ingredient-nav"
        v-for="ingredient in ingredients"
        :key="ingredient.name"
      >
        <img :src="ingredient.icon" class="ingredient-icon" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Item } from "@/types/items";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    ingredients: { type: [] as PropType<Item[]>, required: true },
  },
});
</script>

<style lang="scss">
.recipes-nav-container {
  display: flex;
  flex-direction: column;
  & p {
    color: var(--text-color);
    @include text-style-subtitle-2;
  }
  @include bq(medium) {
    align-items: center;
  }
}

.recipe {
  display: flex;
  align-items: center;
  justify-content: center;
}
.ingredient-nav {
  border: solid white 2px;
  padding: 0.2rem;
  background: var(--secondary-color);
  & .ingredient-icon {
    display: block;

    width: 100%;
    width: 100%;
    max-width: 2.2rem;
    max-height: 2.2rem;
  }
}
</style>
