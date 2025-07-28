<script setup lang="ts">
// IMPORT - files and folders
import CountDown from '@/components/sections/CountDown.vue'
import Events from '@/components/sections/Events.vue'
import MainEvent from '@/components/sections/MainEvent.vue'
import Locations from '@/components/sections/Locations.vue'
import Highlights from "@/components/sections/Highlights.vue"
import RSVPScan from '@/components/sections/RSVPScan.vue'
// IMPORT - Constants and Functions
import {
  isEventsSectionEnabled,
  isLocationsSectionEnabled,
  isPersonalVowSectionEnabled,
  isVideoSectionEnabled,
  isHighlightsSectionEnabled,
  isCountDownSectionEnabled
} from '@/utils/helpers/sections/section.helper'

// Constants
const showCountDownSection = isCountDownSectionEnabled
const showEventsSection = isEventsSectionEnabled
const showLocationsSection = isLocationsSectionEnabled
const showHighlightsSection = isHighlightsSectionEnabled
</script>

<template>
  <div class="overflow-y-auto container mx-auto pb-10">
    <!-- Wedding count down -->
    <CountDown v-if="showCountDownSection"></CountDown>
  
    <!-- Main invitation template -->
    <MainEvent></MainEvent>

    <!-- Events -->
    <Events v-if="showEventsSection"></Events>

    <!-- Locations of venue -->
    <Locations v-if="showLocationsSection"></Locations>

    <!-- Highlights -->
    <Highlights v-if="showHighlightsSection"></Highlights>

    <!-- Others -->
    <!-- <RSVPScan v-if="weddingConfig.sections.rsvpScan.enable"></RSVPScan> -->
  </div>

  <!-- Footer -->
</template>
