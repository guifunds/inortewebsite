import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { PageHero, Pill } from '../components/System.jsx'
import { useReveal } from '../lib/useReveal.js'

const VALORES = [
  { num: '01', titulo: 'Rigor técnico', desc: 'Prazos cumpridos, obrigações em dia e zero surpresas com o Fisco. O básico bem feito, sempre.' },
  { num: '02', titulo: 'Visão de gestão', desc: 'Números traduzidos em decisões: relatórios que o dono da empresa entende e usa.' },
  { num: '03', titulo: 'Relação próxima', desc: 'Atendimento direto, por gente que conhece o seu negócio — não por protocolo.' },
]

const FOTOS = [
  { src: '/images/recepcao.jpg', alt: 'Recepção', cls: 'big' },
  { src: '/images/sala-reuniao.jpg', alt: 'Sala de reunião', cls: '' },
  { src: '/images/corredor-quadros.jpg', alt: 'Corredor com quadros', cls: '' },
  { src: '/images/sala-reuniao-2.jpg', alt: 'Sala de reunião menor', cls: '' },
  { src: '/images/estacoes.jpg', alt: 'Estações de trabalho', cls: '' },
  { src: '/images/arquivo.jpg', alt: 'Arquivo', cls: 'wide' },
  { src: '/images/copa.jpg', alt: 'Copa', cls: 'wide' },
]

export default function Sobre() {
  useReveal()
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Sobre a Inorte"
        title="A bússola financeira do seu negócio."
        aside={
          <div className="photo" style={{ aspectRatio: '4 / 3' }}>
            <img src="/images/empresarial.jpeg" alt="Prédio do escritório da Inorte" />
            <div className="pills"><Pill>Av. Santos Dumont · Jardim dos Pássaros</Pill></div>
          </div>
        }
      />

      <section className="section">
        <div className="wrap">
          <div className="statement reveal">
            <div>
              <p className="eyebrow">Nossa história</p>
              <h2 className="h3">Contabilidade que aponta a direção — não só registra o caminho.</h2>
            </div>
            <div>
              <p className="body">A Inorte Contabilidade e Gestão Empresarial nasceu de uma convicção: os números de uma empresa devem servir para decidir, não apenas para cumprir obrigações. Por isso unimos, desde o início, a técnica contábil ao olhar de gestão.</p>
              <p className="body">Atendemos empresas de todos os portes — do MEI que está começando às médias e grandes empresas — com processos digitais, prazos rigorosos e uma relação próxima e consultiva.</p>
              <p className="body" style={{ marginBottom: 0 }}>Assim como a seta da rosa dos ventos que carrega nossa marca, nosso papel é simples de dizer e exigente de cumprir: manter sua empresa sempre apontada para o Norte.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Nossos princípios</p>
            <h2 className="h2">Três compromissos que guiam cada entrega.</h2>
          </div>
          <div className="grid-3">
            {VALORES.map((v, i) => (
              <div key={v.num} className={`card svc reveal${i === 0 ? ' dark' : ''}`}>
                <span className="marker" style={i === 0 ? { background: 'var(--azul)', color: '#fff' } : undefined}>{v.num}</span>
                <div>
                  <h3 className="h4">{v.titulo}</h3>
                  <p style={i === 0 ? { color: 'rgba(255,255,255,.72)' } : undefined}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap feature">
          <div className="reveal">
            <p className="eyebrow">Quem conduz</p>
            <h2 className="h2">Uma equipe técnica, com atendimento de gente.</h2>
            <p className="body">
              Você fala direto com quem cuida da sua contabilidade — sem robôs de atendimento e sem respostas genéricas. Cada cliente tem um responsável que conhece o negócio pelo nome.
            </p>
            <div className="actions">
              <Link to="/contato" className="btn btn-azul">Falar com a equipe <span className="arr">→</span></Link>
            </div>
          </div>
          <div className="photo reveal">
            <img src="/images/estacoes.jpg" alt="Estações de trabalho da equipe Inorte" />
            <div className="pills"><Pill>Um responsável por cliente</Pill></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">Nosso espaço</p>
            <h2 className="h2">Onde a sua contabilidade acontece.</h2>
          </div>
          <div className="gallery reveal">
            {FOTOS.map((f) => (
              <figure key={f.src} className={f.cls}>
                <img src={f.src} alt={f.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <Footer ctaTitle="Quer uma contabilidade que participa do negócio?" ctaText="Conheça a Inorte de perto: chame a equipe no WhatsApp." />
      <WhatsAppFab />
    </>
  )
}
