<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/global/Header";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
.container {
  @include container();
}
</style>
