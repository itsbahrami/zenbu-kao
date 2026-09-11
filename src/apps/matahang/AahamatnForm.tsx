/** biome-ignore-all lint/correctness/noChildrenProp: as in the docs */

import { PencilSimpleIcon, PlusIcon } from '@phosphor-icons/react'
import { buttonVariants } from '#/common/ui/button'
import { useAppForm } from '#/features/forms'
import { Language, simpleButtonSelectLanguageItems } from './Language'
import type { Aahamatn } from './zAahamatn'

const emptyValues: Aahamatn = {
  title: '',
  language: Language.Other,
  artist: '',
  audioUrl: '',
  color: '',
  lyrics: '',
  sourceUrl: '',
}

export type AahamatnFormHandler = (
  values: Aahamatn,
  emptyForm: () => void,
) => Promise<void>

type AahamatnFormProps = {
  defaultValues: Aahamatn | null
  handler: AahamatnFormHandler
  isEditMode: boolean
}

export const AahamatnForm = (p: AahamatnFormProps) => {
  const form = useAppForm({
    defaultValues: p.defaultValues || emptyValues,
    async onSubmit(props) {
      const emptyForm = () => form.reset(emptyValues)

      await p.handler(props.value, emptyForm)
    },
  })

  return (
    <form.AppForm>
      <form.AppField
        name='title'
        children={field => <field.SingleLineInput title='عنوان' />}
      />

      <form.AppField
        name='artist'
        children={field => <field.SingleLineInput title='هنرمند' />}
      />

      <form.AppField
        name='language'
        children={field => (
          <field.SimpleButtonSelect
            title='زبان'
            items={simpleButtonSelectLanguageItems}
          />
        )}
      />

      <form.AppField
        name='lyrics'
        children={field => <field.MultiLineInput title='متن' />}
      />

      <form.AppField
        name='audioUrl'
        children={field => <field.SingleLineInput title='لینک فایل صوتی' />}
      />

      {/* TODO: ENALBE THIS OPTION SOON... */}
      {/* <form.AppField name='color' children={field => <field.SingleLineInput title='AAA' />} /> */}

      <form.AppField
        name='sourceUrl'
        children={field => <field.SingleLineInput title='لینک منبع' />}
      />

      <form.SimpleSubmitBtn
        className={buttonVariants({ class: 'w-full' })}
        icon={p.isEditMode ? PencilSimpleIcon : PlusIcon}
        title={p.isEditMode ? 'ویرایش آهمتن' : 'ایجاد آهمتن'}
      />
    </form.AppForm>
  )
}
