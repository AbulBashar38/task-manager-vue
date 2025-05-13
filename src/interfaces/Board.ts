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

export { ITask, ITaskStatus }
