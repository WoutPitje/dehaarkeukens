// app.jsx — root + simple hash router + Tweaks panel

const PAGES = {
  home: { title: 'Home — De Haar Keukens', dark: true,  Component: window.HomePage },
  keukens: { title: 'Keukens — De Haar Keukens', dark: false, Component: window.KeukensPage },
  werkwijze: { title: 'Werkwijze — De Haar Keukens', dark: false, Component: window.WerkwijzePage },
  inspiratie: { title: 'Inspiratie — De Haar Keukens', dark: false, Component: window.InspiratiePage },
  over: { title: 'Over ons — De Haar Keukens', dark: false, Component: window.OverPage },
  contact: { title: 'Contact — De Haar Keukens', dark: false, Component: window.ContactPage },
};

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#B58A4E",
  "ink": "#1F2A33",
  "cream": "#F5F1EA",
  "displayFont": "Syne",
  "showItalicAccents": true
}/*EDITMODE-END*/;

function App() {
  const [page, setPage] = React.useState(() => {
    const h = window.location.hash.replace('#', '');
    return PAGES[h] ? h : 'home';
  });
  const [tweaks, setTweak] = window.useTweaks ? window.useTweaks(TWEAK_DEFAULTS) : [TWEAK_DEFAULTS, () => {}];

  React.useEffect(() => {
    const onHash = () => {
      const h = window.location.hash.replace('#', '');
      if (PAGES[h]) setPage(h);
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const onNav = (p) => {
    if (!PAGES[p]) return;
    window.location.hash = p;
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = PAGES[p].title;
  };

  React.useEffect(() => { document.title = PAGES[page].title; }, [page]);

  // apply tweaks live via CSS vars
  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--brass', tweaks.accent);
    r.style.setProperty('--ink', tweaks.ink);
    r.style.setProperty('--cream', tweaks.cream);
    r.style.setProperty('--font-display', `"${tweaks.displayFont}", "Space Grotesk", system-ui, sans-serif`);
    document.body.classList.toggle('hide-italic-accents', !tweaks.showItalicAccents);
  }, [tweaks]);

  const PageComponent = PAGES[page].Component;
  const isDark = PAGES[page].dark;

  return (
    <>
      <Nav current={page} onNav={onNav} dark={isDark}/>
      <PageComponent key={page} onNav={onNav}/>
      <Footer onNav={onNav}/>

      {window.TweaksPanel && (
        <TweaksPanel title="Tweaks">
          <TweakSection title="Kleurenpalet">
            <TweakColor label="Accent (brons)" value={tweaks.accent} onChange={(v) => setTweak('accent', v)}/>
            <TweakColor label="Ink (donker)" value={tweaks.ink} onChange={(v) => setTweak('ink', v)}/>
            <TweakColor label="Achtergrond (cream)" value={tweaks.cream} onChange={(v) => setTweak('cream', v)}/>
          </TweakSection>
          <TweakSection title="Typografie">
            <TweakSelect label="Display font" value={tweaks.displayFont} onChange={(v) => setTweak('displayFont', v)}
                         options={[
                           { value: 'Syne', label: 'Syne (default)' },
                           { value: 'Cormorant Garamond', label: 'Cormorant — klassiek' },
                           { value: 'Playfair Display', label: 'Playfair — editorial' },
                           { value: 'Space Grotesk', label: 'Space Grotesk — neutraal' },
                         ]}/>
            <TweakToggle label="Italic accenten in koppen" value={tweaks.showItalicAccents} onChange={(v) => setTweak('showItalicAccents', v)}/>
          </TweakSection>
          <TweakSection title="Snel naar">
            <TweakButton label="Home" onClick={() => onNav('home')}/>
            <TweakButton label="Keukens" onClick={() => onNav('keukens')}/>
            <TweakButton label="Werkwijze" onClick={() => onNav('werkwijze')}/>
            <TweakButton label="Inspiratie" onClick={() => onNav('inspiratie')}/>
            <TweakButton label="Over ons" onClick={() => onNav('over')}/>
            <TweakButton label="Contact" onClick={() => onNav('contact')}/>
          </TweakSection>
        </TweaksPanel>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
