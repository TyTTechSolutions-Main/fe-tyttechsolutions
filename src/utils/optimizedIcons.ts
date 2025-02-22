import { lazy } from 'react'

console.log('Netlify env:', import.meta.env.NETLIFY)

const isNetlify = Boolean(import.meta.env.NETLIFY)

// Lista de iconos usados
const icons = [
  'Code',
  'BarChart',
  'Bot',
  'Mail',
  'Instagram',
  'Phone',
  'Linkedin',
]

export const Icons = icons.reduce((acc, name) => {
  acc[name] = lazy(() =>
    import(`lucide-react/icons/${name}.js`).then((mod) => ({
      default: mod.default,
    }))
  )
  return acc
}, {} as Record<string, any>)
