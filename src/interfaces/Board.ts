interface ITaskStatus {
  id: string
  name: string
}
interface ITask {
  id: string
  title: string
  description: string
  status: string
  type: string
}
interface IFormErrors {
  title?: string | null
  description?: string | null
  type?: string | null
  status?: string | null
}
export type { IFormErrors, ITask, ITaskStatus }
