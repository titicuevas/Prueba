// Constantes para la aplicación

export const LOCAL_STORAGE_KEYS = {
  INTERACTIVE_LIST_ITEMS: 'interactiveListItems'
}

export const FILTER_TYPES = {
  ALL: 'all',
  PENDING: 'pending',
  COMPLETED: 'completed'
}

export const DEFAULT_LIST_ITEMS = [
  { id: 1, text: 'Aprender React', completed: false },
  { id: 2, text: 'Practicar CSS Grid', completed: true },
  { id: 3, text: 'Crear animaciones', completed: false }
]

export const ANIMATION_VARIANTS = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  },
  slideInItem: {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  }
}

export const COLORS = {
  PRIMARY: '#2563eb',
  SECONDARY: '#7c3aed',
  ACCENT: '#fbbf24',
  SUCCESS: '#10b981',
  DANGER: '#dc2626',
  WARNING: '#f59e0b'
}
