import { useState, useEffect } from 'react'

/**
 * Hook personalizado para manejar localStorage de forma segura
 * @param {string} key - Clave para localStorage
 * @param {any} initialValue - Valor inicial si no existe en localStorage
 * @returns {[any, function]} - [valor, setter]
 */
export const useLocalStorage = (key, initialValue) => {
  // Estado para almacenar nuestro valor
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Obtener del localStorage
      const item = window.localStorage.getItem(key)
      // Parsear JSON o devolver valor inicial
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Si hay error, devolver valor inicial
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  // Función para actualizar el valor
  const setValue = (value) => {
    try {
      // Permitir que value sea una función para actualizaciones basadas en estado previo
      const valueToStore = value instanceof Function ? value(storedValue) : value
      
      // Guardar en el estado
      setStoredValue(valueToStore)
      
      // Guardar en localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  // Effect para sincronizar cambios en localStorage desde otras pestañas
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key && e.newValue !== null) {
        try {
          setStoredValue(JSON.parse(e.newValue))
        } catch (error) {
          console.error(`Error parsing localStorage key "${key}":`, error)
        }
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [key])

  return [storedValue, setValue]
}
