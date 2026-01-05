import './FAQ.css'
import { faq } from '../../data/mock'

export default function FAQ() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <h2 className="section-title">Perguntas frequentes</h2>
        <div className="faq-list">
          {faq.map((item) => (
            <details key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
