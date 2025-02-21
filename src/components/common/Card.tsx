import type { ReactNode } from 'react'

interface Props {
  title: string
  description: string
  icon?: ReactNode
}

export default function Card({ title, description, icon }: Props) {
  return (
    <div className="border border-secondary rounded-lg p-6 text-center transition-transform duration-300 ease-out hover:scale-105 hover:border-hover hover:shadow-lg hover:shadow-[rgba(30,144,255,0.3)]">
      <h3 className="text-xl font-semibold text-secondary">{title}</h3>
      <div className="flex justify-center items-center my-6 text-white">
        {icon}
      </div>
      <p className="mt-2">{description}</p>
    </div>
  )
}
