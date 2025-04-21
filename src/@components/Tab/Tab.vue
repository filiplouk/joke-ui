<template>
  <button
    :class="[active ? 'bg-black text-white' : 'hover:bg-grey-light bg-white text-black']"
    class="flex min-w-35 cursor-pointer items-center justify-center rounded-full px-4 py-2 font-bold shadow transition-all duration-200"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
const props = defineProps<{
  active?: boolean;
}>();
</script>
