import './About.css'

export default function About() {
  return (
    <section id="sobre" className="section about">
      <div className="container grid-2 about-grid">
        <div>
          <h2 className="section-title">Sobre a Aura Estetica</h2>
          <p>
            Somos uma clinica dermatologica com foco em estetica avancada, unindo
            ciencia, tecnologia e acolhimento em cada atendimento.
          </p>
          <div className="about-points">
            <div className="card">
              <h3>Missao</h3>
              <p>Realcar a beleza natural com seguranca e resultados harmoniosos.</p>
            </div>
            <div className="card">
              <h3>Diferenciais</h3>
              <p>Protocolos exclusivos, equipamentos modernos e equipe multidisciplinar.</p>
            </div>
            <div className="card">
              <h3>Certificacoes</h3>
              <p>Atualizacao constante em dermatologia estetica e boas praticas clinicas.</p>
            </div>
          </div>
        </div>
        <div className="about-visual" aria-hidden="true">
          <div className="about-shape"></div>
        </div>
      </div>
    </section>
  )
}
