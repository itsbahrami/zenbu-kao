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
