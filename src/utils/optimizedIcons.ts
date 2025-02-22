import { lazy } from 'react'
import * as LucideIcons from 'lucide-react'

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

export const Icons = isNetlify
  ? icons.reduce((acc, name) => {
      acc[name] = lazy(() =>
        import('lucide-react').then((mod) => ({
          default: (mod as Record<string, any>)[name],
        }))
      )
      return acc
    }, {} as Record<string, any>)
  : LucideIcons
