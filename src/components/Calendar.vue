<template>
  <div class="calendar">
    <calendar-header 
      class="header"
      :current-date="currentDate" 
      :locale="locale"
      @change-month="changeDateHandler" 
    />
    <calendar-grid 
      :current-date="currentDate" 
      :select-date="selectedDate" 
      :locale="locale"
      @select-date="selectDateHandler" 
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import CalendarHeader from '@/components/CalendarHeader.vue';
import CalendarGrid from '@/components/CalendarGrid.vue';

const props = defineProps({
  currentDate: { 
    type: String,
    required: false,
    default: null
  },
  locale: {
    type: String,
    required: false,
    default: 'ru-RU'
  }
})

const emit = defineEmits(['select-date'])

const currentDate = ref(!props.currentDate ? new Date() : new Date(props.currentDate)); //При инициализации компонент может принимать свойство даты в формате "год-месяц-день" и переключать текущий месяц и день на нее. Если дата не передана, то берем текущий день.
const selectedDate = ref(new Date());

function changeDateHandler(date) {
  currentDate.value = date
}

function selectDateHandler(date) {
  selectedDate.value = date
  emit('select-date', date) // На клик по дню повесить событие, которое будет возвращать выбранную дату.
}
</script>

<style lang="scss" scoped>
.header {
  margin-bottom: 16px;
}
</style>