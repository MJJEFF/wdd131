/**
 * place.js  –  Nigeria Country Page
 * WDD131 W03 Assignment | Jeffrey Akanama
 *
 * 1. Display current year in footer
 * 2. Display document last-modified date in footer
 * 3. Calculate and display Wind Chill (metric °C formula)
 *    Conditions: temp <= 10°C AND wind > 4.8 km/h
 *    Otherwise: display "N/A"
 */

// ── 1. Current year ──────────────────────────────────────────────────────────
document.getElementById('current-year').textContent = new Date().getFullYear();

// ── 2. Last modified date ────────────────────────────────────────────────────
document.getElementById('last-modified').textContent = document.lastModified;

// ── 3. Wind Chill Calculation ────────────────────────────────────────────────

/**
 * calculateWindChill
 * Uses the metric WMO/Environment Canada wind chill formula.
 * @param {number} tempC   - Temperature in °C
 * @param {number} windKmh - Wind speed in km/h
 * @returns {number} Wind chill value in °C
 */
function calculateWindChill(tempC, windKmh) {
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// Static weather values (matching displayed content on the page)
const temperature = 32;  // °C
const windSpeed = 15;  // km/h

const windChillEl = document.getElementById('wind-chill');

// Only calculate when: temp <= 10°C AND wind > 4.8 km/h
if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillEl.textContent = chill.toFixed(1) + ' °C';
} else {
    // Nigeria is 32°C — wind chill does not apply
    windChillEl.textContent = 'N/A';
}