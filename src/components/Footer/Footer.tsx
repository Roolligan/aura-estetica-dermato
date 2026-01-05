import './Footer.css'
import { navItems } from '../../data/mock'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="wordmark">
          <span className="wordmark-title">Aura</span>
          <span className="wordmark-line">-- ESTETICA --</span>
          <span className="wordmark-sub">CLINICA DERMATOLOGICA</span>
        </div>
        <nav className="footer-nav" aria-label="Rodape">
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
        <p>Projeto demonstrativo para portfolio.</p>
      </div>
    </footer>
  )
}

