<template>
  <div class="calendar">
    <div class="header">
      <button class="left"><</button>
      <p class="month">{{ currentMonth }}</p>
      <button class="right">></button>
    </div>
    <div class="grid">
      <p v-for="day of daysCurrentMonth">{{ day }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import { getMonthDays, getMonthName } from '@/utils/date';

const currentDate = ref(new Date());
const currentMonth = computed(() => getMonthName(currentDate.value.getMonth()))
const daysCurrentMonth = computed(() => getMonthDays(currentDate.value))
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
}
</style>