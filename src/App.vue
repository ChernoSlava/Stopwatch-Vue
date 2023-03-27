<script setup>
import { ref } from "vue";

import AddButton from "./components/AddButton/AddButton.vue";
import Time from "./components/Time/Time.vue";

const stopwatches = ref([]);

const createNewId = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const onAdd = () => {
  stopwatches.value.push({
    id: createNewId(),
  });
};
</script>

<template>
  <div class="App">
    <Time v-for="secundo in stopwatches" :key="secundo.id"></Time>
    <AddButton :onClick="onAdd"></AddButton>
  </div>
</template>

<style scoped>
.App {
  padding-top: 72px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 45px;
  column-gap: 50px;
}
@media (max-width: 800px) {
  .App {
    grid-template-columns: 1fr 1fr;
  }
}
@media screen and (max-width: 530px) {
  .App {
    grid-template-columns: 1fr;
  }
}
</style>
