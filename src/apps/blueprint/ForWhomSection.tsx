import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
  XIcon,
} from '@phosphor-icons/react'
import c from './content.json'

export const ForWhomSection = () => (
  <section
    id={c.for_whom.id}
    className='bg-mist-950 flex flex-col gap-4 py-12 px-4 text-mist-300'
  >
    <h2 className='text-mist-100 text-center font-heading font-black text-xl sm:text-2xl leading-relaxed'>
      {c.for_whom.title}
    </h2>

    <p className='font-sans text-center'>{c.for_whom.description}</p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-red-950/50 transition-all border border-red-800'>
        <div className='flex items-center gap-2'>
          <XCircleIcon size={24} className='text-red-500' weight='fill' />

          <p className='font-heading text-mist-100 font-bold'>
            {c.for_whom.not_for.title}
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          {c.for_whom.not_for.items.map(item => (
            <p key={item} className=''>
              <XIcon size={20} className='text-red-500 inline-block me-1' />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-emerald-950/50 transition-all border border-emerald-800'>
        <div className='flex items-center gap-2'>
          <CheckCircleIcon
            size={24}
            className='text-emerald-500'
            weight='fill'
          />

          <p className='font-heading text-mist-100 font-bold'>
            {c.for_whom.but_for.title}
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          {c.for_whom.but_for.items.map(item => (
            <p key={item} className=''>
              <CheckIcon
                size={20}
                className='text-emerald-500 inline-block me-1'
              />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  </section>
)
