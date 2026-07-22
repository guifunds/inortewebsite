import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP } from '../lib/contact.js'

const SERVICOS = [
  { num: '01', titulo: 'Abertura de empresas', desc: 'CNPJ, enquadramento e licenças sem burocracia: sua empresa nasce pronta para operar.' },
  { num: '02', titulo: 'Fiscal e tributário', desc: 'Apuração de impostos, obrigações acessórias e conformidade fiscal em dia, sempre.' },
  { num: '03', titulo: 'Departamento pessoal', desc: 'Folha de pagamento, admissões, férias e eSocial com precisão e sem retrabalho.' },
  { num: '04', titulo: 'Planejamento tributário', desc: 'Análise do regime ideal para pagar somente o imposto necessário, dentro da lei.' },
  { num: '05', titulo: 'Consultoria e gestão', desc: 'Indicadores, fluxo de caixa e apoio à decisão para crescer com segurança.' },
  { num: '06', titulo: 'MEI e Simples Nacional', desc: 'Regularização, declarações e acompanhamento completo para pequenos negócios.' },
]

const NUMEROS = [
  { prefixo: '+', valor: '10', rotulo: 'anos de experiência da equipe em contabilidade e gestão' },
  { prefixo: '', valor: '6', rotulo: 'frentes de atuação integradas em um só parceiro' },
  { prefixo: '', valor: '48h', rotulo: 'prazo médio de resposta para demandas dos clientes' },
  { prefixo: '', valor: '100%', rotulo: 'digital no atendimento, humano na relação' },
]

export default function Home() {
  useReveal()
  return (
    <>
      <Header />

      {/* Hero imersivo */}
      <section style={{ minHeight: '100vh', background: '#004bff', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '160px 48px 80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 80% 20%, rgba(255,255,255,.12), transparent 55%)' }} />
        <p className="fade-up" style={{ margin: '0 0 28px', fontSize: 14, fontWeight: 700, letterSpacing: '.28em', color: 'rgba(255,255,255,.75)', position: 'relative' }}>
          INORTE — CONTABILIDADE E GESTÃO EMPRESARIAL
        </p>
        <h1 className="xp fade-up d1" style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(52px, 8vw, 124px)', lineHeight: 0.98, letterSpacing: '-.02em', maxWidth: 1300, position: 'relative' }}>
          Números claros.<br />Decisões seguras.
        </h1>
        <div className="fade-up d2" style={{ display: 'flex', alignItems: 'center', gap: 24, marginTop: 52, position: 'relative', flexWrap: 'wrap' }}>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-white">Falar no WhatsApp →</a>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.5, color: 'rgba(255,255,255,.85)', maxWidth: 440 }}>
            Contabilidade consultiva para empresas de todos os portes, do MEI à média empresa.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section style={{ padding: '120px 48px' }}>
        <div className="reveal" style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 64, flexWrap: 'wrap' }}>
          <h2 className="xp" style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(36px, 4.4vw, 64px)', letterSpacing: '-.02em', lineHeight: 1.02 }}>
            O que fazemos<br />pela sua empresa
          </h2>
          <Link to="/servicos" style={{ fontWeight: 700, fontSize: 16, whiteSpace: 'nowrap', paddingBottom: 8, borderBottom: '2px solid #004bff' }}>
            Ver todos os serviços →
          </Link>
        </div>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {SERVICOS.map((s) => (
            <Link key={s.num} to="/servicos" className="card reveal">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="xp" style={{ fontWeight: 700, fontSize: 14, color: '#004bff' }}>{s.num}</span>
                <span style={{ fontSize: 20, color: '#004bff' }}>↗</span>
              </div>
              <div>
                <h3 style={{ margin: '0 0 10px', fontSize: 21, fontWeight: 700, letterSpacing: '-.01em' }}>{s.titulo}</h3>
                <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55, color: '#5a5a68' }}>{s.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Números */}
      <section style={{ background: '#0a0a14', color: '#fff', padding: '110px 48px' }}>
        <p className="kicker reveal" style={{ marginBottom: 56 }}>POR QUE A INORTE</p>
        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 48 }}>
          {NUMEROS.map((n) => (
            <div key={n.rotulo} className="reveal" style={{ borderTop: '1px solid rgba(255,255,255,.18)', paddingTop: 28 }}>
              <div className="xp" style={{ fontWeight: 800, fontSize: 'clamp(40px, 4.4vw, 64px)', lineHeight: 1 }}>
                <span style={{ color: '#004bff' }}>{n.prefixo}</span>{n.valor}
              </div>
              <div style={{ marginTop: 14, fontSize: 15, lineHeight: 1.5, color: 'rgba(255,255,255,.65)' }}>{n.rotulo}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Sobre teaser */}
      <section className="grid-2" style={{ padding: '120px 48px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center' }}>
        <div className="reveal">
          <img src="/images/recepcao.jpg" alt="Recepção do escritório da Inorte" style={{ width: '100%', height: 440, objectFit: 'cover', borderRadius: 20, display: 'block' }} />
        </div>
        <div className="reveal">
          <p className="kicker" style={{ marginBottom: 20 }}>SOBRE A INORTE</p>
          <h2 className="xp" style={{ margin: '0 0 24px', fontWeight: 800, fontSize: 'clamp(32px, 3.4vw, 50px)', letterSpacing: '-.02em', lineHeight: 1.05 }}>
            Mais que contabilidade: direção para decidir.
          </h2>
          <p style={{ margin: '0 0 16px', fontSize: 17, lineHeight: 1.65, color: '#3c3c48' }}>
            A Inorte nasceu para ser a bússola financeira das empresas que atende. Unimos rigor técnico contábil e visão de gestão para transformar obrigações fiscais em informação estratégica.
          </p>
          <p style={{ margin: '0 0 36px', fontSize: 17, lineHeight: 1.65, color: '#3c3c48' }}>
            Atendemos de MEIs a médias empresas com o mesmo compromisso: números em dia, riscos sob controle e um caminho claro de crescimento.
          </p>
          <Link to="/sobre" className="btn btn-outline" style={{ fontSize: 15, padding: '15px 32px' }}>Conheça a empresa</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="reveal" style={{ margin: '0 48px 120px', background: '#004bff', borderRadius: 28, padding: '96px 64px', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: 40, top: '50%', transform: 'translateY(-50%)', opacity: 0.14, animation: 'spinSlow 70s linear infinite' }}>
          <svg width="360" height="360" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="48" fill="none" stroke="#fff" strokeWidth=".7" />
            <polygon points="50,4 58,54 50,46 42,54" fill="#fff" />
          </svg>
        </div>
        <h2 className="xp" style={{ margin: '0 0 20px', fontWeight: 800, fontSize: 'clamp(36px, 4.6vw, 68px)', letterSpacing: '-.02em', lineHeight: 1, position: 'relative' }}>
          Vamos colocar sua<br />empresa no rumo certo?
        </h2>
        <p style={{ margin: '0 0 40px', fontSize: 19, color: 'rgba(255,255,255,.85)', maxWidth: 520, position: 'relative' }}>
          Fale agora com a nossa equipe e receba uma avaliação da situação contábil da sua empresa.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-white" style={{ position: 'relative' }}>Chamar no WhatsApp →</a>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
