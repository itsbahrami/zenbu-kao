import z from 'zod'
import type { SimpleButtonSelectItem } from '#/features/forms/SimpleButtonSelect'

export const Language = {
  Other: 'Other',
  Persian: 'Persian',
  English: 'English',
  Japanese: 'Japanese',
  Arabic: 'Arabic',
} as const

export type Language = (typeof Language)[keyof typeof Language]

export type LanguageMeta = {
  key: Language
  label: string
  value: number
}

export const languages: Record<Language, LanguageMeta> = {
  Arabic: { key: Language.Arabic, label: 'العربیة', value: 4 },
  English: { key: Language.English, label: 'English', value: 2 },
  Japanese: { key: Language.Japanese, label: '日本語', value: 3 },
  Other: { key: Language.Other, label: '-', value: 0 },
  Persian: { key: Language.Persian, label: 'فارسی', value: 1 },
}

export const languageValueToMeta = (value: number): LanguageMeta =>
  Object.values(languages).find(m => m.value === value) || languages.Other

export const allLanguages: Language[] = Object.values(Language)
export const zLanguage = z.enum(allLanguages)

export const simpleButtonSelectLanguageItems: SimpleButtonSelectItem[] =
  allLanguages.map(lang => ({
    label: languages[lang].label,
    value: languages[lang].key,
  }))
