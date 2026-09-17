import type { VariantProps } from 'class-variance-authority'
import type { ReactNode } from 'react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button, type buttonVariants } from '#/common/ui/button'
import { Field, FieldError, FieldLabel } from '@/common/ui/field'
import { useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

export type SimpleButtonSelectItem<T extends string = string> = {
  value: T
  label: string
  children?: ReactNode
}

interface SimpleButtonSelectProps {
  title: string
  items: SimpleButtonSelectItem[]
  disabled?: boolean
  btnSize?: VariantProps<typeof buttonVariants>['size']
}

export function SimpleButtonSelect(p: SimpleButtonSelectProps) {
  const field = useFieldContext<string>()
  const value = field.state.value || ''

  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{p.title}</FieldLabel>

      <div className='flex gap-1 flex-wrap'>
        {p.items.map(item => (
          <RenderTooltip key={item.value} tooltip={item.label}>
            <Button
              size={p.btnSize}
              id={field.name}
              name={field.name}
              variant={value === item.value ? 'default' : 'outline'}
              onClick={() => field.setValue(item.value)}
            >
              {item.children ?? item.label}
            </Button>
          </RenderTooltip>
        ))}
      </div>

      <FieldError>
        <FieldMeta meta={field.state.meta} />
      </FieldError>
    </Field>
  )
}
