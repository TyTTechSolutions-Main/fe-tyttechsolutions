import { useState } from 'react'
import { NAVIGATION } from '../../mocks'

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='lg:hidden relative'>
      {/* Botón de menú hamburguesa */}
      <button
        onClick={toggleMenu}
        className='text-white text-3xl focus:outline-none'
        aria-label='Toggle menu'
      >
        {isOpen ? '✖' : '☰'}
      </button>

      {/* Menú desplegable */}
      <div
        className={`absolute right-0 top-12 bg-black/85 border border-secondary rounded-lg shadow-lg w-48 py-2 transition-transform duration-300 ${
          isOpen
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
      >
        <ul className='flex flex-col space-y-2'>
          {NAVIGATION.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className='block px-4 py-2 text-lg font-medium text-white hover:bg-secondary hover:text-black'
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
