import { defineStore } from 'pinia'
import type { ITask } from '../interfaces/Board'
import { allTasks } from '../utils/constent'
interface ITaskStore {
  allTasks: ITask[]
}
export const useAllTaskStore = defineStore('taskStore', {
  state: (): ITaskStore => ({
    allTasks,
  }),
  actions: {
    addTask(task: ITask) {
      this.allTasks.push(task)
    },
    editTask(updatedTask: ITask) {
      const taskId = updatedTask.id
      const taskIndex = this.allTasks.findIndex((task) => task.id === taskId)
      if (taskIndex !== -1) {
        this.allTasks[taskIndex] = { ...this.allTasks[taskIndex], ...updatedTask }
      }
    },
    deleteTask(taskId: string) {
      this.allTasks = this.allTasks.filter((task) => task.id !== taskId)
    },
  },
})
