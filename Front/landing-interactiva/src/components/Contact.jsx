import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    // Simular envío del formulario
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    console.log('Datos del formulario:', formData)
    
    setSubmitStatus('success')
    setFormData({ nombre: '', email: '', mensaje: '' })
    setIsSubmitting(false)

    // Limpiar mensaje de éxito después de 3 segundos
    setTimeout(() => setSubmitStatus(''), 3000)
  }

  return (
    <section id="contacto" className="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Contacto</h2>
          <p>¿Tienes alguna pregunta? ¡No dudes en contactarme!</p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Información de Contacto</h3>
            <div className="info-item">
              <div className="info-icon">📧</div>
              <div>
                <h4>Email</h4>
                <p>enriquecuegarcia@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📱</div>
              <div>
                <h4>Teléfono</h4>
                <p>+34 661 096 250</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon">📍</div>
              <div>
                <h4>Ubicación</h4>
                <p>Barcelona, España</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nombre">Nombre *</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje *</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Cuéntame qué tienes en mente..."
              />
            </div>

            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'loading' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>

            {submitStatus === 'success' && (
              <div className="success-message">
                ¡Mensaje enviado correctamente! Te responderé pronto.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

