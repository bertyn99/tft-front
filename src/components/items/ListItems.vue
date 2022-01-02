<template>
  <div class="items-container">
    <ItemNav @choose-items-category="choose"></ItemNav>
    <RecipeItems :ingredients="basic"></RecipeItems>
    <div class="items-list">
      <div class="basic-list" v-if="choice == 'basic'">
        <BasicItems
          v-for="item in basic"
          :item="item"
          :key="item.name"
        ></BasicItems>
      </div>
      <div class="basic-list" v-if="choice == 'combined'">
        <CombinedItems
          v-for="item in combined"
          :item="item"
          :key="item.name"
        ></CombinedItems>
      </div>
      <div class="combined-list" v-if="choice == 'combined'"></div>
      <div class="trait-list" v-if="choice == 'trait'"></div>
    </div>
  </div>
</template>

<script lang="ts">
import ItemNav from "@/components/items/ItemNav.vue";
import { Item } from "@/types/items";
import { defineComponent } from "vue";
import BasicItems from "./CardItems/BasicItems.vue";
import CombinedItems from "./CardItems/CombinedItems.vue";
import RecipeItems from "./RecipeItems.vue";
import ressource from "@/service/ressource/index";
export default defineComponent({
  name: "ListItems",
  components: { ItemNav, BasicItems, RecipeItems, CombinedItems },
  data() {
    return {
      choice: "basic" as string,
      items: ([] as Item[]) || null,
    };
  },
  methods: {
    choose: function (v: string): void {
      this.choice = v;
      console.log(this.choice);
    },
  },
  computed: {
    basic() {
      let b: Array<Item> = [];
      if (this.items != null) {
        for (const i of this.items) {
          if (
            i.from.length == 0 &&
            i.name.match(
              /(Spatula|Tear of goddes|Recurve Bow|Sparring gloves|B.F sword|Chain Vest|Giant's Belt|Needlessly Large Rod|Negatron Cloak)/gim
            )
          ) {
            console.log(i);
            b.push(i as Item);
          }
        }
      }

      return b;
    },

    combined() {
      let c: Array<Item> = [];
      if (this.items != null) {
        for (const i of this.items) {
          if (
            i.from.length != 0 ||
            (i.from.length == 0 &&
              !i.name.match(
                /(Spatula|Tear of goddes|Recurve Bow|Sparring gloves|B.F sword|Chain Vest|Giant's Belt|Needlessly Large Rod|Negatron Cloak|Jammed)/gim
              ))
          ) {
            console.log(i);
            c.push(i as Item);
          }
        }
      }
      return c;
    },
    traits() {
      let t: Array<Item> = [];
      if (this.items != null) {
        for (const i of this.items) {
          if (
            i.from.length == 0 &&
            !i.name.match(
              /(Spatula|Tear of goddes|Recurve Bow|Sparring gloves|B.F sword|Chain Vest|Giant's Belt|Needlessly Large Rod|Negatron Cloak|Jammed)/gim
            )
          ) {
            console.log(i);
            t.push(i as Item);
          }
        }
      }
      return t;
    },
  },
  created() {
    ressource.getAllItems().then((r: any) => {
      this.items = r.data.data;
    });
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
