import { Treatment } from '../../data/mock'
import useLockBodyScroll from '../../hooks/useLockBodyScroll'
import './Treatments.css'

interface TreatmentModalProps {
  treatment: Treatment | null
  onClose: () => void
  onOpenSchedule: () => void
}

export default function TreatmentModal({ treatment, onClose, onOpenSchedule }: TreatmentModalProps) {
  const isOpen = Boolean(treatment)
  useLockBodyScroll(isOpen)

  if (!treatment) return null

  return (
    <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Detalhes do tratamento">
      <div className="modal-panel">
        <button className="modal-close" onClick={onClose} aria-label="Fechar">
          x
        </button>
        <span className="treatment-category">{treatment.category}</span>
        <h3>{treatment.name}</h3>
        <p>{treatment.benefit}</p>
        <div className="modal-meta">
          <span>Duracao: {treatment.duration}</span>
          <strong>{treatment.priceFrom}</strong>
        </div>
        <p className="modal-note">
          Atendimento individualizado mediante avaliacao dermatologica.
        </p>
        <button
            className="btn btn-primary"
            onClick={() => {
             onClose()
             onOpenSchedule()
          }}
        >
           Solicitar avaliacao
        </button>

      </div>
    </div>
  )
}

