import { err, ok, type Result } from 'neverthrow'
import { parse as parseYaml } from 'yaml'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { makhteActions } from './store'
import { Task } from './Task'
import { zTakhteFile } from './zTakhteFile'

export async function openTakhteFile(): Promise<Result<void, string>> {
  try {
    if (!window.showOpenFilePicker) {
      return err('مرورگر شما پشتیبانی نمی‌شود')
    }

    const [handle] = await window.showOpenFilePicker({
      types: [
        {
          description: 'فایل YAML',
          accept: { 'text/yaml': ['.yml'] },
        },
      ],
      multiple: false,
    })

    const file = await handle.getFile()

    const text = await file.text()
    const parsedData = parseYaml(text)

    const parseResult = zTakhteFile.safeParse(parsedData)
    if (!parseResult.success) {
      return err(`فرمت فایل نامعتبر: ${parseResult.error.message}`)
    }

    const data = parseResult.data

    if (data.version === 1) {
      const tasks = data.tasks.map(item => Task.fromITask(item))
      makhteActions.openFile(handle)
      makhteActions.setProjectTitle(data.projectTitle)
      makhteActions.setTasks(tasks)
    } else {
      return err(`نسخه ${data.version} پشتیبانی نمی‌شود.`)
    }

    return ok()
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') return ok()
    console.error('Error opening file:', error)
    return err(`خطا در باز کردن فایل: ${extractErrorMessage(error)}`)
  }
}
