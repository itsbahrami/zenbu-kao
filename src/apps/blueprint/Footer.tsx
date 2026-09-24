import c from './content.json'

export const Footer = () => (
  <footer id={c.footer.id} className='bg-mist-950 flex flex-col gap-4 py-12 px-4 text-mist-300 items-center'>
    <p className='text-center'>
      {c.footer.copyright}
    </p>
  </footer>
)
