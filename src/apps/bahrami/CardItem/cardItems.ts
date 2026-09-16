import {
  ChatCircleDotsIcon,
  PackageIcon,
  PenNibIcon,
  ReadCvLogoIcon,
  SquaresFourIcon,
  WrenchIcon,
} from '@phosphor-icons/react'
import { linkOptions } from '@tanstack/react-router'
import { CardItem } from './CardItem'

export const cardItems: CardItem[] = [
  new CardItem(ReadCvLogoIcon, 'رزومه', 'دانلود رزومه‌ی من', '/resume.pdf'),
  new CardItem(
    ChatCircleDotsIcon,
    'تماس',
    'راه‌های ارتباطی و شبکه‌های مجازی',
    linkOptions({ to: '/contact' }),
  ),
  new CardItem(
    SquaresFourIcon,
    'برنامک‌ها',
    'برنامه‌ها و ابزارهای کاربردی',
    linkOptions({ to: '/apps' }),
  ),
  new CardItem(PenNibIcon, 'بلاگ', 'نوشته‌ها، آموزش‌ها، و مقالات', null),
  new CardItem(WrenchIcon, 'خدمات', 'چیزهایی که ارائه میدم', null),
  new CardItem(PackageIcon, 'محصولات', 'محصولات دیجیتال من', null),
]
