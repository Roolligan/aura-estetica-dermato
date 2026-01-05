import './TrustBar.css'
import { trustItems } from '../../data/mock'

export default function TrustBar() {
  return (
    <section className="trust section">
      <div className="container trust-grid">
        {trustItems.map((item) => (
          <div key={item} className="trust-item">
            <span className="trust-icon" aria-hidden="true">
              +
            </span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

