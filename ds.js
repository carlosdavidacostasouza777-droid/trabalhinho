const movies = [
    {
      id: 1,
      title: "Vingadores: Doutor Destino",
      year: 2026,
      duration: "A confirmar",
      genre: "acao",
      genreLabel: "Ação",
      rating: 5,
      poster: "https://legadodamarvel.com.br/wp-content/uploads/2022/08/vingadores-guerras-secretas-poster-doutor-destino-legadodamarvel.webp",
      description: "Robert Downey Jr. retorna ao MCU como o vilão Victor von Doom. Os irmãos Russo dirigem o maior evento do universo Marvel. Estreia em 17 de dezembro de 2026.",
    },
    {
      id: 2,
      title: "Homem-Aranha: Um Novo Dia",
      year: 2026,
      duration: "A confirmar",
      genre: "acao",
      genreLabel: "Ação",
      rating: 5,
      poster: "https://m.media-amazon.com/images/M/MV5BMTJhZGE3NmYtYTg0Ny00MWUzLWE0MmUtYTZjYTg1ZjVlMWRkXkEyXkFqcGc@._V1_QL75_UY281_CR18,0,190,281_.jpg",
      description: "Tom Holland volta como Peter Parker em uma nova fase. Após os eventos do último filme, Peter está sozinho e sem que ninguém saiba sua identidade.",
    },
    {
      id: 3,
      title: "Super Mario Galaxy: O Filme",
      year: 2026,
      duration: "1h 50min",
      genre: "animacao",
      genreLabel: "Animação",
      rating: 4,
      poster: "https://images.nintendolife.com/8c1b96029652a/the-super-mario-galaxy-movie.original.jpg",
      description: "Mario e seus amigos partem em uma aventura intergaláctica. Com Chris Pratt, Anya Taylor-Joy e Jack Black. Estreou em 2 de abril de 2026.",
    },
    {
      id: 4,
      title: "Toy Story 5",
      year: 2026,
      duration: "1h 55min",
      genre: "animacao",
      genreLabel: "Animação",
      rating: 4,
      poster: "https://blog.disneygeek.com/wp-content/uploads/2025/11/TS5_Teaser_Reflection_1s_v4.1_Dom_Mech4.jpg",
      description: "Woody, Buzz e a turma enfrentam o desafio de manter a atenção das crianças em um mundo dominado por tablets e eletrônicos. Estreia em 11 de junho de 2026.",
    },
    {
      id: 5,
      title: "Duna: Messias",
      year: 2026,
      duration: "A confirmar",
      genre: "ficcao",
      genreLabel: "Ficção Científica",
      rating: 5,
      poster: "https://posterspy.com/wp-content/uploads/2025/08/dune3_deviant_diamonddead1.jpg",
      description: "Denis Villeneuve encerra sua trilogia épica. Paul Atreides enfrenta as consequências terríveis de sua ascensão ao poder messiânico. Estreia em 30 de julho de 2026.",
    },
    {
      id: 6,
      title: "Scream 7",
      year: 2026,
      duration: "A confirmar",
      genre: "terror",
      genreLabel: "Terror",
      rating: 3,
      poster: "https://hellosidney.com/wp-content/uploads/2026/01/Scream-7-Final-Poster-scaled.jpg",
      description: "Um novo Ghostface surge na cidade onde Sidney Prescott construiu uma nova vida. Sua filha se torna o próximo alvo.",
    },
    {
      id: 7,
      title: "As Crônicas de Nárnia",
      year: 2026,
      duration: "A confirmar",
      genre: "fantasia",
      genreLabel: "Fantasia",
      rating: 4,
      poster: "https://media.fstatic.com/1quA8KH_iPy8Mq4JNxepNbDyhP8=/322x478/smart/filters:format(webp)/media/movies/covers/2021/01/24c3dcbc34031deb1ff3cb40d78e87fb8fd95dc6r1-800-1100v2_hq.jpg",
      description: "Greta Gerwig dirige a nova adaptação do clássico de C.S. Lewis. O filme chega primeiro à Netflix antes de ir para os cinemas.",
    },

    {
      id: 9,
      title: "Wicked: Parte 2",
      year: 2026,
      duration: "A confirmar",
      genre: "musical",
      genreLabel: "Musical",
      rating: 5,
      poster: "https://image.tmdb.org/t/p/w500/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
      description: "A conclusão da saga de Elphaba e Glinda em Oz, com Cynthia Erivo e Ariana Grande. Prometido como o maior espetáculo musical do ano.",
    },
    {
      id: 10,
      title: "Clayface",
      year: 2026,
      duration: "A confirmar",
      genre: "acao",
      genreLabel: "Ação",
      rating: 3,
      poster: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f452aa2c-0c64-4bbf-b065-942b8dbda8bb/djobnb6-81489665-9d3b-4de6-8da2-a7629ba21822.png/v1/fill/w_1280,h_1929,q_80,strp/clayface____batman_villain_standalone_movie__by_diamonddead_art_djobnb6-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTkyOSIsInBhdGgiOiJcL2ZcL2Y0NTJhYTJjLTBjNjQtNGJiZi1iMDY1LTk0MmI4ZGJkYThiYlwvZGpvYm5iNi04MTQ4OTY2NS05ZDNiLTRkZTYtOGRhMi1hNzYyOWJhMjE4MjIucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.v9d3cAKgjDo7NNc_BhDljx_6RFp9wNF2iFS77O88KiQ",
      description: "Uma criatura feita de argila mágica assombra Gotham, alternando entre vilão e aliado do Batman. Parte do novo universo DC Studios.",
    },
    {
      id: 11,
      title: "Minions 3",
      year: 2026,
      duration: "A confirmar",
      genre: "animacao",
      genreLabel: "Animação",
      rating: 4,
      poster: "https://image.tmdb.org/t/p/original/z4U19BvdwjjmqzprVTuuHnhGyJR.jpg",
      description: "Gru e os Minions voltam em mais uma aventura caótica. Um novo vilão dos anos 80 ameaça o mundo e só a equipe mais improvável pode pará-lo.",
    },

  ];


  const FALLBACK_COLORS = {
    acao:     "1a0033",
    ficcao:   "001a3d",
    terror:   "1a0000",
    drama:    "1a1000",
    comedia:  "001a10",
    animacao: "1a0a00",
    fantasia: "0a001a",
    musical:  "1a001a",
  };
  
  function getFallbackPoster(movie) {
    const color = FALLBACK_COLORS[movie.genre] || "111122";
    const label = encodeURIComponent(movie.title.substring(0, 15));
    return `https://placehold.co/200x300/${color}/ffffff?text=${label}`;
  }
  

  let favorites        = JSON.parse(localStorage.getItem("cinelog-favorites")) || [];
  let searchQuery      = "";
  let selectedGenre    = "";
  let showingFavorites = false;
  let activeModal      = null;
  

  const moviesGrid  = document.getElementById("moviesGrid");
  const searchInput = document.getElementById("searchInput");
  const genreFilter = document.getElementById("genreFilter");
  const navLinks    = document.querySelectorAll(".nav-link");
  

  function renderMovies(list) {
    moviesGrid.innerHTML = "";
  
    if (list.length === 0) {
      moviesGrid.innerHTML = `
        <div class="empty-state">
          🎬 Nenhum filme encontrado. Tente outra busca!
        </div>`;
      return;
    }
  
    list.forEach((movie, index) => {
      const isFav = favorites.includes(movie.id);
      const card  = document.createElement("article");
      card.classList.add("movie-card");
      card.dataset.genre = movie.genre;
      card.style.animationDelay = `${index * 0.06}s`;
  
      card.innerHTML = `
        <div class="movie-card__poster">
          <img
            src="${movie.poster}"
            alt="${movie.title}"
            loading="lazy"
            onerror="this.src='${getFallbackPoster(movie)}'"
          />
          <button class="btn-favorite ${isFav ? "active" : ""}"
            data-id="${movie.id}"
            title="${isFav ? "Remover dos favoritos" : "Favoritar"}">
            ${isFav ? "♥" : "♡"}
          </button>
          <div class="card-overlay">
            <button class="btn-play" data-id="${movie.id}" title="Ver detalhes">▶</button>
          </div>
        </div>
        <div class="movie-card__info">
          <span class="genre-badge">${movie.genreLabel}</span>
          <h3 class="movie-title">${movie.title}</h3>
          <p class="movie-meta">${movie.year} · ${movie.duration}</p>
          <div class="movie-rating">${renderStars(movie.rating)}</div>
          <button class="btn-details" data-id="${movie.id}">Ver detalhes</button>
        </div>
      `;
  
      moviesGrid.appendChild(card);
    });
  }
  

  function renderStars(rating) {
    return Array.from({ length: 5 }, (_, i) =>
      `<span class="star ${i < rating ? "active" : ""}">★</span>`
    ).join("");
  }
  

  function createRipple(e, container) {
    const rect   = container.getBoundingClientRect();
    const size   = Math.max(rect.width, rect.height);
    const x      = e.clientX - rect.left - size / 2;
    const y      = e.clientY - rect.top  - size / 2;
    const ripple = document.createElement("span");
    ripple.classList.add("ripple");
    ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px;`;
    container.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }
  

  function showToast(msg) {
    let toast = document.querySelector(".toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.classList.add("toast");
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove("show"), 2200);
  }
  

  function openModal(movie) {
    closeModal();
    const isFav   = favorites.includes(movie.id);
    const overlay = document.createElement("div");
    overlay.classList.add("modal-overlay");
  
    overlay.innerHTML = `
      <div class="modal">
        <div class="modal-header">
          <span class="modal-title">${movie.title}</span>
          <button class="modal-close" title="Fechar">✕</button>
        </div>
        <img
          src="${movie.poster}"
          alt="${movie.title}"
          onerror="this.src='${getFallbackPoster(movie)}'"
        />
        <div class="modal-meta">${movie.year} · ${movie.duration} · ${movie.genreLabel}</div>
        <div class="modal-stars">${renderStars(movie.rating)}</div>
        <p class="modal-desc">${movie.description}</p>
        <button class="modal-fav-btn"
          style="background: ${isFav ? "#e50914" : "transparent"};"
          data-id="${movie.id}">
          ${isFav ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos"}
        </button>
      </div>
    `;
  
    overlay.querySelector(".modal-close").addEventListener("click", closeModal);
  
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  
    overlay.querySelector(".modal-fav-btn").addEventListener("click", (e) => {
      toggleFavorite(movie.id, e.currentTarget);
      closeModal();
      setTimeout(() => openModal(movies.find((m) => m.id === movie.id)), 10);
    });
  
    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("visible"));
    activeModal = overlay;
  
    document.addEventListener("keydown", handleEsc);
  }
  
  function closeModal() {
    if (!activeModal) return;
    const modal = activeModal;
    modal.classList.remove("visible");
    activeModal = null;
    document.removeEventListener("keydown", handleEsc);
    modal.addEventListener("transitionend", () => {
      modal.remove();
      moviesGrid.offsetHeight;
    }, { once: true });
  }
  
  function handleEsc(e) {
    if (e.key === "Escape") closeModal();
  }
  

  function toggleFavorite(id, btn) {
    const adding = !favorites.includes(id);
    favorites = adding
      ? [...favorites, id]
      : favorites.filter((f) => f !== id);
  
    localStorage.setItem("cinelog-favorites", JSON.stringify(favorites));
  
    if (btn) {
      btn.classList.toggle("active", adding);
      btn.textContent = adding ? "♥" : "♡";
      if (adding) {
        btn.classList.remove("active");
        void btn.offsetHeight;
        btn.classList.add("active");
      }
    }
  
    const movieTitle = movies.find((m) => m.id === id)?.title;
    showToast(
      adding
        ? `♥ "${movieTitle}" adicionado aos favoritos!`
        : `"${movieTitle}" removido dos favoritos.`
    );
  
    renderMovies(getFilteredMovies());
  }
  

  function getFilteredMovies() {
    return movies.filter((movie) => {
      const matchSearch = movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      const matchGenre  = selectedGenre === "" || movie.genre === selectedGenre;
      const matchFav    = !showingFavorites || favorites.includes(movie.id);
      return matchSearch && matchGenre && matchFav;
    });
  }
  
  
  // Event delegation for buttons and ripple
  moviesGrid.addEventListener('click', (e) => {
    const favoriteBtn = e.target.closest('.btn-favorite');
    if (favoriteBtn) {
      e.stopPropagation();
      const id = parseInt(favoriteBtn.dataset.id);
      const movie = movies.find(m => m.id === id);
      toggleFavorite(id, favoriteBtn);
      return;
    }
  
    const detailsBtn = e.target.closest('.btn-details');
    if (detailsBtn) {
      e.stopPropagation();
      const id = parseInt(detailsBtn.dataset.id);
      const movie = movies.find(m => m.id === id);
      openModal(movie);
      return;
    }
  
    const playBtn = e.target.closest('.btn-play');
    if (playBtn) {
      e.stopPropagation();
      const id = parseInt(playBtn.dataset.id);
      const movie = movies.find(m => m.id === id);
      openModal(movie);
      return;
    }
  
    const poster = e.target.closest('.movie-card__poster img');
    if (poster) {
      createRipple(e, e.target.closest('.movie-card__poster'));
    }
  });
  
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");
      showingFavorites = link.textContent.trim() === "Favoritos";
      document.querySelector(".section-title").textContent = showingFavorites
        ? "Meus Favoritos"
        : "Lançamentos 2026";
  
      renderMovies(getFilteredMovies());
    });
  });
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderMovies(getFilteredMovies());
  });
  
  genreFilter.addEventListener("change", (e) => {
    selectedGenre = e.target.value;
    renderMovies(getFilteredMovies());
  });
  
 
  document.querySelector(".section-title").textContent = "Lançamentos 2026";
  renderMovies(getFilteredMovies());
