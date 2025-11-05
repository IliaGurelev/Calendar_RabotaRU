<template>
  <div class="grid">
    <div v-for="day of weekDays" :key="day" class="date">
      <p>{{ day }}</p>
    </div>
    <div 
      v-for="day of daysCurrentMonth" 
      :key="day.date" 
      class="date"
      :class="{selected: isSelected(day.date)}"
      @click="selectDate(day.date)"
    >
      <p>{{ day.number }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { getMonthDays, getWeekDays } from '@/utils/date';

const props = defineProps({
  currentDate: {
    type: Date,
    required: true
  },
  selectDate: {
    type: Date,
    required: false,
    default: new Date()
  },
   locale: {
    type: String,
    required: false,
    default: 'ru-RU'
  }
})

const emit = defineEmits(['select-date'])

const daysCurrentMonth = computed(() => getMonthDays(props.currentDate))
const weekDays = computed(() => getWeekDays(props.currentDate, props.locale))

function selectDate(date) {
  emit('select-date', date)
}

function isSelected(date) {
  return date.getTime() === props.selectDate.getTime()
}
</script>

<style lang="scss" scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 16px;
}

.date {
  width: 24px;
  height: 24px;
  text-align: center;
  cursor: pointer;
}

.selected {
  box-shadow: 0px 0px 0px 1px #7297c7;
}
</style>