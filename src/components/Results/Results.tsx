import "./Results.css"
import { results } from "../../data/mock"

export default function Results() {
  return (
    <section id="resultados" className="section results">
      <div className="container">
        <h2 className="section-title">Resultados reais</h2>

        <div className="results-grid">
          {results.map((item, idx) => (
            <div key={idx} className="result-card">
              <img src={item.image} alt="Antes e depois" />
            </div>
          ))}
        </div>

        <p className="results-note">
          Resultados variam de acordo com cada paciente.
        </p>
      </div>
    </section>
  )
}

