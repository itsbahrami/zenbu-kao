import {
  EnvelopeIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
} from '@phosphor-icons/react'
import { generateShortId as id } from '#/common/utils/generateShortId'
import type { ContactItem } from './ContactItem'

export const contactItems: ContactItem[] = [
  {
    id: id(),
    title: 'ایتا',
    url: 'https://eitaa.com/itsbahrami',
    IconOrPath: '/Eitaa.svg',
  },
  {
    id: id(),
    title: 'ویراستی',
    url: 'https://virasty.com/itsbahrami',
    IconOrPath: '/Virasty.svg',
  },
  {
    id: id(),
    title: 'ایمیل',
    url: 'mailto:me@itsbahrami.ir',
    IconOrPath: EnvelopeIcon,
  },
  {
    id: id(),
    title: 'گیت‌هاب',
    url: 'https://github.com/itsbahrami',
    IconOrPath: GithubLogoIcon,
  },
  {
    id: id(),
    title: 'لینکدین',
    url: 'https://linkedin.com/in/bahrami85',
    IconOrPath: LinkedinLogoIcon,
  },
]
