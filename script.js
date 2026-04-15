// Language Management
let currentLanguage = localStorage.getItem('language') || 'en';
let currentOpenCountry = null; // Track which country's modal is open

function getTranslation(key) {
    const keys = key.split('.');
    let value = i18n[currentLanguage];
    for (let k of keys) {
        value = value[k];
    }
    return value;
}

function updatePageLanguage() {
    // Update title and subtitle
    document.getElementById('pageTitle').textContent = getTranslation('title');
    document.getElementById('pageSubtitle').textContent = getTranslation('subtitle');
    
    // Update language button
    document.getElementById('langBtn').textContent = getTranslation('languageSwitch');
    
    // Update table headers
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = getTranslation(key);
        el.textContent = text + (el.classList.contains('info-label') ? ':' : '');
    });
    
    // Repopulate table with new language
    populateTable();
    
    // Update modal if open
    updateModalLabels();
}

function switchLanguage() {
    currentLanguage = currentLanguage === 'en' ? 'cs' : 'en';
    localStorage.setItem('language', currentLanguage);
    updatePageLanguage();
}

function updateModalLabels() {
    // If a modal is open, update all its content with new language
    if (currentOpenCountry && modal.classList.contains('show')) {
        const country = currentOpenCountry;
        const countryName = currentLanguage === 'cs' ? country.nameCz : country.name;
        const capitalName = currentLanguage === 'cs' ? country.capitalCz : country.capital;
        const regionName = getRegionName(country);
        const languageName = currentLanguage === 'cs' ? country.languageCz : country.language;
        
        modalCountryName.textContent = countryName;
        modalCapital.textContent = capitalName;
        modalRegion.textContent = regionName;
        modalLanguage.textContent = languageName;
        
        // Update EU badge
        const euStatus = country.euMember;
        const euText = euStatus ? getTranslation('eu.yes') : getTranslation('eu.no');
        modalEU.textContent = euText;
    }
}

// DOM Elements
const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');
const langBtn = document.getElementById('langBtn');

// Modal fields
const modalFlag = document.getElementById('modalFlag');
const modalCountryName = document.getElementById('modalCountryName');
const modalCapital = document.getElementById('modalCapital');
const modalRegion = document.getElementById('modalRegion');
const modalPopulation = document.getElementById('modalPopulation');
const modalArea = document.getElementById('modalArea');
const modalLanguage = document.getElementById('modalLanguage');
const modalCurrency = document.getElementById('modalCurrency');
const modalEU = document.getElementById('modalEU');

// Get flag URL from country code
function getFlagUrl(countryCode, size = 'w80') {
    return `https://flagcdn.com/${size}/${countryCode}.png`;
}

// Populate table with countries
function populateTable() {
    tableBody.innerHTML = '';
    
    countries.forEach(country => {
        const row = document.createElement('tr');
        const countryName = currentLanguage === 'cs' ? country.nameCz : country.name;
        const capital = currentLanguage === 'cs' ? country.capitalCz : country.capital;
        row.innerHTML = `
            <td><img src="${getFlagUrl(country.code, 'w80')}" class="flag-icon" alt="${country.name} flag" />${countryName}</td>
            <td>${getRegionName(country)}</td>
            <td>${capital}</td>
            <td>${country.population}</td>
        `;
        row.addEventListener('click', () => openModal(country));
        tableBody.appendChild(row);
    });
}

// Get region name in current language
function getRegionName(country) {
    if (currentLanguage === 'cs') {
        return country.regionCz;
    }
    return country.region;
}

// Open modal with country details
function openModal(country) {
    currentOpenCountry = country; // Remember which country is open
    const countryName = currentLanguage === 'cs' ? country.nameCz : country.name;
    const capitalName = currentLanguage === 'cs' ? country.capitalCz : country.capital;
    const regionName = getRegionName(country);
    const languageName = currentLanguage === 'cs' ? country.languageCz : country.language;
    
    modalFlag.src = getFlagUrl(country.code, 'w320');
    modalFlag.alt = `${country.name} flag`;
    modalCountryName.textContent = countryName;
    modalCapital.textContent = capitalName;
    modalRegion.textContent = regionName;
    modalPopulation.textContent = country.population;
    modalArea.textContent = country.area;
    modalLanguage.textContent = languageName;
    modalCurrency.textContent = country.currency;
    
    // EU membership badge
    const euStatus = country.euMember;
    const euText = euStatus ? getTranslation('eu.yes') : getTranslation('eu.no');
    const euClass = euStatus ? 'yes' : 'no';
    modalEU.textContent = euText;
    modalEU.className = `info-value eu-badge ${euClass}`;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
    currentOpenCountry = null; // Clear the tracked country
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
langBtn.addEventListener('click', switchLanguage);

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
    populateTable();
    updatePageLanguage();
});
