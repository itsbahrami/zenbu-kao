import c from './content.json'
import './blueprint.css'
import { ChatIcon } from '@phosphor-icons/react'

export const HeroSection = () => (
  <header className='bg-blue-950/50 flex flex-col gap-4 items-center text-center py-24 blueprint px-4 text-mist-300'>
    <h1 className='text-mist-100 font-heading font-black text-2xl sm:text-4xl leading-relaxed'>
      {c.hero.title}
    </h1>

    <p className='font-sans max-w-[60ch]'>{c.hero.description}</p>

    <div className='flex flex-col sm:flex-row items-center gap-2 w-full justify-center'>
      <a
        href={c.blueprint.cta_link}
        target='_blank'
        rel='noreferrer noopener'
        className='flex items-center gap-1 py-2 px-8 w-full sm:max-w-max justify-center rounded-xs bg-mist-100 text-blue-600 hover:bg-blue-600 hover:text-mist-100 font-bold transition-all'
      >
        <ChatIcon weight='fill' size={20} />
        <span className=''>{c.blueprint.cta}</span>
      </a>

      <button
        type='button'
        className='flex items-center gap-1 py-2 w-full sm:max-w-max px-4 justify-center rounded-xs bg-transparnet border border-current text-mist-400 hover:text-mist-100 transition-all'
      >
        <span className=''>{c.hero.actions.secondary}</span>
      </button>
    </div>
  </header>
)
