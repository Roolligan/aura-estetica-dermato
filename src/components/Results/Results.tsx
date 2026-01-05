import './Results.css'

export default function Results() {
  return (
    <section id="resultados" className="section results">
      <div className="container">
        <h2 className="section-title">Resultados reais</h2>
        <div className="results-grid">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="results-card">
              <div className="results-placeholder">Antes / Depois</div>
            </div>
          ))}
        </div>
        <p className="results-note">Resultados variam de acordo com cada paciente.</p>
      </div>
    </section>
  )
}
