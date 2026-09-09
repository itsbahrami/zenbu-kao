import { DownloadSimpleIcon, PlayIcon } from '@phosphor-icons/react'
import { RenderTooltip } from '#/common/helpers/RenderTooltip'
import { Button } from '#/common/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '#/common/ui/dialog'
import { downloadDefaultTakhteFile } from './downloadDefaultTakhteFile'
import { useFileLoaded } from './store'

export const GettingStartedBtn = () =>
  useFileLoaded() ? null : (
    <Dialog>
      <RenderTooltip tooltip='شروع'>
        <DialogTrigger
          render={
            <Button size='icon'>
              <PlayIcon />
            </Button>
          }
        />
      </RenderTooltip>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>راهنمای شروع</DialogTitle>
          <DialogDescription>
            برای شروع کار با مخته، لطفاً مراحل زیر را دنبال کنید:
          </DialogDescription>
        </DialogHeader>

        <div className=''>
          <ol className='list-decimal ps-4'>
            <li>لطفاً این فایل را دانلود کنید.</li>
            <li>آن را در پوشهٔ پروژه قرار دهید.</li>
            <li>
              سپس با استفاده از دکمهٔ «انتخاب»، همان فایل را باز کنید و کار را
              آغاز نمایید.
            </li>
          </ol>
        </div>

        <DialogFooter>
          <Button onClick={downloadDefaultTakhteFile}>
            <DownloadSimpleIcon />
            <span>دانلود فایل</span>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
