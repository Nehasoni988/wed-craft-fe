<script setup lang="ts">
import { weddingConfig } from './config/wedding.config'
import { headerImage, createAndstartFallingFlowersAnimation } from '@/utils/helpers/website.helper'

// Constants
const headerImageConst = headerImage

// Methods
const setupAnimations = () => {
  // 1. Falling flower animation

  // Call the function initially to start the animation
  createAndstartFallingFlowersAnimation()
  // Regenerate flowers every 8 seconds (adjusted timing)
  setInterval(createAndstartFallingFlowersAnimation, 8000) // Generate a flower every 8 seconds
}

// Lifecycle hooks
onMounted(() => {
  setupAnimations()
})
</script>

<template>
  <!-- Falling flowers container -->
  <div id="flower-animation"></div>

  <!-- Header -->
  <div class="h-auto w-full grid grid-cols-6 gap-4 p-4 mt-3" id="bebas">
    <!-- Any image -->
    <div class="col-span-2 items-center top-0">
      <img v-lazy="headerImageConst" alt="" class="absolute w-16 right-0 top-2" />
    </div>
  </div>

  <!-- Main Content -->
  <div class="h-screen" id="bebas">
    <div class="overflow-y-auto container mx-auto pb-10">
      <RouterView />
    </div>
  </div>

  <!-- Footer -->
  <div
    class="w-full text-center py-1 underline fixed bottom-0 bg-customDarkTeal text-white text-sm"
  >
    R & D by <span>Neha</span> & <span>Nihal</span>
  </div>
</template>

<style>
@import '@/assets/styles/flowerAnimation.css';
</style>