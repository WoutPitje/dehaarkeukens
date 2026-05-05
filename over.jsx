// over.jsx — Over ons (familiebedrijf, team, CBW)

function OverPage({ onNav }) {
  return (
    <main className="page-fade">
      <section className="page-header">
        <div className="container">
          <div className="page-header-inner">
            <div className="t-eyebrow page-header-eyebrow no-line">Over De Haar Keukens</div>
            <h1 className="page-header-title">
              Vertrouwd, vakkundig<br/>en <span className="it">vriendelijk.</span>
            </h1>
            <p className="page-header-lede">
              Het familiebedrijf De Haar Keukens in Niftrik is opgericht in 1967 door H.W. de Haar en is sinds die tijd uitgegroeid tot een van de grootste keukencentra in de wijde regio.
            </p>
            <div className="breadcrumb">
              <a href="#home" onClick={(e)=>{e.preventDefault(); onNav('home');}}>Home</a>
              <span className="sep">/</span>
              <span className="current">Over ons</span>
            </div>
          </div>
        </div>
        <div className="page-header-cutout"/>
      </section>

      <section className="over-intro">
        <div className="container">
          <div className="over-intro-grid">
            <div className="over-intro-content">
              <div className="t-eyebrow">Drie generaties</div>
              <h2>Een familiebedrijf met<br/><span className="it">karakter.</span></h2>
              <p className="t-lede">
                Met vakkundig advies, het nakomen van afspraken en het bieden van goede service hebben we inmiddels vele klanten blij mogen maken met hun ideale keuken.
              </p>
              <p className="t-body">
                Wat in 1967 begon als een kleine zaak is uitgegroeid tot een showroom van meer dan 1.000 m². Wat hetzelfde is gebleven: dezelfde mensen aan tafel van begin tot eind, een eerlijk advies, en de overtuiging dat een keuken iets is waar u jarenlang plezier van moet hebben.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 16 }}>
                <button className="btn btn-brass" onClick={() => onNav('contact')}>
                  Kom kennismaken<span className="btn-dot"/>
                </button>
                <button className="btn btn-ghost" onClick={() => onNav('werkwijze')}>
                  Onze werkwijze
                </button>
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <div className="over-intro-image">
                <img src="assets/team-dhk.jpg" alt="Team De Haar Keukens"/>
              </div>
              <div className="over-intro-block">
                <span className="num">1967</span>
                <span className="lab">Het jaar dat het<br/>allemaal begon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section">
        <div className="container">
          <div className="t-eyebrow">Tijdlijn</div>
          <h2 className="t-h1" style={{ color: 'var(--paper)', marginTop: 24, maxWidth: 720 }}>
            Een halve eeuw <span className="t-serif-it" style={{ color: 'var(--brass)' }}>keukens.</span>
          </h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-year">1967</div>
              <div className="timeline-event">
                <h4 className="t-h4" style={{ color: 'var(--paper)' }}>Een begin</h4>
                <p>H.W. de Haar opent een kleine keukenzaak in Niftrik.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">1989</div>
              <div className="timeline-event">
                <h4 className="t-h4" style={{ color: 'var(--paper)' }}>Tweede generatie</h4>
                <p>De zaak gaat over op de volgende generatie. Eerste uitbreiding van de showroom.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">2008</div>
              <div className="timeline-event">
                <h4 className="t-h4" style={{ color: 'var(--paper)' }}>1.000 m² showroom</h4>
                <p>Volledige verbouwing — een van de grootste showrooms in de regio.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-year">Nu</div>
              <div className="timeline-event">
                <h4 className="t-h4" style={{ color: 'var(--paper)' }}>Derde generatie</h4>
                <p>CBW Erkend, eigen montageteam, klanten die soms na 25 jaar terugkomen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cbw-banner">
        <div className="container">
          <div className="cbw-grid">
            <div className="cbw-mark">
              <div className="seal">CBW</div>
              <div className="lab">Erkend</div>
            </div>
            <div>
              <div className="t-eyebrow">CBW Erkend</div>
              <h3 className="t-h2" style={{ marginTop: 16 }}>Meer zekerheid voor u<br/>als <span className="t-serif-it" style={{ color: 'var(--brass)' }}>consument.</span></h3>
              <p className="t-body" style={{ marginTop: 16, maxWidth: 640 }}>
                De CBW-voorwaarden zijn in samenwerking met de Consumentenbond opgesteld en regelen onder andere de garantie, betaling- en geschillenregeling. Dat geeft u meer zekerheid dan bij de meeste andere woonwinkels.
              </p>
            </div>
            <a className="text-link" href="https://www.cbw-erkend.nl/garanties-wonen" target="_blank" rel="noopener">
              Meer info <Icon name="arrowUpRight" size={14}/>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner onNav={onNav}/>
    </main>
  );
}

window.OverPage = OverPage;
