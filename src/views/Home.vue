<script setup lang="ts">
import { onMounted } from 'vue'
import Events from "@/components/sections/Events.vue"
import VideoHighlights from '@/components/sections/highlights/videos/Index.vue'
import PersonalVows from '@/components/sections/highlights/PersonalVows.vue'
import MainInvitation from '@/components/sections/MainInvitation.vue'
import LocationsOnMap from '@/components/sections/LocationsOnMap.vue'
import RSVPScan from '@/components/sections/RSVPScan.vue'
import { weddingConfig } from '../config/wedding.config'

onMounted(() => {
  // Function to create falling flowers
  function createFallingFlowers() {
    const container = document.getElementById('flower-animation')

    // Check if the number of flowers exceeds a limit (e.g., 10 flowers at a time)
    const currentFlowers = container?.getElementsByClassName('flower')
    if (currentFlowers && currentFlowers.length > 10) {
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
  <div class="overflow-y-auto container mx-auto pb-10">
    <!-- Main invitation template -->
    <MainInvitation></MainInvitation>

    <!-- Events -->
    <Events v-if="weddingConfig.sections.events.enable"></Events>

    <!-- Locations of venue -->
    <LocationsOnMap v-if="weddingConfig.sections.locations.enable"></LocationsOnMap>

    <!-- Personal vows -->
    <PersonalVows v-if="weddingConfig.sections.highlights.personalVows.enable"></PersonalVows>

    <!-- Video highlights -->
    <VideoHighlights v-if="weddingConfig.sections.highlights.videos.enable"></VideoHighlights>

    <!-- Others -->
    <RSVPScan v-if="weddingConfig.sections.rsvpScan.enable"></RSVPScan>
  </div>

  <!-- Footer -->
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

#bebas {
  font-family: 'Pattaya', sans-serif;
  /* font-size: 30px; */
  /* text-shadow: 3px 0px 3px #ababab; */
}
</style>
