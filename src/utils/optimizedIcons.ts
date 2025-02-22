import { lazy } from 'react'
import * as LucideIcons from 'lucide-static'

const isNetlify = import.meta.env.NETLIFY === 'true'

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
        import(`lucide-static/icons/${name}.js`).then((mod) => ({
          default: mod.default,
        }))
      )
      return acc
    }, {} as Record<string, any>)
  : LucideIcons
