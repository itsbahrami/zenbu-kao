import { Button } from '#/common/ui/button'
import { AppVersion } from '#/features/versioning/AppVersion'
import { ContactItemsSection } from './contact/ContactItemsSection'
import { products } from './products'

export function BahramiPage() {
  return (
    <div className='gap-4 min-h-dvh flex flex-col relative text-mist-400'>
      <header className="flex flex-col items-center w-full">
        <nav className="flex items-center justify-between gap-2 w-full py-4 px-8 bg-mist-900">
          <div className="flex items-center justify-center gap-2">
            <img alt='' src='/Spec.png' className='size-8 rounded-full' />
            <span className='font-bold text-mist-100 text-xl'>بهرامی</span>
          </div>

          <div className="flex items-center gap-2 justify-center">
            <a href="#/" className="border-b-2 border-transparent hover:text-sky-500 hover:border-sky-500">آموزش‌ها</a>
            <a href="#/" className="border-b-2 border-transparent hover:text-sky-500 hover:border-sky-500">مقالات</a>
            <a href="#/" className="border-b-2 border-transparent hover:text-sky-500 hover:border-sky-500">دوره‌ها</a>
            <a href="#/" className="border-b-2 border-transparent hover:text-sky-500 hover:border-sky-500">محصولات</a>
          </div>
        </nav>

        <section className="w-full flex flex-col gap-4 items-center justify-center min-h-[80dvh] text-center">
          <h1 className='text-3xl font-bold font-heading text-mist-100'>خودت توی خونه زبان رو مسلط شو! 😎</h1>

          <p className='flex flex-wrap items-center justify-center gap-2 max-w-[40ch]'>
            بهرامی هستم. با کمک روش ری‌فولد بهت کمک می‌کنم که
            خودت توی خونه، بدون کلاس زبان، بدون معلم، با همون موبایلی که توی دستته زبان رو مسلط بشی!
          </p>

          <div className="flex items-center justify-center gap-2">
            <Button>شروع کن</Button>
            <Button variant='outline'>اطلاعات بیشتر</Button>
          </div>
        </section>
      </header>

      <main className="flex flex-col">
        <section className="flex flex-col p-8 gap-4 bg-mist-900">
          <h2 className="text-2xl font-bold text-mist-100 text-center">محصولات</h2>

          <div className="grid grid-cols-4 gap-2">
            {products.map(p => (
              <div key={p.id} className='flex flex-col rounded-md overflow-clip'>
                <img src="https://placehold.co/600x400" alt="" className="" />

                <div className="flex flex-col gap-2 p-4 bg-mist-800">
                  <p className='text-xl font-bold text-mist-100'>{p.title}</p>
                  <p className='text-xs'>{p.description}</p>
                  <div className='flex items-center justify-end'>
                    <Button variant='outline'>اطلاعات بیشتر</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col p-8 gap-4 bg-mist-950">
          <h2 className="text-2xl font-bold text-mist-100 text-center">ارتباط با من</h2>

          <ContactItemsSection />
        </section>
      </main>

      <footer dir='ltr' className='font-fa text-muted-foreground text-xs text-center py-8 bg-mist-900'>
        <span>۱۴۰۵</span>
        <span> - </span>
        <AppVersion />
      </footer>
    </div>
  )
}
