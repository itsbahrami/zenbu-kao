/** biome-ignore-all lint/a11y/noAutofocus: None of ur business! */

import { type FocusEvent, useState } from 'react'
import { Input } from '#/common/ui/input'
import { cn } from '#/common/utils'
import { makhteActions, useProjectTitle } from './store'

export const ProjectTitle = () => {
  const [isEditing, setEditing] = useState(false)
  const projectTitle = useProjectTitle()
  const hasTitle = !!projectTitle
  const placeholder = '(پروژه بی‌نام)'
  const titleClass = cn(
    'cursor-text',
    hasTitle ? 'font-bold text-foreground' : 'text-muted-foreground italic',
  )

  const startEditing = () => setEditing(true)

  const handleEditing = (e: FocusEvent<HTMLInputElement, Element>) => {
    makhteActions.setProjectTitle(e.target.value)
    setEditing(false)
  }

  return isEditing ? (
    <Input
      autoFocus
      placeholder={placeholder}
      defaultValue={projectTitle}
      onBlur={handleEditing}
      className='text-center max-w-60'
    />
  ) : (
    <button type='button' onDoubleClick={startEditing} className={titleClass}>
      {projectTitle || placeholder}
    </button>
  )
}
