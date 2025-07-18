<script setup lang="ts">
import HeadingsUI from '@/components/ui/HeadingsUI.vue'

const navigateTo = () => {
  window.location.replace('https://nehanaalnihal.in')
}
</script>

<template>
  <div class="text-center">
    <span>" </span>
    <span class="text-lg text-customBrightTeal">Jab</span>
    <span class="mx-2 text-2xl font-bold text-center">Neha </span>
    <span class="text-lg text-customBrightTeal">Met</span>
    <span class="mx-2 text-2xl font-bold text-center">Nihal</span>
    <span>"</span>
    <div class="text-sm font-semibold text-customGolden my-4 text-fon">
      On <span class="text-xl">Sat, 18th Jan, 2025</span>
    </div>

    <HeadingsUI
      heading="Surprise! Not what you Expected?"
      subheading="Cash is cool but your answers are cooler 😉💖"
      :show-divider="false"
    ></HeadingsUI>

    <div class="flex items-center justify-center mt-5">
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfCjRm0HaT0oZfxVZ-IwkUSDJXiwQlHWl_DOSp_Y1QFZn3_qA/viewform?embedded=true"
        width="640"
        height="700"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
        >Loading…</iframe
      >
    </div>
    <div class="text-center mt-10">
      <div class="text-center mt-10">
        <a
          class="inline-flex items-center justify-center sm:w-full px-4 py-2 text-base font-bold leading-6 text-white border border-transparent md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl mx-auto cursor-pointer pulse-animation"
          @click="navigateTo()"
        >
          Blessings given? Back to the Invite
        </a>
      </div>
    </div>
  </div>
</template>
