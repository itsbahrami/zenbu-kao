import {
  CheckCircleIcon,
  CircleIcon,
  ClockIcon,
  ListDashesIcon,
  QuestionMarkIcon,
  SpinnerIcon,
} from '@phosphor-icons/react'

export const TaskStatus = {
  /** Not yet refined or prioritized */
  Backlog: 'Backlog',

  /** Ready to be picked up */
  Todo: 'Todo',

  /** Currently being worked on */
  Doing: 'Doing',

  /** Blocked or awaiting external input */
  Waiting: 'Waiting',

  /** Completed and verified */
  Done: 'Done',
} as const
export type TaskStatus = (typeof TaskStatus)[keyof typeof TaskStatus]

export const getTaskStatusTitle = (status: TaskStatus) => {
  switch (status) {
    case 'Backlog':
      return 'بک‌لاگ'

    case 'Todo':
      return 'آماده انجام'

    case 'Doing':
      return 'در حال انجام'

    case 'Waiting':
      return 'در انتظار'

    case 'Done':
      return 'انجام شده'

    default:
      return null
  }
}

export const getTaskStatusTextClassName = (status: TaskStatus) => {
  switch (status) {
    case 'Backlog':
      return 'text-mist-400'

    case 'Todo':
      return 'text-blue-400'

    case 'Doing':
      return 'text-yellow-400'

    case 'Waiting':
      return 'text-violet-400'

    case 'Done':
      return 'text-green-400'

    default:
      return null
  }
}

export const getTaskStatusIcon = (status: TaskStatus) => {
  switch (status) {
    case 'Backlog':
      return ListDashesIcon

    case 'Todo':
      return CircleIcon

    case 'Doing':
      return SpinnerIcon

    case 'Waiting':
      return ClockIcon

    case 'Done':
      return CheckCircleIcon

    default:
      return QuestionMarkIcon
  }
}
