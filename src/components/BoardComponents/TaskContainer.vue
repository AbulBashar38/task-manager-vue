<script setup lang="ts">
import { taskStatus } from '../../utils/constent'
import StatusContainer from './StatusContainer.vue'
</script>

<template>
  <section class="grid grid-cols-1 gap-5 mt-5 md:grid-cols-2 lg:grid-cols-3">
    <StatusContainer v-for="status in taskStatus" :key="status.id" :status="status" />
  </section>
</template>
