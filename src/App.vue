<template>
  <ul>
    <li v-for="fruit in fruitsStore.computedFruits" :key="fruit.name">
      {{ fruit.name }}
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFruitsStore } from "./store/useFruitsStore";
export default defineComponent({
  name: "App",
  setup() {
    const fruitsStore = useFruitsStore();
    return { fruitsStore };
  },
});
</script>
