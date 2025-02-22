import {
  Code,
  BarChart,
  Bot,
  Mail,
  Instagram,
  Phone,
  Linkedin,
} from 'lucide-react'

// Verifica si estamos en Netlify (producción)
const isNetlify = import.meta.env?.NETLIFY === 'true'

// Si estamos en producción (Netlify), usa importaciones dinámicas
export const Icons = isNetlify
  ? {
      Mail: () =>
        import('lucide-react/dist/esm/icons/mail').then((mod) => mod.default),
      Instagram: () =>
        import('lucide-react/dist/esm/icons/instagram').then(
          (mod) => mod.default
        ),
      Phone: () =>
        import('lucide-react/dist/esm/icons/phone').then((mod) => mod.default),
      Linkedin: () =>
        import('lucide-react/dist/esm/icons/linkedin').then(
          (mod) => mod.default
        ),
      Code: () =>
        import('lucide-react/dist/esm/icons/code').then((mod) => mod.default),
      BarChart: () =>
        import('lucide-react/dist/esm/icons/bar-chart').then(
          (mod) => mod.default
        ),
      Bot: () =>
        import('lucide-react/dist/esm/icons/bot').then((mod) => mod.default),
    }
  : { Code, BarChart, Bot, Mail, Instagram, Phone, Linkedin }
