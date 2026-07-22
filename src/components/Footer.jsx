import { Link } from 'react-router-dom'
import { Arrow } from './Header.jsx'
import { WHATSAPP, PHONE_DISPLAY, EMAIL, ADDRESS } from '../lib/contact.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="cols">
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <Arrow size={30} />
            <span className="xp" style={{ fontWeight: 800, fontSize: 17, letterSpacing: '.04em' }}>INORTE</span>
          </div>
          <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: 'rgba(255,255,255,.6)', maxWidth: 340 }}>
            Contabilidade e gestão empresarial para negócios de todos os portes.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
          <span className="col-title">NAVEGAÇÃO</span>
          <Link to="/">Home</Link>
          <Link to="/servicos">Serviços</Link>
          <Link to="/sobre">Sobre</Link>
          <Link to="/contato">Contato</Link>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
          <span className="col-title">CONTATO</span>
          <a href={WHATSAPP} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`} style={{ wordBreak: 'break-all' }}>{EMAIL}</a>
          <span style={{ color: 'rgba(255,255,255,.6)', lineHeight: 1.5 }}>{ADDRESS[0]}<br />{ADDRESS[1]}</span>
        </div>
      </div>
      <div className="bottom">
        <span>© {new Date().getFullYear()} Inorte Contabilidade e Gestão Empresarial</span>
        <span>CNPJ 00.000.000/0001-00</span>
      </div>
    </footer>
  )
}
