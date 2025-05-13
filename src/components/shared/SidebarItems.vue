<script setup lang="ts">
import type { SidebarItemProps } from '../../interfaces/Sidebar.ts'
import SidebarItem from './SidebarItem.vue'

const sidebarItems: SidebarItemProps[] = [
  { id: '1', name: 'Dashboard', icon: 'fa-solid fa-border-all', route: '/' },
  { id: '2', name: 'Board', icon: 'fa-solid fa-list-check', route: '/tasks' },
]
</script>
<template>
  <ul class="mt-4 flex flex-col gap-5">
    <SidebarItem v-for="item in sidebarItems" :key="item.id" :item="item" />
  </ul>
</template>
