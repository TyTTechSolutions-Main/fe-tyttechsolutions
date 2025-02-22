import { SERVICES } from '../../mocks'
import { Icons } from '../../utils/optimizedIcons'
import Card from '../common/Card'
import { Suspense } from 'react'

const { title, subtitle, items } = SERVICES

const iconComponents: Record<string, React.FC<{ className?: string }>> = {
  Code: Icons.Code || (() => null),
  BarChart: Icons.BarChart || (() => null),
  Bot: Icons.Bot || (() => null),
}

export default function Services() {
  return (
    <section id="services" className="py-15">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold uppercase">{title}</h2>
        <p className="text-lg md:text-xl mt-4">{subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {items.map((service) => {
            const IconComponent = iconComponents[service.icon as keyof typeof iconComponents] || null;

            return (
              <Card
                key={service.title}
                title={service.title}
                description={service.description}
                icon={IconComponent ? (
                  <Suspense fallback={<div className="w-8 h-8 bg-gray-300 rounded animate-pulse"></div>}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </Suspense>
                ) : null}
              />
            );
          })}
        </div>
      </div>
    </section>
  )
}
