<script setup lang="ts">
import Videos from '@/components/sections/highlights/Videos.vue'
import PersonalVows from '@/components/sections/highlights/PersonalVows.vue'
import {
  isHighlightsVideoSectionEnabled,
  isPersonalVowSectionEnabled,
} from '../../utils/helpers/sections/section.helper'

const showPersonalVow = isPersonalVowSectionEnabled
const showVideos = isHighlightsVideoSectionEnabled
</script>

<template>
  <!-- Personal vows -->
  <PersonalVows v-if="showPersonalVow"></PersonalVows>

  <!-- Video highlights -->
  <Videos v-if="showVideos"></Videos>
</template>