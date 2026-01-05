import './Testimonials.css'
import { testimonials } from '../../data/mock'
import { useEffect, useMemo, useState } from 'react'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [perView, setPerView] = useState(1)

  useEffect(() => {
    const handler = () => {
      setPerView(window.innerWidth >= 1024 ? 2 : 1)
    }
    handler()
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const visible = useMemo(() => {
    const items = []
    for (let i = 0; i < perView; i += 1) {
      items.push(testimonials[(index + i) % testimonials.length])
    }
    return items
  }, [index, perView])

  const totalPages = Math.ceil(testimonials.length / perView)
  const currentPage = Math.floor(index / perView)

  return (
    <section id="depoimentos" className="section testimonials">
      <div className="container">
        <div className="testimonials-header">
          <h2 className="section-title">Depoimentos</h2>
          <div className="testimonials-controls">
            <button
              className="btn btn-secondary"
              onClick={() => setIndex((prev) => (prev - perView + testimonials.length) % testimonials.length)}
              aria-label="Depoimento anterior"
            >
              {"<"}
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => setIndex((prev) => (prev + perView) % testimonials.length)}
              aria-label="Proximo depoimento"
            >
              {">"}
            </button>
          </div>
        </div>
        <div className="testimonials-grid">
          {visible.map((item) => (
            <article key={item.name} className="card testimonial-card">
              <p>"{item.text}"</p>
              <div className="testimonial-footer">
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.source}</span>
                </div>
                <span className="stars" aria-label="5 estrelas">
                  *****
                </span>
              </div>
            </article>
          ))}
        </div>
        <div className="testimonials-dots" role="tablist" aria-label="Indicadores">
          {Array.from({ length: totalPages }).map((_, page) => (
            <button
              key={page}
              className={page === currentPage ? 'dot active' : 'dot'}
              aria-label={`Ir para pagina ${page + 1}`}
              onClick={() => setIndex(page * perView)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

