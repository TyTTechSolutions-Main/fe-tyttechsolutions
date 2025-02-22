import { SERVICES } from '../../mocks';
import { Icons } from '../../utils/optimizedIcons';
import Card from '../common/Card';

const { title, subtitle, items } = SERVICES;
const { Code, BarChart, Bot } = Icons;

export default function Services() {
  return (
    <section id="services" className="py-15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">{title}</h2>
        <p className="text-lg md:text-xl mt-4">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {items.map(({ title, description, icon }) => {
            const iconSrc = { Code, BarChart, Bot }[icon as keyof typeof Icons];

            return (
              <Card
                key={title}
                title={title}
                description={description}
                icon={iconSrc ? (
                  <img src={iconSrc} alt={title} className="w-8 h-8 text-white invert" />
                ) : null}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
