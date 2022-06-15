<template>
  <header>
    <div class="container">
      <div class="page-title">HackerNews</div>
      <nav>
        <ul>
          <li>
            <router-link to="/new">New</router-link>
          </li>
          <li>
            <router-link to="/past">Past</router-link>
          </li>
          <li>
            <router-link to="/comments">Comments</router-link>
          </li>
          <li>
            <router-link to="/ask">Ask</router-link>
          </li>
          <li>
            <router-link to="/show">Show</router-link>
          </li>
          <li>
            <router-link to="/jobs">Jobs</router-link>
          </li>
          <li>
            <router-link to="/submit">Submit</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.container {
  @include container();
}
</style>
