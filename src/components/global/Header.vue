<template>
  <header>
    <div class="container">
      <div class="title">
        <Logo class="logo" />
        <span>Hacker News</span>
      </div>
      <nav class="main-menu">
        <ul>
          <li class="main-menu-item">
            <router-link to="/new">New</router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/past">Past</router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/comments">Comments</router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/ask">Ask</router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/show">Show</router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/jobs">Jobs</router-link>
          </li>
          <li class="main-menu-item">
            <router-link to="/submit">Submit</router-link>
          </li>
        </ul>
      </nav>
      <div class="switch-mode">
        <LightMode />
        <DarkMode />
      </div>
    </div>
  </header>
</template>
<script>
import Logo from "@/assets/icons/logo.svg";
import LightMode from "@/assets/icons/light-mode.svg";
import DarkMode from "@/assets/icons/dark-mode.svg";
export default {
  components: {
    Logo,
    LightMode,
    DarkMode,
  },
};
</script>
<style lang="scss" scoped>
header {
  background: $color-primary;
  padding: 20px 0;
  color: $white;
}

.container {
  @include container();

  display: flex;
  justify-content: flex-end;
  align-items: center;
}

ul {
  display: flex;

  > * + * {
    margin-left: 16px;
  }
}

a {
  @include hoverEffect();
}

.title {
  display: flex;
  align-items: center;
  flex: 1;
}

.logo {
  margin-right: 8px;
  width: 30px;
}

.switch-mode {
  margin-left: 24px;
  svg {
    width: 20px;
  }
}
</style>
