import './Team.css'
import { team } from '../../data/mock'

export default function Team() {
  return (
    <section id="equipe" className="section team">
      <div className="container">
        <h2 className="section-title">Equipe especializada</h2>

        <div className="team-grid">
          {team.map((member) => (
            <article key={member.name} className="card team-card">
              <div className="team-avatar">
                <img src={member.image} alt={member.name} />
              </div>

              <div>
                <h3>{member.name}</h3>
                <span>{member.role}</span>
              </div>

              <p>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

