import { useEffect, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Arrow } from './System.jsx'
import { WHATSAPP, PHONE_DISPLAY, PHONE_TEL } from '../lib/contact.js'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/servicos', label: 'Serviços' },
  { to: '/automacao', label: 'Automação', novo: true },
  { to: '/sobre', label: 'Sobre' },
  { to: '/contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => { setOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('menu-open', open)
    return () => { document.body.style.overflow = ''; document.body.classList.remove('menu-open') }
  }, [open])

  // Transparente sobre a faixa azul; vira barra branca flutuante ao rolar.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  const light = scrolled && !open

  return (
    <>
      <header className={`header${light ? ' scrolled' : ''}`}>
        <div className="header-bar">
          <Link to="/" className="brand" aria-label="Inorte — página inicial">
            <Arrow color={light ? '#0a5bd6' : '#ffffff'} />
            <span style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="brand-name">INORTE</span>
              <span className="brand-sub">CONTABILIDADE E GESTÃO</span>
            </span>
          </Link>
          <nav className="nav-links">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'active' : '')}>
                {l.label}{l.novo && <span className="badge-novo">Novo</span>}
              </NavLink>
            ))}
          </nav>
          <div className="nav-right">
            <a href={PHONE_TEL} className="nav-phone">{PHONE_DISPLAY}</a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn sm btn-cta">Fale conosco</a>
            <button
              type="button"
              className={`menu-toggle${open ? ' open' : ''}`}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${open ? ' open' : ''}`} aria-hidden={!open}>
        {LINKS.map((l, i) => (
          <Link key={l.to} to={l.to} className="mm-link" tabIndex={open ? 0 : -1}>
            <span className="mm-label">{l.label}{l.novo && <span className="badge-novo">Novo</span>}</span> <span>0{i + 1}</span>
          </Link>
        ))}
        <div className="mm-actions">
          <a href={WHATSAPP} target="_blank" rel="noreferrer" className="btn lg btn-white" tabIndex={open ? 0 : -1}>
            Fale conosco no WhatsApp →
          </a>
          <a href={PHONE_TEL} className="btn lg btn-ghost-white" tabIndex={open ? 0 : -1}>{PHONE_DISPLAY}</a>
        </div>
      </div>
    </>
  )
}
