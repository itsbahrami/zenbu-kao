import { LinkSimpleIcon } from '@phosphor-icons/react'
import { Button } from '#/common/ui/button'
import c from './content.json'

export const AboutMeSection = () => (
  <section className='bg-linear-to-bl from-mist-50 to-mist-200 flex flex-col gap-4 py-12 px-4 text-mist-700 font-sans'>
    <h2 className='text-mist-900 text-center font-heading font-black text-xl sm:text-2xl leading-relaxed'>
      {c.about_me.title}
    </h2>

    <div className='flex flex-col gap-2 items-center text-center'>
      <img className='rounded-md size-24' src={c.about_me.photo} alt='' />

      <p className='text-lg font-bold font-heading text-mist-900'>
        {c.about_me.name}
      </p>

      <p className=''>{c.about_me.role}</p>

      <p className='text-xs max-w-sm'>{c.about_me.bio}</p>

      <div className='flex items-center gap-2'>
        {c.about_me.links.map(link => (
          <Button
            variant='link'
            key={link.id}
            nativeButton={false}
            render={
              <a href={link.url} target='_blank' rel='noopener noreferrer'>
                <LinkSimpleIcon />
                <span>{link.label}</span>
              </a>
            }
          />
        ))}
      </div>
    </div>
  </section>
)
