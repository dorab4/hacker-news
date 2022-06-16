<template>
  <div class="skeleton-container">
    <div class="skeleton-image"></div>
    <div class="skeleton-content"></div>
  </div>
</template>
<script></script>
<style lang="scss" scoped>
.skeleton-container {
  display: flex;
  width: 100%;
  margin-bottom: 48px;
}

.skeleton-image {
  width: 40%;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.12);
  animation: fade 1.5s linear 80ms infinite;
}

.skeleton-content {
  width: 60%;
  margin-left: 16px;
  height: 260px;
  background-color: rgba(0, 0, 0, 0.12);
  animation: fade 1.5s linear 80ms infinite;
}

@keyframes fade {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
  100% {
    opacity: 1;
  }
}
</style>
