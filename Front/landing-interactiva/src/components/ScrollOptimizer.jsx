import { useEffect } from 'react'

/**
 * Componente para optimizar el scroll en toda la aplicación
 * Elimina el bounce y mejora la experiencia de usuario
 */
const ScrollOptimizer = () => {
  useEffect(() => {
    // SOLUCIÓN AGRESIVA PARA EL BOUNCE
    const preventOverscroll = (e) => {
      // Prevenir el overscroll en TODOS los elementos
      const target = e.target
      
      // Si estamos en el body o html, prevenir siempre
      if (target === document.body || target === document.documentElement) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Si el elemento no es scrollable, prevenir
      const computedStyle = window.getComputedStyle(target)
      const isScrollable = computedStyle.overflow === 'auto' || 
                          computedStyle.overflow === 'scroll' ||
                          computedStyle.overflowY === 'auto' || 
                          computedStyle.overflowY === 'scroll'
      
      if (!isScrollable) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Prevenir el bounce de forma más agresiva
    const preventBounce = (e) => {
      // Detectar si estamos en el límite del scroll
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement
      
      // Si estamos en el top y intentamos hacer scroll hacia arriba
      if (scrollTop === 0 && e.deltaY < 0) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
      
      // Si estamos en el bottom y intentamos hacer scroll hacia abajo
      if (scrollTop + clientHeight >= scrollHeight && e.deltaY > 0) {
        e.preventDefault()
        e.stopPropagation()
        return false
      }
    }

    // Aplicar estilos CSS directamente
    const applyScrollStyles = () => {
      // Aplicar estilos directamente al DOM
      document.documentElement.style.overscrollBehavior = 'none'
      document.documentElement.style.overscrollBehaviorY = 'none'
      document.documentElement.style.overscrollBehaviorX = 'none'
      
      document.body.style.overscrollBehavior = 'none'
      document.body.style.overscrollBehaviorY = 'none'
      document.body.style.overscrollBehaviorX = 'none'
      
      // Prevenir el bounce en iOS
      document.body.style.webkitOverflowScrolling = 'touch'
      document.documentElement.style.webkitOverflowScrolling = 'touch'
    }

    // Configurar el viewport para prevenir zoom accidental
    const setViewport = () => {
      const viewport = document.querySelector('meta[name="viewport"]')
      if (viewport) {
        viewport.setAttribute(
          'content',
          'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover'
        )
      }
    }

    // Aplicar todas las optimizaciones
    setViewport()
    applyScrollStyles()

    // Agregar event listeners más agresivos
    document.addEventListener('touchmove', preventOverscroll, { passive: false, capture: true })
    document.addEventListener('wheel', preventBounce, { passive: false, capture: true })
    document.addEventListener('touchstart', preventOverscroll, { passive: false, capture: true })
    document.addEventListener('touchend', preventOverscroll, { passive: false, capture: true })

    // Re-aplicar estilos en resize
    const handleResize = () => {
      applyScrollStyles()
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleResize)

    // Limpiar event listeners
    return () => {
      document.removeEventListener('touchmove', preventOverscroll, { capture: true })
      document.removeEventListener('wheel', preventBounce, { capture: true })
      document.removeEventListener('touchstart', preventOverscroll, { capture: true })
      document.removeEventListener('touchend', preventOverscroll, { capture: true })
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleResize)
    }
  }, [])

  // Este componente no renderiza nada
  return null
}

export default ScrollOptimizer
