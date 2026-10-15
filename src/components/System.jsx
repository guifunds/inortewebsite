import { useState } from 'react'
import { WHATSAPP } from '../lib/contact.js'

export function Arrow({ size = 28, color = '#ffffff' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34" aria-hidden="true">
      <polygon points="17,2 24,28 17,21 10,28" fill={color} />
    </svg>
  )
}

export function Pill({ children, solid = false, className = '' }) {
  return (
    <span className={`pill${solid ? ' solid' : ''} ${className}`}>
      <span className="dot" />{children}
    </span>
  )
}

/** Faixa azul de abertura das páginas internas; `aside` vai à direita. */
export function PageHero({ eyebrow, title, lead, aside }) {
  return (
    <section className="band page-hero on-blue" data-hero>
      <div className="wrap page-hero-grid">
        <div>
          <p className="eyebrow fade-up">{eyebrow}</p>
          <h1 className="display fade-up d1" style={{ marginTop: 20 }}>{title}</h1>
          {lead && <p className="lead fade-up d2">{lead}</p>}
        </div>
        {aside && <div className="fade-up d3">{aside}</div>}
      </div>
    </section>
  )
}

export const FAQ_PADRAO = [
  { q: 'Vocês atendem empresas fora de Salvador?', a: 'Sim. O atendimento é 100% online para todo o Brasil, e quem preferir pode marcar horário no nosso escritório no Jardim dos Pássaros.' },
  { q: 'Qual o porte de empresa que vocês atendem?', a: 'Do MEI que está começando à média empresa em expansão. Atendemos Simples Nacional e também médias e grandes empresas nos regimes de Lucro Presumido e Lucro Real.' },
  { q: 'Como funciona a troca de contador?', a: 'Começamos com um diagnóstico do momento da empresa, do regime atual e das pendências. Depois organizamos documentos, acessos e rotinas para a transição acontecer sem travar a operação.' },
  { q: 'Em quanto tempo vocês respondem?', a: 'O prazo médio de resposta para demandas dos clientes é de 48 horas, e cada cliente fala direto com um responsável que conhece o negócio.' },
  { q: 'Como peço um orçamento?', a: 'Pelo WhatsApp ou pelo formulário da página de contato — a mensagem chega pronta para a nossa equipe, sem compromisso.' },
]

export function Faq({ items = FAQ_PADRAO, title = 'Perguntas frequentes', intro }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="faq">
      <div className="faq-intro reveal">
        <p className="eyebrow">Dúvidas</p>
        <h2 className="h3">{title}</h2>
        <p className="body">{intro || 'Não encontrou o que procurava? Fale com a nossa equipe — a resposta vem de gente, não de robô.'}</p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-azul" style={{ marginTop: 28 }}>
          Perguntar no WhatsApp <span className="arr">→</span>
        </a>
      </div>
      <div className="reveal">
        {items.map((it, i) => (
          <div key={it.q} className={`faq-row${open === i ? ' open' : ''}`}>
            <button type="button" className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)}>
              {it.q}<span className="chev" aria-hidden="true" />
            </button>
            <div className="faq-a"><div><p>{it.a}</p></div></div>
          </div>
        ))}
      </div>
    </div>
  )
}
