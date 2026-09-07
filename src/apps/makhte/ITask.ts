import type { TaskStatus } from './TaskStatus'

export interface ITask {
  id: string
  title: string
  description?: string
  status: TaskStatus
}
