// ==================== Time Zones Configuration ====================
const timeZones = [
    { name: 'New York', tz: 'America/New_York', flag: '🗽' },
    { name: 'London', tz: 'Europe/London', flag: '🇬🇧' },
    { name: 'Paris', tz: 'Europe/Paris', flag: '🇫🇷' },
    { name: 'Dubai', tz: 'Asia/Dubai', flag: '🇦🇪' },
    { name: 'Tokyo', tz: 'Asia/Tokyo', flag: '🇯🇵' },
    { name: 'Sydney', tz: 'Australia/Sydney', flag: '🇦🇺' },
    { name: 'Hong Kong', tz: 'Asia/Hong_Kong', flag: '🇭🇰' },
    { name: 'Singapore', tz: 'Asia/Singapore', flag: '🇸🇬' },
    { name: 'Los Angeles', tz: 'America/Los_Angeles', flag: '🏖️' },
    { name: 'Mexico City', tz: 'America/Mexico_City', flag: '🇲🇽' },
    { name: 'São Paulo', tz: 'America/Sao_Paulo', flag: '🇧🇷' },
    { name: 'Mumbai', tz: 'Asia/Kolkata', flag: '🇮🇳' }
];

// ==================== Initialization ====================
document.addEventListener('DOMContentLoaded', () => {
    initializeClocks();
});

// ==================== Initialize Clocks ====================
function initializeClocks() {
    const container = document.getElementById('clocksContainer');
    
    // Create clock cards for each timezone
    timeZones.forEach(zone => {
        const card = createClockCard(zone);
        container.appendChild(card);
    });

    // Initial update
    updateAllClocks();

    // Update every second
    setInterval(updateAllClocks, 1000);
}

// ==================== Create Clock Card ====================
function createClockCard(zone) {
    const card = document.createElement('div');
    card.className = 'clock-card';
    card.setAttribute('data-timezone', zone.tz);
    card.innerHTML = `
        <div class="city-name">${zone.flag} ${zone.name}</div>
        <div class="time-display" data-time>--:--:--</div>
        <div class="date-display" data-date>--/--/----</div>
        <div class="utc-offset" data-offset>UTC +0:00</div>
    `;
    return card;
}

// ==================== Get Time in Timezone ====================
function getTimeInTimezone(timezone) {
    const now = new Date();
    
    // Get time in specific timezone
    const timeInTZ = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
    
    // Calculate UTC offset
    const utcTime = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
    const offset = Math.round((timeInTZ - utcTime) / (1000 * 60)); // in minutes
    const hours = Math.floor(offset / 60);
    const minutes = Math.abs(offset % 60);
    const sign = hours >= 0 ? '+' : '';
    const utcOffset = `UTC ${sign}${hours}:${minutes.toString().padStart(2, '0')}`;
    
    return {
        time: timeInTZ,
        offset: utcOffset
    };
}

// ==================== Format Time ====================
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// ==================== Format Date ====================
function formatDate(date) {
    const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// ==================== Update All Clocks ====================
function updateAllClocks() {
    const cards = document.querySelectorAll('.clock-card');
    
    cards.forEach(card => {
        const timezone = card.getAttribute('data-timezone');
        const { time, offset } = getTimeInTimezone(timezone);
        
        const timeDisplay = card.querySelector('[data-time]');
        const dateDisplay = card.querySelector('[data-date]');
        const offsetDisplay = card.querySelector('[data-offset]');
        
        timeDisplay.textContent = formatTime(time);
        dateDisplay.textContent = formatDate(time);
        offsetDisplay.textContent = offset;
    });

    // Update last update time
    const now = new Date();
    document.getElementById('lastUpdate').textContent = formatTime(now);
}

// ==================== Keyboard Shortcuts (Optional) ====================
document.addEventListener('keydown', (e) => {
    // Press 'R' to manually refresh
    if (e.key.toLowerCase() === 'r') {
        updateAllClocks();
    }
    // Press 'F' for fullscreen
    if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
        }
    }
});

// ==================== Performance: Reduce Updates When Tab Not Visible ====================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // Tab is hidden - updates continue at normal interval
        // This is fine as it's minimal CPU usage
    } else {
        // Tab is visible - ensure we have latest time
        updateAllClocks();
    }
});
