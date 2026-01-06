import './Hero.css'
import heroImage from "../../assets/hero/hero-image.png"

interface HeroProps {
  onOpenSchedule: () => void
}

export default function Hero({ onOpenSchedule }: HeroProps) {
  return (
    <section id="inicio" className="hero section">
      <div className="container hero-inner">
        <div className="hero-content">
          <div className="wordmark hero-wordmark">
            <span className="wordmark-title"></span>
            <span className="wordmark-line"></span>
            <span className="wordmark-sub"></span>
          </div>
          <h1>Estetica premium com resultados naturais.</h1>
          <p>
            Protocolos personalizados, equipe qualificada e seguranca em cada etapa.
          </p>
          <div className="hero-actions">
            <button className="btn btn-primary" onClick={onOpenSchedule}>
              Agendar avaliacao
            </button>
            <a href="#tratamentos" className="btn btn-secondary">
              Ver tratamentos
            </a>
          </div>
          <div className="hero-badges">
            <span>+5.000 atendimentos</span>
            <span>Equipe certificada</span>
            <span>Protocolos seguros</span>
          </div>
        </div>
        <div
                className="hero-visual"
                aria-hidden="true"
                style={{ backgroundImage: `url(${heroImage})` }}
>

          <div className="hero-glow"></div>
          <div className="hero-card"></div>
          <div className="hero-lines"></div>
        </div>
      </div>
    </section>
  )
}

