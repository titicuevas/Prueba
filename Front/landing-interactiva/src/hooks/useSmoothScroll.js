import { useCallback, useEffect } from 'react'

/**
 * Hook personalizado para manejar scroll suave y optimizado
 * Elimina el bounce y mejora la experiencia de scroll
 */
export const useSmoothScroll = () => {
  // Función optimizada para scroll suave
  const scrollToSection = useCallback((elementId, offset = 0) => {
    const element = document.getElementById(elementId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }, [])

  // Función para scroll al top
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  // Función para scroll al bottom
  const scrollToBottom = useCallback(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }, [])

  // Effect para prevenir el overscroll bounce
  useEffect(() => {
    const preventOverscroll = (e) => {
      // Prevenir el overscroll en iOS y otros dispositivos móviles
      if (e.target === document.body || e.target === document.documentElement) {
        e.preventDefault()
      }
    }

    // Prevenir el bounce en el scroll
    const handleTouchMove = (e) => {
      const target = e.target
      const scrollableParent = target.closest('[data-scrollable]')
      
      if (!scrollableParent && (target === document.body || target === document.documentElement)) {
        e.preventDefault()
      }
    }

    // Agregar listeners
    document.addEventListener('touchmove', preventOverscroll, { passive: false })
    document.addEventListener('touchmove', handleTouchMove, { passive: false })

    // Limpiar listeners
    return () => {
      document.removeEventListener('touchmove', preventOverscroll)
      document.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  // Effect para optimizar el scroll en dispositivos móviles
  useEffect(() => {
    const handleScroll = () => {
      // Optimizar el scroll en móviles
      if (window.innerWidth <= 768) {
        document.body.style.overscrollBehavior = 'none'
      }
    }

    handleScroll()
    window.addEventListener('resize', handleScroll)
    
    return () => window.removeEventListener('resize', handleScroll)
  }, [])

  return {
    scrollToSection,
    scrollToTop,
    scrollToBottom
  }
}
