import { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { Pill, Faq } from '../components/System.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP } from '../lib/contact.js'

const SERVICOS = [
  { num: '01', titulo: 'Abertura de empresas', desc: 'CNPJ, enquadramento e licenças sem burocracia: sua empresa nasce pronta para operar.' },
  { num: '02', titulo: 'Fiscal e tributário', desc: 'Apuração de impostos, obrigações acessórias e conformidade fiscal em dia, sempre.' },
  { num: '03', titulo: 'Departamento pessoal', desc: 'Folha de pagamento, admissões, férias e eSocial com precisão e sem retrabalho.' },
  { num: '04', titulo: 'Planejamento tributário', desc: 'Análise do regime ideal para pagar somente o imposto necessário, dentro da lei.' },
  { num: '05', titulo: 'Consultoria e gestão', desc: 'Indicadores, fluxo de caixa e apoio à decisão para crescer com segurança.' },
  { num: '06', titulo: 'MEI e Simples Nacional', desc: 'Regularização, declarações e acompanhamento completo para pequenos negócios. Atendemos também médias e grandes empresas em Lucro Presumido e Lucro Real.' },
]

const ETAPAS = [
  {
    titulo: 'Diagnóstico',
    desc: 'Entendemos o momento da empresa, o regime atual e as pendências — e mostramos o que pode melhorar.',
    plano: 'O que olhamos primeiro',
    itens: ['Regime tributário atual', 'Pendências fiscais e trabalhistas', 'Rotina de documentos', 'Oportunidades de melhoria'],
  },
  {
    titulo: 'Implantação',
    desc: 'Organizamos documentos, acessos e rotinas para a transição acontecer sem travar a operação.',
    plano: 'Como fazemos a transição',
    itens: ['Transferência de documentos', 'Acessos e certificados', 'Calendário de obrigações', 'Responsável definido'],
  },
  {
    titulo: 'Acompanhamento',
    desc: 'Obrigações em dia, números traduzidos em relatórios e um responsável que conhece o seu negócio.',
    plano: 'O que acontece todo mês',
    itens: ['Impostos apurados e guias enviadas', 'Folha e eSocial processados', 'Relatórios que o dono entende', 'Resposta média em 48h'],
  },
]

const NUMEROS = [
  { valor: '+25', rotulo: 'anos de experiência da equipe em contabilidade e gestão' },
  { valor: '6', rotulo: 'frentes de atuação integradas em um só parceiro' },
  { valor: '48h', rotulo: 'prazo médio de resposta para demandas dos clientes' },
  { valor: '100%', rotulo: 'digital no atendimento, humano na relação' },
]

function Processo() {
  const [ativo, setAtivo] = useState(0)
  const etapa = ETAPAS[ativo]
  return (
    <section className="band process on-blue">
      <div className="wrap">
        <div className="process-panel reveal">
          <div>
            <p className="eyebrow">Como começamos</p>
            <h2 className="h2">Uma transição sem atrito, em três etapas.</h2>
            <ul className="steps">
              {ETAPAS.map((e, i) => (
                <li key={e.titulo}>
                  <button type="button" className={`step-btn${ativo === i ? ' on' : ''}`} onClick={() => setAtivo(i)} aria-pressed={ativo === i}>
                    <span className="num">{i + 1}</span>
                    <span>
                      <span className="t" style={{ display: 'block' }}>{e.titulo}</span>
                      <span className="d" style={{ display: 'block' }}>{e.desc}</span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="plan-card">
            <div className="pair" aria-hidden="true">
              <span className="av inorte"><i>IN</i>Equipe Inorte</span>
              <span className="wave">{[10, 18, 24, 14, 20, 8, 16].map((h, i) => <b key={i} style={{ height: h, animationDelay: `${i * 0.12}s` }} />)}</span>
              <span className="av cliente"><i>SE</i>Sua empresa</span>
            </div>
            <div key={ativo} className="plan-fade">
              <p className="eyebrow" style={{ color: 'rgba(255,255,255,.75)', marginBottom: 8 }}>Etapa {ativo + 1} de 3</p>
              <h3 className="h4">{etapa.plano}</h3>
              {etapa.itens.map((it) => <div key={it} className="plan-row">{it}</div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  useReveal()
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="band hero on-blue" data-hero>
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow fade-up">Inorte — Contabilidade e Gestão Empresarial</p>
            <h1 className="display fade-up d1">Números claros.<br />Decisões seguras.</h1>
            <p className="lead fade-up d2">
              Contabilidade consultiva para empresas de todos os portes, do MEI à média empresa.
            </p>
            <div className="actions fade-up d3">
              <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn lg btn-white">Falar no WhatsApp <span className="arr">→</span></a>
              <Link to="/servicos" className="btn lg btn-ghost-white">Ver serviços</Link>
            </div>
          </div>
          <div className="photo fade-up d2">
            <img src="/images/recepcao.jpg" alt="Recepção do escritório da Inorte" />
            <div className="pill-top float-in d1"><Pill solid>Atendimento 100% online</Pill></div>
            <div className="pills">
              <span className="float-in d2"><Pill>Obrigações do mês em dia</Pill></span>
              <span className="float-in d3"><Pill>Folha processada</Pill></span>
              <span className="float-in d4"><Pill>Resposta média em 48h</Pill></span>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="section">
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Serviços</p>
            <h2 className="h2">O que fazemos pela sua empresa</h2>
            <p className="body">Seis frentes integradas, conduzidas pela mesma equipe — do primeiro CNPJ à estratégia tributária.</p>
          </div>
          <div className="grid-3">
            {SERVICOS.map((s) => (
              <Link key={s.num} to="/servicos" className="card svc reveal">
                <div className="top">
                  <span className="marker">{s.num}</span>
                  <span className="go">↗</span>
                </div>
                <div>
                  <h3 className="h4">{s.titulo}</h3>
                  <p>{s.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ marginTop: 32 }} className="reveal">
            <Link to="/servicos" className="link">Ver todos os serviços <span className="arr">→</span></Link>
          </div>
        </div>
      </section>

      <Processo />

      {/* Pausa: por que a Inorte */}
      <section className="section">
        <div className="wrap">
          <div className="statement reveal">
            <div>
              <p className="eyebrow">Por que a Inorte</p>
              <h2 className="h3">Mais que contabilidade: direção para decidir.</h2>
            </div>
            <div>
              <p className="body">
                A Inorte nasceu para ser a bússola financeira das empresas que atende. Unimos rigor técnico contábil e visão de gestão para transformar obrigações fiscais em informação estratégica.
              </p>
              <p className="body">
                Atendemos de MEIs a médias empresas com o mesmo compromisso: números em dia, riscos sob controle e um caminho claro de crescimento.
              </p>
              <Link to="/sobre" className="link" style={{ marginTop: 8 }}>Conheça a empresa <span className="arr">→</span></Link>
            </div>
          </div>
          <div className="stats">
            {NUMEROS.map((n) => (
              <div key={n.valor} className="card reveal">
                <div className="stat">{n.valor}</div>
                <p>{n.rotulo}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe + foto */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap feature">
          <div className="photo reveal">
            <img src="/images/sala-reuniao.jpg" alt="Sala de reunião da Inorte" />
            <div className="pills"><Pill>Atendimento com hora marcada</Pill></div>
          </div>
          <div className="reveal">
            <p className="eyebrow">Quem conduz</p>
            <h2 className="h2">Gente que conhece o seu negócio pelo nome.</h2>
            <p className="body">
              Você fala direto com quem cuida da sua contabilidade — sem robôs de atendimento e sem respostas genéricas. Cada cliente tem um responsável dedicado.
            </p>
            <div className="actions">
              <Link to="/contato" className="btn btn-azul">Falar com a equipe <span className="arr">→</span></Link>
              <Link to="/sobre" className="btn btn-ghost">Nosso espaço</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap"><Faq /></div>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
