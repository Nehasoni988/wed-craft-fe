<script setup lang="ts">
// IMPORT - Files and folders

// IMPORT - Modules
import { weddingConfig } from '@/config/wedding.config'
import { formatDateToUnixMS } from '@/utils/helpers/helper'

// Constants
const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)
const heading = weddingConfig.sections.countDown.heading

let timer

const updateCountdown = () => {
  const now = new Date().getTime()
  const timeDifference = targetDate - now

  if (timeDifference > 0) {
    days.value = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((timeDifference % (1000 * 60)) / 1000)
  } else {
    // Countdown is over
    clearInterval(timer)
  }
}
const targetDate = formatDateToUnixMS(weddingConfig.mainEvent.date, weddingConfig.mainEvent.time)

onMounted(() => {
  updateCountdown() // Initialize countdown
  timer = setInterval(updateCountdown, 1000) // Update every second
})

onBeforeUnmount(() => {
  clearInterval(timer) // Clean up the interval
})
</script>

<template>
  <div class="text-customScarlet text-center mb-8">
    <div
      v-html="
        $t(heading, {
          days,
          hours,
          minutes,
          seconds,
        })
      "
    ></div>
  </div>
</template>

<style>
#counter {
  font-family: 'Arial', sans-serif !important;
}
</style>
