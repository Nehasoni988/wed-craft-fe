<script setup lang="ts">
import { weddingConfig } from '@/config/wedding.config'
import { formatDate, formatTime } from '@/utils/helper'

// Her details
const bride = weddingConfig.couple.bride
const brideName = bride.name
const brideDesignation = bride.designation.title
const brideFatherName = bride.parents.father.name
const brideMotherName = bride.parents.mother.name

// His details
const groom = weddingConfig.couple.groom
const groomName = groom.name
const groomDesignation = groom.designation.title
const groomFatherName = groom.parents.father.name
const groomMotherName = groom.parents.mother.name

// Wedding details
const weddingVenue = weddingConfig.mainEvent.weddingVenue.name

// Other details
const mainInvitationConfig = weddingConfig.sections.mainInvitation
const heading = mainInvitationConfig.heading
const subHeading = mainInvitationConfig.subHeading
const locationCTA = mainInvitationConfig.locationCTA
const herParentLine = mainInvitationConfig.herParentLine
const hisParentLine = mainInvitationConfig.hisParentLine

// Methods
const weddingDate = () => formatDate(weddingConfig.mainEvent.weddingDate)

const weddingTime = () => formatTime(weddingConfig.mainEvent.weddingTime)

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
      {{ bride.name }} <span class="text-2xl">({{ brideDesignation }})</span>
    </div>

    <div class="text-md text-gray-500">
      ({{
        $t(herParentLine, {
          herFatherName: brideFatherName,
          herMotherName: brideMotherName,
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
      {{ groom.name }} <span class="text-2xl">({{ groomDesignation }})</span>
    </div>

    <div class="text-md text-gray-500">
      ({{
        $t(hisParentLine, {
          hisFatherName: groomFatherName,
          hisMotherName: groomMotherName,
        })
      }})
    </div>

    <div class="text-xl font-semibold text-customGolden mt-6 mb-4">
      <!-- FIXME:: This hardcode text needs to be handle -->
      On <span class="text-2xl">{{ weddingDate() }}</span>
    </div>

    <div class="text-lg font-semibold text-gray-700 mt-4">
      <!-- FIXME:: This hardcode text needs to be handle -->
      {{ weddingTime() }} onwards
    </div>

    <div class="text-xl font-medium text-customBrightTeal mt-4">
      <!-- FIXME:: This hardcode text needs to be handle -->
      At {{ weddingVenue }} <br />
      <span class="text-sm underline text-blue-500 cursor-pointer" @click="scrollTo()">
        {{ $t(locationCTA) }}
      </span>
    </div>
  </div>
</template>
