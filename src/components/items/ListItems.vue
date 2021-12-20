<template>
  <div class="items-container">
    <div class="items-list"></div>
  </div>
</template>

<script setup></script>

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
