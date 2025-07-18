<script lang="ts" setup>
import HerEvents from '@/components/events/HerEvents.vue'
import HisEvents from '@/components/events/HisEvents.vue'
import CollectiveEvents from '@/components/events/CollectiveEvents.vue'
import { weddingConfig } from '@/config/wedding.config'
import HeadingsUI from '@/components/ui/HeadingsUI.vue'
import GridUI from '@/components/ui/GridUI.vue'

// Constants
const weddingEvents = weddingConfig.events
const weddingConfigEventSection = weddingConfig.sections.events
const weddingCouple = weddingConfig.couple

const herEvents = weddingEvents.brideEvents
const herCity = weddingConfig.couple.bride.address.home.city
const herState = weddingConfig.couple.bride.address.home.state
const herEventsHeading = weddingConfigEventSection.herEvents.heading
const herEventsSubHeading = weddingConfigEventSection.herEvents.subHeading

const hisEvents = weddingEvents.groomEvents
const hisCity = weddingConfig.couple.groom.address.home.city
const hisState = weddingConfig.couple.groom.address.home.state
const hisEventsHeading = weddingConfigEventSection.hisEvents.heading
const hisEventsSubHeading = weddingConfigEventSection.hisEvents.subHeading

const collectiveEvents = weddingEvents.collectiveEvents
const collectiveCity = collectiveEvents[0].venue.city
const collectiveState = collectiveEvents[0].venue.state
const collectiveEventsHeading = weddingConfigEventSection.collectiveEvents.heading
const collectiveEventsSubHeading = weddingConfigEventSection.collectiveEvents.subHeading
</script>

<template>
  <!-- If bride events are available -->
  <div v-if="herEvents.length">
    <HeadingsUI
      :heading="$t(herEventsHeading)"
      :subheading="
        $t(herEventsSubHeading, {
          city: herCity,
          state: herState,
        })
      "
    ></HeadingsUI>
    <GridUI :wedding-functions="herEvents" from-side="bride"></GridUI>
  </div>

  <!-- If groom events are available -->
  <div v-if="hisEvents.length">
    <HeadingsUI
      :heading="$t(hisEventsHeading)"
      :subheading="
        $t(hisEventsSubHeading, {
          city: hisCity,
          state: hisState,
        })
      "
    ></HeadingsUI>
    <GridUI :wedding-functions="hisEvents" from-side="groom"></GridUI>
  </div>

  <!-- If collective events are available -->
  <div v-if="collectiveEvents.length">
    <HeadingsUI
      :heading="$t(collectiveEventsHeading)"
      :subheading="
        $t(collectiveEventsSubHeading, {
          city: collectiveCity,
          state: collectiveState,
        })
      "
    ></HeadingsUI>
    <GridUI :wedding-functions="collectiveEvents" from-side="together"></GridUI>
  </div>
</template>


<style>
</style>