import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaCheck, FaTrash, FaListUl, FaEraser } from 'react-icons/fa'
import Modal from './Modal'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { LOCAL_STORAGE_KEYS, FILTER_TYPES, DEFAULT_LIST_ITEMS, ANIMATION_VARIANTS } from '../constants'
import './InteractiveList.css'

const InteractiveList = () => {
  // Usar hook personalizado para localStorage
  const [items, setItems] = useLocalStorage(LOCAL_STORAGE_KEYS.INTERACTIVE_LIST_ITEMS, DEFAULT_LIST_ITEMS)
  const [newItem, setNewItem] = useState('')
  const [filter, setFilter] = useState(FILTER_TYPES.ALL)
  const [showModal, setShowModal] = useState(false)

  // Funciones optimizadas con useCallback
  const addItem = useCallback((e) => {
    e.preventDefault()
    if (newItem.trim()) {
      const newItemObj = {
        id: Date.now(),
        text: newItem.trim(),
        completed: false
      }
      setItems(prevItems => [...prevItems, newItemObj])
      setNewItem('')
    }
  }, [newItem])

  const toggleComplete = useCallback((id) => {
    setItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    )
  }, [])

  const deleteItem = useCallback((id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }, [])

  // Función para limpiar todos los elementos
  const clearAllItems = useCallback(() => {
    if (items.length > 0) {
      setShowModal(true)
    }
  }, [items.length])

  // Función para confirmar limpieza
  const confirmClear = useCallback(() => {
    setItems([])
    setShowModal(false)
  }, [])

  // Función para cancelar limpieza
  const cancelClear = useCallback(() => {
    setShowModal(false)
  }, [])

  // Estadísticas optimizadas con useMemo
  const stats = useMemo(() => {
    const completedCount = items.filter(item => item.completed).length
    const totalCount = items.length
    return { completedCount, totalCount, pendingCount: totalCount - completedCount }
  }, [items])

  // Items filtrados optimizados con useMemo
  const filteredItems = useMemo(() => {
    if (filter === FILTER_TYPES.PENDING) return items.filter(item => !item.completed)
    if (filter === FILTER_TYPES.COMPLETED) return items.filter(item => item.completed)
    return items
  }, [items, filter])

  return (
    <section className="interactive-list">
      <div className="list-container">
        <div className="list-header">
          <h2>Lista Interactiva</h2>
          <p>Agrega tus ideas, tareas o cualquier cosa que tengas en mente</p>
        </div>

        <div className="list-stats">
          <div className="stat">
            <span className="stat-number">{stats.totalCount}</span>
            <span className="stat-label">Total</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.completedCount}</span>
            <span className="stat-label">Completadas</span>
          </div>
          <div className="stat">
            <span className="stat-number">{stats.pendingCount}</span>
            <span className="stat-label">Pendientes</span>
          </div>
        </div>

        <form onSubmit={addItem} className="add-item-form">
          <div className="input-group">
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Agregar nueva idea o tarea..."
              className="item-input"
            />
            <motion.button 
              type="submit" 
              className="add-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaPlus />
            </motion.button>
          </div>
        </form>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === FILTER_TYPES.ALL ? 'active' : ''}`}
            onClick={() => setFilter(FILTER_TYPES.ALL)}
          >
            Todas ({stats.totalCount})
          </button>
          <button 
            className={`filter-btn ${filter === FILTER_TYPES.PENDING ? 'active' : ''}`}
            onClick={() => setFilter(FILTER_TYPES.PENDING)}
          >
            Pendientes ({stats.pendingCount})
          </button>
          <button 
            className={`filter-btn ${filter === FILTER_TYPES.COMPLETED ? 'active' : ''}`}
            onClick={() => setFilter(FILTER_TYPES.COMPLETED)}
          >
            Completadas ({stats.completedCount})
          </button>
          {stats.totalCount > 0 && (
            <button 
              className="filter-btn clear-btn"
              onClick={clearAllItems}
              title="Eliminar todos los elementos"
            >
              <FaEraser className="clear-icon" />
              Limpiar Todo
            </button>
          )}
        </div>

        <div className="items-list">
          <AnimatePresence>
            {filteredItems.length === 0 ? (
              <motion.div 
                className="empty-state"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="empty-icon">
                  <FaListUl />
                </div>
                <p>No hay elementos para mostrar</p>
              </motion.div>
            ) : (
              filteredItems.map(item => (
                <motion.div 
                  key={item.id} 
                  className={`list-item ${item.completed ? 'completed' : ''}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.2 }}
                  layout
                >
                  <div className="item-content">
                    <motion.button 
                      className={`checkbox ${item.completed ? 'checked' : ''}`}
                      onClick={() => toggleComplete(item.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {item.completed && <FaCheck />}
                    </motion.button>
                    <span className="item-text">{item.text}</span>
                  </div>
                  <motion.button 
                    className="delete-btn"
                    onClick={() => deleteItem(item.id)}
                    title="Eliminar elemento"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaTrash />
                  </motion.button>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal de confirmación */}
      <Modal
        isOpen={showModal}
        onClose={cancelClear}
        onConfirm={confirmClear}
        title="Eliminar todos los elementos"
        message="¿Estás seguro de que quieres eliminar todos los elementos de la lista? Esta acción no se puede deshacer."
        confirmText="Eliminar todo"
        cancelText="Cancelar"
      />
    </section>
  )
}

export default InteractiveList
