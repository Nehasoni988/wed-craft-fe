<script setup lang="ts">
// IMPORT - Files and folders
import HeadingsUI from '@/components/ui/HeadingsUI.vue'
// IMPORT - Modules
import { weddingConfig } from '@/config/wedding.config'
import {
  herEventsVenue,
  hisEventsVenue,
  herEventsVenueMapLink,
  hisEventsVenueMapLink,
  herEventsVenueMapImage,
  hisEventsVenueMapImage,
} from '../../utils/helpers/sections/locations.helper'

const herEventsVenueConst = herEventsVenue
const hisEventsVenueConst = hisEventsVenue
const herEventsVenueMapLinkConst = herEventsVenueMapLink
const hisEventsVenueMapLinkConst = hisEventsVenueMapLink
const herEventsVenueMapImageConst = herEventsVenueMapImage
const hisEventsVenueMapImageConst = hisEventsVenueMapImage

const locationsSectionHeading = weddingConfig.sections.locations.heading
const locationsSectionSubHeading = weddingConfig.sections.locations.subHeading
const herSideVenueLine = weddingConfig.sections.locations.herSideVenueLine
const herSideVenueValue = weddingConfig.sections.locations.herSideVenueValue
const hisSideVenueLine = weddingConfig.sections.locations.hisSideVenueLine
const hisSideVenueValue = weddingConfig.sections.locations.hisSideVenueValue

// Methods
const openNewWindow = (url: string) => {
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
      <div>
        {{
          $t(herSideVenueValue, {
            venueName: herEventsVenueConst,
          })
        }}
      </div>
      <div class="flex items-center justify-center mt-10 border-4 border-double border-black">
        <img
          class="cursor-pointer"
          v-lazy="herEventsVenueMapImageConst"
          alt=""
          @click="openNewWindow(herEventsVenueMapLinkConst)"
        />
      </div>
    </div>
    <div class="col-span-12 sm:col-span-6 text-center">
      <div class="text-customBrightTeal">{{ $t(hisSideVenueLine) }}</div>
      <div>
        {{
          $t(hisSideVenueValue, {
            venueName: hisEventsVenueConst,
          })
        }}
      </div>
      <div
        class="flex items-center justify-center mt-10 border-4 border-double border-black"
        @click="openNewWindow(hisEventsVenueMapLinkConst)"
      >
        <img class="cursor-pointer" v-lazy="hisEventsVenueMapImageConst" alt="" />
      </div>
    </div>
  </div>
</template>
