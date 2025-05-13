<script setup lang="ts">
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'
import type { SidebarItemProps } from '../../interfaces/Sidebar.ts'

defineProps<{
  item: SidebarItemProps
}>()
</script>

<template>
  <li class="sidebar-item">
    <RouterLink
      :to="item.route"
      class="flex items-center gap-2 text-gray-700 hover:text-gray-900 pl-5 py-2"
      active-class="bg-[#ecf4fd] font-medium !text-black"
    >
      <font-awesome-icon :icon="item.icon" />
      <span class="sidebar-text">{{ item.name }}</span>
    </RouterLink>
  </li>
</template>
