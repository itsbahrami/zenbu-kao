import { ChatIcon, SealQuestionIcon } from '@phosphor-icons/react'
import c from './content.json'

export const FaqSection = () => (
  <section className='bg-mist-950 flex flex-col gap-4 py-12 px-4 text-mist-300 items-center'>
    <h2 className='text-mist-100 font-heading font-black text-xl sm:text-2xl leading-relaxed text-center'>
      {c.faq.title}
    </h2>

    <p className='font-sans text-center'>{c.faq.description}</p>

    <a
      href={c.cta.url}
      target='_blank'
      rel='noreferrer noopener'
      className='flex items-center gap-1 py-2 px-8 w-full justify-center rounded-md bg-mist-100 text-blue-600 hover:bg-blue-600 hover:text-mist-100 font-bold transition-all sm:max-w-max'
    >
      <ChatIcon weight='fill' size={20} />
      <span className=''>{c.cta.button}</span>
    </a>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      {c.faq.questions.map(q => (
        <ItemCard key={q.id} title={q.question} description={q.answer} />
      ))}
    </div>
  </section>
)

const ItemCard = (p: { title: string; description: string }) => (
  <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-mist-900 hover:bg-mist-800 transition-all'>
    <SealQuestionIcon size={24} className='text-blue-500' weight='duotone' />

    <p className='font-heading text-mist-100 font-bold'>{p.title}</p>

    <p className='text-xs'>{p.description}</p>
  </div>
)
