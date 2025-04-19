<template>
  <div>
    <h1 class="font-patrick-hand text-center text-5xl font-black">Joke of the day</h1>
    <div></div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { onMounted } from "vue";
import { JokeService } from "@/@services/Joke/Joke.service";

onMounted(async () => {
  const randomJoke = await JokeService.getRandomJoke();
  console.log(randomJoke);
});
</script>
