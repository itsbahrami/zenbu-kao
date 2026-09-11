import z from 'zod'
import { zLanguage } from './Language'

export const zAahamatn = z.object({
  title: z.string().min(1, 'این مقدار الزامی است'),
  language: zLanguage,
  lyrics: z.string().min(1, 'این مقدار الزامی است'),
  artist: z.string(),
  color: z.string(),
  audioUrl: z.string(),
  sourceUrl: z.string(),
})

export type Aahamatn = z.infer<typeof zAahamatn>
