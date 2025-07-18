<script setup lang="ts">
import HeadingsUI from '@/components/ui/HeadingsUI.vue'

const downloadQR = () => {
  const link = document.createElement('a')
  link.href = 'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/qr.png?updatedAt=1752149915828'
  link.download = 'NehaNaalNihal' // Custom filename
  link.click()
}
</script>

<template>
  <HeadingsUI
    heading="Got blessings? Or want to gift? Scan here!"
    subheading="Give this QR a scan. Trust us, it's safer than your Netflix password."
  ></HeadingsUI>

  <div class="flex justify-center items-center">
    <img v-lazy="'https://ik.imagekit.io/zpxvtauqo/nehanaalnihal/qr.png?updatedAt=1752149915828'" alt="" class="w-48" />
  </div>
  <div class="text-center mt-10">
    <a
      class="inline-flex items-center justify-center sm:w-full px-4 py-2 text-base font-bold leading-6 text-white border border-transparent md:w-auto focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-xl mx-auto cursor-pointer pulse-animation"
      @click="downloadQR()"
    >
      Download QR Now
    </a>
  </div>
</template>
