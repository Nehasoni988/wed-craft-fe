<script lang="ts" setup>
// IMPORT - Files and folders
import HerEvents from '@/components/events/HerEvents.vue'
import HisEvents from '@/components/events/HisEvents.vue'
import CollectiveEvents from '@/components/events/CollectiveEvents.vue'
import { weddingConfig } from '@/config/wedding.config'
import HeadingsUI from '@/components/ui/HeadingsUI.vue'
import GridUI from '@/components/ui/GridUI.vue'
// IMPORT - Modules
import {
  isHerEventsAvailable,
  isHisEventsAvailable,
  isCollectiveEventsAvailable,
  herEvents,
  hisEvents,
  collectiveEvents,
} from '@/utils/helpers/sections/events.helper.ts'
import { herEventsVenue, hisEventsVenue } from '@/utils/helpers/sections/locations.helper.ts'
import { mainEventVenue } from '@/utils/helpers/sections/mainEvent.helper'

// Constants
const isHerEventsAvailableConst = isHerEventsAvailable
const isHisEventsAvailableConst = isHerEventsAvailable
const isCollectiveEventsAvailableConst = isHerEventsAvailable
const herEventsConst = herEvents
const hisEventsConst = herEvents
const collectiveEventsConst = herEvents
const herEventsVenueConst = herEventsVenue
const hisEventsVenueConst = hisEventsVenue
const collectiveEventsVenueConst = mainEventVenue

const herEventsHeading = weddingConfig.sections.events.herEvents.heading
const herEventsSubHeading = weddingConfig.sections.events.herEvents.subHeading
const hisEventsHeading = weddingConfig.sections.events.hisEvents.heading
const hisEventsSubHeading = weddingConfig.sections.events.hisEvents.subHeading
const collectiveEventsHeading = weddingConfig.sections.events.collectiveEvents.heading
const collectiveEventsSubHeading = weddingConfig.sections.events.collectiveEvents.subHeading
</script>

<template>
  <!-- If bride events are available -->
  <div v-if="isHerEventsAvailableConst">
    <HeadingsUI
      :heading="$t(herEventsHeading)"
      :subheading="
        $t(herEventsSubHeading, {
          venue: herEventsVenueConst,
        })
      "
    ></HeadingsUI>
    <GridUI :events="herEventsConst" from-side="bride"></GridUI>
  </div>

  <!-- If groom events are available -->
  <div v-if="isHisEventsAvailableConst">
    <HeadingsUI
      :heading="$t(hisEventsHeading)"
      :subheading="
        $t(hisEventsSubHeading, {
          venue: hisEventsVenueConst,
        })
      "
    ></HeadingsUI>
    <GridUI :events="hisEventsConst" from-side="groom"></GridUI>
  </div>

  <!-- If collective events are available -->
  <div v-if="isCollectiveEventsAvailableConst">
    <HeadingsUI
      :heading="$t(collectiveEventsHeading)"
      :subheading="
        $t(collectiveEventsSubHeading, {
          venue: collectiveEventsVenueConst,
        })
      "
    ></HeadingsUI>
    <GridUI :events="collectiveEventsConst" from-side="together"></GridUI>
  </div>
</template>


<style>
</style>