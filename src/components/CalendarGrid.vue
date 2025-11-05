<template>
  <div class="grid">
    <p v-for="day of daysCurrentMonth">{{ day }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { getMonthDays } from '@/utils/date';

const props = defineProps({
  currentDate: {
    type: Date,
    required: true
  }
})

const daysCurrentMonth = computed(() => getMonthDays(props.currentDate))
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 20px;
}
</style>