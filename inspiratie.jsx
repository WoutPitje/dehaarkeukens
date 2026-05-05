// inspiratie.jsx — showroomkeukens galerij met filter + lightbox

const KITCHENS = [
  { id: 1,  src: 'assets/keuken-fenix-groen.jpg',   title: 'Grijs eiland met marmer',   tag: 'Modern',      size: 'large'  },
  { id: 2,  src: 'assets/keuken-04.jpg',            title: 'Beton met zwarte metro',    tag: 'Industrieel', size: 'normal' },
  { id: 3,  src: 'assets/keuken-08.jpg',            title: 'Hout met donker werkblad',  tag: 'Landelijk',   size: 'tall'   },
  { id: 4,  src: 'assets/keuken-zwart.jpg',         title: 'Mat zwart greeploos',       tag: 'Modern',      size: 'normal' },
  { id: 5,  src: 'assets/keuken-14.jpg',            title: 'Wit met oranje accent',     tag: 'Design',      size: 'normal' },
  { id: 6,  src: 'assets/keuken-fenix-groen-2.jpg', title: 'Detail marmeren werkblad',  tag: 'Detail',      size: 'normal' },
  { id: 7,  src: 'assets/keuken-07.jpg',            title: 'Mat zwart L-keuken',        tag: 'Modern',      size: 'large'  },
  { id: 8,  src: 'assets/keuken-detail-1.jpg',      title: 'Showroom-overzicht',        tag: 'Showroom',    size: 'normal' },
  { id: 9,  src: 'assets/keuken-detail-2.jpg',      title: 'Wit eiland, marmer top',    tag: 'Design',      size: 'normal' },
  { id: 10, src: 'assets/keuken-01.webp',           title: 'Notenhout & zwart',         tag: 'Design',      size: 'tall'   },
  { id: 11, src: 'assets/keuken-02.webp',           title: 'Saliegroen met uitzicht',   tag: 'Modern',      size: 'normal' },
  { id: 12, src: 'assets/keuken-detail-3.jpg',      title: 'Kookveld & afzuiging',      tag: 'Detail',      size: 'normal' },
  { id: 13, src: 'assets/keuken-detail-4.jpg',      title: 'Miele inbouw in walnut',    tag: 'Detail',      size: 'large'  },
  { id: 14, src: 'assets/showroom-02.webp',         title: 'Taupe met eethoek',         tag: 'Showroom',    size: 'normal' },
  { id: 15, src: 'assets/keuken-81.jpg',            title: 'Wit met houten werkblad',   tag: 'Landelijk',   size: 'normal' },
];

function InspiratiePage({ onNav }) {
  const tags = ['Alles', 'Modern', 'Landelijk', 'Industrieel', 'Design', 'Detail', 'Showroom'];
  const [filter, setFilter] = React.useState('Alles');
  const [lb, setLb] = React.useState(null);

  const filtered = filter === 'Alles' ? KITCHENS : KITCHENS.filter(k => k.tag === filter);
  const counts = tags.reduce((m, t) => { m[t] = t === 'Alles' ? KITCHENS.length : KITCHENS.filter(k => k.tag === t).length; return m; }, {});

  const sizeClass = (s) => s === 'large' ? 'large' : s === 'tall' ? 'tall' : '';
  const open = (i) => setLb(i);
  const close = () => setLb(null);
  const next = () => setLb((i) => (i + 1) % filtered.length);
  const prev = () => setLb((i) => (i - 1 + filtered.length) % filtered.length);

  React.useEffect(() => {
    if (lb === null) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') next(); if (e.key === 'ArrowLeft') prev(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lb, filtered.length]);

  return (
    <main className="page-fade">
      <section className="page-header with-image">
        <div className="page-header-bg"><img src="assets/header-showroom.webp" alt=""/></div>
        <div className="container">
          <div className="page-header-inner">
            <div className="t-eyebrow page-header-eyebrow no-line">Inspiratie</div>
            <h1 className="page-header-title">
              Showroomkeukens<br/><span className="it">om u te laten dromen.</span>
            </h1>
            <p className="page-header-lede">
              Een greep uit de keukens die we mochten ontwerpen en realiseren. Klik door voor de details — materialen, indelingen, finishes.
            </p>
            <div className="breadcrumb">
              <a href="#home" onClick={(e)=>{e.preventDefault(); onNav('home');}}>Home</a>
              <span className="sep">/</span>
              <span className="current">Inspiratie</span>
            </div>
          </div>
        </div>
        <div className="page-header-cutout"/>
      </section>

      <section className="gallery">
        <div className="container">
          <div className="gallery-filters">
            {tags.map((t) => (
              <button key={t} className={`filter-chip ${filter === t ? 'is-active' : ''}`} onClick={() => setFilter(t)}>
                {t} <span className="count">{String(counts[t]).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
          <div className="gallery-grid">
            {filtered.map((k, i) => (
              <div key={k.id} className={`gallery-item ${sizeClass(k.size)}`} onClick={() => open(i)}>
                <img src={k.src} alt={k.title}/>
                <div className="gallery-item-meta">
                  <div className="tag">{k.tag}</div>
                  <h4>{k.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {lb !== null && (
          <div className="lightbox is-open" onClick={close}>
            <div className="lightbox-frame" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={close}><Icon name="close" size={20}/></button>
              <button className="lightbox-nav lightbox-prev" onClick={prev}><Icon name="chevronLeft" size={20}/></button>
              <button className="lightbox-nav lightbox-next" onClick={next}><Icon name="chevronRight" size={20}/></button>
              <img src={filtered[lb].src} alt={filtered[lb].title}/>
              <div className="lightbox-caption">
                <span>{filtered[lb].title} · {filtered[lb].tag}</span>
                <span>{String(lb + 1).padStart(2, '0')} / {String(filtered.length).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      <CtaBanner onNav={onNav}/>
    </main>
  );
}

window.InspiratiePage = InspiratiePage;
