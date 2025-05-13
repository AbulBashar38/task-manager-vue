<script lang="ts" setup>
import SidebarHeader from './SidebarHeader.vue'
import SidebarItems from './SidebarItems.vue'
</script>

<template>
  <aside class="h-screen w-64 shadow-[12px_-1px_35px_#cacaca] hidden lg:block">
    <SidebarHeader />
    <SidebarItems />
  </aside>
</template>
