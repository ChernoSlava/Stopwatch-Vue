<script setup>
import { ref } from "vue";

import Container from "../Container/Container.vue";
import StopButton from "../StopButton/StopButton.vue";
import StartButton from "../StartButton/StartButton.vue";
import PauseButton from "../PauseButton/PauseButton.vue";

const value = ref(0);
const status = ref("idle");

let interval = 0;

const onStart = () => {
  if (!["idle", "paused"].includes(status.value)) {
    return;
  }

  status.value = "started";

  interval = setInterval(() => {
    value.value++;
  }, 1000);
};

const onStop = () => {
  if (!["started", "paused"].includes(status.value)) {
    return;
  }

  clearInterval(interval);
  status.value = "idle";
  value.value = 0;
};

const onPaused = () => {
  if (status.value !== "started") {
    return;
  }

  clearInterval(interval);
  status.value = "paused";
};

const formatValue = (value) => {
  const milli = value * 1000;

  const hours = Math.floor(milli / 3600000);
  const minutes = Math.floor((milli % 3600000) / 60000);
  const seconds = minutes > 0 ? (milli - minutes * 60000) / 1000 : value;

  return `${hours > 0 ? `${hours}:` : ""}${
    minutes > 0 ? `${minutes}:` : ""
  }${seconds}`;
};
</script>

<template>
  <Container>
    <div class="Time">
      <span :class="{ Text: true, Text__active: status === 'started' }">
        {{ formatValue(value) }}
      </span>
      <div
        :class="{
          Time_Separator: true,
          Time_Separator__active: status === 'started',
        }"
      ></div>
      <div class="Time_Buttons">
        <StartButton :onClick="onStart" v-if="status !== 'started'" />
        <PauseButton :onClick="onPaused" v-if="status === 'started'" />
        <StopButton :onClick="onStop" :is-active="status === 'started'" />
      </div>
    </div>
  </Container>
</template>

<style scoped>
.Time {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  column-gap: 50px;
  height: 100%;
  width: 100%;
}

.Text {
  font-size: 22px;
  line-height: 21px;

  color: #9e9e9e;
}

.Text__active {
  color: #ffffff;
}

.Time_Separator {
  height: 0px;
  border: 1px solid #9e9e9e;
  width: 100%;
}

.Time_Separator__active {
  border: 1px solid #ffffff;
}

.Time_Buttons {
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 50px;
}
</style>
