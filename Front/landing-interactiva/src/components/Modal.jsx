import { useEffect, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaExclamationTriangle, FaTimes } from 'react-icons/fa'
import './Modal.css'

const Modal = memo(({ isOpen, onClose, onConfirm, title, message, confirmText = "Confirmar", cancelText = "Cancelar" }) => {
  // Cerrar modal con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevenir scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="modal-content"
          initial={{ opacity: 0, scale: 0.8, y: -50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: -50 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <div className="modal-icon">
              <FaExclamationTriangle />
            </div>
            <h3 className="modal-title">{title}</h3>
            <button className="modal-close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
          
          <div className="modal-body">
            <p className="modal-message">{message}</p>
          </div>
          
          <div className="modal-footer">
            <button className="modal-btn modal-btn-cancel" onClick={onClose}>
              {cancelText}
            </button>
            <button className="modal-btn modal-btn-confirm" onClick={onConfirm}>
              {confirmText}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
})

Modal.displayName = 'Modal'

export default Modal
