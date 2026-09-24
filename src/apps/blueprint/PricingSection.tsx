import { CaretLeftIcon, CaretRightIcon, ChatIcon } from '@phosphor-icons/react'
import './blueprint.css'
import c from './content.json'

export const PricingSection = () => (
  <section
    id={c.pricing.id}
    className='bg-mist-950 py-12 px-4 text-mist-400 font-sans'
  >
    <div className='flex flex-col gap-4 items-center max-w-6xl mx-auto'>
      <h2 className='text-mist-100 text-center font-heading font-black text-xl sm:text-2xl leading-relaxed'>
        {c.pricing.title}
      </h2>

      <p className='text-mist-100 font-bold'>{c.pricing.description}</p>

      <p className='max-w-sm text-center'>{c.pricing.why}</p>

      <div className='flex flex-col gap-8 items-center text-center py-8 px-4 rounded-md bg-blue-950/30 border border-blue-400 shadow-blue-400/20 shadow-xl transition-all max-w-sm mx-auto blueprint w-full'>
        <div className='flex items-center gap-4 flex-col w-full'>
          <span className='text-xs px-3 py-1 rounded-sm bg-emerald-950 text-emerald-400 border border-emerald-400'>
            {c.pricing.badge}
          </span>

          <div className='flex items-center gap-2 justify-center w-full'>
            <p className='font-heading font-black text-4xl text-left text-emerald-400'>
              {c.pricing.price.current}
            </p>

            <p className='flex flex-col text-right text-xs'>
              <span>{c.pricing.price.multiplier}</span>
              <span>{c.pricing.price.currency}</span>
            </p>
          </div>

          <p className='text-xs'>
            <span>{c.pricing.price.future_label}: </span>
            <strong className='text-amber-400'>
              {c.pricing.price.future}{' '}
            </strong>
            <span>{c.pricing.price.multiplier} </span>
            <span>{c.pricing.price.currency}</span>
          </p>
        </div>

        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1 items-center w-full'>
            {c.pricing.includes.items.map(item => (
              <p key={item} className='flex w-full items-center gap-1'>
                <CaretRightIcon
                  mirrored
                  size={20}
                  className='text-blue-500 inline-block'
                />

                <span className='flex-1'>{item}</span>

                <CaretLeftIcon
                  mirrored
                  size={20}
                  className='text-blue-500 inline-block'
                />
              </p>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <p>{c.cta.description}</p>

          <a
            href={c.cta.url}
            target='_blank'
            rel='noreferrer noopener'
            className='flex items-center gap-1 py-2 px-8 w-full justify-center rounded-md bg-mist-100 text-blue-600 hover:bg-blue-600 hover:text-mist-100 font-bold transition-all'
          >
            <ChatIcon weight='fill' size={20} />
            <span>{c.cta.button}</span>
          </a>

          <p className='font-sans text-center text-mist-900 font-bold bg-yellow-400'>
            {c.pricing.guarantee}
          </p>
        </div>
      </div>
    </div>
  </section>
)
