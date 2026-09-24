import {
  ChatCircleDotsIcon,
  CodeIcon,
  HandPalmIcon,
  type Icon,
} from '@phosphor-icons/react'
import c from './content.json'

const iconNameMap: Record<string, Icon> = {
  'hand-palm': HandPalmIcon,
  'chat-circle-dots': ChatCircleDotsIcon,
  code: CodeIcon,
}

export const WhyMeSection = () => (
  <section id={c.why_me.id} className='bg-mist-50 flex flex-col gap-4 py-12 px-4 text-mist-700'>
    <h2 className='text-mist-900 text-center font-heading font-black text-xl sm:text-2xl leading-relaxed'>
      {c.why_me.title}
    </h2>

    <p className='font-sans text-center'>{c.why_me.description}</p>

    <div className='grid grid-cols-1 sm:grid-cols-3 gap-2'>
      {c.why_me.items.map(item => (
        <ItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={iconNameMap[item.icon]}
        />
      ))}
    </div>
  </section>
)

const ItemCard = (p: { icon: Icon; title: string; description: string }) => (
  <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-mist-100 hover:bg-mist-200 transition-all border border-mist-300'>
    <p.icon size={24} className='text-blue-500' weight='duotone' />

    <p className='font-heading text-mist-900 font-bold'>{p.title}</p>

    <p className='text-xs'>{p.description}</p>
  </div>
)
