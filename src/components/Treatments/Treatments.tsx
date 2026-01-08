import './Treatments.css'
import { useMemo, useState } from 'react'
import { treatments, Treatment } from '../../data/mock'
import TreatmentCard from './TreatmentCard'
import TreatmentModal from './TreatmentModal'

const categories = ['Todos', 'Facial', 'Corporal', 'Laser', 'Spa']

export default function Treatments({ onOpenSchedule }: { onOpenSchedule: () => void }) {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const [selected, setSelected] = useState<Treatment | null>(null)

  const filtered = useMemo(() => {
    if (activeCategory === 'Todos') return treatments
    return treatments.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section id="tratamentos" className="section treatments">
      <div className="container">
        <div className="treatments-header">
          <div>
            <h2 className="section-title">Tratamentos personalizados</h2>
            <p className="treatments-subtitle">
              Protocolos dermatologicos de alta precisao com acompanhamento completo.
            </p>
          </div>
          <div className="treatments-chips" role="tablist" aria-label="Filtro de tratamentos">
            {categories.map((category) => (
              <button
                key={category}
                className={`chip ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
                role="tab"
                aria-selected={activeCategory === category}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="treatments-grid">
          {filtered.map((item) => (
            <TreatmentCard key={item.name} item={item} onSelect={() => setSelected(item)} />
          ))}
        </div>
      </div>
            <TreatmentModal
              treatment={selected}
              onClose={() => setSelected(null)}
              onOpenSchedule={onOpenSchedule}
            />

    </section>
  )
}
