import c from './content.json'
import './blueprint.css'
import { ChatIcon } from '@phosphor-icons/react'

export const HeroSection = () => (
  <header
    id={c.hero.id}
    className='bg-blue-950/50 min-h-[80dvh] flex justify-center items-center blueprint px-4 text-mist-300 font-sans'
  >
    <div className='flex flex-col gap-4 items-center text-center max-w-6xl w-full'>
      <h1 className='text-mist-100 font-heading font-black text-2xl sm:text-4xl leading-relaxed whitespace-pre-line'>
        {c.hero.title}
      </h1>

      <p className=''>{c.hero.description}</p>

      <br />

      <p className=''>{c.cta.description}</p>

      <div className='flex flex-col sm:flex-row items-center gap-2 w-full justify-center'>
        <a
          href={c.cta.url}
          target='_blank'
          rel='noreferrer noopener'
          className='flex items-center gap-1 py-2 px-8 w-full sm:max-w-max justify-center rounded-xs bg-mist-100 text-blue-600 hover:bg-blue-600 hover:text-mist-100 font-bold transition-all'
        >
          <ChatIcon weight='fill' size={20} />
          <span>{c.cta.button}</span>
        </a>

        <a
          href={`#${c.what.id}`}
          className='flex items-center gap-1 py-2 w-full sm:max-w-max px-4 justify-center rounded-xs bg-transparent border border-current text-mist-100 hover:bg-mist-100 hover:text-mist-900 transition-all'
        >
          <span>{c.hero.actions.secondary}</span>
        </a>
      </div>
    </div>
  </header>
)
