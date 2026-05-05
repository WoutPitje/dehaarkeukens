// home.jsx — De Haar Keukens — homepage

function HomeHero({ onNav }) {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="t-eyebrow hero-eyebrow">Sinds 1967 · Niftrik</div>
          <h1 className="hero-title">
            De keuken die <span className="it">begrijpt</span><br/>hoe u woont.
          </h1>
          <p className="hero-lede">
            Welkom bij De Haar Keukens, al meer dan 50 jaar dé keukenspecialist in de regio Nijmegen. Met eerlijk en vakkundig advies helpen wij u uw ideale keuken te realiseren — van eerste schets tot eerste maaltijd.
          </p>
          <div className="hero-actions">
            <button className="btn btn-brass" onClick={() => onNav('contact')}>
              Plan een afspraak<span className="btn-dot"/>
            </button>
            <button className="btn btn-ghost-light" onClick={() => onNav('inspiratie')}>
              Bekijk onze showroom
            </button>
          </div>
          <div className="hero-meta">
            <div className="hero-meta-item">
              <span className="num">50+</span>
              <span className="lab">Jaar vakkennis<br/>als familiebedrijf</span>
            </div>
            <div className="hero-meta-item">
              <span className="num">1.000</span>
              <span className="lab">m² showroom met<br/>tientallen opstellingen</span>
            </div>
            <div className="hero-meta-item">
              <span className="num">CBW</span>
              <span className="lab">Erkend &mdash; samen met<br/>de Consumentenbond</span>
            </div>
          </div>
        </div>
        <div style={{ position: 'relative' }}>
          <div className="hero-block hero-block-2"/>
          <div className="hero-image-frame">
            <img src="assets/keuken-fenix-groen.jpg" alt="Een moderne keuken in groene Fenix-uitvoering"/>
            <div className="hero-tag">
              <span className="tag-num">01</span>
              <span className="tag-text"><strong>Showroomkeuken</strong><br/>Fenix · groen mat</span>
            </div>
          </div>
          <div className="hero-block hero-block-1"/>
        </div>
      </div>
      <div className="hero-cutout"/>
    </section>
  );
}

function HomeUsps({ onNav }) {
  const items = [
    { num: '01', icon: 'award',       title: 'Meer dan 50 jaar ervaring',     desc: 'Sinds 1967 bouwen we keukens in de regio Nijmegen. Drie generaties vakkennis, één familiebedrijf.' },
    { num: '02', icon: 'handshake',   title: 'Onafhankelijk advies',          desc: 'Wij zijn aan geen enkel merk gebonden. Onze adviseurs adviseren u eerlijk wat het beste werkt voor úw ruimte.' },
    { num: '03', icon: 'pencilRuler', title: 'Een uniek 3D-ontwerp',          desc: 'Geen catalogus-keuken — een ontwerp dat past bij hoe u kookt, leeft en thuiskomt. Inclusief 3D-visualisatie.' },
    { num: '04', icon: 'euro',        title: 'Eerlijke prijs',                desc: 'Geen lokkertjes en geen verrassingen achteraf. U weet vooraf precies wat u krijgt — en wat het kost.' },
    { num: '05', icon: 'sparkles',    title: 'Kwaliteitsapparatuur',          desc: 'A-merken die wij zelf ook thuis gebruiken. Van kookveldafzuiging tot een kraan met kokend en bruisend water.' },
  ];
  return (
    <section className="usps">
      <div className="container">
        <div className="usps-head">
          <div>
            <div className="t-eyebrow">Daarom De Haar Keukens</div>
            <h2 className="t-h1" style={{ marginTop: 24 }}>Vijf redenen die u terug<br/>doen <span className="t-serif-it" style={{ color: 'var(--brass)' }}>thuiskomen.</span></h2>
          </div>
          <div>
            <p className="t-lede">
              Een keuken bouwt u niet voor één seizoen. U bouwt 'm voor de zondagochtenden, voor verjaardagen, voor het stille moment na een lange werkdag. Daar nemen wij de tijd voor.
            </p>
            <button className="btn btn-ghost" style={{ marginTop: 32 }} onClick={() => onNav('werkwijze')}>
              Onze werkwijze<span className="btn-dot"/>
            </button>
          </div>
        </div>
        <div className="usps-grid">
          {items.map((it) => (
            <article className="usp-card" key={it.num}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="usp-num">{it.num}</span>
                <span className="usp-icon"><Icon name={it.icon} size={28}/></span>
              </div>
              <h3 className="usp-title">{it.title}</h3>
              <p className="usp-desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function HomeStijlen({ onNav }) {
  const stijlen = [
    { num: '01', label: 'Modern',       img: 'assets/stijl-modern.webp',       desc: 'Strakke lijnen, greeploos, hightech.' },
    { num: '02', label: 'Landelijk',    img: 'assets/stijl-landelijk.webp',    desc: 'Warm hout, profielen, romantiek.' },
    { num: '03', label: 'Basic',        img: 'assets/stijl-basic.webp',        desc: 'Tijdloos, rustig, doordacht.' },
    { num: '04', label: 'Design',       img: 'assets/stijl-design.webp',       desc: 'Een statement, geen meubel.' },
    { num: '05', label: 'Industrieel',  img: 'assets/stijl-industrieel.webp',  desc: 'Beton, staal en eerlijke materialen.' },
  ];
  return (
    <section className="stijlen">
      <div className="container">
        <div className="stijlen-head">
          <div className="t-eyebrow">Ons aanbod</div>
          <h2 className="t-h1" style={{ marginTop: 24, maxWidth: 720 }}>
            Een keuken mag <span className="t-serif-it" style={{ color: 'var(--brass)' }}>gezien</span> worden.
          </h2>
          <p className="t-lede" style={{ marginTop: 24, maxWidth: 720 }}>
            De keuken kreeg de afgelopen jaren een steeds grotere rol in de woning. We koken er, eten er, werken er — en leven er. Daarom is het belangrijk dat de keuken aansluit op uw wensen, in de stijl waarin u zich thuis voelt.
          </p>
        </div>
        <div className="stijlen-grid">
          {stijlen.slice(0, 2).map((s, i) => (
            <a className={`stijl-card ${i === 0 ? 'stijl-card-wide' : ''}`} key={s.num} onClick={(e) => { e.preventDefault(); onNav('keukens'); }} href="#keukens">
              <span className="stijl-card-num">{s.num} · Stijl</span>
              <img src={s.img} alt={s.label}/>
              <div className="stijl-card-content">
                <div>
                  <div className="meta">{s.desc}</div>
                  <h3>{s.label}</h3>
                </div>
                <div className="stijl-card-arrow"><Icon name="arrowUpRight" size={18}/></div>
              </div>
            </a>
          ))}
          {stijlen.slice(2).map((s) => (
            <a className="stijl-card" key={s.num} onClick={(e) => { e.preventDefault(); onNav('keukens'); }} href="#keukens">
              <span className="stijl-card-num">{s.num} · Stijl</span>
              <img src={s.img} alt={s.label}/>
              <div className="stijl-card-content">
                <div>
                  <div className="meta">{s.desc}</div>
                  <h3>{s.label}</h3>
                </div>
                <div className="stijl-card-arrow"><Icon name="arrowUpRight" size={18}/></div>
              </div>
            </a>
          ))}
          <div className="stijl-more">
            <div>
              <h4>En vele combinaties daarvan.</h4>
              <p>Klassiek-modern, basic-industrieel — een keuken hoeft zich niet te conformeren aan één stijl.</p>
              <button className="btn btn-brass" onClick={() => onNav('keukens')}>
                Bekijk alle stijlen<span className="btn-dot"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomeShowroom({ onNav }) {
  return (
    <section className="split">
      <div className="split-grid">
        <div className="split-image">
          <img src="assets/showroom-02.webp" alt="Showroom De Haar Keukens"/>
          <span className="split-image-tag">Showroom · Niftrik</span>
        </div>
        <div className="split-content">
          <div className="t-eyebrow">Bezoek de showroom</div>
          <h2 className="t-h1" style={{ color: 'var(--paper)' }}>
            Laat u inspireren in <span className="t-serif-it" style={{ color: 'var(--brass)' }}>1.000 m²</span> beleving.
          </h2>
          <p className="t-lede" style={{ color: 'rgba(255,255,255,0.78)' }}>
            In een van de grootste showrooms in de wijde regio laten we u alles zien op het gebied van keukens. Verschillende woonstijlen, materialen, kleurstellingen en de laatste innovaties op het gebied van apparatuur.
          </p>
          <dl className="split-meta">
            <div>
              <dt>Toonkeukens</dt>
              <dd>30+ opstellingen</dd>
            </div>
            <div>
              <dt>Materiaal</dt>
              <dd>Composiet, natuursteen, keramiek, RVS</dd>
            </div>
            <div>
              <dt>Apparatuur</dt>
              <dd>Live demonstraties</dd>
            </div>
            <div>
              <dt>Adresinfo</dt>
              <dd>Lagestraat 14, Niftrik</dd>
            </div>
          </dl>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <button className="btn btn-brass" onClick={() => onNav('contact')}>
              Plan vrijblijvend een bezoek<span className="btn-dot"/>
            </button>
            <button className="btn btn-ghost-light" onClick={() => onNav('inspiratie')}>
              Showroomkeukens
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNav }) {
  return (
    <main className="page-fade">
      <HomeHero onNav={onNav}/>
      <UspStrip/>
      <HomeUsps onNav={onNav}/>
      <HomeStijlen onNav={onNav}/>
      <HomeShowroom onNav={onNav}/>
      <CtaBanner onNav={onNav}/>
    </main>
  );
}

window.HomePage = HomePage;
