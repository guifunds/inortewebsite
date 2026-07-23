import { NavLink, Link } from 'react-router-dom'
import { WHATSAPP, PHONE_DISPLAY, PHONE_TEL } from '../lib/contact.js'

export function Arrow({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 34 34">
      <polygon points="17,2 24,28 17,21 10,28" fill="#004bff" />
    </svg>
  )
}

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <Arrow />
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span className="brand-name">INORTE</span>
          <span className="brand-sub">CONTABILIDADE E GESTÃO</span>
        </span>
      </Link>
      <nav>
        <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
        <NavLink to="/servicos" className={({ isActive }) => (isActive ? 'active' : '')}>Serviços</NavLink>
        <NavLink to="/sobre" className={({ isActive }) => (isActive ? 'active' : '')}>Sobre</NavLink>
        <NavLink to="/contato" className={({ isActive }) => (isActive ? 'active' : '')}>Contato</NavLink>
      </nav>
      <div className="right">

        <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn btn-blue sm">Fale conosco</a>
      </div>
    </header>
  )
}
