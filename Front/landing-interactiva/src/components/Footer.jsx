import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Mi Landing</h3>
            <p>Una landing page moderna creada con React, CSS Grid y animaciones suaves.</p>
          </div>
          <div className="footer-section">
            <h4>Desarrollado con</h4>
            <ul>
              <li>⚛️ React 19</li>
              <li>🎨 CSS Grid & Flexbox</li>
              <li>✨ Framer Motion</li>
              <li>🚀 Vite</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Características</h4>
            <ul>
              <li>📱 Responsive Design</li>
              <li>🎭 Animaciones Suaves</li>
              <li>⚡ Performance Optimizada</li>
              <li>♿ Accesible</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Landing Page Interactiva. Desarrollado con ❤️ para demostrar habilidades en React.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
