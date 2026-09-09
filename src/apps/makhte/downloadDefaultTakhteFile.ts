import { stringify as stringifyYaml } from 'yaml'
import { Task } from './Task'
import type { TakhteFileV1 } from './zTakhteFile'

export function downloadDefaultTakhteFile() {
  const defaultData: TakhteFileV1 = {
    version: 1,
    projectTitle: '',
    tasks: [Task.create('کار نمونه').getITask()],
  }

  const yamlString = stringifyYaml(defaultData)
  const blob = new Blob([yamlString], { type: 'text/yaml;charset=utf-8' })
  const url = URL.createObjectURL(blob)

  const link = document.createElement('a')
  link.href = url
  link.download = 'takhte.yml'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}
