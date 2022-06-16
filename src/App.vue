<template>
  <div id="app" :class="[isDarkMode ? 'dark-mode' : '']">
    <Header />
    <router-view />
  </div>
</template>
<script>
import Header from "@/components/global/Header";
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Header,
  },
  computed: {
    ...mapGetters({
      isDarkMode: "global/darkMode",
    }),
  },
};
</script>

<style lang="scss">
.container {
  @include container();
}
</style>
