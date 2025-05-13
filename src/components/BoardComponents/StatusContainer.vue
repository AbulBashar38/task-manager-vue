<script setup lang="ts">
import { computed, defineProps, ref } from 'vue'
import ITaskStatus, { type ITask } from '../../interfaces/Board.ts'
import { useAllTaskStore } from '../../state_management/store.ts'
import ConfirmationModal from '../shared/ConfirmationModal.vue'
import ModalContainer from '../shared/ModalContainer.vue'
import CreateTaskModal from './CreateTaskModal.vue'
import TaskCard from './TaskCard.vue'
const { status } = defineProps<{
  status: ITaskStatus
}>()
const clickedTask = ref(null)
const showModal = ref(false)
const showConfirmationModal = ref(false)

const store = useAllTaskStore()
const tasks = computed(() => store.allTasks)
const selectedTask = computed(() => {
  return tasks.value.filter((task) => task.status === status.name)
})

const openModal = (task: ITask) => {
  clickedTask.value = task
  showModal.value = true
}
const closeModal = () => {
  showModal.value = false
  clickedTask.value = null
}

const openConfirmationModal = (task: ITask) => {
  clickedTask.value = task
  showConfirmationModal.value = true
}
const handleCancelDelete = () => {
  showConfirmationModal.value = false
  clickedTask.value = null
}
const handleConfirmDelete = () => {
  if (clickedTask.value) {
    store.deleteTask(clickedTask.value.id)
  }
  showConfirmationModal.value = false
  clickedTask.value = null
}
</script>

<template>
  <section class="bg-[#EEF2F5] p-6 rounded-lg">
    <h3 class="text-black text-base font-medium mb-3">{{ status.name }}</h3>
    <div class="flex flex-col gap-4">
      <TaskCard
        v-for="task in selectedTask"
        :clickEdit="openModal"
        :clickDelete="openConfirmationModal"
        :task="task"
        :key="task.id"
      />
    </div>
  </section>
  <ModalContainer v-if="showModal">
    <CreateTaskModal :clickedTask="clickedTask" @close="closeModal" />
  </ModalContainer>
  <ModalContainer v-if="showConfirmationModal">
    <ConfirmationModal
      message="Are you Sure?"
      :onConfirm="handleConfirmDelete"
      :onCancel="handleCancelDelete"
    />
  </ModalContainer>
</template>
