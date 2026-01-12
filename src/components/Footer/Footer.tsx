import './Footer.css'
import { navItems } from '../../data/mock'
import logo from "../../assets/brand/logo-aura.png"


export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#inicio" className="footer-logo" aria-label="Aura Estética">
          <img src={logo} alt="Aura Estética" />
        </a>

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

