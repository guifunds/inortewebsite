import { useState } from 'react'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { PageHero, Pill } from '../components/System.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP } from '../lib/contact.js'

const SERVICOS = [
  { num: '01', titulo: 'Abertura de empresas', desc: 'Da definição do tipo societário ao CNPJ ativo: cuidamos de todo o processo para sua empresa nascer regularizada e pronta para faturar.', itens: ['Registro e CNPJ', 'Enquadramento tributário', 'Alvarás e licenças', 'Contrato social'] },
  { num: '02', titulo: 'Contabilidade fiscal e tributária', desc: 'Escrituração, apuração de impostos e entrega de todas as obrigações acessórias — sua empresa sempre em conformidade com o Fisco.', itens: ['Apuração de impostos', 'Obrigações acessórias', 'Escrituração contábil', 'Balanços e DRE'] },
  { num: '03', titulo: 'Departamento pessoal e folha', desc: 'Gestão completa da rotina trabalhista: admissões, folha de pagamento, férias, rescisões e eSocial sem erros e sem atrasos.', itens: ['Folha de pagamento', 'Admissão e rescisão', 'eSocial e FGTS', 'Férias e 13º'] },
  { num: '04', titulo: 'Planejamento tributário', desc: 'Estudo detalhado do regime tributário ideal para o seu negócio, reduzindo a carga de impostos de forma legal e segura.', itens: ['Análise de regime', 'Simulações comparativas', 'Redução legal de carga', 'Revisão de tributos'] },
  { num: '05', titulo: 'Consultoria e gestão empresarial', desc: 'Indicadores, fluxo de caixa, precificação e apoio à tomada de decisão: contabilidade que participa da estratégia do negócio.', itens: ['Indicadores e relatórios', 'Fluxo de caixa', 'Precificação', 'Apoio à decisão'] },
  { num: '06', titulo: 'Médias e grandes empresas', desc: 'Contabilidade completa para operações de maior porte nos regimes de Lucro Presumido e Lucro Real: apurações complexas, SPED, múltiplas filiais e relatórios gerenciais para diretoria e sócios.', itens: ['Lucro Real e Presumido', 'SPED (ECD, ECF, EFD)', 'Múltiplas filiais', 'Apoio a auditorias'] },
  { num: '07', titulo: 'MEI e Simples Nacional', desc: 'Acompanhamento completo para pequenos negócios: declarações, guias, regularização e a hora certa de migrar de regime conforme a empresa cresce.', itens: ['DASN e guias', 'Regularização', 'Desenquadramento', 'Migração de regime'] },
]

export default function Servicos() {
  useReveal()
  const [open, setOpen] = useState(0)

  return (
    <>
      <Header />

      <PageHero
        eyebrow="Serviços"
        title="Tudo o que sua empresa precisa, em um só lugar."
        lead="Sete frentes integradas — do MEI à grande empresa, do primeiro CNPJ à estratégia tributária — conduzidas pela mesma equipe."
        aside={
          <div className="pills-row">
            {['MEI', 'Simples Nacional', 'Lucro Presumido', 'Lucro Real', 'eSocial', 'SPED'].map((r) => <Pill key={r}>{r}</Pill>)}
          </div>
        }
      />

      <section className="section">
        <div className="wrap faq">
          <div className="faq-intro reveal">
            <p className="eyebrow">Frentes de atuação</p>
            <h2 className="h3">Escolha uma frente para ver o que está incluso.</h2>
            <p className="body">Não sabe qual serviço precisa? Conte sua situação no WhatsApp e a nossa equipe indica o caminho certo — sem compromisso.</p>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-azul" style={{ marginTop: 28 }}>
              Falar no WhatsApp <span className="arr">→</span>
            </a>
          </div>
          <div className="reveal">
            {SERVICOS.map((s, i) => (
              <div key={s.num} className={`faq-row${open === i ? ' open' : ''}`}>
                <button type="button" className="faq-q" aria-expanded={open === i} onClick={() => setOpen(open === i ? -1 : i)} style={{ fontSize: 24, padding: '28px 0' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <span className="marker">{s.num}</span>{s.titulo}
                  </span>
                  <span className="chev" aria-hidden="true" />
                </button>
                <div className="faq-a">
                  <div>
                    <p>{s.desc}</p>
                    <div className="tags">{s.itens.map((it) => <span key={it} className="tag">{it}</span>)}</div>
                    <div className="faq-act">
                      <a href={WHATSAPP} target="_blank" rel="noreferrer" className="link">Solicitar este serviço <span className="arr">→</span></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer ctaTitle="Não sabe qual serviço precisa?" ctaText="Conte sua situação no WhatsApp e a nossa equipe indica o caminho certo — sem compromisso." />
      <WhatsAppFab />
    </>
  )
}
