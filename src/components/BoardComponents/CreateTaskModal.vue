<script setup lang="ts">
import { taskStatus, taskTypes } from '@/utils/constent.ts'
import { reactive } from 'vue'
import type { ITask } from '../../interfaces/Board.ts'
import { useAllTaskStore } from '../../state_management/store.ts'
import { useFormValidation } from '../../utils/utils'
const store = useAllTaskStore()
const emit = defineEmits(['close'])
const props = defineProps<{
  clickedTask?: ITask | null | undefined
}>()
const closeModal = () => {
  emit('close')
}
const clickedTask = props?.clickedTask
const modalTitle = clickedTask ? 'Edit Task' : 'Create a new Task'

const formData: ITask = reactive({
  id: clickedTask?.id || crypto.randomUUID(),
  title: clickedTask?.title || '',
  description: clickedTask?.description || '',
  status: clickedTask?.status || '',
  type: clickedTask?.type || '',
})

const { errors, validateForm } = useFormValidation(formData)
const handleSubmit = async () => {
  const isValid = await validateForm()

  if (isValid) {
    // Simulate form submission
    if (clickedTask) {
      // Update existing task
      store.editTask(formData)
    } else {
      // Create new task
      store.addTask(formData)
    }

    closeModal()
  } else {
    console.log('Form has errors.')
  }
}
</script>

<template>
  <div class="w-96 text-black">
    <div class="bg-white rounded-lg shadow-lg p-6 w-full">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-semibold text-black">{{ modalTitle }}</h2>
        <font-awesome-icon @click="closeModal" class="cursor-pointer" icon="fa-solid fa-xmark" />
      </div>
      <form @submit.prevent="handleSubmit">
        <div class="flex flex-col mb-2">
          <label for="tittle" class="font-medium">Title</label>
          <input class="border border-black" type="text" id="name" v-model="formData.title" />
          <p v-if="errors.title" class="text-red-500">{{ errors.title }}</p>
        </div>
        <div class="flex flex-col mb-2">
          <label for="description" class="font-medium">Description:</label>
          <textarea
            class="border border-black"
            type="text"
            id="description"
            v-model="formData.description"
          />
          <p v-if="errors.description" class="text-red-500">{{ errors.description }}</p>
        </div>
        <div class="flex flex-col mb-4">
          <label for="status" class="font-medium">Status</label>
          <select id="status" class="border border-black" v-model="formData.status">
            <option disabled value="">Please select one</option>
            <option v-for="status in taskStatus" :key="status.id" :value="status.name">
              {{ status.name }}
            </option>
          </select>
          <p v-if="errors.status" class="text-red-500">{{ errors.status }}</p>
        </div>
        <div class="flex flex-col mb-4">
          <label for="type" class="font-medium">Type</label>
          <select id="type" class="border border-black" v-model="formData.type">
            <option disabled value="">Please select one</option>
            <option v-for="typeInfo in taskTypes" :key="typeInfo.id" :value="typeInfo.name">
              {{ typeInfo.name }}
            </option>
          </select>
          <p v-if="errors.type" class="text-red-500">{{ errors.type }}</p>
        </div>

        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  </div>
</template>
