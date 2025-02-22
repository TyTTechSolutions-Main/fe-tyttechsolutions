import { Icons } from '../../utils/optimizedIcons';
import { CONTACT, SOCIALS } from '../../mocks';

const { Mail, Instagram, Phone, Linkedin } = Icons;
const { title } = CONTACT;

export default function ContactInfo() {
  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold uppercase">{title}</h2>
      <ul className="mt-6 space-y-10">
        {SOCIALS.links.map(({ href, label, icon }) => {
          const iconSrc = { Mail, Instagram, Phone, Linkedin }[icon as keyof typeof Icons];

          return (
            <li key={href} className="flex items-center gap-2">
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={label}
                  className="w-6 h-6 text-secondary img-custom"
                />
              )}
              <a href={href} className="text-white">{label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
