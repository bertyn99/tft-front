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
  padding: 0px !important;
  overflow: hidden;
}
</style>
