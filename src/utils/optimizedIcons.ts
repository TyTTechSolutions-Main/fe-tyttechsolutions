import { lazy } from 'react'

// Verifica si estamos en Netlify (producción)
const isNetlify = import.meta.env?.NETLIFY === 'true'

// Importaciones normales en desarrollo
import {
  Code,
  BarChart,
  Bot,
  Mail,
  Instagram,
  Phone,
  Linkedin,
} from 'lucide-react'

// Si estamos en producción (Netlify), usa importaciones dinámicas
export const Icons = isNetlify
  ? {
      Code: lazy(() =>
        import('lucide-react').then((m) => ({ default: m.Code }))
      ),
      BarChart: lazy(() =>
        import('lucide-react').then((m) => ({ default: m.BarChart }))
      ),
      Bot: lazy(() => import('lucide-react').then((m) => ({ default: m.Bot }))),
      Mail: lazy(() =>
        import('lucide-react').then((m) => ({ default: m.Mail }))
      ),
      Instagram: lazy(() =>
        import('lucide-react').then((m) => ({ default: m.Instagram }))
      ),
      Phone: lazy(() =>
        import('lucide-react').then((m) => ({ default: m.Phone }))
      ),
      Linkedin: lazy(() =>
        import('lucide-react').then((m) => ({ default: m.Linkedin }))
      ),
    }
  : { Code, BarChart, Bot, Mail, Instagram, Phone, Linkedin }
