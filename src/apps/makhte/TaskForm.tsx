/** biome-ignore-all lint/correctness/noChildrenProp: as in the docs */

import { PencilSimpleIcon, PlusIcon } from '@phosphor-icons/react'
import { buttonVariants } from '#/common/ui/button'
import { useAppForm } from '#/features/forms'
import type { SimpleButtonSelectItem } from '#/features/forms/SimpleButtonSelect'
import type { ITask } from './ITask'
import { getTaskStatusTitle, TaskStatus } from './TaskStatus'

const taskStatusItems: SimpleButtonSelectItem[] = Object.values(TaskStatus).map(
  status => ({
    label: getTaskStatusTitle(status) || '',
    value: status,
  }),
)

const emptyValues: ITask = {
  id: '',
  title: '',
  status: 'Backlog',
  description: '',
}

export type TaskFormHandler = (
  values: ITask,
  resetForm: () => void,
) => Promise<void>

type TaskFormProps = {
  defaultValues: ITask | null
  handler: TaskFormHandler
}

export const TaskForm = (p: TaskFormProps) => {
  const isEditMode = p.defaultValues != null

  const form = useAppForm({
    defaultValues: p.defaultValues || emptyValues,
    async onSubmit(props) {
      const resetForm = () => form.reset()

      await p.handler(props.value, resetForm)
    },
  })

  return (
    <form.AppForm>
      <form.AppField
        name='title'
        children={field => <field.SingleLineInput title='عنوان' />}
      />

      <form.AppField
        name='status'
        children={field => (
          <field.SimpleButtonSelect title='وضعیت' items={taskStatusItems} />
        )}
      />

      <form.AppField
        name='description'
        children={field => <field.MultiLineInput title='توضیحات' />}
      />

      <form.SimpleSubmitBtn
        className={buttonVariants({ class: 'w-full' })}
        icon={isEditMode ? PencilSimpleIcon : PlusIcon}
        title={isEditMode ? 'ویرایش تسک' : 'ایجاد تسک'}
      />
    </form.AppForm>
  )
}
