<template>
  <div class="flex h-full w-full items-center justify-center">
    <div
      class="loader h-10 w-10 animate-spin rounded-full border-4 border-black border-t-transparent"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@keyframes spin-slow {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loader {
  animation: spin-slow 0.8s linear infinite;
}
</style>

<script setup lang="ts"></script>
