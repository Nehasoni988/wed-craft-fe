<script setup lang="ts">
// IMPORT - Files and folders
import Videos from '@/components/sections/highlights/Videos.vue'
import PersonalVows from '@/components/sections/highlights/PersonalVows.vue'
// IMPORT - Modules
import {
  isVideoSectionEnabled,
  isPersonalVowSectionEnabled,
} from '../../utils/helpers/sections/section.helper'

// Constants
const showPersonalVow = isPersonalVowSectionEnabled
const showVideos = isVideoSectionEnabled
</script>

<template>
  <!-- Personal vows -->
  <PersonalVows v-if="showPersonalVow"></PersonalVows>

  <!-- Video highlights -->
  <Videos v-if="showVideos"></Videos>
</template>