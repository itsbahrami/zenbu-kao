import {
  BrowserIcon,
  CoinsIcon,
  DotsThreeIcon,
  GlobeIcon,
  type Icon,
  ListChecksIcon,
  ToolboxIcon,
} from '@phosphor-icons/react'
import c from './content.json'

const iconNameMap: Record<string, Icon> = {
  globe: GlobeIcon,
  toolbox: ToolboxIcon,
  browsers: BrowserIcon,
  coins: CoinsIcon,
  'list-checks': ListChecksIcon,
  'dots-three': DotsThreeIcon,
}

export const WhatSection = () => (
  <header className='bg-linear-to-br from-mist-950 to-mist-800 flex flex-col gap-4 py-12 px-4 text-mist-300'>
    <h1 className='text-mist-100 font-heading font-black text-xl sm:text-2xl leading-relaxed'>
      {c.what.title}
    </h1>

    <p className='font-sans'>{c.what.description}</p>

    <div className='grid grid-cols-1 sm:grid-cols-2 gap-2'>
      {c.what.items.map(item => (
        <ItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          icon={iconNameMap[item.icon]}
        />
      ))}
    </div>
  </header>
)

const ItemCard = (p: { icon: Icon; title: string; description: string }) => (
  <div className='flex flex-col gap-2 items-start p-2 sm:p-4 rounded-md bg-mist-900 hover:bg-mist-800 transition-all'>
    <p.icon size={24} className='text-blue-500' weight='duotone' />

    <p className='font-heading text-mist-100 font-bold'>{p.title}</p>

    <p className='text-xs'>{p.description}</p>
  </div>
)
