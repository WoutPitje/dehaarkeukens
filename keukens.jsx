// keukens.jsx — keukenstijlen overzicht

function KeukensPage({ onNav }) {
  const stijlen = [
    { num: '01', label: 'Modern',       img: 'assets/stijl-modern.webp',
      tagline: 'Strak, functioneel, hightech.',
      desc: 'Greeploze fronten, slimme indelingen en de nieuwste innovaties op het gebied van apparatuur. Voor wie houdt van clean en doordacht.' },
    { num: '02', label: 'Landelijk',    img: 'assets/stijl-landelijk.webp',
      tagline: 'Warm, authentiek, vertrouwd.',
      desc: 'Massief hout, fronten met profiel en zacht licht. Een keuken die voelt als thuiskomen — ook als u net binnenkomt.' },
    { num: '03', label: 'Basic',        img: 'assets/stijl-basic.webp',
      tagline: 'Tijdloos, rustig, blijvend.',
      desc: 'Geen modegril maar een vormtaal die over twintig jaar nog klopt. Een hoogwaardige basis zonder luxe-toeslag.' },
    { num: '04', label: 'Design',       img: 'assets/stijl-design.webp',
      tagline: 'Een statement, geen meubel.',
      desc: 'Architecturaal vormgegeven keukens — voor wie de keuken ziet als hoofdstuk in het interieur. Vaak op maat.' },
    { num: '05', label: 'Industrieel',  img: 'assets/stijl-industrieel.webp',
      tagline: 'Beton, staal, eerlijk materiaal.',
      desc: 'Ruw, robuust en doordacht. Werkbladen van warmgewalst RVS of beton, gecombineerd met massieve houten elementen.' },
    { num: '06', label: 'Romantisch',   img: 'assets/stijl-romantisch.webp',
      tagline: 'Klassiek, sierlijk, persoonlijk.',
      desc: 'Voor wie houdt van details: profiellijsten, klassieke greepjes, zachte kleuren en een kraan met karakter.' },
  ];

  return (
    <main className="page-fade">
      <section className="page-header with-image">
        <div className="page-header-bg"><img src="assets/keuken-fenix-groen-2.jpg" alt=""/></div>
        <div className="container">
          <div className="page-header-inner">
            <div className="t-eyebrow page-header-eyebrow no-line">Onze Keukens</div>
            <h1 className="page-header-title">
              Ons uitgebreide aanbod<br/><span className="it">keukenstijlen.</span>
            </h1>
            <p className="page-header-lede">
              Of u zich nu thuis voelt in landelijk, modern, industrieel, klassiek of een combinatie van meerdere woonstijlen — wij ontwerpen de keuken die past bij u, uw ruimte en de manier waarop u wilt wonen.
            </p>
            <div className="breadcrumb">
              <a href="#home" onClick={(e)=>{e.preventDefault(); onNav('home');}}>Home</a>
              <span className="sep">/</span>
              <span className="current">Keukens</span>
            </div>
          </div>
        </div>
        <div className="page-header-cutout"/>
      </section>

      <section style={{ padding: '120px 0', background: 'var(--cream)' }}>
        <div className="container">
          <div className="stijlen-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
            {stijlen.map((s) => (
              <a className="stijl-card" key={s.num} href="#" onClick={(e)=>{e.preventDefault(); onNav('inspiratie');}} style={{ aspectRatio: '4/3' }}>
                <span className="stijl-card-num">{s.num} · Stijl</span>
                <img src={s.img} alt={s.label}/>
                <div className="stijl-card-content">
                  <div>
                    <div className="meta">{s.tagline}</div>
                    <h3 style={{ fontSize: 36 }}>{s.label}</h3>
                    <p style={{ color: 'var(--paper)', opacity: 0.78, fontSize: 14, marginTop: 8, lineHeight: 1.5, maxWidth: 380 }}>{s.desc}</p>
                  </div>
                  <div className="stijl-card-arrow"><Icon name="arrowUpRight" size={18}/></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Apparatuur + werkbladen split */}
      <section className="split">
        <div className="split-grid">
          <div className="split-image">
            <img src="assets/keuken-detail-3.jpg" alt="Apparatuur detail"/>
            <span className="split-image-tag">Innovatie</span>
          </div>
          <div className="split-content">
            <div className="t-eyebrow">Inbouwapparatuur</div>
            <h2 className="t-h1" style={{ color: 'var(--paper)' }}>
              Alleen de <span className="t-serif-it" style={{ color: 'var(--brass)' }}>beste</span> apparaten.
            </h2>
            <p className="t-lede" style={{ color: 'var(--paper)', opacity: 0.78 }}>
              Wij gaan voor kwaliteit en werken met merken die wij thuis ook zelf gebruiken. We spelen continu in op de nieuwste trends en ontwikkelingen — koken wordt daar leuker, makkelijker en smakelijker van.
            </p>
            <dl className="split-meta">
              <div><dt>Kookplaten</dt><dd>Met kookveldafzuiging</dd></div>
              <div><dt>Kranen</dt><dd>Koud, warm, kokend, gekoeld &amp; bruisend</dd></div>
              <div><dt>Ovens</dt><dd>Stoom, combi en pyrolyse</dd></div>
              <div><dt>Koeling</dt><dd>Vol-integreerbaar A-merk</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="split">
        <div className="split-grid reverse">
          <div className="split-image">
            <img src="assets/keuken-detail-1.jpg" alt="Werkbladen detail"/>
            <span className="split-image-tag">Werkbladen</span>
          </div>
          <div className="split-content">
            <div className="t-eyebrow">Werkbladen</div>
            <h2 className="t-h1" style={{ color: 'var(--paper)' }}>
              Het werkblad als <span className="t-serif-it" style={{ color: 'var(--brass)' }}>hoofdrol.</span>
            </h2>
            <p className="t-lede" style={{ color: 'var(--paper)', opacity: 0.78 }}>
              Het werkblad is een prominent element van de keuken. Het vraagt om de juiste combinatie van functionaliteit en uitstraling. We bieden materialen aan met ieder hun eigen karakter — van kunststof tot luxe natuursteen.
            </p>
            <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12, marginTop: 16, paddingTop: 24, borderTop: '1px solid rgba(255,255,255,0.15)' }}>
              {['Kunststof', 'Composiet', 'Natuursteen', 'Marmer', 'Keramiek', 'Warmgewalst RVS', 'Massief hout', 'Beton'].map((m) => (
                <li key={m} style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--paper)', opacity: 0.85 }}>
                  <span style={{ width: 6, height: 6, background: 'var(--brass)', flexShrink: 0 }}/>
                  <span style={{ font: '600 14px/1 var(--font-mono)', letterSpacing: 0.6 }}>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBanner onNav={onNav}/>
    </main>
  );
}

window.KeukensPage = KeukensPage;
