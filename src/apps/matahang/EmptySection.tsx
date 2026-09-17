import { MusicNotesPlusIcon, PlaylistIcon } from '@phosphor-icons/react'
import { Link } from '@tanstack/react-router'
import { Button } from '#/common/ui/button'
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '#/common/ui/empty'

export const EmptySection = () => (
  <div className='p-4 flex items-center justify-center'>
    <div className='p-4 flex items-center justify-center'>
      <Empty>
        <EmptyHeader>
          <EmptyMedia variant='icon'>
            <PlaylistIcon />
          </EmptyMedia>

          <EmptyTitle>خالی!</EmptyTitle>

          <EmptyDescription>
            هنوز آهمتنی درست نکردی! یه دونه درست کن:
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className='flex-row justify-center gap-2'>
          <Button
            variant='outline'
            nativeButton={false}
            className='text-rose-400'
            render={
              <Link to='/apps/matahang/new'>
                <MusicNotesPlusIcon weight='fill' />
                <span>آهمتن جدید</span>
              </Link>
            }
          />
        </EmptyContent>
      </Empty>
    </div>
  </div>
)
