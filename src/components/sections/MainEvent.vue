<script setup lang="ts">
import { weddingConfig } from '@/config/wedding.config'
import { herInfo, hisInfo, mainEventDate, mainEventTime, mainEventVenue } from '@/utils/helpers/sections/mainEvent.helper'

// Constants
const herConst = herInfo
const hisConst = hisInfo
const mainEventDateConst = mainEventDate
const mainEventTimeConst = mainEventTime
const mainEventVenueConst = mainEventVenue

// Other details
const mainInvitationConfig = weddingConfig.sections.mainInvitation
const heading = mainInvitationConfig.heading
const subHeading = mainInvitationConfig.subHeading
const locationCTA = mainInvitationConfig.locationCTA
const herParentLine = mainInvitationConfig.herParentLine
const hisParentLine = mainInvitationConfig.hisParentLine

// Methods
const scrollTo = () => {
  const element = document.getElementById('locations')
  element.scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="text-center">
    <div class="text-customGolden py-3 underline text-4xl">{{ $t(heading) }}</div>

    <div class="text-lg text-gray-600 my-6 px-4">
      {{ $t(subHeading) }}
    </div>

    <div class="text-4xl text-customMaroon mt-4">
      {{ herConst.name }} <span class="text-2xl">({{ herConst.designation }})</span>
    </div>

    <div class="text-md text-gray-500">
      ({{
        $t(herParentLine, {
          herFatherName: herConst.parents.father.name,
          herMotherName: herConst.parents.father.name,
        })
      }})
    </div>

    <div class="flex items-center justify-center text-sm font-semibold text-gray-800 mb-4">
      <img
        v-lazy="
          'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/varmala.gif?updatedAt=1752149915899'
        "
        alt="Logo"
        class="w-48 h-48"
      />
    </div>

    <div class="text-4xl text-customMaroon mt-4">
      {{ hisConst.name }} <span class="text-2xl">({{ hisConst.designation }})</span>
    </div>

    <div class="text-md text-gray-500">
      ({{
        $t(hisParentLine, {
          hisFatherName: hisConst.parents.father.name,
          hisMotherName: hisConst.parents.mother.name,
        })
      }})
    </div>

    <div class="text-xl font-semibold text-customGolden mt-6 mb-4">
      <!-- FIXME:: This hardcode text needs to be handle -->
      On <span class="text-2xl">{{ mainEventDateConst }}</span>
    </div>

    <div class="text-lg font-semibold text-gray-700 mt-4">
      <!-- FIXME:: This hardcode text needs to be handle -->
      {{ mainEventTimeConst }} onwards
    </div>

    <div class="text-xl font-medium text-customBrightTeal mt-4">
      <!-- FIXME:: This hardcode text needs to be handle -->
      At {{ mainEventVenueConst }} <br />
      <span class="text-sm underline text-blue-500 cursor-pointer" @click="scrollTo()">
        {{ $t(locationCTA) }}
      </span>
    </div>
  </div>
</template>
