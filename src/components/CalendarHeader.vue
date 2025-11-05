<template>
  <div class="header">
    <button class="left" @click="backMonth"><</button>
    <p class="month">{{ `${currentMonth} ${currentYear}` }}</p>
    <button class="right" @click="nextMonth">></button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { getMonthName } from '@/utils/date'

const props = defineProps({
  currentDate: {
    type: Date,
    required: true
  },
  locale: {
    type: String,
    required: false,
    default: 'ru-RU'
  }
})

const emit = defineEmits(['change-month'])

const currentYear = computed(() => props.currentDate.getFullYear())
const currentMonth = computed(() => getMonthName(props.currentDate.getMonth(), props.locale))

function nextMonth() {
  const next = new Date(
    props.currentDate.getFullYear(),
    props.currentDate.getMonth() + 1,
    1
  )

  emit('change-month', next)
}

function backMonth() {
  const prev = new Date(
    props.currentDate.getFullYear(),
    props.currentDate.getMonth() - 1,
    1
  )

  emit('change-month', prev)
}
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
}
</style>