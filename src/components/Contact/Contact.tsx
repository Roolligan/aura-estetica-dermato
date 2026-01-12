import './Contact.css'
import { contact } from '../../data/mock'
import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <section id="contato" className="section contact">
      <div className="container grid-2 contact-grid">
        <div>
          <h2 className="section-title">Contato</h2>
          <div className="contact-info">
            <div>
              <strong>Endereco</strong>
              <p>{contact.address}</p>
            </div>
            <div>
              <strong>Horario</strong>
              <p>{contact.hours}</p>
            </div>
            <div>
              <strong>Telefone</strong>
              <p>{contact.phone}</p>
            </div>
            <div>
              <strong>WhatsApp</strong>
              <p>{contact.whatsapp}</p>
            </div>
            <div>
              <strong>Instagram</strong>
              <p>{contact.instagram}</p>
            </div>
          </div>
          <div className="contact-map" aria-label="Mapa da clínica">
            <iframe
              title="Mapa - Aura Estética"
              src="https://www.google.com/maps?q=Av.%20Central,%201200%20-%20Jardim%20Aurora,%20Sao%20Paulo&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
           <a
              className="map-link"
              href="https://www.google.com/maps?q=Av.%20Central,%201200%20-%20Jardim%20Aurora,%20Sao%20Paulo"
              target="_blank"
              rel="noreferrer"
            >
              Ver no Google Maps
          </a>
          </div>

        </div>
        <form
          className="contact-form"
          onSubmit={(event) => {
            event.preventDefault()
            setSent(true)
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
            Tratamento
            <select required>
              <option value="">Selecione</option>
              <option>Facial</option>
              <option>Corporal</option>
              <option>Laser</option>
            </select>
          </label>
          <label>
            Mensagem
            <textarea required rows={4} placeholder="Como podemos ajudar?"></textarea>
          </label>
          <button type="submit" className="btn btn-primary">
            Enviar
          </button>
          {sent && <span className="form-success">Mensagem enviada com sucesso!</span>}
        </form>
      </div>
    </section>
  )
}
