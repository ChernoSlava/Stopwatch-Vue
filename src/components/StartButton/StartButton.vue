<script setup>

defineProps({
  onClick: Function,
});
</script>

<template>
      <div class="StartButton" :onClick="onClick">
        <svg
          width="17"
          height="20"
          viewBox="0 0 17 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 20V0L17 10L0 20Z" fill="#9E9E9E" />
        </svg>
      </div>
</template>

<style scoped>
.StartButton {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
