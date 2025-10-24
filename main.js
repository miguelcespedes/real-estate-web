const listings = [
  {
    id: "A-001",
    title: "Departamento 2D en Miraflores",
    location: "Miraflores, Lima",
    price: 950,
    currency: "USD",
    area: 78,
    bedrooms: 2,
    bathrooms: 2,
    tags: ["Pet-friendly", "Amoblado"],
    photos: ["A-001-1", "A-001-2", "A-001-3"],
    listedAt: "2025-02-18",
  },
  {
    id: "A-002",
    title: "Loft moderno en Barranco",
    location: "Barranco, Lima",
    price: 1200,
    currency: "USD",
    area: 92,
    bedrooms: 1,
    bathrooms: 1,
    tags: ["Vista al mar", "Amoblado"],
    photos: ["A-002-1", "A-002-2", "A-002-3"],
    listedAt: "2025-03-02",
  },
  {
    id: "A-003",
    title: "Casa familiar en La Molina",
    location: "La Molina, Lima",
    price: 1750,
    currency: "USD",
    area: 210,
    bedrooms: 4,
    bathrooms: 3,
    tags: ["Jardín", "Pet-friendly", "Estacionamiento"],
    photos: ["A-003-1", "A-003-2", "A-003-3"],
    listedAt: "2025-01-25",
  },
  {
    id: "A-004",
    title: "Estudio práctico en San Isidro",
    location: "San Isidro, Lima",
    price: 780,
    currency: "USD",
    area: 48,
    bedrooms: 1,
    bathrooms: 1,
    tags: ["Zona empresarial"],
    photos: ["A-004-1", "A-004-2", "A-004-3"],
    listedAt: "2025-03-18",
  },
  {
    id: "A-005",
    title: "Departamento 3D en Surco",
    location: "Santiago de Surco, Lima",
    price: 1100,
    currency: "USD",
    area: 115,
    bedrooms: 3,
    bathrooms: 2,
    tags: ["Cerca a parques", "Pet-friendly"],
    photos: ["A-005-1", "A-005-2", "A-005-3"],
    listedAt: "2025-02-05",
  },
  {
    id: "A-006",
    title: "Penthouse con terraza en Miraflores",
    location: "Miraflores, Lima",
    price: 2300,
    currency: "USD",
    area: 185,
    bedrooms: 3,
    bathrooms: 3,
    tags: ["Terraza", "Vista al mar", "BBQ"],
    photos: ["A-006-1", "A-006-2", "A-006-3"],
    listedAt: "2025-03-12",
  },
  {
    id: "A-007",
    title: "Departamento compacto en Pueblo Libre",
    location: "Pueblo Libre, Lima",
    price: 650,
    currency: "USD",
    area: 62,
    bedrooms: 2,
    bathrooms: 1,
    tags: ["Amoblado", "Balcón"],
    photos: ["A-007-1", "A-007-2", "A-007-3"],
    listedAt: "2025-01-08",
  },
  {
    id: "A-008",
    title: "Casa campestre en Pachacámac",
    location: "Pachacámac, Lima",
    price: 1350,
    currency: "USD",
    area: 260,
    bedrooms: 4,
    bathrooms: 4,
    tags: ["Piscina", "Pet-friendly", "BBQ"],
    photos: ["A-008-1", "A-008-2", "A-008-3"],
    listedAt: "2025-02-27",
  },
  {
    id: "A-009",
    title: "Duplex iluminado en San Borja",
    location: "San Borja, Lima",
    price: 1400,
    currency: "USD",
    area: 140,
    bedrooms: 3,
    bathrooms: 3,
    tags: ["Amoblado", "Estacionamiento"],
    photos: ["A-009-1", "A-009-2", "A-009-3"],
    listedAt: "2025-01-30",
  },
  {
    id: "A-010",
    title: "Mini departamento en Jesús María",
    location: "Jesús María, Lima",
    price: 520,
    currency: "USD",
    area: 45,
    bedrooms: 1,
    bathrooms: 1,
    tags: ["Pet-friendly"],
    photos: ["A-010-1", "A-010-2", "A-010-3"],
    listedAt: "2024-12-22",
  },
  {
    id: "A-011",
    title: "Departamento céntrico en Cusco",
    location: "Cusco, Cusco",
    price: 880,
    currency: "USD",
    area: 98,
    bedrooms: 3,
    bathrooms: 2,
    tags: ["Amoblado", "Vista panorámica"],
    photos: ["A-011-1", "A-011-2", "A-011-3"],
    listedAt: "2025-02-16",
  },
  {
    id: "A-012",
    title: "Casa colonial en Arequipa",
    location: "Cercado, Arequipa",
    price: 1600,
    currency: "USD",
    area: 240,
    bedrooms: 4,
    bathrooms: 3,
    tags: ["Patio interior", "Pet-friendly"],
    photos: ["A-012-1", "A-012-2", "A-012-3"],
    listedAt: "2025-03-10",
  },
  {
    id: "A-013",
    title: "Flat minimalista en Magdalena",
    location: "Magdalena del Mar, Lima",
    price: 900,
    currency: "USD",
    area: 86,
    bedrooms: 2,
    bathrooms: 2,
    tags: ["Amoblado", "Balcón"],
    photos: ["A-013-1", "A-013-2", "A-013-3"],
    listedAt: "2025-02-01",
  },
  {
    id: "A-014",
    title: "Departamento smart en Lince",
    location: "Lince, Lima",
    price: 750,
    currency: "USD",
    area: 70,
    bedrooms: 2,
    bathrooms: 2,
    tags: ["Co-working", "Pet-friendly"],
    photos: ["A-014-1", "A-014-2", "A-014-3"],
    listedAt: "2025-01-15",
  },
  {
    id: "A-015",
    title: "Suite ejecutiva en San Isidro",
    location: "San Isidro, Lima",
    price: 1350,
    currency: "USD",
    area: 104,
    bedrooms: 2,
    bathrooms: 2,
    tags: ["Zona empresarial", "Amoblado"],
    photos: ["A-015-1", "A-015-2", "A-015-3"],
    listedAt: "2025-03-20",
  },
  {
    id: "A-016",
    title: "Casa amplia en Trujillo",
    location: "Trujillo, La Libertad",
    price: 1250,
    currency: "USD",
    area: 198,
    bedrooms: 4,
    bathrooms: 4,
    tags: ["Jardín", "Pet-friendly", "Estacionamiento"],
    photos: ["A-016-1", "A-016-2", "A-016-3"],
    listedAt: "2025-02-22",
  },
  {
    id: "A-017",
    title: "Departamento artístico en Barranco",
    location: "Barranco, Lima",
    price: 980,
    currency: "USD",
    area: 88,
    bedrooms: 2,
    bathrooms: 2,
    tags: ["Pet-friendly", "Balcón"],
    photos: ["A-017-1", "A-017-2", "A-017-3"],
    listedAt: "2025-03-05",
  },
  {
    id: "A-018",
    title: "Townhouse en Piura",
    location: "Piura, Piura",
    price: 1150,
    currency: "USD",
    area: 175,
    bedrooms: 3,
    bathrooms: 3,
    tags: ["Patio interior", "Pet-friendly", "BBQ"],
    photos: ["A-018-1", "A-018-2", "A-018-3"],
    listedAt: "2025-02-12",
  },
];

const ITEMS_PER_PAGE = 12;
const STORAGE_KEYS = {
  filters: "rentals-filters",
  favorites: "rentals-favorites",
};
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/640x420?text=Sin+imagen";

const DEFAULT_STATE = {
  filters: {
    search: "",
    minPrice: "",
    maxPrice: "",
    bedrooms: "",
    location: "",
    tags: [],
  },
  sort: "recent",
};

const currencyFormatters = new Map();

function formatCurrency(value, currency) {
  if (!currencyFormatters.has(currency)) {
    currencyFormatters.set(
      currency,
      new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      })
    );
  }
  return currencyFormatters.get(currency).format(value);
}

const state = {
  ...structuredClone(DEFAULT_STATE),
  visibleCount: ITEMS_PER_PAGE,
  favorites: new Set(),
  filteredListings: [],
};

const elements = {
  resultsGrid: document.getElementById("results-grid"),
  resultsCount: document.getElementById("results-count"),
  loadMore: document.getElementById("load-more"),
  emptyState: document.getElementById("empty-state"),
  emptyClear: document.getElementById("empty-clear"),
  filtersForm: document.getElementById("filters-form"),
  searchInput: document.getElementById("search-input"),
  minPriceInput: document.getElementById("min-price"),
  maxPriceInput: document.getElementById("max-price"),
  bedroomsSelect: document.getElementById("bedrooms-select"),
  locationSelect: document.getElementById("location-select"),
  sortSelect: document.getElementById("sort-select"),
  advancedToggle: document.getElementById("filters-advanced-toggle"),
  advancedPanel: document.getElementById("filters-advanced"),
  clearFiltersBtn: document.getElementById("clear-filters"),
  tagsContainer: document.getElementById("tags-container"),
  cardTemplate: document.getElementById("card-template"),
  modal: document.getElementById("listing-modal"),
  modalClose: document.getElementById("modal-close"),
  modalGallery: document.getElementById("modal-gallery"),
  modalTitle: document.getElementById("modal-title"),
  modalLocation: document.getElementById("modal-location"),
  modalPrice: document.getElementById("modal-price"),
  modalArea: document.getElementById("modal-area"),
  modalBedBath: document.getElementById("modal-bed-bath"),
  modalTags: document.getElementById("modal-tags"),
};

let lastFocusedElement = null;
let isAdvancedVisible = false;

function setAdvancedVisibility(visible) {
  if (!elements.advancedToggle || !elements.advancedPanel) return;
  isAdvancedVisible = Boolean(visible);
  elements.advancedPanel.hidden = !isAdvancedVisible;
  elements.advancedToggle.setAttribute("aria-expanded", String(isAdvancedVisible));
  updateAdvancedToggleLabel();
}

function hasActiveAdvancedFilters() {
  return (
    state.filters.minPrice !== "" ||
    state.filters.maxPrice !== "" ||
    (Array.isArray(state.filters.tags) && state.filters.tags.length > 0)
  );
}

function getActiveAdvancedFiltersCount() {
  let count = 0;
  if (state.filters.minPrice !== "") count += 1;
  if (state.filters.maxPrice !== "") count += 1;
  if (Array.isArray(state.filters.tags)) {
    count += state.filters.tags.length;
  }
  return count;
}

function updateAdvancedToggleLabel() {
  if (!elements.advancedToggle) return;
  const hasActive = hasActiveAdvancedFilters();
  const activeCount = getActiveAdvancedFiltersCount();
  elements.advancedToggle.dataset.active = hasActive ? "true" : "false";
  if (isAdvancedVisible) {
    elements.advancedToggle.textContent = "Ocultar filtros";
  } else if (hasActive) {
    elements.advancedToggle.textContent = `Filtros activos (${activeCount})`;
  } else {
    elements.advancedToggle.textContent = "Más filtros";
  }
}

function structuredClone(value) {
  return JSON.parse(JSON.stringify(value));
}

function debounce(fn, delay = 250) {
  let timer;
  function debounced(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
  debounced.cancel = () => clearTimeout(timer);
  return debounced;
}

const debouncedRender = debounce(() => render());

function picsumUrl(seed, width = 640, height = 420) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

function getUniqueValues(items, key) {
  return Array.from(new Set(items.map((item) => item[key]))).sort((a, b) =>
    a.localeCompare(b, "es")
  );
}

function getUniqueTags(items) {
  return Array.from(new Set(items.flatMap((item) => item.tags))).sort((a, b) =>
    a.localeCompare(b, "es")
  );
}

function loadFavorites() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.favorites) || "[]");
    if (Array.isArray(stored)) {
      state.favorites = new Set(stored);
    }
  } catch (error) {
    console.error("No se pudieron leer los favoritos", error);
  }
}

function saveFavorites() {
  localStorage.setItem(
    STORAGE_KEYS.favorites,
    JSON.stringify(Array.from(state.favorites))
  );
}

function loadStoredFilters() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEYS.filters) || "null");
    if (stored && typeof stored === "object") {
      return stored;
    }
  } catch (error) {
    console.error("No se pudieron leer los filtros", error);
  }
  return null;
}

function saveFilters() {
  const payload = {
    filters: state.filters,
    sort: state.sort,
  };
  localStorage.setItem(STORAGE_KEYS.filters, JSON.stringify(payload));
}

function parseQueryParams() {
  const params = new URLSearchParams(window.location.search);
  const filters = structuredClone(DEFAULT_STATE.filters);
  const sort = params.get("sort") || null;

  if (params.get("q")) filters.search = params.get("q");
  if (params.get("min")) filters.minPrice = Number(params.get("min")) || "";
  if (params.get("max")) filters.maxPrice = Number(params.get("max")) || "";
  if (params.get("beds")) filters.bedrooms = params.get("beds");
  if (params.get("location")) filters.location = params.get("location");
  if (params.get("tags")) filters.tags = params.get("tags").split(",").filter(Boolean);

  return { filters, sort };
}

function updateQueryParams() {
  const url = new URL(window.location.href);
  const params = url.searchParams;

  params.set("q", state.filters.search || "");
  params.set("min", state.filters.minPrice !== "" ? state.filters.minPrice : "");
  params.set("max", state.filters.maxPrice !== "" ? state.filters.maxPrice : "");
  params.set("beds", state.filters.bedrooms || "");
  params.set("location", state.filters.location || "");
  params.set("tags", state.filters.tags.length ? state.filters.tags.join(",") : "");
  params.set("sort", state.sort || "recent");

  // Clean empty params
  for (const [key, value] of params.entries()) {
    if (!value) {
      params.delete(key);
    }
  }

  const query = params.toString();
  const newUrl = query ? `${url.pathname}?${query}` : url.pathname;
  window.history.replaceState({}, "", newUrl);
}

function initializeFormOptions() {
  const locations = getUniqueValues(listings, "location");
  const fragment = document.createDocumentFragment();
  locations.forEach((location) => {
    const option = document.createElement("option");
    option.value = location;
    option.textContent = location;
    fragment.appendChild(option);
  });
  elements.locationSelect.appendChild(fragment);

  const tags = getUniqueTags(listings);
  const tagFragment = document.createDocumentFragment();
  tags.forEach((tag) => {
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "tags";
    checkbox.value = tag;
    label.appendChild(checkbox);
    const text = document.createElement("span");
    text.textContent = tag;
    label.appendChild(text);
    tagFragment.appendChild(label);
  });
  elements.tagsContainer.appendChild(tagFragment);
}

function applyStateToForm() {
  elements.searchInput.value = state.filters.search;
  elements.minPriceInput.value = state.filters.minPrice;
  elements.maxPriceInput.value = state.filters.maxPrice;
  elements.bedroomsSelect.value = state.filters.bedrooms;
  elements.locationSelect.value = state.filters.location;
  elements.sortSelect.value = state.sort;

  const selectedTags = new Set(state.filters.tags);
  elements.tagsContainer
    .querySelectorAll('input[type="checkbox"]')
    .forEach((checkbox) => {
      checkbox.checked = selectedTags.has(checkbox.value);
    });
}

function getFormSelectedTags() {
  return Array.from(
    elements.tagsContainer.querySelectorAll('input[type="checkbox"]:checked')
  ).map((input) => input.value);
}

function attachImageFallback(img) {
  img.addEventListener("error", () => {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = "true";
    img.src = PLACEHOLDER_IMAGE;
  });
}

function getFilteredListings() {
  const { search, minPrice, maxPrice, bedrooms, location, tags } = state.filters;
  const searchTerm = search.trim().toLowerCase();

  return listings
    .filter((listing) => {
      if (searchTerm) {
        const haystack = `${listing.title} ${listing.location}`.toLowerCase();
        if (!haystack.includes(searchTerm)) return false;
      }
      if (minPrice !== "" && listing.price < Number(minPrice)) return false;
      if (maxPrice !== "" && listing.price > Number(maxPrice)) return false;
      if (bedrooms) {
        if (bedrooms === "4") {
          if (listing.bedrooms < 4) return false;
        } else if (listing.bedrooms !== Number(bedrooms)) {
          return false;
        }
      }
      if (location && listing.location !== location) return false;
      if (tags.length && !tags.every((tag) => listing.tags.includes(tag))) return false;
      return true;
    })
    .sort((a, b) => sortComparator(a, b, state.sort));
}

function sortComparator(a, b, sortKey) {
  switch (sortKey) {
    case "price-asc":
      return a.price - b.price;
    case "price-desc":
      return b.price - a.price;
    case "area-asc":
      return a.area - b.area;
    case "area-desc":
      return b.area - a.area;
    case "recent":
    default:
      return new Date(b.listedAt) - new Date(a.listedAt);
  }
}

function render() {
  state.filteredListings = getFilteredListings();
  const totalResults = state.filteredListings.length;
  elements.resultsCount.textContent = totalResults;

  if (totalResults === 0) {
    elements.resultsGrid.innerHTML = "";
    elements.emptyState.hidden = false;
    elements.loadMore.hidden = true;
    return;
  }

  elements.emptyState.hidden = true;

  const visibleListings = state.filteredListings.slice(0, state.visibleCount);
  elements.resultsGrid.innerHTML = "";

  visibleListings.forEach((listing) => {
    const card = elements.cardTemplate.content.firstElementChild.cloneNode(true);
    card.dataset.id = listing.id;
    card.tabIndex = 0;

    const image = card.querySelector(".card__image");
    image.src = picsumUrl(listing.photos[0] || listing.id);
    image.alt = `Foto principal de ${listing.title}`;
    attachImageFallback(image);

    const badge = card.querySelector(".card__badge");
    if (listing.tags.includes("Pet-friendly")) {
      badge.textContent = "Pet-friendly";
      badge.hidden = false;
    }

    card.querySelector(".card__title").textContent = listing.title;
    card.querySelector(".card__location").textContent = listing.location;
    card.querySelector(".card__price").textContent = `${formatCurrency(
      listing.price,
      listing.currency
    )} ${listing.currency}/mes`;
    card.querySelector(".card__meta").textContent = `${listing.area} m² · ${listing.bedrooms} dormitorios · ${listing.bathrooms} baños`;

    const tagsList = card.querySelector(".card__tags");
    listing.tags.forEach((tag) => {
      const li = document.createElement("li");
      li.textContent = tag;
      tagsList.appendChild(li);
    });

    const favoriteBtn = card.querySelector(".card__favorite");
    const isFavorite = state.favorites.has(listing.id);
    favoriteBtn.classList.toggle("is-favorite", isFavorite);
    favoriteBtn.setAttribute("aria-pressed", String(isFavorite));
    favoriteBtn.setAttribute(
      "aria-label",
      isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
    );
    favoriteBtn.title = favoriteBtn.getAttribute("aria-label");

    favoriteBtn.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleFavorite(listing.id, favoriteBtn);
    });

    card.addEventListener("click", () => openModal(listing));
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openModal(listing);
      }
    });

    elements.resultsGrid.appendChild(card);
  });

  const moreToShow = totalResults > state.visibleCount;
  elements.loadMore.hidden = !moreToShow;
}

function toggleFavorite(id, button) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
  saveFavorites();
  if (button) {
    const isFavorite = state.favorites.has(id);
    button.classList.toggle("is-favorite", isFavorite);
    button.setAttribute("aria-pressed", String(isFavorite));
    button.setAttribute(
      "aria-label",
      isFavorite ? "Quitar de favoritos" : "Agregar a favoritos"
    );
    button.title = button.getAttribute("aria-label");
  }
}

function openModal(listing) {
  elements.modalTitle.textContent = listing.title;
  elements.modalLocation.textContent = listing.location;
  elements.modalPrice.textContent = `${formatCurrency(
    listing.price,
    listing.currency
  )} ${listing.currency}/mes`;
  elements.modalArea.textContent = `${listing.area} m² de área total`;
  elements.modalBedBath.textContent = `${listing.bedrooms} dormitorios · ${listing.bathrooms} baños`;

  elements.modalTags.innerHTML = "";
  listing.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    elements.modalTags.appendChild(span);
  });

  elements.modalGallery.innerHTML = "";
  listing.photos.forEach((seed, index) => {
    const img = document.createElement("img");
    img.src = picsumUrl(seed, index === 0 ? 720 : 360, index === 0 ? 480 : 240);
    img.alt = `Foto ${index + 1} de ${listing.title}`;
    attachImageFallback(img);
    elements.modalGallery.appendChild(img);
  });

  elements.modal.hidden = false;
  document.body.style.overflow = "hidden";
  lastFocusedElement = document.activeElement;
  elements.modalClose.focus();
}

function closeModal() {
  if (elements.modal.hidden) return;
  elements.modal.hidden = true;
  document.body.style.overflow = "";
  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

function resetFilters() {
  state.filters = structuredClone(DEFAULT_STATE.filters);
  state.sort = DEFAULT_STATE.sort;
  state.visibleCount = ITEMS_PER_PAGE;
  saveFilters();
  updateQueryParams();
  applyStateToForm();
  setAdvancedVisibility(false);
  debouncedRender.cancel();
  render();
}

function handleFormChange(event) {
  const target = event.target;
  if (!target) return;

  state.filters.search = elements.searchInput.value.trim();
  state.filters.minPrice = elements.minPriceInput.value ? Number(elements.minPriceInput.value) : "";
  state.filters.maxPrice = elements.maxPriceInput.value ? Number(elements.maxPriceInput.value) : "";
  state.filters.bedrooms = elements.bedroomsSelect.value;
  state.filters.location = elements.locationSelect.value;
  state.filters.tags = getFormSelectedTags();
  state.sort = elements.sortSelect.value;
  state.visibleCount = ITEMS_PER_PAGE;

  updateAdvancedToggleLabel();
  saveFilters();
  updateQueryParams();
  debouncedRender.cancel();
  render();
}

function handleSearchInput() {
  state.filters.search = elements.searchInput.value.trim();
  state.visibleCount = ITEMS_PER_PAGE;
  saveFilters();
  updateQueryParams();
  debouncedRender();
}

function handleLoadMore() {
  state.visibleCount += ITEMS_PER_PAGE;
  render();
}

function initializeEventListeners() {
  elements.filtersForm.addEventListener("change", handleFormChange);
  elements.searchInput.addEventListener("input", handleSearchInput);
  if (elements.advancedToggle && elements.advancedPanel) {
    elements.advancedToggle.addEventListener("click", () => {
      const nextVisible = elements.advancedPanel.hidden;
      setAdvancedVisibility(nextVisible);
      if (nextVisible) {
        const focusable = elements.advancedPanel.querySelector(
          'input:not([type="hidden"]), button, select, [tabindex]'
        );
        if (focusable) {
          focusable.focus();
        }
      } else {
        elements.advancedToggle.focus();
      }
    });
  }
  elements.clearFiltersBtn.addEventListener("click", resetFilters);
  elements.emptyClear.addEventListener("click", resetFilters);
  elements.loadMore.addEventListener("click", handleLoadMore);

  elements.modalClose.addEventListener("click", closeModal);
  elements.modal.addEventListener("click", (event) => {
    if (event.target.dataset.close !== undefined) {
      closeModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });
}

function initializeState() {
  loadFavorites();
  initializeFormOptions();

  const stored = loadStoredFilters();
  const fromQuery = parseQueryParams();

  state.filters = {
    ...structuredClone(DEFAULT_STATE.filters),
    ...(stored?.filters || {}),
    ...fromQuery.filters,
  };
  if (!Array.isArray(state.filters.tags)) {
    state.filters.tags = [];
  }
  const requestedSort = fromQuery.sort || stored?.sort || DEFAULT_STATE.sort;
  const allowedSorts = new Set(["recent", "price-asc", "price-desc", "area-asc", "area-desc"]);
  state.sort = allowedSorts.has(requestedSort) ? requestedSort : DEFAULT_STATE.sort;
  state.visibleCount = ITEMS_PER_PAGE;

  applyStateToForm();
  setAdvancedVisibility(hasActiveAdvancedFilters());
  saveFilters();
  updateQueryParams();
}

function init() {
  initializeState();
  initializeEventListeners();
  render();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}

// Utilidad básica para pruebas manuales desde la consola
window.__rentalsApp = {
  state,
  getFilteredListings,
  toggleFavorite,
};
