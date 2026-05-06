// chrome.jsx — Nav, Footer, USP strip, CTA banner, Logo, Icons
// shared across all De Haar pages

const Icon = ({ name, size = 20, ...rest }) => {
  const paths = {
    arrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    arrowUpRight: <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    arrowLeft: <><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
    mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><polyline points="22 6 12 13 2 6"/></>,
    pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    clock: <><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></>,
    close: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    check: <polyline points="20 6 9 17 4 12"/>,
    chevronRight: <polyline points="9 18 15 12 9 6"/>,
    chevronLeft: <polyline points="15 18 9 12 15 6"/>,
    menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    plus: <><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></>,
    award: <><circle cx="12" cy="8" r="6"/><polyline points="8.21 13.89 7 22 12 19 17 22 15.79 13.88"/></>,
    handshake: <path d="m11 17 2 2a1 1 0 1 0 1.4-1.4l-2-2 .7-.7a1.4 1.4 0 0 1 2 0l1.6 1.6a1.4 1.4 0 0 1 0 2L13 21a3 3 0 0 1-4.2 0l-2-2a3 3 0 0 1 0-4.2l4-4a3 3 0 0 1 4.2 0l1.6 1.6a1.4 1.4 0 0 1 0 2L15 16"/>,
    leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/></>,
    sparkles: <><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/></>,
    euro: <><path d="M4 10h12"/><path d="M4 14h9"/><path d="M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.7 5.2-2"/></>,
    chefHat: <><path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"/><line x1="6" y1="17" x2="18" y2="17"/></>,
    pencilRuler: <><path d="M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13"/><path d="m8 6 2-2"/><path d="m18 16 2-2"/><path d="m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></>,
    truck: <><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></>,
    home: <><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></>,
    layers: <><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></>,
    facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    instagram: <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...rest}>
      {paths[name]}
    </svg>
  );
};

// Inline logo from the De Haar SVG, with controllable colors
const Logo = ({ light = false, height = 56, retro = false }) => {
  // In retro mode all surfaces are white, so a "light" (white-on-dark) logo
  // would disappear. Force the dark variant.
  const onLight = light && !retro;
  // The plate is the rectangular backdrop the H letter sits in — it should
  // match the surrounding surface so it visually disappears. On dark surfaces
  // that's --ink; on light surfaces that's --cream (the page bg, which is
  // also white in retro). Hardcoded white doesn't blend with the cream nav.
  const accent = onLight ? '#FFFFFF' : 'var(--ink)';
  const plate  = onLight ? 'var(--ink)' : 'var(--cream)';
  const fill   = onLight ? '#FFFFFF' : 'var(--ink)';
  const brass  = 'var(--brass)';
  return (
    <svg height={height} viewBox="0 0 354.4 148.5" xmlns="http://www.w3.org/2000/svg" aria-label="De Haar Keukens">
      {/* DH mark */}
      <path d="M58.6,43c0-17.2-10-26.1-26.8-26.1h-8.9V69h8.9C49,69,58.6,60.1,58.6,43z" fill={plate}/>
      <path d="M76.2,17.5V0H36.5C54.5,0.7,68.7,5.4,76.2,17.5z" fill={plate}/>
      <rect x="99.2" width="27.2" height="33" fill={plate}/>
      <path d="M126.4,49.3H99.2v36.9h-23V67.3c-8.4,13.6-24.8,18.8-44.9,18.8H0v62.5h149.1V86.2h-22.8V49.3z" fill={plate}/>
      <path d="M126.4,0v33H99.2V0h-23v17.5c3.9,6.2,6.1,14.5,6.1,25.2c0,10.2-2.2,18.3-6.1,24.6v18.9h23V49.3h27.2v36.9h22.8V0H126.4z" fill={fill}/>
      <path d="M76.2,17.5C68.7,5.4,54.5,0.7,36.5,0H0v86.1h31.3c20.1,0,36.5-5.2,44.9-18.8c3.9-6.3,6.1-14.4,6.1-24.6 C82.3,31.9,80.2,23.7,76.2,17.5z M31.8,69h-8.9V16.9h8.9c16.8,0,26.8,8.9,26.8,26.1C58.6,60.1,49,69,31.8,69z" fill={brass}/>
      {/* DEHAAR (top word) */}
      <g fill={fill}>
        <path d="M199.9,16.6c0,5.4-1.4,9.4-4.2,12.2c-2.8,2.8-7,4.1-12.4,4.1h-7.7v-32h8.7c5.1,0,9,1.3,11.7,4 C198.5,7.6,199.9,11.5,199.9,16.6z M197.4,16.7c0-4.6-1.2-8-3.5-10.4c-2.3-2.3-5.8-3.5-10.3-3.5h-5.9v28.1h5.3 C192.6,30.9,197.4,26.2,197.4,16.7z"/>
        <path d="M224.7,32.9h-17.5v-32h17.5v2.1h-15.3v12.1h14.4v2.1h-14.4v13.7h15.3V32.9z"/>
      </g>
      <g fill={accent}>
        <path d="M257.7,32.9H251V19.1h-12.7v13.8h-6.8v-32h6.8v12.6H251V0.9h6.8V32.9z"/>
        <path d="M285.4,32.9l-2.3-7.6h-11.7l-2.3,7.6h-7.3l11.3-32.2h8.3l11.4,32.2H285.4z M281.5,19.6 c-2.1-6.9-3.4-10.8-3.6-11.7c-0.3-0.9-0.5-1.6-0.6-2.1c-0.5,1.9-1.9,6.5-4.1,13.9H281.5z"/>
        <path d="M316.4,32.9l-2.3-7.6h-11.7l-2.3,7.6h-7.3l11.3-32.2h8.3l11.4,32.2H316.4z M312.5,19.6 c-2.1-6.9-3.4-10.8-3.6-11.7c-0.3-0.9-0.5-1.6-0.6-2.1c-0.5,1.9-1.9,6.5-4.1,13.9H312.5z"/>
        <path d="M334.5,20.6v12.3h-6.8v-32h9.3c4.4,0,7.6,0.8,9.7,2.4c2.1,1.6,3.1,4,3.1,7.2c0,1.9-0.5,3.6-1.6,5 s-2.5,2.6-4.4,3.5c4.8,7.2,8,11.9,9.4,14h-7.5l-7.6-12.3H334.5z M334.5,15.1h2.2c2.1,0,3.7-0.4,4.8-1.1c1-0.7,1.5-1.8,1.5-3.4 c0-1.5-0.5-2.6-1.6-3.2c-1-0.6-2.7-1-4.9-1h-2.1V15.1z"/>
      </g>
      {/* KEUKENS (middle) */}
      <g fill={fill}>
        <path d="M196.3,84.8h-2.7l-11.9-16.4l-4.1,3.7v12.7h-2.2V53.8h2.2v16.1l3.4-3.4l12.2-12.7h2.8l-12.7,13.1L196.3,84.8z"/>
        <path d="M217.6,84.8h-17V53.8h17v2h-14.8v11.7h14v2h-14v13.3h14.8V84.8z"/>
        <path d="M247.5,53.8v20.1c0,3.6-1,6.4-3.1,8.4s-4.9,3-8.6,3c-3.6,0-6.4-1-8.4-3c-2-2-3-4.8-3-8.4v-20h2.2v20.1c0,3,0.8,5.3,2.5,7 s4,2.5,7,2.5c3,0,5.3-0.8,6.9-2.5c1.6-1.6,2.4-3.9,2.4-6.8V53.8H247.5z"/>
        <path d="M276.8,84.8h-2.7l-11.9-16.4l-4.1,3.7v12.7H256V53.8h2.2v16.1l3.4-3.4l12.2-12.7h2.8l-12.7,13.1L276.8,84.8z"/>
        <path d="M298.2,84.8h-17V53.8h17v2h-14.8v11.7h14v2h-14v13.3h14.8V84.8z"/>
        <path d="M327.8,84.8h-2.2l-18.4-27.6h-0.2c0.2,3.3,0.3,5.8,0.3,7.4v20.1h-2.1V53.8h2.2l18.4,27.5h0.1c-0.1-2.5-0.2-5-0.2-7.3V53.8 h2.1V84.8z"/>
        <path d="M353.8,76.8c0,2.6-1,4.6-2.9,6.2s-4.4,2.3-7.6,2.3c-3.8,0-6.7-0.4-8.7-1.3v-2.2c2.2,0.9,5.1,1.4,8.6,1.4 c2.5,0,4.6-0.6,6.1-1.8c1.5-1.2,2.2-2.7,2.2-4.6c0-1.2-0.2-2.1-0.7-2.9c-0.5-0.8-1.3-1.5-2.4-2.1c-1.1-0.6-2.8-1.3-4.9-2.1 c-3.2-1.1-5.4-2.3-6.6-3.5c-1.2-1.3-1.8-3-1.8-5.1c0-2.3,0.9-4.2,2.7-5.7c1.8-1.5,4.2-2.2,7-2.2c2.9,0,5.7,0.6,8.2,1.7l-0.8,1.9 c-2.6-1.1-5-1.6-7.4-1.6c-2.3,0-4.1,0.5-5.5,1.6s-2,2.5-2,4.3c0,1.1,0.2,2.1,0.6,2.8c0.4,0.7,1.1,1.4,2,2c0.9,0.6,2.6,1.3,4.9,2.1 c2.4,0.8,4.2,1.6,5.5,2.4c1.2,0.8,2.1,1.7,2.7,2.7C353.5,74.2,353.8,75.4,353.8,76.8z"/>
      </g>
      {/* NIFTRIK (bottom) */}
      <g fill={accent}>
        <path d="M204.3,147.5h-8.8l-14.3-24.8h-0.2c0.3,4.4,0.4,7.5,0.4,9.4v15.5h-6.2v-32.8h8.8l14.3,24.6h0.2 c-0.2-4.3-0.3-7.3-0.3-9.1v-15.5h6.3V147.5z"/>
        <path d="M213,147.5v-32.8h7v32.8H213z"/>
        <path d="M235.5,147.5h-6.9v-32.8h18.8v5.7h-12v8.5h11.1v5.7h-11.1V147.5z"/>
        <path d="M267.1,147.5h-7v-27h-8.9v-5.8H276v5.8h-8.9V147.5z"/>
        <path d="M288.5,134.9v12.6h-7v-32.8h9.6c4.5,0,7.8,0.8,9.9,2.4c2.1,1.6,3.2,4.1,3.2,7.4c0,1.9-0.5,3.6-1.6,5.2 s-2.6,2.7-4.5,3.5c4.9,7.4,8.2,12.2,9.7,14.3H300l-7.8-12.6H288.5z M288.5,129.2h2.2c2.2,0,3.8-0.4,4.9-1.1c1-0.7,1.6-1.9,1.6-3.5 c0-1.6-0.5-2.7-1.6-3.3c-1.1-0.7-2.7-1-5-1h-2.1V129.2z"/>
        <path d="M312.3,147.5v-32.8h7v32.8H312.3z"/>
        <path d="M354.4,147.5h-7.9l-8.6-13.8l-2.9,2.1v11.7h-7v-32.8h7v15l2.7-3.9l8.9-11.2h7.7l-11.5,14.5L354.4,147.5z"/>
      </g>
    </svg>
  );
};

const NavLink = ({ page, current, onNav, children }) => {
  const active = current === page;
  return (
    <a href={`#${page}`} className={active ? 'is-active' : ''} onClick={(e) => { e.preventDefault(); onNav(page); }}>
      {children}
    </a>
  );
};

function Nav({ current, onNav, dark = false, retro = false }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);
  const go = (p) => { setOpen(false); onNav(p); };
  return (
    <header className={`nav ${dark ? 'is-dark' : ''} ${open ? 'is-mobile-open' : ''}`}>
      <div className="nav-inner">
        <a href="#home" className="nav-logo" onClick={(e) => { e.preventDefault(); go('home'); }}>
          <Logo light={dark || open} retro={retro} height={48} />
        </a>
        <nav className="nav-links">
          <NavLink page="home" current={current} onNav={onNav}>Home</NavLink>
          <NavLink page="keukens" current={current} onNav={onNav}>Keukens</NavLink>
          <NavLink page="werkwijze" current={current} onNav={onNav}>Werkwijze</NavLink>
          <NavLink page="inspiratie" current={current} onNav={onNav}>Inspiratie</NavLink>
          <NavLink page="over" current={current} onNav={onNav}>Over ons</NavLink>
          <NavLink page="contact" current={current} onNav={onNav}>Contact</NavLink>
        </nav>
        <div className="nav-cta">
          <a href="tel:0486411296" className="nav-phone"><Icon name="phone" size={14}/> 0486 — 41 12 96</a>
          <button className="btn btn-brass btn-sm" onClick={() => onNav('contact')}>
            Plan een afspraak
            <span className="btn-dot"/>
          </button>
          <button className="nav-burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <span/><span/><span/>
          </button>
        </div>
      </div>
      <div className={`nav-mobile ${open ? 'is-open' : ''}`} onClick={(e)=>{ if(e.target===e.currentTarget) setOpen(false); }}>
        <nav className="nav-mobile-links">
          {[
            ['home','Home'],['keukens','Keukens'],['werkwijze','Werkwijze'],
            ['inspiratie','Inspiratie'],['over','Over ons'],['contact','Contact'],
          ].map(([k,l]) => (
            <a key={k} href={`#${k}`} className={current===k?'is-active':''} onClick={(e)=>{e.preventDefault(); go(k);}}>
              {l}
              <Icon name="arrowUpRight" size={16}/>
            </a>
          ))}
        </nav>
        <div className="nav-mobile-foot">
          <a href="tel:0486411296" className="nav-mobile-phone"><Icon name="phone" size={14}/> 0486 — 41 12 96</a>
          <button className="btn btn-brass" onClick={() => go('contact')}>
            Plan een afspraak<span className="btn-dot"/>
          </button>
        </div>
      </div>
    </header>
  );
}

function UspStrip() {
  const items = ['Sinds 1967', 'CBW Erkend', 'Familiebedrijf', 'Eigen montageteam', 'Showroom 1000 m²', 'A-merk apparatuur', 'Onafhankelijk advies', 'Eerlijke prijs'];
  const Track = () => (
    <span>
      {items.map((it, i) => (
        <span key={i}>
          <span>{it}</span>
          <span className="dot"/>
        </span>
      ))}
    </span>
  );
  return (
    <div className="usp-strip">
      <div className="usp-track">
        <Track /><Track /><Track />
      </div>
    </div>
  );
}

function CtaBanner({ onNav }) {
  return (
    <section className="cta-banner">
      <div className="container">
        <div className="cta-banner-grid">
          <h2>Maak een afspraak voor <span className="it">uw keukenervaring.</span></h2>
          <div className="cta-banner-actions">
            <button className="btn btn-brass" onClick={() => onNav('contact')}>
              Plan direct een afspraak<span className="btn-dot"/>
            </button>
            <a href="tel:0486411296" className="text-link on-dark">
              <Icon name="phone" size={14}/> Bel direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer({ onNav, retro = false }) {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Logo light retro={retro} height={48} />
            <p>Al meer dan 50 jaar de keukenspecialist in de regio Nijmegen. Vertrouwd, vakkundig en vriendelijk.</p>
            <div className="footer-social">
              <a href="https://www.facebook.com/dehaarkeukens" target="_blank" rel="noopener" aria-label="Volg ons op Facebook">
                <Icon name="facebook" size={18}/>
              </a>
              <a href="https://www.instagram.com/dehaarkeukens/" target="_blank" rel="noopener" aria-label="Volg ons op Instagram">
                <Icon name="instagram" size={18}/>
              </a>
            </div>
          </div>
          <div>
            <div className="footer-h">Algemene informatie</div>
            <ul className="footer-list">
              <li><a href="#" onClick={(e)=>{e.preventDefault(); onNav('keukens');}}>Keukens</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); onNav('werkwijze');}}>Werkwijze</a></li>
              <li><a href="#" onClick={(e)=>{e.preventDefault(); onNav('inspiratie');}}>Inspiratie</a></li>
              <li><a href="#">Algemene voorwaarden</a></li>
              <li><a href="#">Privacybeleid</a></li>
              <li><a href="#">Werken bij</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-h">Contact</div>
            <ul className="footer-list">
              <li><span>Lagestraat 14</span></li>
              <li><span>6606 AB Niftrik</span></li>
              <li><a href="tel:0486411296">0486 — 41 12 96</a></li>
              <li><a href="mailto:info@dehaarkeukens.nl">info@dehaarkeukens.nl</a></li>
              <li style={{ marginTop: 18 }}><span style={{ color: 'var(--paper)', opacity: 0.45, fontSize: 13 }}>KVK 10030539</span></li>
              <li><span style={{ color: 'var(--paper)', opacity: 0.45, fontSize: 13 }}>BTW NL 008432296B01</span></li>
            </ul>
          </div>
          <div>
            <div className="footer-h">Openingstijden</div>
            <ul className="footer-list">
              <li><span className="label">Ma</span> <span style={{ color: 'var(--paper)', opacity: 0.5 }}>gesloten</span></li>
              <li><span className="label">Di–Do</span> <span>09.00 — 17.30</span></li>
              <li><span className="label">Vrijdag</span> <span>09.00 — 20.00</span></li>
              <li><span className="label">Zaterdag</span> <span>10.00 — 16.00</span></li>
              <li><span className="label">Zondag</span> <span style={{ color: 'var(--paper)', opacity: 0.5 }}>gesloten</span></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© De Haar Keukens · Sinds 1967</span>
          <span>Vertrouwd, vakkundig en vriendelijk.</span>
        </div>
      </div>
    </footer>
  );
}

function RetroToggle({ retro, onToggle }) {
  return (
    <button
      type="button"
      className={`retro-toggle ${retro ? 'is-on' : ''}`}
      onClick={() => onToggle(!retro)}
      aria-pressed={retro}
      title={retro ? 'Terug naar de huidige stijl' : 'Bekijk de site in de oude stijl'}
    >
      <span>Oude stijl</span>
      <span className="retro-toggle-track" aria-hidden="true">
        <span className="retro-toggle-thumb"/>
      </span>
    </button>
  );
}

Object.assign(window, { Icon, Logo, Nav, UspStrip, CtaBanner, Footer, RetroToggle });
