<script setup lang="ts">
import { onMounted } from 'vue'
import CountDown from '@/components/sections/CountDown.vue'
import { weddingConfig } from './config/wedding.config'

onMounted(() => {
  // Function to create falling flowers
  function createFallingFlowers() {
    const container = document.getElementById('flower-animation')

    // Check if the number of flowers exceeds a limit (e.g., 10 flowers at a time)
    const currentFlowers = container.getElementsByClassName('flower')
    if (currentFlowers.length > 10) {
      // Remove the oldest flower if there are too many flowers
      currentFlowers[0].remove()
    }

    // Generate 1 flower every time the function runs
    const flower = document.createElement('div')
    flower.classList.add('flower')

    // Randomize position, animation duration, and delay
    flower.style.left = Math.random() * 100 + 'vw' // Random horizontal position
    flower.style.animationDuration = Math.random() * 5 + 5 + 's' // Between 5s and 10s for smooth animation
    flower.style.animationDelay = '0s' // Remove any delay for immediate falling
    flower.style.transform = `rotate(${Math.random() * 360}deg)` // Random initial rotation

    container.appendChild(flower)

    // Remove flower after animation ends
    flower.addEventListener('animationend', () => {
      flower.remove()
    })
  }

  // Call the function initially to start the animation
  createFallingFlowers()

  // Regenerate flowers every 8 seconds (adjusted timing)
  setInterval(createFallingFlowers, 8000) // Generate a flower every 8 seconds
})
</script>

<template>
  <!-- Falling flowers container -->
  <div id="flower-animation"></div>

  <!-- Fixed header -->
  <div class="h-auto w-full grid grid-cols-6 gap-4 p-4 mt-3" id="bebas">
    <div v-if="weddingConfig.sections.countDown.enable" class="col-start-2 mt-3 col-span-4 text-center">
      <CountDown></CountDown>
    </div>
    <div class="col-span-2 items-center top-0">
      <img v-lazy="'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/ganesha.png?updatedAt=1752149915818'" alt="" class="absolute w-16 right-0 top-2" />
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
/* Full screen container for the falling animation */
#flower-animation {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh; /* Full viewport height */
  pointer-events: none; /* Prevent interaction block */
  overflow: hidden;
  z-index: 100;
}

/* Flower styling */
.flower {
  position: absolute;
  width: 30px;
  height: 30px;
  background-image: url('https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/snow.png?updatedAt=1752149915843'); /* Your flower image */
  background-size: cover;
  background-repeat: no-repeat;
  animation: fall linear infinite; /* Continuous falling animation */
  opacity: 0.8; /* Slight transparency */
}

/* Keyframes for the falling effect */
@keyframes fall {
  0% {
    transform: translateY(-10%) rotate(0deg); /* Start above the viewport */
    opacity: 1;
  }
  100% {
    transform: translateY(120vh) rotate(360deg); /* Fall to beyond the viewport */
    opacity: 0; /* Fade out */
  }
}
</style>

<style>
@import url('https://fonts.googleapis.com/css?family=Pattaya');

.gfg {
  color: green;
  font-size: 30px;
}

#app {
  font-family: 'Pattaya', sans-serif;
  /* font-size: 30px; */
  /* text-shadow: 3px 0px 3px #ababab; */
}
</style>
