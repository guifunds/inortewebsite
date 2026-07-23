import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP } from '../lib/contact.js'

const VALORES = [
  { num: '01', titulo: 'Rigor técnico', desc: 'Prazos cumpridos, obrigações em dia e zero surpresas com o Fisco. O básico bem feito, sempre.' },
  { num: '02', titulo: 'Visão de gestão', desc: 'Números traduzidos em decisões: relatórios que o dono da empresa entende e usa.' },
  { num: '03', titulo: 'Relação próxima', desc: 'Atendimento direto, por gente que conhece o seu negócio — não por protocolo.' },
]

export default function Sobre() {
  useReveal()
  return (
    <>
      <Header />

      <section style={{ padding: '200px 48px 88px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: -100, top: 80, opacity: 0.06, animation: 'spinSlow 90s linear infinite' }}>
          <svg width="520" height="520" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#004bff" strokeWidth=".6" />
            <polygon points="50,4 58,54 50,46 42,54" fill="#004bff" />
          </svg>
        </div>
        <p className="kicker fade-up">SOBRE A INORTE</p>
        <h1 className="xp fade-up d1" style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(44px, 6.4vw, 96px)', lineHeight: 1, letterSpacing: '-.02em', maxWidth: 1200 }}>
          A bússola financeira <span style={{ color: '#004bff' }}>do seu negócio.</span>
        </h1>
      </section>

      <section className="grid-2" style={{ padding: '0 48px 110px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'start' }}>
        <div className="reveal">
          <h2 className="xp" style={{ margin: '0 0 24px', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-.02em', lineHeight: 1.08 }}>
            Contabilidade que aponta a direção — não só registra o caminho.
          </h2>
        </div>
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: 18, fontSize: 17, lineHeight: 1.7, color: '#3c3c48' }}>
          <p style={{ margin: 0 }}>A Inorte Contabilidade e Gestão Empresarial nasceu de uma convicção: os números de uma empresa devem servir para decidir, não apenas para cumprir obrigações. Por isso unimos, desde o início, a técnica contábil ao olhar de gestão.</p>
          <p style={{ margin: 0 }}>Atendemos empresas de todos os portes — do MEI que está começando à média empresa em expansão — com processos digitais, prazos rigorosos e uma relação próxima e consultiva.</p>
          <p style={{ margin: 0 }}>Assim como a seta da rosa dos ventos que carrega nossa marca, nosso papel é simples de dizer e exigente de cumprir: manter sua empresa sempre apontada para o Norte.</p>
        </div>
      </section>

      <section style={{ background: '#0a0a14', color: '#fff', padding: '110px 48px' }}>
        <p className="kicker reveal" style={{ marginBottom: 56 }}>NOSSOS PRINCÍPIOS</p>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {VALORES.map((v) => (
            <div key={v.num} className="reveal" style={{ border: '1px solid rgba(255,255,255,.14)', borderRadius: 20, padding: 40, display: 'flex', flexDirection: 'column', gap: 60 }}>
              <span className="xp" style={{ fontWeight: 800, fontSize: 15, color: '#004bff' }}>{v.num}</span>
              <div>
                <h3 style={{ margin: '0 0 12px', fontSize: 23, fontWeight: 700, letterSpacing: '-.01em' }}>{v.titulo}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.6, color: 'rgba(255,255,255,.65)' }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="grid-2" style={{ padding: '110px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div className="reveal">
          <p className="kicker" style={{ marginBottom: 20 }}>QUEM CONDUZ</p>
          <h2 className="xp" style={{ margin: '0 0 22px', fontWeight: 800, fontSize: 'clamp(28px, 3vw, 44px)', letterSpacing: '-.02em', lineHeight: 1.08 }}>
            Uma equipe técnica, com atendimento de gente.
          </h2>
          <p style={{ margin: '0 0 34px', fontSize: 17, lineHeight: 1.7, color: '#3c3c48' }}>
            Você fala direto com quem cuida da sua contabilidade — sem robôs de atendimento e sem respostas genéricas. Cada cliente tem um responsável que conhece o negócio pelo nome.
          </p>
          <Link to="/contato" className="btn btn-outline" style={{ fontSize: 15, padding: '15px 32px' }}>Falar com a equipe</Link>
        </div>
        <div className="reveal">
          <img src="/images/escritorio.jpg" alt="Escritório da Inorte" style={{ width: '100%', height: 420, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
        </div>
      </section>

      <section style={{ padding: '0 48px 110px' }}>
        <p className="kicker reveal" style={{ marginBottom: 32 }}>NOSSO ESPAÇO</p>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          <img className="reveal" src="/images/recepcao.jpg" alt="Recepção" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <img className="reveal" src="/images/sala-reuniao.jpg" alt="Sala de reunião" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <img className="reveal" src="/images/estacoes.jpg" alt="Estações de trabalho" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <img className="reveal" src="/images/sala-reuniao-2.jpg" alt="Sala de reunião menor" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <img className="reveal" src="/images/corredor-quadros.jpg" alt="Corredor com quadros" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <img className="reveal" src="/images/arquivo.jpg" alt="Arquivo" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
          <img className="reveal" src="/images/copa.jpg" alt="Copa" style={{ width: '100%', height: 300, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
        </div>
      </section>

      <section className="reveal" style={{ margin: '0 48px 120px', background: '#004bff', borderRadius: 28, padding: '88px 64px', color: '#fff' }}>
        <h2 className="xp" style={{ margin: '0 0 18px', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 58px)', letterSpacing: '-.02em', lineHeight: 1.02 }}>
          Quer uma contabilidade que participa do negócio?
        </h2>
        <p style={{ margin: '0 0 36px', fontSize: 18, color: 'rgba(255,255,255,.85)', maxWidth: 520 }}>
          Conheça a Inorte de perto: chame a equipe no WhatsApp.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-white">Falar no WhatsApp →</a>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
