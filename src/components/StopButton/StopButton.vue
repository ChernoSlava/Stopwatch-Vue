<script setup>
  defineProps({
    isActive: Boolean
  })
</script>

<template>
  <div class="StopButtons" :onClick="onClick">
    <svg
      :class="{ StopButton: true, StopButton__active: isActive }"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="20" height="20" />
    </svg>
  </div>
</template>

<style scoped>
.StopButtons {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.StopButton rect {
  fill: #9e9e9e;
}

.StopButton__active rect {
  fill: #ffffff;
}
</style>
