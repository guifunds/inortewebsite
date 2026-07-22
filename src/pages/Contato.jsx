import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP, PHONE_DISPLAY, EMAIL, ADDRESS } from '../lib/contact.js'

export default function Contato() {
  useReveal()
  const [nome, setNome] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [msg, setMsg] = useState('')

  const enviar = () => {
    const texto = `Olá! Meu nome é ${nome || '...'}${empresa ? ', da empresa ' + empresa : ''}. ${msg || 'Gostaria de um orçamento.'}`
    window.open(`${WHATSAPP}?text=${encodeURIComponent(texto)}`, '_blank')
  }

  return (
    <>
      <Header />

      <section style={{ padding: '200px 48px 72px' }}>
        <p className="kicker fade-up">CONTATO</p>
        <h1 className="xp fade-up d1" style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(44px, 6.4vw, 96px)', lineHeight: 1, letterSpacing: '-.02em' }}>
          Vamos <span style={{ color: '#004bff' }}>conversar.</span>
        </h1>
      </section>

      <section className="grid-2" style={{ padding: '0 48px 120px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 64, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, background: '#004bff', color: '#fff', borderRadius: 20, padding: '32px 36px' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.22em', opacity: 0.75, marginBottom: 10 }}>WHATSAPP — RESPOSTA MAIS RÁPIDA</div>
              <div className="xp" style={{ fontWeight: 800, fontSize: 24 }}>{PHONE_DISPLAY}</div>
            </div>
            <span style={{ fontSize: 28 }}>→</span>
          </a>
          <a href={`mailto:${EMAIL}`} className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, border: '1px solid rgba(10,10,20,.12)', borderRadius: 20, padding: '32px 36px', color: '#0a0a14' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#8a8a96', marginBottom: 10 }}>E-MAIL</div>
              <div style={{ fontWeight: 700, fontSize: 17, wordBreak: 'break-all' }}>{EMAIL}</div>
            </div>
            <span style={{ fontSize: 24, color: '#004bff' }}>→</span>
          </a>
          <div className="reveal" style={{ border: '1px solid rgba(10,10,20,.12)', borderRadius: 20, padding: '32px 36px' }}>
            <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#8a8a96', marginBottom: 10 }}>ESCRITÓRIO</div>
            <div style={{ fontWeight: 700, fontSize: 17, lineHeight: 1.5 }}>{ADDRESS[0]}<br />{ADDRESS[1]}</div>
            <div style={{ marginTop: 10, fontSize: 14.5, color: '#5a5a68' }}>Atendimento com hora marcada e 100% online para todo o Brasil.</div>
          </div>
          <div className="reveal" style={{ border: '1px solid rgba(10,10,20,.12)', borderRadius: 20, padding: '32px 36px' }}>
            <div style={{ fontSize: 12, letterSpacing: '.22em', color: '#8a8a96', marginBottom: 10 }}>HORÁRIO</div>
            <div style={{ fontWeight: 700, fontSize: 17 }}>Segunda a sexta, 8h às 18h</div>
          </div>
        </div>

        <div className="reveal" style={{ background: '#fff', border: '1px solid rgba(10,10,20,.09)', borderRadius: 24, padding: 48 }}>
          <h2 className="xp" style={{ margin: '0 0 8px', fontWeight: 800, fontSize: 26, letterSpacing: '-.01em' }}>Peça um orçamento</h2>
          <p style={{ margin: '0 0 32px', fontSize: 15, color: '#5a5a68' }}>Preencha e a mensagem chega pronta no nosso WhatsApp.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
              <label>SEU NOME
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Maria Silva" />
              </label>
              <label>EMPRESA (OU "AINDA NÃO TENHO")
                <input value={empresa} onChange={(e) => setEmpresa(e.target.value)} placeholder="Minha Empresa LTDA" />
              </label>
            </div>
            <label>DO QUE VOCÊ PRECISA?
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={5} placeholder="Ex.: quero abrir uma empresa e entender qual regime tributário compensa mais…" style={{ resize: 'vertical' }} />
            </label>
            <button onClick={enviar} className="btn btn-blue" style={{ border: 'none', justifyContent: 'center', fontWeight: 800, letterSpacing: '.02em' }}>
              Enviar pelo WhatsApp →
            </button>
            <p style={{ margin: 0, fontSize: 12.5, color: '#8a8a96', textAlign: 'center' }}>
              Ao enviar, você abre uma conversa no WhatsApp com a mensagem preenchida.
            </p>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
