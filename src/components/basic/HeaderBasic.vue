<template>
  <header class="header">
    <div class="header-top">
      <Filter></Filter>
      <Search></Search>
    </div>
    <div class="header-title">
      <p>{{ $route.meta.title }}</p>
    </div>
  </header>
</template>

<script>
import Search from "@/components/basic/SearchHeader.vue";
import Filter from "@/components/basic/FilterHeader.vue";

export default {
  name: "HeaderBasic",
  components: { Search, Filter },
};
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

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(167.97deg, #030b1f 0%, #030a1c 100%);
    opacity: 0.6;
  }

  &-title {
    z-index: 1;
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
}
.search-filter {
  margin-left: var(--spacer);
}
.icon {
  height: 1.5rem;
  width: 1.5rem;
  color: var(--text-color);
  opacity: 0.6;
  cursor: pointer;
}
</style>
