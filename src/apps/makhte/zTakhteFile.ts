import { z } from 'zod'

const zTaskStatus = z.enum(['Backlog', 'Todo', 'Doing', 'Waiting', 'Done'])

const zTask = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  status: zTaskStatus,
})

const zTaskhteFileV1 = z.object({
  version: z.literal(1),
  projectTitle: z.string(),
  tasks: z.array(zTask),
})

export const zTakhteFile = z.discriminatedUnion('version', [zTaskhteFileV1])

export type FileData = z.infer<typeof zTakhteFile>
