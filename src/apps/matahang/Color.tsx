import { cn } from 'cn'
import z from 'zod'
import type { SimpleButtonSelectItem } from '#/features/forms/SimpleButtonSelect'

export const Color = {
  Other: 'Other',
  Red: 'Red',
  Orange: 'Orange',
  Amber: 'Amber',
  Yellow: 'Yellow',
  Lime: 'Lime',
  Green: 'Green',
  Emerald: 'Emerald',
  Teal: 'Teal',
  Cyan: 'Cyan',
  Sky: 'Sky',
  Blue: 'Blue',
  Indigo: 'Indigo',
  Violet: 'Violet',
  Purple: 'Purple',
  Fuchsia: 'Fuchsia',
  Pink: 'Pink',
  Rose: 'Rose',
} as const

export type Color = (typeof Color)[keyof typeof Color]

export type ColorMeta = {
  key: Color
  label: string
  value: string
  bgClass: string
}

export const colors: Record<Color, ColorMeta> = {
  Other: {
    key: Color.Other,
    label: 'غیره',
    value: Color.Other,
    bgClass: 'bg-mist-500',
  },
  Red: {
    key: Color.Red,
    label: 'قرمز',
    value: Color.Red,
    bgClass: 'bg-red-500',
  },
  Orange: {
    key: Color.Orange,
    label: 'نارنجی',
    value: Color.Orange,
    bgClass: 'bg-orange-500',
  },
  Amber: {
    key: Color.Amber,
    label: 'کهربایی',
    value: Color.Amber,
    bgClass: 'bg-amber-500',
  },
  Yellow: {
    key: Color.Yellow,
    label: 'زرد',
    value: Color.Yellow,
    bgClass: 'bg-yellow-500',
  },
  Lime: {
    key: Color.Lime,
    label: 'لیمویی',
    value: Color.Lime,
    bgClass: 'bg-lime-500',
  },
  Green: {
    key: Color.Green,
    label: 'سبز',
    value: Color.Green,
    bgClass: 'bg-green-500',
  },
  Emerald: {
    key: Color.Emerald,
    label: 'زمردی',
    value: Color.Emerald,
    bgClass: 'bg-emerald-500',
  },
  Teal: {
    key: Color.Teal,
    label: 'سبزآبی',
    value: Color.Teal,
    bgClass: 'bg-teal-500',
  },
  Cyan: {
    key: Color.Cyan,
    label: 'فیروزه‌ای',
    value: Color.Cyan,
    bgClass: 'bg-cyan-500',
  },
  Sky: {
    key: Color.Sky,
    label: 'آسمانی',
    value: Color.Sky,
    bgClass: 'bg-sky-500',
  },
  Blue: {
    key: Color.Blue,
    label: 'آبی',
    value: Color.Blue,
    bgClass: 'bg-blue-500',
  },
  Indigo: {
    key: Color.Indigo,
    label: 'نیلی',
    value: Color.Indigo,
    bgClass: 'bg-indigo-500',
  },
  Violet: {
    key: Color.Violet,
    label: 'بنفش',
    value: Color.Violet,
    bgClass: 'bg-violet-500',
  },
  Purple: {
    key: Color.Purple,
    label: 'ارغوانی',
    value: Color.Purple,
    bgClass: 'bg-purple-500',
  },
  Fuchsia: {
    key: Color.Fuchsia,
    label: 'سرخابی',
    value: Color.Fuchsia,
    bgClass: 'bg-fuchsia-500',
  },
  Pink: {
    key: Color.Pink,
    label: 'صورتی',
    value: Color.Pink,
    bgClass: 'bg-pink-500',
  },
  Rose: {
    key: Color.Rose,
    label: 'گلی',
    value: Color.Rose,
    bgClass: 'bg-rose-500',
  },
}

export const colorValueToMeta = (value: string): ColorMeta =>
  Object.values(colors).find(m => m.value === value) || colors.Other

export const allColors: Color[] = Object.values(Color)
export const zColor = z.enum(allColors)

export const ColorSelectContent = (p: { bgClass: string; label: string }) => (
  <span
    title={p.label}
    className={cn('inline-block h-4 w-8 rounded', p.bgClass)}
  />
)

export const simpleButtonSelectColorItems: SimpleButtonSelectItem[] =
  allColors.map(color => ({
    value: colors[color].key,
    label: colors[color].label,
    children: (
      <ColorSelectContent
        bgClass={colors[color].bgClass}
        label={colors[color].label}
      />
    ),
  }))
