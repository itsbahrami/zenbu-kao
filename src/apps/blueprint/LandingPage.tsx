import c from './content.json'

export const LandingPage = () => {
  return <div className="bg-blue-950 min-h-dvh">
    <HeroSection />
  </div>
}

export const HeroSection = () => (
  <header className='flex flex-col items-center text-center py-16'>
    <h1 className='font-heading font-black text-4xl whitespace-pre leading-relaxed'>{c.hero_title}</h1>

    <p className='font-sans'>{c.hero_description}</p>

    <div className="">
      <button type="button" className=''>
        <span className=''></span>
      </button>

      <button type="button" className=''>
        <span className=''></span>
      </button>
    </div>
  </header>
)
