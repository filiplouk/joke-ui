<template>
  <div class="flex min-h-100 flex-col items-center justify-between">
    <div class="flex max-w-200 flex-col gap-8">
      <h1 class="font-patrick-hand text-center text-5xl font-black">Joke of the day</h1>
      <div class="flex justify-center gap-5">
        <Tab :active="activeTab === 1" @click="activeTab = 1">Random</Tab>
        <Tab :active="activeTab === 2" @click="activeTab = 2">Programming</Tab>
      </div>
      <Loader v-if="loading" />
      <p v-else-if="error" class="text-red text-center font-bold">
        Something went wrong. Please try again later. 😞
      </p>
      <div v-else class="flex flex-col items-center gap-6 text-center text-xl">
        <h2>Q: {{ joke?.setup }} 🙃</h2>
        <div class="relative">
          <button
            @click="revealAnimation"
            :class="[
              'bg-orange absolute top-0 left-1/2 z-1 -translate-x-1/2 cursor-pointer rounded-sm px-6 py-2 text-base transition-transform duration-500',
              !reveal && 'hover:scale-110',
              reveal && 'scale-0',
            ]"
          >
            Answer
          </button>
          <p
            :class="[
              'text-emerald-900 italic opacity-0 transition-all delay-500',
              reveal && 'opacity-100',
            ]"
          >
            {{ joke?.punchline }} 😂
          </p>
        </div>
      </div>
    </div>
    <div class="flex-flex-col gap-2">
      <h2 class="text-xl font-bold">History</h2>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { JokeService } from "@/@services/Joke/Joke.service";
import Tab from "@/@components/Tab/Tab.vue";
import Loader from "@/@components/Loader/Loader.vue";
import type { Joke } from "@/@services/Joke/Joke.entity";

const activeTab = ref<number>(1);
const joke = ref<Joke | undefined>(undefined);
const reveal = ref<boolean>(false);
const loading = ref<boolean>(false);
const error = ref<string>("");

const getJoke = async () => {
  loading.value = true;
  try {
    const data =
      activeTab.value === 1
        ? await JokeService.getRandomJoke()
        : await JokeService.getProgrammingJoke();
    joke.value = data[0];
  } catch (err: unknown) {
    if (err instanceof Error) {
      error.value = err.message;
    } else {
      error.value = "An unknown error occurred";
    }
  } finally {
    loading.value = false;
  }
};
onMounted(() => {
  getJoke();
});

const revealAnimation = () => {
  reveal.value = true;
};

watch(
  () => activeTab.value,
  () => {
    reveal.value = false;
    getJoke();
  },
);
</script>
