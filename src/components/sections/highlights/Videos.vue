<script setup lang="ts">
// IMPORT - Files and folders
import HeadingsUI from '@/components/ui/HeadingsUI.vue'
import { weddingConfig } from '../../../config/wedding.config'
// IMPORT - Modules
import { weddingHighlightsVideos } from '../../../utils/helpers/sections/highlights/videos.helper'

// Constants
const weddingVideos = weddingHighlightsVideos

const heading = weddingConfig.sections.highlights.videos.heading
const subHeading = weddingConfig.sections.highlights.videos.subHeading
</script>

<template>
  <HeadingsUI
    :heading="$t(heading)"
    :subheading="$t(subHeading)"
  ></HeadingsUI>

  <div class="grid grid-cols-12 gap-4">
    <div
      v-for="(video, index) in weddingVideos"
      :key="index"
      class="col-span-6 sm:col-span-4 md:col-span-4"
    >
      <div class="border-double border-4 border-customBrightTeal h-48">
        <a v-if="video?.link" :href="video.link" target="_blank">
          <iframe
            :src="video.link"
            width="auto"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </a>
        <div v-else class="h-full flex justify-center items-center text-customGolden">
          <img
            class="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 object-cover"
            v-lazy="'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/comingSoon.gif?updatedAt=1752149915893'"
            alt="Function Image"
          />
        </div>
      </div>
      <div class="p-4 md:p-5">
        <div class="text-center mt-1 text-gray-500 dark:text-neutral-400">
          <h3 class="text-xl font-bold text-black">{{ video.name }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
iframe {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
