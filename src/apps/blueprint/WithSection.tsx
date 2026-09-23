import {
  CheckCircleIcon,
  CheckIcon,
  XCircleIcon,
  XIcon,
} from '@phosphor-icons/react'
import c from './content.json'

export const WithSection = () => (
  <section className='bg-mist-50 flex flex-col gap-4 py-12 px-4 text-mist-700'>
    <h2 className='text-mist-900 text-center font-heading font-black text-xl sm:text-2xl leading-relaxed'>
      {c.with.title}
    </h2>

    <p className='font-sans text-center'>{c.with.description}</p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-red-100 transition-all border border-red-300'>
        <div className='flex items-center gap-2'>
          <XCircleIcon size={24} className='text-red-500' weight='fill' />

          <p className='font-heading text-mist-900 font-bold'>
            {c.with.without.title}
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          {c.with.without.items.map(item => (
            <p key={item} className=''>
              <XIcon size={20} className='text-red-500 inline-block me-1' />
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>

      <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-emerald-100 transition-all border border-emerald-300'>
        <div className='flex items-center gap-2'>
          <CheckCircleIcon
            size={24}
            className='text-emerald-500'
            weight='fill'
          />

          <p className='font-heading text-mist-900 font-bold'>
            {c.with.with.title}
          </p>
        </div>

        <div className='flex flex-col gap-1'>
          {c.with.with.items.map(item => (
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
