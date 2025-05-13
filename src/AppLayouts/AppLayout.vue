<script setup lang="ts">
import SidebarComponent from '../components/shared/SidebarComponent.vue'
</script>
<template>
  <div class="flex items-center gap-2">
    <SidebarComponent />
    <main class="h-screen w-full overflow-y-auto">
      <slot></slot>
    </main>
  </div>
</template>
