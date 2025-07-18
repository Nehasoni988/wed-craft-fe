<script setup lang="ts">
import { weddingConfig } from '@/config/wedding.config'
import { formatDateToUnixMS } from '@/utils/helper'
import { ref, onMounted, onBeforeUnmount } from 'vue'

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

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
const targetDate = formatDateToUnixMS(
  weddingConfig.mainEvent.weddingDate,
  weddingConfig.mainEvent.weddingTime
)

onMounted(() => {
  updateCountdown() // Initialize countdown
  timer = setInterval(updateCountdown, 1000) // Update every second
})

onBeforeUnmount(() => {
  clearInterval(timer) // Clean up the interval
})
</script>

<template>
  <div class="text-customScarlet">
    <p>
      <span class="text-lg">Only </span>
      <br class="block sm:hidden" />
      <span class="text-lg sm:text-2xl" id="counter">
        {{ days }} Days, {{ hours }}H : {{ minutes }}M : {{ seconds }}S
      </span>
      <br class="block sm:hidden" />
      <span class="text-lg"> until we say </span>
      <span class="text-3xl">'I Do!</span>
    </p>
  </div>
</template>

<style>
#counter {
  font-family: 'Arial', sans-serif !important;
}
</style>
