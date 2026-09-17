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
  fontClass: string
  dir: 'ltr' | 'rtl'
  lang: string
  countryCode: string | null
}

export const languages: Record<Language, LanguageMeta> = {
  Arabic: {
    key: Language.Arabic,
    label: 'العربیة',
    value: 4,
    dir: 'rtl',
    fontClass: 'font-fa',
    lang: 'ar',
    countryCode: 'iq',
  },
  English: {
    key: Language.English,
    label: 'English',
    value: 2,
    dir: 'ltr',
    fontClass: 'font-ja',
    lang: 'en',
    countryCode: 'us',
  },
  Japanese: {
    key: Language.Japanese,
    label: '日本語',
    value: 3,
    dir: 'ltr',
    fontClass: 'font-ja',
    lang: 'ja',
    countryCode: 'jp',
  },
  Other: {
    key: Language.Other,
    label: 'غیره',
    value: 0,
    dir: 'rtl',
    fontClass: 'font-fa',
    lang: 'fa',
    countryCode: null,
  },
  Persian: {
    key: Language.Persian,
    label: 'فارسی',
    value: 1,
    dir: 'rtl',
    fontClass: 'font-fa',
    lang: 'fa',
    countryCode: 'ir',
  },
}

export const languageValueToMeta = (value: number): LanguageMeta =>
  Object.values(languages).find(m => m.value === value) || languages.Other

export const allLanguages: Language[] = Object.values(Language)
export const zLanguage = z.enum(allLanguages)

export const LanguageSelectContent = (p: { countryCode: string | null }) => (
  <span className='inline-flex w-8'>
    {p.countryCode?.trim() ? (
      <img
        alt=''
        className='rounded'
        src={`https://flagcdn.com/${p.countryCode}.svg`}
      />
    ) : (
      <span className='w-full h-full inline-block rounded bg-mist-500'>-</span>
    )}
  </span>
)

export const simpleButtonSelectLanguageItems: SimpleButtonSelectItem[] =
  allLanguages.map(lang => ({
    label: languages[lang].label,
    value: languages[lang].key,
    children: (
      <LanguageSelectContent countryCode={languages[lang].countryCode} />
    ),
  }))
