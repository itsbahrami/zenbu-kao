import c from './content.json'

export const Footer = () => (
  <footer
    id={c.footer.id}
    className='bg-mist-950 py-12 px-4 text-mist-300'
  >
    <div className='flex flex-col gap-4 items-center max-w-6xl mx-auto'>
      <p className='text-center'>{c.footer.copyright}</p>
    </div>
  </footer>
)
