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
/* import { Champion } from "@/types/champion"; */

import CardChampion from "./CardChampion.vue";
export default {
  name: "ListChampion",
  components: { CardChampion },
  data() {
    return {
      champions: [
        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },
        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },
        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },
        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },
        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },
        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },

        {
          _id: "61a25c5564b92cba2f7a4c72",
          name: "Katarina",
          icon: "https://raw.communitydragon.org/latest/game/assets/ux/tft/championsplashes/tft6_katarina.tft_set6.png",
          cost: 2,
          ability: {
            desc: "Katarina blinks behind the enemy with the lowest Health within 3 hexes and slashes all adjacent enemies, dealing @ModifiedDamage@ magic damage. Katarina gains @ManaRefund@ Mana for each enemy killed by Shunpo.",
            icon: "ASSETS/Characters/Katarina/HUD/Icons2D/Katarina_E.dds",
            name: "Shunpo",
            variables: [
              {
                name: "Damage",
                value: [0, 190, 240, 320, 0, 0, 0],
              },
              {
                name: "ManaRefund",
                value: [20, 20, 20, 40, 20, 20, 20],
              },
            ],
          },
          stats: {
            armor: 25,
            attackSpeed: 0.699999988079071,
            critChance: 0.25,
            critMultiplier: 1.2999999523162842,
            damage: 50,
            hp: 650,
            initialMana: 0,
            magicResist: 25,
            mana: 40,
            range: 1,
          },
          traits: ["Academy ", "Assassin"],
          modification_notes: [],
        },
      ],
      loading: false,
    };
  },
};
</script>

<style lang="scss">
.champions-list {
  padding-right: 1rem;
  padding-left: 1rem;

  display: grid;
  gap: 0.5rem 1rem;
  grid-template-columns: repeat(3, 1fr);
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
