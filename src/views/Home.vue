<template>
  <div class="index container">
    <StoriesList />
  </div>
</template>

<script>
import StoriesList from "@/components/StoriesList";

export default {
  name: "Home",

  components: {
    StoriesList,
  },
};
</script>
