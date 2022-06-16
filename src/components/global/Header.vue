<template>
  <header :class="[isDarkMode ? 'dark-mode' : '']">
    <div class="container">
      <div class="title">
        <Logo class="logo" />
        <span>Hacker News</span>
      </div>
      <button
        class="switch-mode"
        @click="switchModeHandler"
        aria-label="Switch to light mode"
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
  },
  methods: {
    switchModeHandler() {
      this.$store.dispatch("global/setDarkMode", !this.isDarkMode);
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
  justify-content: flex-end;
  align-items: center;
}

.title {
  display: flex;
  align-items: center;
  font-weight: bold;
  flex: 1;
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
