import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { PageHero, Pill, Faq } from '../components/System.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP, PHONE_DISPLAY, EMAIL, ADDRESS } from '../lib/contact.js'

export default function Contato() {
  useReveal()
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [msg, setMsg] = useState('')

  const enviar = (e) => {
    e.preventDefault()
    const texto = `Olá! Meu nome é ${nome || '...'}${empresa ? ', da empresa ' + empresa : ''}. ${msg || 'Gostaria de um orçamento.'}`
    window.open(`${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <>
      <Header />

      <PageHero
        eyebrow="Contato"
        title="Vamos conversar."
        lead="Atendimento com hora marcada e 100% online para todo o Brasil."
        aside={
          <div className="pills-row">
            <Pill>Segunda a sexta, 8h às 18h</Pill>
            <Pill>Resposta média em 48h</Pill>
          </div>
        }
      />

      <section className="section sm">
        <div className="wrap contact-grid">
          <div className="contact-list">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="card dark contact-card reveal">
              <div>
                <span className="k">WhatsApp — resposta mais rápida</span>
                <div className="v">{PHONE_DISPLAY}</div>
              </div>
              <span className="go">→</span>
            </a>
            <a href={`mailto:${EMAIL}`} className="card contact-card reveal">
              <div style={{ minWidth: 0 }}>
                <span className="k">E-mail</span>
                <div className="v" style={{ fontSize: 17, overflowWrap: 'anywhere' }}>{EMAIL}</div>
              </div>
              <span className="go">→</span>
            </a>
            <div className="card contact-card reveal">
              <div>
                <span className="k">Escritório</span>
                <div className="v">{ADDRESS[0]}<br />{ADDRESS[1]}</div>
              </div>
            </div>
            <div className="card contact-card reveal">
              <div>
                <span className="k">Horário</span>
                <div className="v">Segunda a sexta, 8h às 18h</div>
              </div>
            </div>
          </div>

          <form className="card form reveal" onSubmit={enviar}>
            <div>
              <p className="eyebrow" style={{ marginBottom: 12 }}>Orçamento</p>
              <h2 className="h3" style={{ marginBottom: 8 }}>Peça um orçamento</h2>
              <p className="body">Preencha e a mensagem chega pronta no nosso WhatsApp.</p>
            </div>
            <div className="form-row">
              <label>Seu nome
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Maria Silva" />
              </label>
              <label>Empresa (ou "ainda não tenho")
                <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Minha Empresa LTDA" />
              </label>
            </div>
            <label>Do que você precisa?
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={5} placeholder="Ex.: quero abrir uma empresa e entender qual regime tributário compensa mais…" />
            </label>
            <button type="submit" className="btn lg btn-azul" style={{ width: '100%' }}>
              Enviar pelo WhatsApp <span className="arr">→</span>
            </button>
            <p style={{ fontSize: 14, color: 'var(--cinza-rotulo)', textAlign: 'center' }}>
              Ao enviar, você abre uma conversa no WhatsApp com a mensagem preenchida.
            </p>
          </form>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 40 }}>
        <div className="wrap"><Faq /></div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
