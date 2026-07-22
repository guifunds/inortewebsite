import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'
import WhatsAppFab from '../components/WhatsAppFab.jsx'
import { useReveal } from '../lib/useReveal.js'
import { WHATSAPP } from '../lib/contact.js'

const SERVICOS = [
  { num: '01', titulo: 'Abertura de empresas', desc: 'Da definição do tipo societário ao CNPJ ativo: cuidamos de todo o processo para sua empresa nascer regularizada e pronta para faturar.', itens: ['Registro e CNPJ', 'Enquadramento tributário', 'Alvarás e licenças', 'Contrato social'] },
  { num: '02', titulo: 'Contabilidade fiscal e tributária', desc: 'Escrituração, apuração de impostos e entrega de todas as obrigações acessórias — sua empresa sempre em conformidade com o Fisco.', itens: ['Apuração de impostos', 'Obrigações acessórias', 'Escrituração contábil', 'Balanços e DRE'] },
  { num: '03', titulo: 'Departamento pessoal e folha', desc: 'Gestão completa da rotina trabalhista: admissões, folha de pagamento, férias, rescisões e eSocial sem erros e sem atrasos.', itens: ['Folha de pagamento', 'Admissão e rescisão', 'eSocial e FGTS', 'Férias e 13º'] },
  { num: '04', titulo: 'Planejamento tributário', desc: 'Estudo detalhado do regime tributário ideal para o seu negócio, reduzindo a carga de impostos de forma legal e segura.', itens: ['Análise de regime', 'Simulações comparativas', 'Redução legal de carga', 'Revisão de tributos'] },
  { num: '05', titulo: 'Consultoria e gestão empresarial', desc: 'Indicadores, fluxo de caixa, precificação e apoio à tomada de decisão: contabilidade que participa da estratégia do negócio.', itens: ['Indicadores e relatórios', 'Fluxo de caixa', 'Precificação', 'Apoio à decisão'] },
  { num: '06', titulo: 'MEI e Simples Nacional', desc: 'Acompanhamento completo para pequenos negócios: declarações, guias, regularização e a hora certa de migrar de regime.', itens: ['DASN e guias', 'Regularização', 'Desenquadramento', 'Migração de regime'] },
]

export default function Servicos() {
  useReveal()
  return (
    <>
      <Header />

      <section style={{ padding: '200px 48px 88px' }}>
        <p className="kicker fade-up">SERVIÇOS</p>
        <h1 className="xp fade-up d1" style={{ margin: 0, fontWeight: 800, fontSize: 'clamp(44px, 6.4vw, 96px)', lineHeight: 1, letterSpacing: '-.02em', maxWidth: 1100 }}>
          Tudo o que sua empresa precisa, <span style={{ color: '#004bff' }}>em um só lugar.</span>
        </h1>
      </section>

      <section style={{ padding: '0 48px 100px', display: 'flex', flexDirection: 'column' }}>
        {SERVICOS.map((s) => (
          <div key={s.num} className="reveal" style={{ display: 'grid', gridTemplateColumns: '120px 1.1fr 1.6fr auto', gap: 40, alignItems: 'center', padding: '44px 0', borderTop: '1px solid rgba(10,10,20,.1)' }}>
            <span className="xp" style={{ fontWeight: 800, fontSize: 44, color: '#004bff' }}>{s.num}</span>
            <h2 style={{ margin: 0, fontSize: 'clamp(22px, 2vw, 30px)', fontWeight: 700, letterSpacing: '-.01em', lineHeight: 1.15 }}>{s.titulo}</h2>
            <div>
              <p style={{ margin: '0 0 14px', fontSize: 16, lineHeight: 1.6, color: '#3c3c48' }}>{s.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {s.itens.map((i) => <span key={i} className="tag">{i}</span>)}
              </div>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-outline sm" style={{ whiteSpace: 'nowrap' }}>Solicitar →</a>
          </div>
        ))}
      </section>

      <section className="reveal" style={{ margin: '0 48px 120px', background: '#0a0a14', borderRadius: 28, padding: '88px 64px', color: '#fff' }}>
        <h2 className="xp" style={{ margin: '0 0 18px', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 58px)', letterSpacing: '-.02em', lineHeight: 1.02 }}>
          Não sabe qual serviço precisa?
        </h2>
        <p style={{ margin: '0 0 36px', fontSize: 18, color: 'rgba(255,255,255,.7)', maxWidth: 520 }}>
          Conte sua situação no WhatsApp e a nossa equipe indica o caminho certo — sem compromisso.
        </p>
        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-blue">Falar no WhatsApp →</a>
      </section>

      <Footer />
      <WhatsAppFab />
    </>
  )
}
