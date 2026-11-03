import { ContactItemCard } from './ContactItemCard'
import { contactItems } from './contactItems'

export const ContactItemsSection = () => (
  <div className='flex gap-1 items-center justify-center'>
    {contactItems.map(item => (
      <ContactItemCard key={item.id} item={item} />
    ))}
  </div>
)
