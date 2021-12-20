<template>
  <NavBar></NavBar>
  <HeaderBasic></HeaderBasic>
  <router-view />
</template>

<script lang="ts">
import NavBar from "@/components/basic/NavBar.vue";
import HeaderBasic from "@/components/basic/HeaderBasic.vue";
export default {
  components: { NavBar, HeaderBasic },
};
</script>
<style lang="scss">
html,
body {
  margin: 0px !important;
  padding: 0 0 4rem 0 !important;
  overflow: hidden;
  background: var(--primary-color);
}
.container {
  padding: 2rem 0.5rem 16rem 0.5rem;
  margin: 0 auto;
  @include bq(medium) {
    max-width: map-get($breakpoints, medium);
  }
  @include bq(large) {
    max-width: map-get($breakpoints, large);
  }
}
</style>
