import { Treatment } from '../../data/mock'
import './Treatments.css'

interface TreatmentCardProps {
  item: Treatment
  onSelect: () => void
}

export default function TreatmentCard({ item, onSelect }: TreatmentCardProps) {
  return (
    <article className="card treatment-card">
      <div>
        <span className="treatment-category">{item.category}</span>
        <h3>{item.name}</h3>
        <p>{item.benefit}</p>
      </div>
      <div className="treatment-meta">
        <span>{item.duration}</span>
        <strong>{item.priceFrom}</strong>
      </div>
      <button className="btn btn-secondary" onClick={onSelect}>
        Quero saber mais
      </button>
    </article>
  )
}
