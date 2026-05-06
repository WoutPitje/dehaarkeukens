// contact.jsx — contactpagina met form + openingstijden + map

function ContactPage({ onNav }) {
  const [form, setForm] = React.useState({
    naam: '', straat: '', huisnr: '', postcode: '', plaats: '',
    email: '', telefoon: '', reden: '', bericht: '', files: []
  });
  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);
  const [drag, setDrag] = React.useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.naam.trim()) e.naam = 'Vul uw naam in';
    if (!form.email.match(/.+@.+\..+/)) e.email = 'Vul een geldig e-mailadres in';
    if (!form.telefoon.trim()) e.telefoon = 'Vul uw telefoonnummer in';
    if (!form.reden) e.reden = 'Maak een keuze';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const onDrop = (e) => {
    e.preventDefault(); setDrag(false);
    update('files', Array.from(e.dataTransfer.files).slice(0, 4));
  };

  // openingstijden — bepaal welke dag "nu"
  const days = [
    { key: 'Ma', long: 'Maandag', hours: null },
    { key: 'Di', long: 'Dinsdag', hours: '09.00 — 17.30' },
    { key: 'Wo', long: 'Woensdag', hours: '09.00 — 17.30' },
    { key: 'Do', long: 'Donderdag', hours: '09.00 — 17.30' },
    { key: 'Vr', long: 'Vrijdag', hours: '09.00 — 20.00' },
    { key: 'Za', long: 'Zaterdag', hours: '10.00 — 16.00' },
    { key: 'Zo', long: 'Zondag', hours: null },
  ];
  const today = (new Date().getDay() + 6) % 7; // 0 = ma

  return (
    <main className="page-fade">
      <section className="page-header with-image" style={{ minHeight: 460 }}>
        <div className="page-header-bg"><img src="assets/header-contact.webp" alt=""/></div>
        <div className="container">
          <div className="page-header-inner">
            <div className="t-eyebrow page-header-eyebrow no-line">Contact</div>
            <h1 className="page-header-title">
              Laten we kennis<br/><span className="it">maken.</span>
            </h1>
            <p className="page-header-lede">
              Vul het formulier in, bel ons direct of loop gewoon de showroom binnen — wij nemen de tijd voor uw verhaal.
            </p>
            <div className="breadcrumb">
              <a href="#home" onClick={(e)=>{e.preventDefault(); onNav('home');}}>Home</a>
              <span className="sep">/</span>
              <span className="current">Contact</span>
            </div>
          </div>
        </div>
        <div className="page-header-cutout"/>
      </section>

      <section style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              {submitted && (
                <div className="success-banner">
                  <Icon name="check" size={28}/>
                  <div>
                    <strong style={{ font: '700 18px/1.2 var(--font-display)' }}>Bedankt voor uw bericht.</strong>
                    <div style={{ font: '400 14px/1.5 var(--font-body)', color: 'var(--paper)', opacity: 0.78, marginTop: 4 }}>
                      Wij nemen binnen één werkdag contact met u op — meestal nog dezelfde dag.
                    </div>
                  </div>
                </div>
              )}

              <div className="contact-info-block">
                <div className="t-eyebrow">Adres</div>
                <h3 className="t-h3" style={{ marginTop: 12, marginBottom: 12 }}>De Haar Keukens</h3>
                <div className="lines">
                  Lagestraat 14<br/>
                  6606 AB Niftrik<br/>
                  <a href="tel:0486411296" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 8 }}><Icon name="phone" size={14}/> 0486 — 41 12 96</a><br/>
                  <a href="mailto:info@dehaarkeukens.nl" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><Icon name="mail" size={14}/> info@dehaarkeukens.nl</a>
                </div>
                <div className="contact-social" style={{ display: 'flex', gap: 10, marginTop: 20 }}>
                  <a href="https://www.facebook.com/dehaarkeukens" target="_blank" rel="noopener" aria-label="Volg ons op Facebook"
                     style={{ width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-2)', color: 'var(--ink)', transition: 'background 220ms, color 220ms, border-color 220ms' }}
                     onMouseEnter={(e)=>{e.currentTarget.style.background='var(--brass)';e.currentTarget.style.borderColor='var(--brass)';e.currentTarget.style.color='var(--paper)';}}
                     onMouseLeave={(e)=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='var(--line-2)';e.currentTarget.style.color='var(--ink)';}}>
                    <Icon name="facebook" size={16}/>
                  </a>
                  <a href="https://www.instagram.com/dehaarkeukens/" target="_blank" rel="noopener" aria-label="Volg ons op Instagram"
                     style={{ width: 40, height: 40, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--line-2)', color: 'var(--ink)', transition: 'background 220ms, color 220ms, border-color 220ms' }}
                     onMouseEnter={(e)=>{e.currentTarget.style.background='var(--brass)';e.currentTarget.style.borderColor='var(--brass)';e.currentTarget.style.color='var(--paper)';}}
                     onMouseLeave={(e)=>{e.currentTarget.style.background='transparent';e.currentTarget.style.borderColor='var(--line-2)';e.currentTarget.style.color='var(--ink)';}}>
                    <Icon name="instagram" size={16}/>
                  </a>
                </div>
              </div>

              <div className="map-card">
                <svg viewBox="0 0 600 450" preserveAspectRatio="xMidYMid slice">
                  <rect width="600" height="450" fill="var(--ink)"/>
                  {/* abstract street grid */}
                  <g stroke="rgba(255,255,255,0.08)" strokeWidth="1" fill="none">
                    {[...Array(12)].map((_, i) => <line key={`h${i}`} x1="0" y1={i * 40 + 20} x2="600" y2={i * 40 + 20}/>)}
                    {[...Array(16)].map((_, i) => <line key={`v${i}`} x1={i * 40 + 20} y1="0" x2={i * 40 + 20} y2="450"/>)}
                  </g>
                  {/* "Lagestraat" diagonal */}
                  <path d="M40 380 L260 240 L420 220 L560 180" stroke="var(--brass)" strokeWidth="3" fill="none"/>
                  <path d="M260 240 L320 60" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none"/>
                  <path d="M420 220 L460 420" stroke="rgba(255,255,255,0.35)" strokeWidth="2" fill="none"/>
                  {/* pin */}
                  <g transform="translate(310,170)">
                    <circle r="22" fill="var(--brass-soft)"/>
                    <circle r="10" fill="var(--brass)"/>
                    <circle r="3" fill="var(--ink)"/>
                  </g>
                  <text x="340" y="160" fill="#fff" fontFamily="IBM Plex Mono" fontSize="12" letterSpacing="1">DE HAAR KEUKENS</text>
                  <text x="340" y="178" fill="rgba(255,255,255,0.6)" fontFamily="IBM Plex Mono" fontSize="11">LAGESTRAAT 14 · NIFTRIK</text>
                </svg>
              </div>

              <a className="text-link" href="https://www.google.com/maps?q=Lagestraat+14,+6606+AB+Niftrik" target="_blank" rel="noopener">
                Open routebeschrijving <Icon name="arrowUpRight" size={14}/>
              </a>

              <div className="contact-info-block">
                <div className="t-eyebrow"><Icon name="clock" size={12} style={{ marginRight: 4 }}/> Openingstijden</div>
                <div className="openingstijden" style={{ marginTop: 16 }}>
                  {days.map((d, i) => (
                    <div key={d.key} className={`openingstijden-row ${i === today ? 'is-now' : ''}`}>
                      <span className="day">{d.long}</span>
                      <span className="hours">{d.hours || '—'}</span>
                      <span className="status">{d.hours ? (i === today ? 'Vandaag' : 'Open') : 'Gesloten'}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <form className="contact-form" onSubmit={submit} noValidate>
              <div className="t-eyebrow">Plan een afspraak</div>
              <h2 className="t-h2" style={{ marginTop: 16 }}>Vul uw gegevens in,<br/>dan nemen wij <span className="t-serif-it" style={{ color: 'var(--brass)' }}>contact</span> op.</h2>
              <p className="lede" style={{ marginTop: 16 }}>De velden met * zijn verplicht. We bellen u binnen één werkdag terug.</p>

              <div className={`field ${errors.naam ? 'field-error' : ''}`}>
                <label>Voor- en achternaam *</label>
                <input type="text" value={form.naam} onChange={(e) => update('naam', e.target.value)} placeholder="Bv. Anneke Janssen"/>
                {errors.naam && <span className="err">{errors.naam}</span>}
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Straat</label>
                  <input type="text" value={form.straat} onChange={(e) => update('straat', e.target.value)}/>
                </div>
                <div className="field">
                  <label>Huisnummer</label>
                  <input type="text" value={form.huisnr} onChange={(e) => update('huisnr', e.target.value)}/>
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label>Postcode</label>
                  <input type="text" value={form.postcode} onChange={(e) => update('postcode', e.target.value)} placeholder="0000 AA"/>
                </div>
                <div className="field">
                  <label>Woonplaats</label>
                  <input type="text" value={form.plaats} onChange={(e) => update('plaats', e.target.value)}/>
                </div>
              </div>

              <div className="field-row">
                <div className={`field ${errors.email ? 'field-error' : ''}`}>
                  <label>E-mailadres *</label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="naam@voorbeeld.nl"/>
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className={`field ${errors.telefoon ? 'field-error' : ''}`}>
                  <label>Telefoon *</label>
                  <input type="tel" value={form.telefoon} onChange={(e) => update('telefoon', e.target.value)} placeholder="06 12 34 56 78"/>
                  {errors.telefoon && <span className="err">{errors.telefoon}</span>}
                </div>
              </div>

              <div className={`field ${errors.reden ? 'field-error' : ''}`}>
                <label>Reden van contact *</label>
                <select value={form.reden} onChange={(e) => update('reden', e.target.value)}>
                  <option value="">Maak een keuze...</option>
                  <option>Showroom-afspraak inplannen</option>
                  <option>Vraag over een ontwerp</option>
                  <option>Service / nazorg</option>
                  <option>Werken bij De Haar</option>
                  <option>Iets anders</option>
                </select>
                {errors.reden && <span className="err">{errors.reden}</span>}
              </div>

              <div className="field">
                <label>Foto, bouwtekening of bestand</label>
                <div className={`upload-box ${drag ? 'is-drag' : ''}`}
                     onDragEnter={(e)=>{e.preventDefault(); setDrag(true);}}
                     onDragOver={(e)=>{e.preventDefault(); setDrag(true);}}
                     onDragLeave={()=>setDrag(false)}
                     onDrop={onDrop}>
                  <div className="lab">{form.files.length > 0 ? `${form.files.length} bestand${form.files.length > 1 ? 'en' : ''} toegevoegd` : 'Sleep hier uw bestanden — of klik om te selecteren'}</div>
                  <div className="small">Max. 512 MB · JPG, PNG, PDF</div>
                </div>
              </div>

              <div className="field">
                <label>Uw vraag of bericht</label>
                <textarea value={form.bericht} onChange={(e) => update('bericht', e.target.value)} placeholder="Vertel ons kort wat u zoekt, of welke vraag u heeft..."/>
              </div>

              <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 12 }}>
                <button type="submit" className="btn btn-brass">
                  Verstuur bericht<span className="btn-dot"/>
                </button>
                <span className="t-small">Wij reageren binnen één werkdag.</span>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

window.ContactPage = ContactPage;
