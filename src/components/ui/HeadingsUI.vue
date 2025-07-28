<script setup lang="ts">
// IMPORT - Files and folders

// IMPORT - Modules

// Props
const props = defineProps(['heading', 'subheading', 'additional', 'htmlIdAttr'])
</script>

<template>
  <div class="relative flex py-5 items-center mt-16" :id="htmlIdAttr">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-3xl font-bold text-center"
      >{{ props.heading }}
      <br />
      <span class="text-xl text-customScarlet">{{ props.subheading }}</span>
      <div class="text-xl mt-2 text-customBrightTeal">{{ props.additional }}</div>
    </span>
    <div class="flex-grow border-t border-gray-400"></div>
  </div>
</template>
