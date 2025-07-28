<script setup lang="ts">
// IMPORT - Files and folders

// IMPORT - Modules
import {
  formatDate,
  formatTime,
  isDateMatchedWithToday,
} from '@/utils/helpers/helper'
import { TDate, TTime } from '../../types/common.types'
import { TCalendarLink } from '../../types/sections/events.types'
import { generateGoogleCalendarLink, isEventToday } from '../../utils/helpers/sections/events.helper'

// Props
const props = defineProps(['events', 'fromSide'])

// Computed
const gridClass = computed(() => {
  if (props.fromSide === 'bride') {
    return 'col-span-6 sm:col-span-6 md:col-span-4'
  }

  if (props.fromSide === 'groom') {
    return 'col-span-6 sm:col-span-6 md:col-span-3'
  }

  if (props.fromSide === 'together') {
    return 'col-span-6 sm:col-span-6 md:col-span-3'
  }
})

// Methods
const shouldHighlight = (date: TDate) => isEventToday(date)
const eventDate = (date: TDate) => formatDate(date)
const eventTime = (time: TTime) => formatTime(time)
const calendarLink = (calendarLink: TCalendarLink) => generateGoogleCalendarLink(calendarLink)
</script>

<template>
  <div class="grid grid-cols-12 gap-4">
    <div
      v-for="(event, index) in events"
      :key="index"
      style="position: relative"
      :class="['relative', gridClass, { highlight: false }]"
    >
      <div class="border-double border-4 border-customOliveGreen h-full">
        <!-- Badge -->
        <span
          v-if="shouldHighlight(event.date)"
          class="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow"
        >
          Today
        </span>
        <div class="flex items-center justify-center">
          <img
            class="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
            v-lazy="event.image"
            alt="Function Image"
          />
        </div>
        <div class="p-4 md:p-5">
          <div class="text-center mt-1 text-gray-500 dark:text-neutral-400">
            <h3 class="text-xl font-bold text-customDarkTeal">{{ event.name }}</h3>
            <p class="text-sm font-bold text-customDarkGreenGray">
              {{ eventDate(event.date) }}
            </p>
            <p class="text-lg text-gray-600">
              <span>{{ eventTime(event.time) }}</span>
              <span>, </span>
              <span>at {{ event.venue.name }}</span>
            </p>
            <p class="text-sm text-gray-700">
              <span class="font-semibold">
                <span class="text-customMaroon">{{
                  props.fromSide === 'together' ? "Bride's Guests' Theme: " : 'Guest Theme: '
                }}</span>
              </span>
              {{ event.guestTheme }}
            </p>
            <p>
              <a
                :href="calendarLink(event.calendarLink)"
                target="_blank"
                class="text-sm underline text-blue-500 cursor-pointer"
              >
                Add to Calendar
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.highlight {
  /* background-color: #fef9e7; */
  border: 3px solid theme('colors.customGolden');
  box-shadow: 0 0 10px theme('colors.customGolden');
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.6);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 204, 0, 0.8);
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 204, 0, 0.6);
  }
}
</style>
