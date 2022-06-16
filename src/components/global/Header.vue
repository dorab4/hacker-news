<template>
  <header :class="[isDarkMode ? 'dark-mode' : '']">
    <div class="container">
      <router-link to="/" class="title">
        <Logo class="logo" />
        <span>Hacker News</span>
      </router-link>
      <button
        class="switch-mode"
        @click="switchModeHandler"
        :aria-label="getAriaLabel"
      >
        <DarkMode v-if="!isDarkMode" />
        <LightMode v-else />
      </button>
    </div>
  </header>
</template>
<script>
import Logo from "@/assets/icons/logo.svg";
import LightMode from "@/assets/icons/light-mode.svg";
import DarkMode from "@/assets/icons/dark-mode.svg";
import { mapGetters } from "vuex";

export default {
  components: {
    Logo,
    LightMode,
    DarkMode,
  },
  computed: {
    ...mapGetters({
      isDarkMode: "global/darkMode",
    }),

    getAriaLabel() {
      return this.isDarkMode ? "Switch to light mode" : "Switch to dark mode";
    },
  },
  methods: {
    switchModeHandler() {
      this.$store.dispatch("global/setDarkMode", !this.isDarkMode);
      document.querySelector("body").classList.toggle("dark-mode");
    },
  },
};
</script>
<style lang="scss" scoped>
header {
  background: $color-primary;
  padding: 20px 0;
  color: $white;

  &.dark-mode {
    background: $color-secondary;
    color: $white;
  }
}

.container {
  @include container();

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
  font-weight: bold;
}

.logo {
  margin-right: 8px;
  width: 30px;
}

.switch-mode {
  background: rgba(#fff, 0.2);
  border-radius: 3px;
  width: 36px;
  height: 36px;
  transition: all 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: rgba($white, 0.8);
    width: 18px;
  }

  &:hover {
    background: rgba(#fff, 0.4);
  }
}
</style>
