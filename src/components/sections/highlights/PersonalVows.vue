<script setup lang="ts">
import HeadingsUI from '@/components/ui/HeadingsUI.vue'
import VowCardUI from '@/components/ui/VowCardUI.vue'
import { weddingConfig } from '../../../config/wedding.config'
import { herPersonalVow, hisPersonalVow } from '../../../utils/helpers/sections/highlights/personalVows.helper'

// Constants
const weddingConfigPersonalVowSection = weddingConfig.sections.highlights.personalVows
const heading = weddingConfigPersonalVowSection.heading
const subHeading = weddingConfigPersonalVowSection.subHeading

const herPersonalVowConst = herPersonalVow
const hisPersonalVowConst = hisPersonalVow
</script>

<template>
  <HeadingsUI
    :heading="$t(heading)"
    :subheading="$t(subHeading)"
  ></HeadingsUI>

  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12">
      <div class="flex items-center justify-center">
        <VowCardUI :vow="herPersonalVowConst"></VowCardUI>
      </div>
    </div>
    <div class="col-span-12">
      <div class="flex items-center justify-center">
        <VowCardUI :vow="hisPersonalVowConst"></VowCardUI>
      </div>
    </div>
  </div>
</template>
