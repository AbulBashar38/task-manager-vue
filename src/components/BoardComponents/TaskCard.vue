<script setup lang="ts">
import { ITask } from '../../interfaces/Board.ts'
const { task } = defineProps<{
  task: ITask
  clickEdit: (task: ITask) => void
  clickDelete: (task: ITask) => void
}>()
const typeColors = {
  'Design system': 'bg-green-600',
  Development: 'bg-blue-600',
  Typography: 'bg-red-600',
}
const getTypeColor = (type: string) => {
  return typeColors[type] || 'bg-gray-600'
}
const typeColor = getTypeColor(task.type)
</script>

<template>
  <section class="rounded-xl bg-white shadow-md p-4">
    <div class="flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div :class="`w-[9px] h-[9px] ${typeColor} rounded-full`"></div>
        <p class="font-medium text-[8px] text-black uppercase">{{ task.type }}</p>
      </div>
      <div class="flex items-center gap-2">
        <font-awesome-icon
          @click="() => clickEdit(task)"
          class="cursor-pointer text-black"
          icon="fa-solid fa-pen-to-square"
        />
        <font-awesome-icon
          @click="() => clickDelete(task)"
          class="cursor-pointer text-red-500"
          icon="fa-solid fa-trash-can"
        />
      </div>
    </div>
    <h1 class="text-black text-[18px] font-medium mt-2">
      {{ task.title }}
    </h1>
    <p class="text-[12px] mt-2 text-black">
      {{ task.description }}
    </p>
  </section>
</template>
