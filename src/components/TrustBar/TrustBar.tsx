import './TrustBar.css'
import { trustItems } from '../../data/mock'

export default function TrustBar() {
  return (
    <section className="trust section">
      <div className="container trust-grid">
        {trustItems.map((item) => (
          <div key={item.label} className="trust-item">
            <img
              src={item.image}
              alt=""
              className="trust-image"
              aria-hidden="true"
            />

            
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}


