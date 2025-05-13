<script setup lang="ts">
import { ref } from 'vue'
import ModalContainer from '../shared/ModalContainer.vue'
import CreateTaskModal from './CreateTaskModal.vue'
import TaskContainer from './TaskContainer.vue'

const showModal = ref(false)

const closeModal = () => {
  showModal.value = false
}
const openModal = () => {
  showModal.value = true
}
</script>

<template>
  <div class="flex items-center justify-between w-full h-full my-10">
    <h1 class="text-3xl font-medium text-black">Board</h1>
    <button @click="openModal" class="bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer">
      Add Task
    </button>
  </div>
  <TaskContainer />
  <ModalContainer v-if="showModal">
    <CreateTaskModal @close="closeModal" />
  </ModalContainer>
</template>
