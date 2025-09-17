import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaEnvelope } from 'react-icons/fa'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import './Navigation.css'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollToSection } = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavigationClick = (id) => {
    scrollToSection(id, 80) // Offset para la navegación fija
  }

  return (
    <motion.nav 
      className={`navigation ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="nav-container">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h2>Mi Landing</h2>
        </motion.div>
        <ul className="nav-menu">
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={() => handleNavigationClick('inicio')}
                      className="nav-link"
                    >
                      <FaHome className="nav-icon" />
                      Inicio
                    </button>
                  </motion.li>
                  <motion.li
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <button 
                      onClick={() => handleNavigationClick('contacto')}
                      className="nav-link"
                    >
                      <FaEnvelope className="nav-icon" />
                      Contacto
                    </button>
                  </motion.li>
        </ul>
      </div>
    </motion.nav>
  )
}

export default Navigation
