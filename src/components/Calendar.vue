<template>
  <div class="calendar">
    <calendar-header :current-date="currentDate" @change-month="changeDateHandler" />
    <calendar-grid :current-date="currentDate" />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarGrid from '@/components/CalendarGrid.vue';

const currentDate = ref(new Date());

function changeDateHandler(date) {
  currentDate.value = date
}
</script>

<style lang="scss" scoped>
</style>