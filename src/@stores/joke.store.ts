import { defineStore } from "pinia";
import type { Joke } from "@/@services/Joke/Joke.entity";

export const useJokeListStore = defineStore("jokeList", {
  state: () => ({
    jokes: [] as Joke[],
  }),
  getters: {
    jokeCount: (state) => state.jokes.length,
  },
  actions: {
    addJoke(joke: Joke) {
      this.jokes.push(joke);
    },
    removeJoke(index: number) {
      this.jokes.splice(index, 1);
    },
  },
  persist: true,
});
