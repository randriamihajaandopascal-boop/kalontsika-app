// URL du fichier distant de mise à jour (à remplacer par votre véritable lien Web/Netlify)
const UPDATE_URL = "https://ny-kalontsika-mpamakilay-mim.netlify.app//data.json";
const CACHE_NAME = "kalontsika-audio-v1";

// Chargement initial des données locales ou issues de la mise à jour (localStorage)
function loadInitialData() {
  const savedSongs = localStorage.getItem('custom_songs_data');
  if (savedSongs) {
    window.songsData = JSON.parse(savedSongs);
  }

  const savedFanentanana = localStorage.getItem('custom_fanentanana_data');
  if (savedFanentanana) {
    window.fanentananaData = JSON.parse(savedFanentanana);
  }
}

// Navigation entre écrans
function navigateTo(screenId) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  const targetScreen = document.getElementById(screenId);
  if (targetScreen) {
    targetScreen.classList.add('active');
  }

  // Stopper la musique lors du retour
  if (screenId === 'home-screen' || screenId === 'songs-screen') {
    const player = document.getElementById('audio-player');
    if (player) player.pause();
  }
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  loadInitialData();

  // Initialisation des chansons
  if (typeof songsData !== 'undefined') {
    displaySongs(songsData);

    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = songsData.filter(s => 
          s.title.toLowerCase().includes(term) || 
          s.artist.toLowerCase().includes(term)
        );
        displaySongs(filtered);
      });
    }
  }

  // Initialisation des fanentanana
  if (typeof fanentananaData !== 'undefined') {
    renderFanentananaList(fanentananaData);
  }
});

// Afficher la liste des chansons
function displaySongs(songs) {
  const list = document.getElementById('song-list');
  if (!list) return;
  
  list.innerHTML = '';
  songs.forEach(song => {
    const li = document.createElement('li');
    li.className = 'item-card';
    li.style.cursor = 'pointer';
    li.innerHTML = `
      <i class="fa-solid fa-music" style="color: #2d6a4f;"></i>
      <div>
        <h4>${song.title}</h4>
        <p style="font-size:0.85rem; color:#666;">${song.artist}</p>
      </div>
    `;
    li.onclick = () => playSong(song);
    list.appendChild(li);
  });
}

document.getElementById("lyrics-container").textContent = song.lyrics.replaceAll("<br />", "\n").replaceAll("<br>", "\n");

// Lancer une chanson
function playSong(song) {
  document.getElementById('current-title').textContent = song.title;
  document.getElementById('current-artist').textContent = song.artist;
  document.getElementById('lyrics-display').textContent = song.lyrics;

  const player = document.getElementById('audio-player');
  player.src = song.audio;
  player.load();
  player.play().catch(e => console.log(e));

  navigateTo('player-screen');
}

// Configuration du Worker PDF.js
if (typeof pdfjsLib !== 'undefined') {
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
}

// Fonction pour charger et afficher toutes les pages du PDF
async function viewPDF(pdfUrl, title) {
  document.getElementById('pdf-view-title').innerText = title;
  const container = document.getElementById('pdf-scroll-container');
  container.innerHTML = '<div style="text-align:center; padding:20px;">Mampiditra ny boky...</div>';
  
  navigateTo('pdf-viewer-screen');

  try {
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    container.innerHTML = '';

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);
      const canvas = document.createElement('canvas');
      canvas.className = 'pdf-page-canvas';
      container.appendChild(canvas);

      const context = canvas.getContext('2d');
      const viewport = page.getViewport({ scale: 1.5 });

      canvas.height = viewport.height;
      canvas.width = viewport.width;

      const renderContext = {
        canvasContext: context,
        viewport: viewport
      };
      await page.render(renderContext).promise;
    }
  } catch (error) {
    console.error("Erreur lors du chargement du PDF:", error);
    container.innerHTML = '<div style="text-align:center; color:red; padding:20px;">Tsy tafiditra ny boky. Rehefa manao test local ianao dia ampiasao ny server local (ex: Live Server).</div>';
  }
}

function closePDFViewer() {
  const container = document.getElementById('pdf-scroll-container');
  if (container) container.innerHTML = '';
  navigateTo('books-screen');
}

// Gestion du menu latéral
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  const overlay = document.getElementById('side-menu-overlay');
  if (menu && overlay) {
    menu.classList.toggle('open');
    overlay.classList.toggle('active');
  }
}

function selectMenuItem(screenId) {
  toggleMenu();
  navigateTo(screenId);
}

// Barre de recherche générale
function toggleGlobalSearch() {
  const searchBar = document.getElementById('global-search-bar');
  const searchInput = document.getElementById('global-search-input');
  
  if (searchBar) {
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchInput.focus();
    } else {
      searchInput.value = '';
      handleGlobalSearch('');
    }
  }
}

function handleGlobalSearch(query) {
  if (query.trim() !== '') {
    const activeScreen = document.querySelector('.screen.active');
    if (!activeScreen || activeScreen.id !== 'songs-screen') {
      navigateTo('songs-screen');
    }
    
    const songSearchInput = document.getElementById('search-input');
    if (songSearchInput) {
      songSearchInput.value = query;
      songSearchInput.dispatchEvent(new Event('input'));
    }
  }
}

// Gestion de Fanentanana
function renderFanentananaList(items = fanentananaData) {
  const listContainer = document.getElementById('fanentanana-list');
  if (!listContainer) return;
  
  listContainer.innerHTML = '';

  if (items.length === 0) {
    listContainer.innerHTML = '<li class="item-card"><p style="text-align:center; width:100%;">Tsy nisy fanentanana hita</p></li>';
    return;
  }

  items.forEach(item => {
    const li = document.createElement('li');
    li.className = 'item-card';
    li.onclick = () => openFanentananaDetails(item);
    li.innerHTML = `
      <i class="fa-solid fa-hands-clapping"></i>
      <div class="doc-info">
        <h4>${item.title}</h4>
        <p>${item.category}</p>
      </div>
      <i class="fa-solid fa-chevron-right"></i>
    `;
    listContainer.appendChild(li);
  });
}

function filterFanentanana(query) {
  const q = query.toLowerCase().trim();
  const filtered = fanentananaData.filter(item => 
    item.title.toLowerCase().includes(q) || 
    item.category.toLowerCase().includes(q) ||
    item.description.toLowerCase().includes(q)
  );
  renderFanentananaList(filtered);
}

function openFanentananaDetails(item) {
  document.getElementById('fanentanana-detail-title').innerText = item.title;
  document.getElementById('fanentanana-title').innerText = item.title;
  document.getElementById('fanentanana-category').innerText = item.category;
  document.getElementById('fanentanana-description').innerText = item.description || '';
  document.getElementById('fanentanana-instructions').innerText = item.instructions || '';

  const audioPlayer = document.getElementById('fanentanana-audio-player');
  if (item.audio) {
    audioPlayer.src = item.audio;
    audioPlayer.style.display = 'block';
  } else {
    audioPlayer.style.display = 'none';
  }

  navigateTo('fanentanana-details-screen');
}

// FUNCTION DE MISE À JOUR DYNAMIQUE ET TÉLÉCHARGEMENT DES MP3 (CACHE)
async function checkUpdates() {
  toggleMenu();
  alert("Manomboka ny fampidirana ny zava-vaovao...");

  try {
    const response = await fetch(UPDATE_URL);
    if (!response.ok) throw new Error("Tsy tafiditra ny JSON");

    const newData = await response.json();
    const cache = await caches.open(CACHE_NAME);

    // Extraction de tous les liens MP3
    const audioUrls = [];
    if (newData.songs) {
      newData.songs.forEach(song => { if (song.audio) audioUrls.push(song.audio); });
    }
    if (newData.fanentanana) {
      newData.fanentanana.forEach(fan => { if (fan.audio) audioUrls.push(fan.audio); });
    }

    // Téléchargement effectif de chaque MP3 dans le cache du téléphone
    let downloadedCount = 0;
    for (const url of audioUrls) {
      try {
        await cache.add(url);
        downloadedCount++;
      } catch (e) {
        console.warn("Erreur lors du téléchargement de l'audio:", url);
      }
    }

    // Sauvegarde des métadonnées dans localStorage
    if (newData.songs) {
      localStorage.setItem('custom_songs_data', JSON.stringify(newData.songs));
    }
    if (newData.fanentanana) {
      localStorage.setItem('custom_fanentanana_data', JSON.stringify(newData.fanentanana));
    }

    alert(`Tafiditra soa aman-tsara ny zava-vaovao! (${downloadedCount} fichier MP3 no tafiditra).`);
    location.reload();

  } catch (error) {
    console.error("Erreur mise à jour:", error);
    alert("Tsy nahazo rezo na nisy olana. Jereo ny rezo Internet-nao.");
  }
}