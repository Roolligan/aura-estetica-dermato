import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero'
import TrustBar from '../components/TrustBar/TrustBar'
import Treatments from '../components/Treatments/Treatments'
import Results from '../components/Results/Results'
import About from '../components/About/About'
import Testimonials from '../components/Testimonials/Testimonials'
import Team from '../components/Team/Team'
import Contact from '../components/Contact/Contact'
import FAQ from '../components/FAQ/FAQ'
import Footer from '../components/Footer/Footer'
import FloatingWhatsApp from '../components/FloatingWhatsApp/FloatingWhatsApp'
import { navItems } from '../data/mock'
import useScrollSpy from '../hooks/useScrollSpy'
import useLockBodyScroll from '../hooks/useLockBodyScroll'
import { useState } from 'react'
import './App.css'

export default function App() {
  const sectionIds = navItems.map((item) => item.id)
  const activeId = useScrollSpy(sectionIds)
  const [isScheduleOpen, setScheduleOpen] = useState(false)
  const [scheduleSent, setScheduleSent] = useState(false)

  useLockBodyScroll(isScheduleOpen)

  const openSchedule = () => {
    setScheduleSent(false)
    setScheduleOpen(true)
  }

  return (
    <div className="app">
      <Header navItems={navItems} activeId={activeId} onOpenSchedule={openSchedule} />
      <main>
        <Hero onOpenSchedule={openSchedule} />
        <TrustBar />
        <Treatments />
        <Results />
        <About />
        <Testimonials />
        <Team />
        <Contact />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      {isScheduleOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Agendamento">
          <div className="modal-panel">
            <button className="modal-close" onClick={() => setScheduleOpen(false)} aria-label="Fechar">
              x
            </button>
            <h3>Agendar avaliacao</h3>
            <p>
              Deixe seus dados e nossa equipe entrara em contato para confirmar o melhor horario.
            </p>
            <form
              className="schedule-form"
              onSubmit={(event) => {
                event.preventDefault()
                setScheduleSent(true)
              }}
            >
              <label>
                Nome
                <input type="text" required placeholder="Seu nome" />
              </label>
              <label>
                Telefone
                <input type="tel" required placeholder="(00) 00000-0000" />
              </label>
              <label>
                Preferencia de horario
                <input type="text" required placeholder="Manha ou tarde" />
              </label>
              <button type="submit" className="btn btn-primary">
                Enviar solicitacao
              </button>
              {scheduleSent && (
                <span className="form-success" role="status" aria-live="polite">
                  Solicitacao enviada. Vamos confirmar o horario.
                </span>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

