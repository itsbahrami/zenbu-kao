import { Button } from '#/common/ui/button'
import { Field, FieldError, FieldLabel } from '@/common/ui/field'
import { useFieldContext } from '.'
import { FieldMeta } from './FieldMeta'

export type SimpleButtonSelectItem<T extends string = string> = {
  value: T
  label: string
}

interface SimpleButtonSelectProps {
  title: string
  items: SimpleButtonSelectItem[]
  disabled?: boolean
}

export function SimpleButtonSelect(p: SimpleButtonSelectProps) {
  const field = useFieldContext<string>()
  const value = field.state.value || ''

  return (
    <Field>
      <FieldLabel htmlFor={field.name}>{p.title}</FieldLabel>

      <div className='flex gap-1'>
        {p.items.map(item => (
          <Button
            size='xs'
            key={item.value}
            variant={value === item.value ? 'default' : 'outline'}
            onClick={() => field.setValue(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>

      <FieldError>
        <FieldMeta meta={field.state.meta} />
      </FieldError>
    </Field>
  )
}
