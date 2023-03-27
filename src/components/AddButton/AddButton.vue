<script setup>
import Container from "../Container/Container.vue";

defineProps({
  onClick: Function,
});
</script>

<template>
  <div :onClick="onClick" class="AddButton">
    <Container>
      <div class="ActionButton" :onClick="onClick">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="8.5" width="3" height="20" fill="#9E9E9E" />
          <rect
            y="11.5"
            width="3"
            height="20"
            transform="rotate(-90 0 11.5)"
            fill="#9E9E9E"
          />
        </svg>
      </div>
    </Container>
  </div>
</template>

<style scoped>

.AddButton {
    cursor: pointer;
  }
.ActionButton {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
