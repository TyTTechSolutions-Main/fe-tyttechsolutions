import { Icons } from '../../utils/optimizedIcons';
import { SOCIALS, CONTACT } from '../../mocks'

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  Mail: Icons.Mail,
  Instagram: Icons.Instagram,
  Phone: Icons.Phone,
  Linkedin: Icons.Linkedin,
}

const { title } = CONTACT

export default function ContactInfo() {
  return (
    <div>
      <h2 className='text-3xl md:text-4xl font-bold uppercase'>{title}</h2>
      <ul className='mt-6 space-y-10'>
        {SOCIALS.links.map((link) => {
          const IconComponent = iconComponents[link.icon as keyof typeof iconComponents] || null

          return (
            <li key={link.href} className='flex items-center gap-2'>
              {IconComponent && <IconComponent className='w-6 h-6 text-secondary' />}
              <a href={link.href} className='text-white'>{link.label}</a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
