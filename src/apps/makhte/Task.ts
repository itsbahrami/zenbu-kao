import { generateShortId } from '#/common/utils/generateShortId'
import type { ITask } from './ITask'
import { TaskStatus } from './TaskStatus'

export class Task implements ITask {
  id: string
  title: string
  description?: string
  status: TaskStatus

  constructor(p: ITask) {
    this.id = p.id
    this.title = p.title
    this.description = p.description
    this.status = p.status
  }

  static fromITask = (task: ITask): Task => new Task(task)

  static create = (
    title: string,
    description?: string,
    status: TaskStatus = TaskStatus.Backlog,
  ): Task =>
    new Task({
      id: generateShortId(),
      title,
      description,
      status,
    })

  getITask = (): ITask => ({
    id: this.id,
    status: this.status,
    title: this.title,
    description: this.description,
  })

  clone = (): Task => new Task(this.getITask())

  setTitle = (title: string): Task => {
    this.title = title

    return this
  }

  setDescription = (description?: string): Task => {
    this.description = description

    return this
  }

  setStatus = (status: TaskStatus): Task => {
    this.status = status

    return this
  }
}
