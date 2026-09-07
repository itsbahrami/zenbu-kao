import { ArrowUpIcon, GearIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import { ButtonGroup } from '#/common/ui/button-group'

export const OptionsBtns = () => (
  <ButtonGroup>
    <RenderTooltip tooltip='تنظیمات'>
      <Button size='icon' variant='outline' disabled>
        <GearIcon />
      </Button>
    </RenderTooltip>

    <RenderTooltip tooltip='بازگشت به صفحه برنامک‌ها'>
      <Button
        size='icon'
        variant='outline'
        render={
          <Link to='/apps'>
            <ArrowUpIcon />
          </Link>
        }
      />
    </RenderTooltip>
  </ButtonGroup>
)
