import { ChatIcon } from '@phosphor-icons/react'
import './blueprint.css'
import c from './content.json'

export const CtaSection = () => (
  <section
    id={c.cta.id}
    className='bg-blue-950/50 blueprint flex flex-col gap-4 py-36 px-4 text-mist-300 font-sans items-center text-center'
  >
    <h2 className='text-mist-100 font-heading font-black text-xl sm:text-2xl leading-relaxed text-center'>
      {c.cta.title}
    </h2>

    <p className=''>{c.cta.description}</p>

    <a
      href={c.cta.url}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-1 py-2 px-8 w-full justify-center rounded-md bg-mist-100 text-blue-600 hover:bg-blue-600 hover:text-mist-100 font-bold transition-all sm:max-w-max'
    >
      <ChatIcon weight='fill' size={20} />
      <span className=''>{c.cta.button}</span>
    </a>

    <p className='text-xs'>{c.cta.subtext}</p>
  </section>
)
