import type { Icon } from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'

export const ViewModeToggleBtn = (p: {
  tooltip: string
  isActive: boolean
  icon: Icon
  onClick: () => void
  disabled?: boolean
}) => (
  <RenderTooltip tooltip={p.tooltip}>
    <Button
      size='icon'
      variant={p.isActive ? 'default' : 'outline'}
      onClick={p.onClick}
      disabled={p.disabled}
    >
      <p.icon weight={p.isActive ? 'fill' : 'regular'} />
    </Button>
  </RenderTooltip>
)
