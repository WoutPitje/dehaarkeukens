// werkwijze.jsx — 5 stappen

function WerkwijzePage({ onNav }) {
  const [active, setActive] = React.useState(1);

  const stappen = [
    {
      num: '01',
      titleA: 'Welkom in de',
      titleB: 'showroom.',
      lede: 'Plan vrijblijvend een bezoek aan onze showroom van meer dan 1.000 m². Onze adviseur neemt de tijd om naar u te luisteren — uw wensen en de eigenschappen van uw keukenruimte vormen de basis voor een eerste schets.',
      bullets: ['Persoonlijk kennismakingsgesprek', 'Tour langs onze opstellingen', 'Globale verkenning van wensen en budget', 'Geen verplichtingen, geen verkooppraat'],
      img: 'assets/showroom-02.webp',
    },
    {
      num: '02',
      titleA: 'Een 3D-ontwerp,',
      titleB: 'op uw maat.',
      lede: 'Met behulp van onze vakkennis vertalen we uw wensen naar een concreet 3D-ontwerp. Daarmee krijgt u een perfect beeld van de mogelijkheden voor uw nieuwe keuken — vóór er ook maar één plank wordt besteld.',
      bullets: ['Ontwerp op basis van uw plattegrond', 'Drie ronden vrij bij te stellen', 'Materiaalvoorstellen incl. monsters', 'Heldere prijsopgave per onderdeel'],
      img: 'assets/keuken-detail-4.jpg',
    },
    {
      num: '03',
      titleA: 'Planning &',
      titleB: 'voorbereiding.',
      lede: 'Als alle puntjes op de i staan gaan wij voor u aan de slag. We komen de keukenruimte inmeten, maken installatietekeningen en stemmen met u of uw aannemer af welke voorbereidingen er moeten worden getroffen.',
      bullets: ['Definitieve inmeting ter plekke', 'Installatietekeningen elektra & water', 'Afstemming met aannemer/installateur', 'Onze partners regelen — als u dat wilt — alles'],
      img: 'assets/keuken-detail-2.jpg',
    },
    {
      num: '04',
      titleA: 'Levering &',
      titleB: 'realisatie.',
      lede: 'Als alle voorbereidingen gereed zijn komen wij uw nieuwe keuken leveren. Onze vakkundige monteurs monteren uw keuken vlot en met grote zorgvuldigheid, zodat het er aan het eind van de dag perfect uitziet.',
      bullets: ['Eigen montageteam — geen onderaannemers', 'Levering en montage in één traject', 'Stofarme werkwijze', 'Eindcontrole samen met u'],
      img: 'assets/bedrijfswagen.jpg',
    },
    {
      num: '05',
      titleA: 'Genieten,',
      titleB: 'jarenlang.',
      lede: 'Als alle afspraken zijn nagekomen kan de koelkast worden gevuld en u kunt genieten van uw nieuwe keuken. Wij blijven beschikbaar — voor service, voor vragen en voor de eventuele upgrade over een paar jaar.',
      bullets: ['CBW-garantie op alle onderdelen', 'Servicebezoek door onze eigen monteurs', 'Vragen over apparatuur? Bel ons gerust', '"Tot de volgende keuken" — sommige klanten komen na 25 jaar terug'],
      img: 'assets/hero-couple.webp',
    },
  ];

  return (
    <main className="page-fade">
      <section className="page-header">
        <div className="container">
          <div className="page-header-inner">
            <div className="t-eyebrow page-header-eyebrow no-line">Onze werkwijze</div>
            <h1 className="page-header-title">
              Van eerste schets tot<br/><span className="it">eerste maaltijd.</span>
            </h1>
            <p className="page-header-lede">
              Een keuken is een traject — geen snelle aankoop. Wij begeleiden u in vijf overzichtelijke stappen, met dezelfde mensen aan tafel van begin tot eind.
            </p>
            <div className="breadcrumb">
              <a href="#home" onClick={(e)=>{e.preventDefault(); onNav('home');}}>Home</a>
              <span className="sep">/</span>
              <span className="current">Werkwijze</span>
            </div>
          </div>
        </div>
        <div className="page-header-cutout"/>
      </section>

      <section className="werkwijze">
        <div className="container">
          <div className="werkwijze-progress" style={{ position: 'static', marginBottom: 32, padding: 0, border: 0 }}>
            <div className="werkwijze-progress-inner">
              {stappen.map((s, i) => {
                const idx = i + 1;
                const cls = active === idx ? 'is-active' : (active > idx ? 'is-done' : '');
                return (
                  <div key={s.num} className={`werkwijze-progress-step ${cls}`}
                       onMouseEnter={() => setActive(idx)}
                       onClick={() => {
                         setActive(idx);
                         document.getElementById(`stap-${s.num}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                       }}>
                    <span className="num">{s.num}</span>
                    <span className="lab">{s.titleA.replace(/[,.]$/, '')} {s.titleB.replace(/\.$/, '')}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {stappen.map((s, i) => (
            <div className={`werkwijze-step ${i % 2 === 1 ? 'reverse' : ''}`} key={s.num} id={`stap-${s.num}`}>
              <div>
                <h3 className="werkwijze-step-num">{s.num}</h3>
              </div>
              <div className="werkwijze-step-content">
                <div className="t-eyebrow">Stap {s.num} van 05</div>
                <h2>{s.titleA} <span className="it">{s.titleB}</span></h2>
                <p className="t-body">{s.lede}</p>
                <ul>
                  {s.bullets.map((b, j) => (<li key={j}>{b}</li>))}
                </ul>
                <div style={{ marginTop: 16 }}>
                  <div className="werkwijze-image-frame">
                    <img src={s.img} alt={`Stap ${s.num}`}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner onNav={onNav}/>
    </main>
  );
}

window.WerkwijzePage = WerkwijzePage;
