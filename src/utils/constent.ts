import type { ITask, ITaskStatus } from '../interfaces/Board'

const taskStatus: ITaskStatus[] = [
  { id: '1', name: 'To Do' },
  { id: '2', name: 'In Progress' },
  { id: '3', name: 'Done' },
]
const taskTypes: ITaskStatus[] = [
  { id: '1', name: 'Design system' },
  { id: '2', name: 'Development' },
  { id: '3', name: 'Typography' },
]
const allTasks: ITask[] = [
  {
    id: '1',
    title: 'Task 1',
    description: 'Description for Task 1',
    status: 'To Do',
    type: 'Design system',
  },
  {
    id: '2',
    title: 'Task 2',
    description: 'Description for Task 2',
    status: 'In Progress',
    type: 'Design system',
  },
  {
    id: '3',
    title: 'Task 3',
    description: 'Description for Task 3',
    status: 'Done',
    type: 'Development',
  },
  {
    id: '4',
    title: 'Task 4',
    description: 'Description for Task 3',
    status: 'Done',
    type: 'Typography',
  },
]
export { allTasks, taskStatus, taskTypes }
