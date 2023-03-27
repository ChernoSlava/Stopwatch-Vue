<script setup>

</script>

<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<style scoped>
  .container {
    color: white;
    background-color: #696969;
    padding: 20px 0px;
    width: 225px;
    height: 120px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
