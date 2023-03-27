<script setup>
defineProps({
  onClick: Function,
});
</script>

<template>
  <div class="PauseButton" :onClick="onClick">
    <svg
      width="10"
      height="20"
      viewBox="0 0 10 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="7" width="3" height="20" fill="white" />
      <rect width="3" height="20" fill="white" />
    </svg>
  </div>
</template>

<style scoped>
.PauseButton {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
