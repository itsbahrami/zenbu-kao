import { err, ok, type Result } from 'neverthrow'
import { stringify as stringifyYaml } from 'yaml'
import { extractErrorMessage } from '#/common/utils/extractErrorMessage'
import { getStoreCopy } from './store'
import type { TakhteFileV1 } from './zTakhteFile'

export async function saveTakhteFile(): Promise<Result<void, string>> {
  const { fileHandle, projectTitle, tasks } = getStoreCopy()

  if (!fileHandle) {
    return err('هیچ فایلی باز نشده است.')
  }

  try {
    const permission = await fileHandle.requestPermission({ mode: 'readwrite' })

    if (permission !== 'granted') {
      return err('دسترسی نوشتن در فایل داده نشد.')
    }

    const data: TakhteFileV1 = {
      version: 1,
      projectTitle,
      tasks: tasks.map(task => ({
        id: task.id,
        title: task.title,
        description: task.description,
        status: task.status,
      })),
    }

    const yamlString = stringifyYaml(data)

    const writable = await fileHandle.createWritable()
    await writable.write(yamlString)
    await writable.close()

    return ok()
  } catch (error) {
    console.error('Error saving file:', error)
    return err(`خطا در ذخیره فایل: ${extractErrorMessage(error)}`)
  }
}
