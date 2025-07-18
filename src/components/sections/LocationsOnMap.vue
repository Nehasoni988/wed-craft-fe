<script setup lang="ts">
import HeadingsUI from '@/components/ui/HeadingsUI.vue'
import { weddingConfig } from '@/config/wedding.config'

const brideVenue = weddingConfig.couple.bride.address.venue
const groomVenue = weddingConfig.couple.groom.address.venue

const weddingConfigLocationsSection = weddingConfig.sections.locations
const locationsSectionHeading = weddingConfigLocationsSection.heading
const locationsSectionSubHeading = weddingConfigLocationsSection.subHeading

const herSideVenueLine = weddingConfigLocationsSection.herSideVenueLine
const herSideVenueValue = weddingConfigLocationsSection.herSideVenueValue
const hisSideVenueLine = weddingConfigLocationsSection.hisSideVenueLine
const hisSideVenueValue = weddingConfigLocationsSection.hisSideVenueValue

// Methods
const openNewWindow = (url) => {
  window.open(url)
}
</script>

<template>
  <HeadingsUI
    :heading="$t(locationsSectionHeading)"
    :subheading="$t(locationsSectionSubHeading)"
    id="locations"
  ></HeadingsUI>

  <div class="grid grid-cols-12 gap-4">
    <div class="col-span-12 sm:col-span-6 text-center">
      <div class="text-customBrightTeal">{{ $t(herSideVenueLine) }}</div>
      <div>{{
          $t(herSideVenueValue, {
            venueName: brideVenue.name,
          })
        }}</div>
      <div class="flex items-center justify-center mt-10 border-4 border-double border-black">
        <img
          class="cursor-pointer"
          v-lazy="'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/map.png?updatedAt=1752149915922'"
          alt=""
          @click="openNewWindow(brideVenue.googleMapLink)"
        />
      </div>
    </div>
    <div class="col-span-12 sm:col-span-6 text-center">
      <div class="text-customBrightTeal">{{ $t(hisSideVenueLine) }}</div>
      <div>
        {{
          $t(hisSideVenueValue, {
            venueName: groomVenue.name,
          })
        }}
      </div>
      <div
        class="flex items-center justify-center mt-10 border-4 border-double border-black"
        @click="openNewWindow(groomVenue.googleMapLink)"
      >
        <img class="cursor-pointer" v-lazy="'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/jaipur-map.png?updatedAt=1752149915973'" alt="" />
      </div>
    </div>
  </div>
</template>
