// ===== AUTH =====
const CREDENTIALS = { id: 'Amore', password: 'Alice23' };
const BIRTHDAY = new Date('2026-04-27T00:00:00');

// ===== ITINERARY DATA =====
const itineraries = {
  paris: {
    city: 'Parigi',
    tagline: 'La Ville Lumière ti aspetta',
    dates: '1 Agosto – 7 Agosto 2026',
    days: [
      {
        label: 'Giorno 1 · 1 Agosto',
        title: 'Arrivo & Prima Serata',
        activities: [
          { icon: '✈️', text: 'Volo e arrivo a Parigi — Charles de Gaulle' },
          { icon: '🏨', text: 'Check-in in hotel nel Marais o Saint-Germain' },
          { icon: '🌅', text: 'Passeggiata lungo la Senna al tramonto' },
          { icon: '🍷', text: 'Cena in un bistrot parigino tradizionale' },
        ]
      },
      {
        label: 'Giorno 2 · 2 Agosto',
        title: 'La Torre & il Louvre',
        activities: [
          { icon: '🗼', text: 'Torre Eiffel di mattina presto — salita al 2° piano' },
          { icon: '🎨', text: 'Musée du Louvre — Mona Lisa, Nike di Samotracia, Venere di Milo' },
          { icon: '🍦', text: 'Gelato al Palais Royal' },
          { icon: '🛒', text: 'Aperitivo e shopping in Rue de Rivoli' },
        ]
      },
      {
        label: 'Giorno 3 · 3 Agosto',
        title: 'Montmartre & Arte',
        activities: [
          { icon: '⛪', text: 'Sacré-Cœur — panorama su tutta Parigi' },
          { icon: '🎨', text: 'Quartiere degli artisti di Montmartre, Place du Tertre' },
          { icon: '🖼️', text: 'Musée d\'Orsay — impressionismo, Monet, Renoir, Van Gogh' },
          { icon: '🌃', text: 'Cena romantica a lume di candela' },
        ]
      },
      {
        label: 'Giorno 4 · 4 Agosto',
        title: 'Versailles',
        activities: [
          { icon: '🏰', text: 'Reggia di Versailles — Sala degli Specchi, giardini reali' },
          { icon: '🌸', text: 'Passeggiata nei giardini di Le Nôtre' },
          { icon: '🚂', text: 'Rientro a Parigi in treno' },
          { icon: '🍾', text: 'Champagne sulla terrazza al tramonto' },
        ]
      },
      {
        label: 'Giorno 5 · 5 Agosto',
        title: 'Shopping & Cultura',
        activities: [
          { icon: '👗', text: 'Shopping su Champs-Élysées e Avenue Montaigne' },
          { icon: '🏛️', text: 'Centre Pompidou — arte moderna e contemporanea' },
          { icon: '🧀', text: 'Picnic al Parc des Buttes-Chaumont' },
          { icon: '🎭', text: 'Sera libera: spettacolo o Moulin Rouge' },
        ]
      },
      {
        label: 'Giorno 6–7 · 6–7 Agosto',
        title: 'Ultimi Ricordi & Partenza',
        activities: [
          { icon: '☕', text: 'Colazione in una boulangerie parigina storica' },
          { icon: '📸', text: 'Ultimo giro per foto e souvenir' },
          { icon: '🛍️', text: 'Mercato delle Pulci di Saint-Ouen (se domenica)' },
          { icon: '✈️', text: 'Trasferimento aeroporto e partenza' },
        ]
      },
    ]
  },

  edinburgh: {
    city: 'Edimburgo',
    tagline: 'Magia tra castelli e nebbia scozzese',
    dates: '1 Agosto – 7 Agosto 2026',
    days: [
      {
        label: 'Giorno 1 · 1 Agosto',
        title: 'Arrivo nella Città Medievale',
        activities: [
          { icon: '✈️', text: 'Volo e arrivo a Edimburgo Airport' },
          { icon: '🏨', text: 'Check-in in hotel nella Old Town o New Town' },
          { icon: '🏰', text: 'Primo sguardo al Castello dal Grassmarket' },
          { icon: '🍺', text: 'Cena in un pub storico della Royal Mile' },
        ]
      },
      {
        label: 'Giorno 2 · 2 Agosto',
        title: 'Castello & Royal Mile',
        activities: [
          { icon: '🏰', text: 'Edinburgh Castle — Crown Jewels, One O\'Clock Gun, War Museum' },
          { icon: '👑', text: 'Passeggiata lungo Royal Mile fino a Holyrood' },
          { icon: '🦌', text: 'Palazzo di Holyroodhouse — residenza reale' },
          { icon: '🌆', text: 'Vista panoramica da Calton Hill al tramonto' },
        ]
      },
      {
        label: 'Giorno 3 · 3 Agosto',
        title: 'Fringe Festival',
        activities: [
          { icon: '🎭', text: 'Edinburgh Festival Fringe — spettacoli di strada e teatro' },
          { icon: '🎶', text: 'Concerti ed esibizioni lungo i Grassmarket' },
          { icon: '🎪', text: 'Atmosfera unica: il festival più grande del mondo' },
          { icon: '🍷', text: 'Degustazione whisky scozzese in un locale autentico' },
        ]
      },
      {
        label: 'Giorno 4 · 4 Agosto',
        title: 'Highlands & Loch',
        activities: [
          { icon: '🚌', text: 'Tour guidato nelle Highlands scozzesi' },
          { icon: '🌊', text: 'Loch Ness — leggenda e paesaggi mozzafiato' },
          { icon: '🏔️', text: 'Glen Coe — valle tra le più spettacolari d\'Europa' },
          { icon: '🏰', text: 'Castello di Eilean Donan — il più fotografato di Scozia' },
        ]
      },
      {
        label: 'Giorno 5 · 5 Agosto',
        title: 'Musei & Arthur\'s Seat',
        activities: [
          { icon: '🦕', text: 'National Museum of Scotland — gratis, straordinario' },
          { icon: '🖼️', text: 'Scottish National Gallery — capolavori dal Rinascimento' },
          { icon: '⛰️', text: 'Escursione su Arthur\'s Seat — vulcano con vista su tutta la città' },
          { icon: '🍀', text: 'Cena in un ristorante scozzese — haggis e tradizione' },
        ]
      },
      {
        label: 'Giorno 6–7 · 6–7 Agosto',
        title: 'Ultimi Momenti & Partenza',
        activities: [
          { icon: '🛒', text: 'Mercato di Grassmarket — artigianato e tartan' },
          { icon: '📸', text: 'Foto ricordo al Victoria Street — la via più colorata' },
          { icon: '☕', text: 'Colazione in una caffetteria storica' },
          { icon: '✈️', text: 'Trasferimento e partenza' },
        ]
      },
    ]
  },

  istanbul: {
    city: 'Istanbul',
    tagline: 'Dove l\'Oriente incontra l\'Occidente',
    dates: '1 Agosto – 7 Agosto 2026',
    days: [
      {
        label: 'Giorno 1 · 1 Agosto',
        title: 'Arrivo sul Bosforo',
        activities: [
          { icon: '✈️', text: 'Volo e arrivo a Istanbul Airport o Sabiha Gökçen' },
          { icon: '🏨', text: 'Check-in hotel a Sultanahmet o Beyoğlu' },
          { icon: '🌊', text: 'Primo tramonto sul Bosforo dalla riva europea' },
          { icon: '🍢', text: 'Cena con kebab e meze in un ristorante sul mare' },
        ]
      },
      {
        label: 'Giorno 2 · 2 Agosto',
        title: 'Sultanahmet: Cuore della Storia',
        activities: [
          { icon: '🕌', text: 'Hagia Sophia — basilica-moschea millenaria, patrimonio UNESCO' },
          { icon: '💙', text: 'Moschea Blu — 6 minareti, mosaici Iznik turchesi' },
          { icon: '🏛️', text: 'Cisterna Basilica — colonne romane nell\'acqua sotterranea' },
          { icon: '🌙', text: 'Cena nel quartiere storico di Sultanahmet' },
        ]
      },
      {
        label: 'Giorno 3 · 3 Agosto',
        title: 'Palazzo Topkapi & Bazar',
        activities: [
          { icon: '👑', text: 'Palazzo Topkapi — Harem, Tesoro Imperiale, spada di Maometto' },
          { icon: '🛒', text: 'Gran Bazar — 4.000 botteghe, tessuti, spezie, oro' },
          { icon: '🌶️', text: 'Bazar delle Spezie — profumi e colori orientali' },
          { icon: '☕', text: 'Tè turco nel bazar con i mercanti' },
        ]
      },
      {
        label: 'Giorno 4 · 4 Agosto',
        title: 'Crociera sul Bosforo',
        activities: [
          { icon: '⛵', text: 'Crociera sul Bosforo — tra Europa e Asia' },
          { icon: '🏰', text: 'Fortezza di Rumeli Hisarı vista dal mare' },
          { icon: '🌉', text: 'Ponte del Bosforo — foto dal basso' },
          { icon: '🦅', text: 'Visita al lato asiatico: Kadıköy e mercato Moda' },
        ]
      },
      {
        label: 'Giorno 5 · 5 Agosto',
        title: 'Beyoğlu & Arte Moderna',
        activities: [
          { icon: '🚋', text: 'Funicolare e tram storico per Istiklal Caddesi' },
          { icon: '🏛️', text: 'Istanbul Museum of Modern Art' },
          { icon: '🌆', text: 'Galata Tower — panorama a 360° sulla città' },
          { icon: '🎶', text: 'Hammam turco tradizionale — esperienza spa autentica' },
        ]
      },
      {
        label: 'Giorno 6–7 · 6–7 Agosto',
        title: 'Ultimi Sapori & Partenza',
        activities: [
          { icon: '🥐', text: 'Colazione turca tradizionale — simit, peynir, bal' },
          { icon: '🎁', text: 'Shopping last minute: ceramiche e tappeti artigianali' },
          { icon: '📸', text: 'Foto sul Ponte di Galata tra pescatori e storia' },
          { icon: '✈️', text: 'Trasferimento aeroporto e partenza' },
        ]
      },
    ]
  },

  barcelona: {
    city: 'Barcellona',
    tagline: 'Arte, Mare e Dolce Vita Catalana',
    dates: '1 Agosto – 7 Agosto 2026',
    days: [
      {
        label: 'Giorno 1 · 1 Agosto',
        title: 'Arrivo in Catalogna',
        activities: [
          { icon: '✈️', text: 'Volo e arrivo a El Prat Airport' },
          { icon: '🏨', text: 'Check-in hotel nel Gòtic o Eixample' },
          { icon: '🚶', text: 'Passeggiata serale lungo La Rambla' },
          { icon: '🦞', text: 'Cena di pesce e tapas a Barceloneta' },
        ]
      },
      {
        label: 'Giorno 2 · 2 Agosto',
        title: 'Gaudí: il Genio dell\'Architettura',
        activities: [
          { icon: '⛪', text: 'Sagrada Família — mattina presto, prenotazione obbligatoria' },
          { icon: '🏠', text: 'Casa Batlló o Casa Milà (La Pedrera) — interni surrealisti' },
          { icon: '🌿', text: 'Park Güell — mosaici e terrazza con vista su Barcellona' },
          { icon: '🍹', text: 'Aperitivo al tramonto a Gràcia' },
        ]
      },
      {
        label: 'Giorno 3 · 3 Agosto',
        title: 'Barrio Gótico & Arte',
        activities: [
          { icon: '🏛️', text: 'Barri Gòtic — vicoli medievali, cattedrale, Plaça Reial' },
          { icon: '🖼️', text: 'Museu Picasso — collezione più completa del giovane Picasso' },
          { icon: '🛍️', text: 'El Born — concept store e design catalano' },
          { icon: '🌊', text: 'Tramonto al Barceloneta Beach' },
        ]
      },
      {
        label: 'Giorno 4 · 4 Agosto',
        title: 'Montjuïc & Cultura',
        activities: [
          { icon: '🚡', text: 'Funicolare su Montjuïc — vista sul porto e sulla città' },
          { icon: '🏰', text: 'Castillo de Montjuïc — storia e panorama' },
          { icon: '🎨', text: 'Museu Nacional d\'Art de Catalunya — romanico e gotico' },
          { icon: '💧', text: 'Fontane magiche di Montjuïc la sera' },
        ]
      },
      {
        label: 'Giorno 5 · 5 Agosto',
        title: 'Mare & Giornata Relax',
        activities: [
          { icon: '🏖️', text: 'Mattina in spiaggia a Barceloneta o Bogatell' },
          { icon: '⛵', text: 'Giro in barca nel Mediterraneo' },
          { icon: '🛒', text: 'Mercato della Boqueria — colori e sapori' },
          { icon: '🍷', text: 'Cena romantica con vista sul porto olimpico' },
        ]
      },
      {
        label: 'Giorno 6–7 · 6–7 Agosto',
        title: 'Ultimi Ricordi & Partenza',
        activities: [
          { icon: '☕', text: 'Colazione catalana con pa amb tomàquet' },
          { icon: '🛍️', text: 'Shopping su Passeig de Gràcia — Zara, Massimo Dutti, boutique' },
          { icon: '📸', text: 'Ultime foto ai capolavori di Gaudí' },
          { icon: '✈️', text: 'Trasferimento aeroporto e partenza' },
        ]
      },
    ]
  }
};

// ===== PETALS =====
function createPetals() {
  const container = document.getElementById('petals-container');
  const symbols = ['🌸', '🌷', '✿', '❀', '🌺'];
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'petal';
    p.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.fontSize = (0.8 + Math.random() * 1.2) + 'rem';
    p.style.animationDuration = (6 + Math.random() * 8) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.opacity = 0.3 + Math.random() * 0.4;
    container.appendChild(p);
  }
}

// ===== SHOW SCREEN =====
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => {
    s.classList.remove('active');
    s.style.display = 'none';
  });
  const target = document.getElementById(id);
  target.style.display = 'flex';
  setTimeout(() => target.classList.add('active'), 10);
}

// ===== LOGIN =====
function handleLogin() {
  const id = document.getElementById('input-id').value.trim();
  const pw = document.getElementById('input-pw').value.trim();
  const err = document.getElementById('login-error');
  if (id === CREDENTIALS.id && pw === CREDENTIALS.password) {
    err.textContent = '';
    startCountdown();
  } else {
    err.textContent = 'ID o password non corretti. Riprova con amore 💕';
  }
}

// Allow Enter key
document.addEventListener('DOMContentLoaded', () => {
  createPetals();
  showScreen('login-screen');
  ['input-id','input-pw'].forEach(id => {
    document.getElementById(id).addEventListener('keydown', e => {
      if (e.key === 'Enter') handleLogin();
    });
  });
});

// ===== COUNTDOWN =====
let countdownInterval = null;

function startCountdown() {
  showScreen('countdown-screen');
  updateCountdown();
  countdownInterval = setInterval(() => {
    const done = updateCountdown();
    if (done) {
      clearInterval(countdownInterval);
      setTimeout(() => showScreen('city-screen'), 2000);
    }
  }, 1000);
}

function updateCountdown() {
  const now = new Date();
  const diff = BIRTHDAY - now;
  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '0';
    document.getElementById('cd-hours').textContent = '0';
    document.getElementById('cd-mins').textContent = '0';
    document.getElementById('cd-secs').textContent = '🎂';
    return true;
  }
  const days  = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins  = Math.floor((diff % 3600000) / 60000);
  const secs  = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent  = String(days).padStart(2,'0');
  document.getElementById('cd-hours').textContent = String(hours).padStart(2,'0');
  document.getElementById('cd-mins').textContent  = String(mins).padStart(2,'0');
  document.getElementById('cd-secs').textContent  = String(secs).padStart(2,'0');
  return false;
}

// ===== CITY SELECTION =====
function selectCity(key) {
  const data = itineraries[key];
  if (!data) return;

  const html = `
    <div class="itinerary-header">
      <h1>${data.city}</h1>
      <p>${data.tagline}</p>
      <div class="dates">✦ ${data.dates} ✦</div>
    </div>
    ${data.days.map((day, i) => `
      <div class="day-block">
        <div class="day-label">${day.label}</div>
        <div class="day-title">${day.title}</div>
        <ul class="day-activities">
          ${day.activities.map(a => `
            <li><span class="icon">${a.icon}</span> ${a.text}</li>
          `).join('')}
        </ul>
      </div>
      ${i < data.days.length - 1 ? '<div class="divider-ornament">✦ ✦ ✦</div>' : ''}
    `).join('')}
  `;

  document.getElementById('itinerary-content').innerHTML = html;
  showScreen('itinerary-screen');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== BACK =====
function goBack() {
  showScreen('city-screen');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
