import './Header.css'
import { NavItem } from '../../data/mock'
import { useState } from 'react'

interface HeaderProps {
  navItems: NavItem[]
  activeId: string
  onOpenSchedule: () => void
}

export default function Header({ navItems, activeId, onOpenSchedule }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="container header-inner">
        <a href="#inicio" className="wordmark" aria-label="Aura Estetica">
          <span className="wordmark-title">Aura</span>
          <span className="wordmark-line">-- ESTETICA --</span>
          <span className="wordmark-sub">CLINICA DERMATOLOGICA</span>
        </a>
        <nav className="nav" aria-label="Menu principal">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeId === item.id ? 'active' : ''}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="btn btn-primary header-cta" onClick={onOpenSchedule}>
          Agendar avaliacao
        </button>
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Abrir menu"
          aria-expanded={menuOpen}
        >
          ☰
        </button>
      </div>
      {menuOpen && (
        <div className="menu-drawer" role="dialog" aria-modal="true">
          <div className="menu-panel">
            <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Fechar menu">
              x
            </button>
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeId === item.id ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="btn btn-primary" onClick={onOpenSchedule}>
              Agendar avaliacao
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

