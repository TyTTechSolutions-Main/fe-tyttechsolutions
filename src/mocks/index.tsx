
export const COMPANY = {
  name: 'T&T Tech Solutions',
  year: 2025,
}

export const NAVIGATION = {
  links: [
    { href: '#hero', label: 'Inicio' },
    { href: '#services', label: 'Servicios' },
    { href: '#about', label: 'Nosotros' },
    { href: '#contact', label: 'Contacto' },
  ],
}

export const HERO = {
  title:
    'Impulsamos tu negocio con <span class="text-secondary">soluciones digitales</span> a medida',
  subtitle:
    'Transformamos tu empresa con desarrollo web, análisis de datos y automatización de procesos. Aumenta tu eficiencia y toma mejores decisiones con tecnología de vanguardia.',
  button: { href: '#contact', label: 'Cotizar Proyecto' },
}

export const SERVICES = {
  title: 'Servicios',
  subtitle: 'Soluciones digitales personalizadas para optimizar tu negocio',
  items: [
    {
      icon: 'Code',
      title: 'Desarrollo Web Personalizado',
      description:
        'Creamos sitios web y plataformas a medida, optimizadas para rendimiento, seguridad y escalabilidad.',
    },
    {
      icon: 'BarChart',
      title: 'Análisis de Datos & BI',
      description:
        'Transformamos tus datos en información valiosa con dashboards interactivos y estrategias de Business Intelligence.',
    },
    {
      icon: 'Bot',
      title: 'Automatización de Procesos',
      description:
        'Implementamos bots y RPA para reducir tareas manuales y aumentar la productividad.',
    },
  ],
}

export const ABOUT = {
  title: 'Sobre Nosotros',
  subtitle: 'Innovamos con soluciones digitales a medida',
  description:
    'En T&T Tech Solutions, brindamos soluciones tecnológicas personalizadas en desarrollo web, análisis de datos y automatización de procesos. Nuestro objetivo es ayudar a las empresas a optimizar su eficiencia y mejorar la toma de decisiones con tecnología de vanguardia.',
}

export const CONTACT = {
  title: (
    <>
      Hablemos de algo <span className="text-secondary">grandioso</span> juntos
    </>
  ),
  fields: [
    { id: "name", name: "name", label: "Nombre", type: "text" },
    { id: "email", name: "email", label: "Correo", type: "email" },
    { id: "message", name: "message", label: "Mensaje", type: "textarea" }
  ],
  sendSubmitButton: 'Enviar',
  sendingMessage: 'Enviando...',
  aboutProject: 'Es sobre:',
  typeProject: [
    'Desarrollo Web',
    'Análisis de Datos',
    'Automatización',
    'Otro',
  ],
}

export const SOCIALS = {
  links: [
    { icon: 'Mail', href: 'mailto:contacto@tyttechsolutions.cl', label: 'contacto@tyttechsolutions.cl', alt: 'Correo' },
    // { icon: 'Instagram', href: '#', label: '/tyttechsolutions', alt: 'Instagram' },
    { icon: 'Phone', href: 'https://wa.me/56962163466', label: '+56 9 6216 3466', alt: 'WhatsApp' },
    // { icon: 'Linkedin', href: '#', label: '/tyttechsolutions', alt: 'Linkedin' },
  ],
};

export const FOOTER = {
  links: [
    { href: '/terminos', label: 'Términos y condiciones' },
    { href: '/privacidad', label: 'Política de Privacidad' },
  ],
  message: 'DISEÑADO Y DESARROLLADO CON ❤️ POR',
}

export const MESSAGES = {
  success: '📧 Formulario enviado con éxito',
  sendError: '¡Ups! Algo salió mal. Por favor, inténtalo de nuevo.',
  missingProject: 'Por favor selecciona al menos una opción de proyecto.',
  conexionError: '❌ Error de conexión',
  fieldIncomplete: 'Campos incompletos:',
} 