<template>
  <header class="header">
    <div class="header-top">
      <div class="search-filter">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        <div></div>
      </div>
      <Search></Search>
    </div>
    <div class="header-title">
      <p>{{ $route.meta.title }}</p>
    </div>
  </header>
</template>

<script setup lang="ts">
import Search from "@/components/basic/SearchHeader.vue";
</script>

<style lang="scss">
.header {
  position: relative;
  height: 12rem;
  width: 100%;
  background-image: url("~@/assets/img/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  z-index: -2;
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(167.97deg, #030b1f 0%, #030a1c 100%);
    opacity: 0.6;
    z-index: 0;
  }

  &-title {
    z-index: 2;
    @include text-style-h-6;
    color: var(--text-color);
  }
}

.header-top {
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0px 12px !important;
  & .icon {
    height: 1.5rem;
    width: 1.5rem;
    color: var(--text-color);
  }
}
.search-filter {
  margin-left: var(--spacer);
}
</style>
