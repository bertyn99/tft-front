<template>
  <div class="items-nav">
    <div class="items-choice" @click="$emit('choose-items-category', 'basic')">
      Basic Items
    </div>
    <div
      class="items-choice"
      @click="$emit('choose-items-category', 'combined')"
    >
      Combined Items
    </div>
    <div class="items-choice" @click="$emit('choose-items-category', 'trait')">
      Tome of Traits Items
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ItemNav",
  emits: ["choose-items-category"],
};
</script>

<style lang="scss">
.items-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem;

  & .items-choice {
    width: 100%;
    max-width: 18rem;
    padding: 1rem;
    text-align: center;
    color: var(--text-color);
    background: var(--secondary-color);
    border: solid 1px var(--primary-color);
    @include text-style-subtitle-2;
    transition: all ease 0.2s;
    &:hover,
    &:active {
      background: lighten($secondary, 10%);
      border: solid 1px var(--golden-color);
    }
    &:active {
      border: solid 1px var(--golden-color);
    }
    &:last-child {
      border-radius: 0 0 var(--spacer) var(--spacer);
    }

    &:first-child {
      border-radius: var(--spacer) var(--spacer) 0 0;
    }
    @include bq(medium) {
      &:last-child {
        border-radius: 0 var(--spacer) var(--spacer) 0;
      }

      &:first-child {
        border-radius: var(--spacer) 0 0 var(--spacer);
      }
    }
  }

  @include bq(medium) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}
</style>
