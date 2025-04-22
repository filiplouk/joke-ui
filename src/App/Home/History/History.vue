<template>
  <h2 class="mb-3 text-xl font-bold">History ({{ jokeCount }})</h2>
  <div class="flex w-full flex-col gap-2">
    <template v-if="jokes.length">
      <div
        v-for="(joke, index) in jokes"
        :key="index"
        class="flex items-start justify-between gap-4"
      >
        <span>{{ joke?.setup }}</span>
        <button
          class="hover:text-red cursor-pointer transition-colors"
          @click="jokeStore.removeJoke(index)"
        >
          <Trash class="w-4" />
        </button>
      </div>
    </template>
    <p v-else class="italic">Your jokes history is empty.</p>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { useJokeListStore } from "@/@stores/joke.store.ts";
import { storeToRefs } from "pinia";
import { Trash } from "lucide-vue-next";

const jokeStore = useJokeListStore();

const { jokes, jokeCount } = storeToRefs(jokeStore);
</script>
