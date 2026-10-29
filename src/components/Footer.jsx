import { Link } from 'react-router-dom'
import { Arrow } from './System.jsx'
import { WHATSAPP, PHONE_DISPLAY, PHONE_TEL, EMAIL, ADDRESS } from '../lib/contact.js'

export default function Footer({ ctaTitle = 'Vamos colocar sua empresa no rumo certo?', ctaText = 'Fale agora com a nossa equipe e receba uma avaliação da situação contábil da sua empresa.' }) {
  return (
    <footer className="band footer on-blue">
      <div className="wrap">
        <div className="footer-cta reveal">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2 className="h2" style={{ marginTop: 16 }}>{ctaTitle}</h2>
            <p className="lead">{ctaText}</p>
          </div>
          <div className="actions">
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn lg btn-white">Chamar no WhatsApp <span className="arr">→</span></a>
            <Link to="/contato" className="btn lg btn-ghost-white">Pedir orçamento</Link>
          </div>
        </div>

        <div className="footer-cols">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <Arrow size={26} />
              <span className="brand-name">INORTE</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,.8)', lineHeight: 1.6, maxWidth: 300 }}>
              Contabilidade e gestão empresarial para negócios de todos os portes.
            </p>
          </div>
          <div>
            <span className="k">Navegação</span>
            <Link to="/">Home</Link>
            <Link to="/servicos">Serviços</Link>
            <Link to="/automacao">Automação com IA</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contato">Contato</Link>
          </div>
          <div>
            <span className="k">Fale com a gente</span>
            <a href={WHATSAPP} target="_blank" rel="noreferrer">WhatsApp</a>
            <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
            <a href={`mailto:${EMAIL}`} style={{ overflowWrap: 'anywhere' }}>E-mail</a>
          </div>
          <div>
            <span className="k">Escritório</span>
            <span className="v">{ADDRESS[0]}</span>
            <span className="v">{ADDRESS[1]}</span>
            <span className="v" style={{ marginTop: 8, color: 'rgba(255,255,255,.75)' }}>Segunda a sexta, 8h às 18h</span>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Inorte Contabilidade e Gestão Empresarial</span>
          <span>Atendimento 100% online para todo o Brasil</span>
        </div>
      </div>
    </footer>
  )
}
