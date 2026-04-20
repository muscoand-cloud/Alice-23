# 🎂 Compleanno Alice

Sito web regalo per il compleanno di Alice — login, countdown e itinerari di viaggio per 4 città.

## 🔐 Credenziali Login
- **ID:** `Amore`
- **Password:** `Alice23`

## 📁 Struttura Progetto

```
compleanno-alice/
├── public/
│   ├── index.html      # Pagina principale
│   ├── style.css       # Stile elegante rosa/oro
│   └── app.js          # Logica, countdown e itinerari
├── server.js           # Server Express (per Render)
├── package.json
├── .gitignore
└── README.md
```

## 🚀 Deploy su Render (passo per passo)

### 1. Crea repository GitHub
```bash
git init
git add .
git commit -m "Initial commit - Compleanno Alice"
git branch -M main
git remote add origin https://github.com/TUO_USERNAME/compleanno-alice.git
git push -u origin main
```

### 2. Deploy su Render
1. Vai su [render.com](https://render.com) e accedi
2. Clicca **"New +"** → **"Web Service"**
3. Connetti il tuo account GitHub e seleziona il repo
4. Configura:
   - **Name:** `compleanno-alice`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
5. Clicca **"Create Web Service"**

Il sito sarà live su `https://compleanno-alice.onrender.com` (o simile) in pochi minuti!

## 💻 Test in locale

```bash
npm install
node server.js
# Apri http://localhost:3000
```

## ✨ Funzionalità
- Login con credenziali personalizzate
- Countdown animato al 27 Aprile 2026
- Scelta tra 4 città: Parigi, Edimburgo, Istanbul, Barcellona
- Itinerario completo giorno per giorno per ogni città
- Design elegante rosa/oro con petali animati
- Completamente responsive (mobile friendly)
