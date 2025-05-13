<template>
  <div class="bg-white p-6 rounded-lg shadow-lg z-50 text-center w-64">
    <p class="mb-4 text-lg font-medium text-black">{{ message }}</p>
    <div class="flex justify-center items-center gap-4">
      <button
        class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        @click="onConfirm"
      >
        Yes
      </button>
      <button class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600" @click="onCancel">
        No
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  message: {
    type: String,
    default: 'Are you sure?',
  },
  onConfirm: {
    type: Function,
    required: true,
  },
  onCancel: {
    type: Function,
    required: true,
  },
})

const onConfirm = () => props.onConfirm()
const onCancel = () => props.onCancel()
</script>
