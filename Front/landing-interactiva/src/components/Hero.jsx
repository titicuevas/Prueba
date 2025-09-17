import './Hero.css'

const Hero = () => {
  return (
    <section id="inicio" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Bienvenido a mi 
            <br/>
            <span className="highlight"> Landing Page</span>
          </h1>
          <p className="hero-description">
            Una página web moderna y interactiva creada con React, 
            diseñada para mostrar mis habilidades en desarrollo frontend.
          </p>
          <div className="hero-features">
            <div className="feature">
              <div className="feature-icon">🚀</div>
              <h3>Moderno</h3>
              <p>Diseño actual con las mejores prácticas</p>
            </div>
            <div className="feature">
              <div className="feature-icon">⚡</div>
              <h3>Rápido</h3>
              <p>Optimizado para máxima performance</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📱</div>
              <h3>Responsive</h3>
              <p>Perfecto en todos los dispositivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

