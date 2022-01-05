import { defineStore } from "pinia";

interface Fruit {
  name: string;
}

export const useFruitsStore = defineStore({
  id: "fruits",
  state() {
    return { fruits: [{ name: "Apple" }, { name: "Banana" }] as Fruit[] };
  },
  getters: {
    computedFruits() {
      return this.fruits;
    }
  },
  actions: {
    computedFruits() {
      return this.fruits;
    }
  }
});
