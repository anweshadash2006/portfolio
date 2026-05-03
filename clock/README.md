# Multi-Timezone Digital Clock

A beautiful, responsive web application that displays the current time in 12 different time zones around the world.

## 🌍 Features

- **Real-time Updates**: Clock updates every second
- **12 World Time Zones**: 
  - New York (America/New_York)
  - London (Europe/London)
  - Paris (Europe/Paris)
  - Dubai (Asia/Dubai)
  - Tokyo (Asia/Tokyo)
  - Sydney (Australia/Sydney)
  - Hong Kong (Asia/Hong_Kong)
  - Singapore (Asia/Singapore)
  - Los Angeles (America/Los_Angeles)
  - Mexico City (America/Mexico_City)
  - São Paulo (America/Sao_Paulo)
  - Mumbai (Asia/Kolkata)

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful gradient background with smooth animations
- **UTC Offset Display**: Shows the UTC offset for each timezone
- **Date Display**: Shows the local date for each timezone

## 🎨 Design Highlights

- Modern gradient purple background
- Clean card-based layout
- Hover animations for interactive feel
- Mobile-first responsive design
- Professional typography and spacing

## 🚀 How to Use

1. Open `index.html` in a web browser
2. The clock automatically updates every second
3. View current time, date, and UTC offset for each timezone

## 💻 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Animations, Gradients
- **Vanilla JavaScript**: No frameworks or dependencies
- **Intl API**: Browser's native internationalization for timezone handling

## 📁 File Structure

```
clock/
├── index.html      # HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript clock logic
└── README.md       # Documentation
```

## ✨ Key JavaScript Functions

- `getTimeInTimezone(timezone)`: Retrieves time for a specific timezone
- `createClockCard(name, tz)`: Creates a visual clock card
- `updateClocks()`: Updates all clock displays every second
- `initializeClocks()`: Sets up the application

## 📝 Customization

To add more timezones, edit the `timeZones` array in `script.js`:

```javascript
const timeZones = [
    { name: 'City Name', tz: 'Continent/City' },
    // ... add more
];
```

## 🌐 Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE11: ⚠️ Limited support (Intl API may need polyfill)

## 📄 License

MIT License - Feel free to use and modify!

---

**Created as part of Full Stack Developer Portfolio**
