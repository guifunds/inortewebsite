import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { PageHero, Pill, Faq } from '../components/System.jsx'
import { useReveal } from '../lib/useReveal.js'

const FRENTES = [
  { num: '01', titulo: 'Atendimento e vendas', desc: 'Assistentes de IA no WhatsApp, no Instagram e no site que respondem clientes, qualificam contatos, agendam horários e passam para a sua equipe na hora certa.' },
  { num: '02', titulo: 'Operação do dia a dia', desc: 'Pedidos, cadastros, agendamentos, cobranças e follow-ups que hoje dependem de alguém lembrar — rodando sozinhos, todos os dias.' },
  { num: '03', titulo: 'Documentos e dados', desc: 'Contratos, formulários, planilhas e e-mails lidos e organizados por IA, sem digitação manual nem informação perdida.' },
  { num: '04', titulo: 'Relatórios e indicadores', desc: 'Os números que importam para o seu negócio — vendas, estoque, produtividade, atendimento — atualizados automaticamente.' },
  { num: '05', titulo: 'Integração entre sistemas', desc: 'Loja virtual, CRM, ERP, agenda e planilhas conversando entre si, sem copiar e colar dados de um lado para o outro.' },
  { num: '06', titulo: 'Agentes de IA sob medida', desc: 'Soluções desenhadas para o processo único da sua empresa, seja ela uma clínica, uma loja, uma indústria ou uma prestadora de serviços.' },
]

const ETAPAS = [
  {
    titulo: 'Mapeamento',
    desc: 'Conversamos com a sua equipe para entender como o seu negócio funciona e encontrar as tarefas repetitivas que mais consomem tempo.',
    plano: 'O que levantamos',
    itens: ['Como o negócio opera hoje', 'Tarefas manuais e repetitivas', 'Sistemas e ferramentas usados', 'Onde a IA traz mais retorno'],
  },
  {
    titulo: 'Piloto',
    desc: 'Começamos por um processo de alto impacto e colocamos a automação para rodar em pequena escala, com acompanhamento de perto.',
    plano: 'Como validamos',
    itens: ['Um processo prioritário', 'Automação em ambiente real', 'Medição de tempo e erros', 'Ajustes com a sua equipe'],
  },
  {
    titulo: 'Expansão',
    desc: 'Com o piloto aprovado, ampliamos para outras áreas e mantemos tudo monitorado e documentado.',
    plano: 'O que acontece depois',
    itens: ['Novas rotinas automatizadas', 'Treinamento da equipe', 'Monitoramento contínuo', 'Suporte de quem conhece o negócio'],
  },
]

const FAQ_AUTOMACAO = [
  { q: 'A automação é só para a parte contábil?', a: 'Não. Automatizamos os processos do seu negócio, seja qual for o ramo: atendimento, vendas, operação, agendamentos, relatórios. A contabilidade é só uma das áreas possíveis.' },
  { q: 'Preciso ser cliente de contabilidade da Inorte?', a: 'Não. A consultoria de automação é um serviço independente, aberto a qualquer empresa. Para quem já é cliente, conhecer o negócio de perto ajuda a começar mais rápido.' },
  { q: 'Minha empresa é pequena. Automação faz sentido?', a: 'Faz. Muitas vezes é justamente no pequeno negócio que poucas horas economizadas por semana fazem mais diferença. O mapeamento mostra o que vale a pena antes de qualquer investimento.' },
  { q: 'A IA vai substituir minha equipe?', a: 'A ideia é tirar da equipe o trabalho repetitivo, não as pessoas. A automação cuida do volume; sua equipe fica com as decisões e o relacionamento com clientes.' },
  { q: 'E a segurança dos dados da empresa?', a: 'Trabalhamos com acesso mínimo necessário, ferramentas reconhecidas no mercado e em conformidade com a LGPD. Cada automação é documentada e você sabe exatamente o que ela faz.' },
  { q: 'Como começo?', a: 'Chame a nossa equipe no WhatsApp e agende uma conversa de diagnóstico. Saímos dela com uma lista das rotinas que podem ser automatizadas primeiro.' },
]

function Metodo() {
  const [ativo, setAtivo] = useState(0)
  const etapa = ETAPAS[ativo]
  return (
    <section className="band process on-blue">
      <div className="wrap">
        <div className="process-panel reveal">
          <div>
            <p className="eyebrow">Como trabalhamos</p>
            <h2 className="h2">Do primeiro processo à empresa automatizada.</h2>
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
              <span className="av inorte"><i>IA</i>Automação</span>
              <span className="wave">{[10, 18, 24, 14, 20, 8, 16].map((h, i) => <b key={i} style={{ height: h, animationDelay: `${i * 0.12}s` }} />)}</span>
              <span className="av cliente"><i>SE</i>Sua equipe</span>
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

export default function Automacao() {
  useReveal()
  return (
    <>
      <Header />

      <PageHero
        eyebrow="Novo · Automação com IA"
        title="Menos tarefa repetitiva, mais tempo para o negócio."
        lead="A Inorte agora também leva automação e inteligência artificial para dentro do seu negócio — do atendimento às vendas e à operação, seja qual for o seu ramo."
        aside={
          <div className="pills-row">
            {['Inteligência artificial', 'Atendimento', 'Vendas', 'Operação', 'Integrações', 'Agentes de IA'].map((r) => <Pill key={r}>{r}</Pill>)}
          </div>
        }
      />

      <section className="section">
        <div className="wrap">
          <div className="statement reveal">
            <div>
              <p className="eyebrow">Um novo começo</p>
              <h2 className="h3">A mesma bússola, agora apontada também para a tecnologia.</h2>
            </div>
            <div>
              <p className="body">Por anos acompanhamos de perto empresas de todos os portes e ramos — e vimos quanto tempo se perde com mensagens respondidas uma a uma, dados copiados entre sistemas e tarefas que dependem de alguém lembrar.</p>
              <p className="body">Por isso a Inorte inicia sua frente de consultoria em automação com IA, voltada para o negócio de cada cliente: mapeamos como a sua empresa funciona, identificamos o que pode rodar sozinho e implantamos soluções que funcionam no dia a dia.</p>
              <p className="body" style={{ marginBottom: 0 }}>Sem promessas mágicas e sem tecnologia pela tecnologia: automação com objetivo claro, medida em horas economizadas e erros evitados.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head reveal">
            <p className="eyebrow">O que automatizamos</p>
            <h2 className="h2">Seis frentes para colocar a IA para trabalhar.</h2>
          </div>
          <div className="grid-3">
            {FRENTES.map((f, i) => (
              <div key={f.num} className={`card svc reveal${i === 0 ? ' dark' : ''}`}>
                <span className="marker" style={i === 0 ? { background: 'var(--azul)', color: '#fff' } : undefined}>{f.num}</span>
                <div>
                  <h3 className="h4">{f.titulo}</h3>
                  <p style={i === 0 ? { color: 'rgba(255,255,255,.72)' } : undefined}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Metodo />

      <section className="section">
        <div className="wrap">
          <Faq
            items={FAQ_AUTOMACAO}
            title="Dúvidas sobre automação com IA"
            intro="Ainda avaliando se faz sentido para a sua empresa? Conte como é a sua rotina e a nossa equipe mostra por onde começar."
          />
        </div>
      </section>

      <Footer ctaTitle="Quer descobrir o que pode ser automatizado na sua empresa?" ctaText="Agende uma conversa de diagnóstico com a nossa equipe — sem compromisso." />
      <WhatsAppFab />
    </>
  )
}
