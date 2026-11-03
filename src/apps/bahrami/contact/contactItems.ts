import { EnvelopeIcon } from '@phosphor-icons/react'
import { generateShortId as id } from '#/common/utils/generateShortId'
import type { ContactItem } from './ContactItem'

export const contactItems: ContactItem[] = [
  {
    id: id(),
    title: 'ایتا',
    url: 'https://eitaa.com/bahrami_works',
    IconOrPath: '/Eitaa.svg',
  },
  {
    id: id(),
    title: 'ویراستی',
    url: 'https://virasty.com/bahrami_works',
    IconOrPath: '/Virasty.svg',
  },
  {
    id: id(),
    title: 'ایمیل',
    url: 'mailto:bahrami@mailfa.ir',
    IconOrPath: EnvelopeIcon,
  },
]
