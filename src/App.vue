<template>
  <div class="main">
    <Calendar 
      :current-date="'2023-10-08'" 
      :locale="selectedLocale" 
      @select-date="logDate"
    />
    <div>
      <div>
        <input type="radio" id="rus" name="locale" value="ru-RU" checked v-model="selectedLocale" />
        <label for="rus">Русский</label>
      </div>
      <div>
        <input type="radio" id="eus" name="locale" value="en-US" v-model="selectedLocale" />
        <label for="eus">Англиский</label>
      </div>
      <div>
        <input type="radio" id="fru" name="locale" value="fr-FR" v-model="selectedLocale" />
        <label for="fru">Французский</label>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Calendar from '@/components/Calendar.vue';

const selectedLocale = ref('ru-RU')

function logDate(date) {
  console.log(date)
}
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  gap: 150px;
}
</style>