import {
  ChatCircleDotsIcon,
  type Icon,
  ListChecksIcon,
  MagnifyingGlassIcon,
  PaperPlaneTiltIcon,
} from '@phosphor-icons/react'
import './blueprint.css'
import c from './content.json'

const iconNameMap: Record<string, Icon> = {
  'list-checks': ListChecksIcon,
  'magnifying-glass': MagnifyingGlassIcon,
  'paper-plane-tilt': PaperPlaneTiltIcon,
  'chat-circle-dots': ChatCircleDotsIcon,
}

export const HowSection = () => (
  <section className='bg-blue-950/50 blueprint flex flex-col gap-4 py-12 px-4 text-mist-300'>
    <h2 className='text-mist-100 font-heading font-black text-xl sm:text-2xl leading-relaxed text-center'>
      {c.how.title}
    </h2>

    <p className='font-sans text-center'>{c.how.description}</p>

    <div className='grid grid-cols-1 gap-2 mx-auto max-w-lg'>
      {c.how.steps.map(step => (
        <StepCard
          key={step.index}
          index={step.index}
          title={step.title}
          description={step.description}
          icon={iconNameMap[step.icon]}
        />
      ))}
    </div>
  </section>
)

const StepCard = (p: {
  icon: Icon
  index: string
  title: string
  description: string
}) => (
  <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-blue-950 hover:bg-blue-900 transition-all'>
    <div className='flex items-center gap-2 w-full'>
      <p className='font-heading text-mist-100 font-bold'>
        {p.index}. {p.title}
      </p>
      <div className='flex-1'></div>
      <p.icon size={24} className='text-blue-400' weight='duotone' />
    </div>

    <p className='text-xs'>{p.description}</p>
  </div>
)
