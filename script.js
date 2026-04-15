// DOM Elements
const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const modalOverlay = document.getElementById('modalOverlay');

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
        row.innerHTML = `
            <td><img src="${getFlagUrl(country.code, 'w80')}" class="flag-icon" alt="${country.name} flag" />${country.name}</td>
            <td>${country.region}</td>
            <td>${country.capital}</td>
            <td>${country.population}</td>
        `;
        row.addEventListener('click', () => openModal(country));
        tableBody.appendChild(row);
    });
}

// Open modal with country details
function openModal(country) {
    modalFlag.src = getFlagUrl(country.code, 'w320');
    modalFlag.alt = `${country.name} flag`;
    modalCountryName.textContent = country.name;
    modalCapital.textContent = country.capital;
    modalRegion.textContent = country.region;
    modalPopulation.textContent = country.population;
    modalArea.textContent = country.area;
    modalLanguage.textContent = country.language;
    modalCurrency.textContent = country.currency;
    
    // EU membership badge
    const euStatus = country.euMember ? 'Yes' : 'No';
    const euClass = country.euMember ? 'yes' : 'no';
    modalEU.textContent = euStatus;
    modalEU.className = `info-value eu-badge ${euClass}`;
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
}

// Close modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Event listeners
closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);

// Close modal on Escape key
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Initialize table on page load
document.addEventListener('DOMContentLoaded', populateTable);
