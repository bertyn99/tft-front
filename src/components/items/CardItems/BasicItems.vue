<template>
  <div class="basic-container">
    <div class="basic-info">
      <img :src="item.icon" :alt="item.name" />
      <p class="basic-title">{{ item.name }}</p>
      <span class="basic-desc">{{ convertDes }}</span>
    </div>
    <div class="basic-combination"></div>
  </div>
</template>

<script lang="ts">
import { Item } from "@/types/items";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    item: { type: Object as PropType<Item>, required: true },
  },

  methods: {
    countInstances(str: string, word: string) {
      return str.split(word).length - 1;
    },
  },
  computed: {
    convertDes() {
      let convertStr = "";

      return this.item.desc;
    },
  },
});
</script>

<style lang="scss" scoped>
.basic-container {
  display: flex;
  flex-direction: column;
  background: var(--secondary-color);
  margin-bottom: var(--spacer);
  & .basic-info {
    display: flex;
    justify-content: space-between;
    & img {
      border: 1px solid white;
      width: 60px;
    }

    & .basic-title {
      @include text-style-subtitle-2;
    }

    & .basic-desc {
      @include text-style-caption-2-info;
    }
  }

  & .basic-combination {
  }
}
</style>
